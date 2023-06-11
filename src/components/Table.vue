<template>
    <div class="linha_1">
        <div class="card">
            <div class="btnConteiner">
                <router-link class="btn btn-novo" to="/form"> <span class="material-icons"> star </span> Novo Item</router-link> 
            </div>
        </div>
    </div>
    <div class="linha_2">
                <div class="card">
                    <div class="table" v-if="exibir_tabela">
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
                    <div class="spinner-grow" role="status" v-if="!exibir_tabela">
                        <span class="sr-only"></span>
                    </div>
                </div>
            </div>
  </template>
  
  <script>
  export default {
      name:'Table',
      data(){
        return{
            estoque:[],
            situacao:[],
            servidor:"http://127.0.0.1:8000/api/estoque",
            exibir_tabela:false
        }
      },
      methods:{
        async loadItems(){
            const req = await fetch(this.servidor);
            const data = await req.json();
            //map
            this.exibir_tabela = true;
            this.estoque = data;
           
        },
        async loadSituacao(){
            // const req = await fetch("http://localhost:3000/situacoes");
            const req = await fetch("http://127.0.0.1:8000/api/situacao");
            const data = await req.json();
            this.situacao = data;
        },
        async deleteItem(id){
            const req = await fetch(`http://127.0.0.1:8000/api/estoque/${id}`,{
                method:"DELETE"
            });
            const data = await req.json();
                alert(`registro ${id} foi excluido com sucesso!`);
                this.loadItems();
        },
        async observarParametro(){
            if(this.$route.params.id){
                const id = this.$route.params.id;
                this.deleteItem(id);
            }
        }

      },
      mounted(){
        this.loadItems();
        this.observarParametro();
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
        .linha_1{
            display: grid;
            grid-template-columns: 56rem;
            gap: 1.2rem;
            margin-top: 3.1rem;
        }
        .linha_2{
            display: grid;
            grid-template-columns: 56rem;
            gap: 1.2rem;
            margin-top: 3.1rem;
        }
        .linha_2>.card,.linha_1>.card{
            background-color: #fff;
            padding: 1.1rem;
            border-radius: 1.6rem;
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
        /*spinner*/
        .spinner-grow{
            margin: 0 auto;
        }
        /*spiner*/
  </style>