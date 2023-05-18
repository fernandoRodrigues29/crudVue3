<template>
    
                
                    <div class="table">
                        <div class="tableHead">
                            <div class="tableHeadLine">
                                <div class="tableHeadItem">#</div>
                                <div class="tableHeadItem">nome</div>
                                <div class="tableHeadItem">estado</div>
                                <div class="tableHeadItem">situacao</div>
                                <div class="tableHeadItem">editar</div>
                                <div class="tableHeadItem">excluir</div>
                            </div>
                        </div>
                        <div class="tableBody">
                            <div class="tableBodyLine" v-for="item in estoque" :key="item.id">
                                <div class="tableBodyItem">#{{ item.id }}</div>
                                <div class="tableBodyItem">{{ item.nome }}</div>
                                <div class="tableBodyItem">{{ item.descricao }}</div>
                                <div class="tableBodyItem">{{ item.situacao }}</div>
                                <div class="tableBodyItem"> <router-link class="btn btn-editar" :to="`/editar/${item.id}`" >editar</router-link></div>
                                <div class="tableBodyItem"><button class="btn btn-excluir"  @click="deleteItem(item.id)">deletar</button></div>
                            </div>
                        </div>
                    </div>
                
  </template>
  
  <script>
  export default {
      name:'DashboardTable',
      data(){
        return{
            estoque:[],
            situacao:[]
        }
      },
      methods:{
        async loadItems(){
            const req = await fetch("http://localhost:3000/estoque");
            const data = await req.json();
            //map
            const estoqueComSituacao = data.map(item=>{
                if(item.situacao ==1){
                    item.situacao = 'no estoque';
                }else if(item.situacao ==2){
                    item.situacao = 'em uso'
                }else{
                    item.situacao = 'fora de estoque'
                }
                return item;
            });

            // this.estoque = data;
            this.estoque = estoqueComSituacao;
            console.log('estoque',this.estoque);
        },
      },
      mounted(){
        this.loadItems();
      }
  }
  </script>
  
  <style scoped>
    /* linha */
    .linha>.card{
            background-color: #fff;
            padding: 1.8rem;
            border-radius: 2rem;
            margin-top: 1rem;
            box-shadow:  0 2rem 1rem rgb(132 139 200 / 18%);
            transition: all 300ms ease;
        }
        .linha>.card:hover{
            box-shadow:  0 .1rem .1rem rgb(132 139 200 / 1%);
        }

        /*btn*/
        .btn{
            border: none;
            color: #fff;
            border-radius: 16px;
            transition: all 300ms ease;
        }
        .btn-novo{
            padding: 1rem;
            background: #120583;
            font-size: 1rem;
        }
        .btn-editar{
            padding: .5rem;
            background: #0fa8b3;
            font-size: .9rem;
        }
        .btn-excluir{
            padding: .5rem;
            background: #83050f;
            font-size: .9rem;
        }
        .btn-editar:hover,.btn-excluir:hover{
           transform: scale(1.1);
            box-shadow: 1px 2px 12px #b0b0ff;
           
        }
        /* tabela */
            .table {
                display: flex;
                flex-direction: column;
            }
            .tableHeadLine{
                border-bottom: 1px solid #ccc;
            }
            .tableHeadLine, .tableBodyLine{
                display: grid;
                width: 100%;
                grid-template-columns: 2rem 8rem 8rem 8rem 6rem 6rem;
                grid-gap: 1rem;
                padding-top: .5rem;
                padding-bottom: .5rem;
            }
            .tableBodyItem,.tableHeadItem{
                display: flex;
                align-content: center;
                justify-content: flex-start;
            }
            .tableBodyLine button{
                padding: .5rem .7rem;
                border-radius: 16px;
                transition: all 300ms ease;
                cursor: pointer;
            }
            .tableBodyLine button:hover{
                background-color: #929292;
                color: #fff;
            }

            .tableBodyLine:nth-child(even){
                background-color: #9b9b9b7c;
            }

        /* tabela */
  </style>