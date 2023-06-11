<template>
                  <div class="card">
                        <div v-if="!form_atualizacao">
                            {{ form_atualizacao }}
                            <form action="#" method="POST" @submit="setEstoque" class="form" >
                                <div class="formBox">
                            <label for="i1">nome</label>
                            <input type="text" id="i1" v-model="nome" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="i2">descricao</label>
                            <input type="text" id="i2" v-model="descricao" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="e1">tipo</label>
                            <select name="" id="e1" class="form-select"  v-model="tipo">
                                <option v-for="t in tipos" :key="t.id" :value="t.id">{{t.tipo}} </option>
                            </select>
                        </div>
                        <div class="formBox">
                            <label for="i3">entrada</label>
                            <input type="date" id="i3" v-model="entrada" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="i4">saida</label>
                            <input type="date" id="i4" v-model="saida" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="e2">estado</label>
                            <select name="estado-select" id="e2" v-model="estado" class="form-select">
                                <option  v-for="e in estados" :key="e.id" :value="e.id" >{{e.estado}}</option>
                            </select>
                        </div>
                        <div class="formBox">
                            <label >situacao atual</label>
                            <div class="formCheckBox">
                                <div class="item-checknox">
                                    <div v-for="s in situacoes" :key="s.id">
                                        <input type="radio" name="radio" v-model="situacao" :id="'c'+s.id" :value="s.id">
                                        <label class="label-checkbox" :for="'c'+s.id">{{s.situacao}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="formBox">
                            <label for="i5">quantidade</label>
                            <input type="number" id="i5" v-model="quantidade" class="form-input">
                        </div>
                        <div class="formBox">
                            <input type="submit" class="form-button" >
                        </div>
                    </form>
                        </div>
                        <div v-if="form_atualizacao">
                            {{ form_atualizacao }}
                            <form action="#" method="POST" @submit="updateEstoque" class="form" >
                                <div class="formBox">
                            <label for="i1">nome</label>
                            <input type="text" id="i1" v-model="nome" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="i2">descricao</label>
                            <input type="text" id="i2" v-model="descricao" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="e1">tipo</label>
                            <select name="" id="e1" class="form-select"  v-model="tipo">
                                <option v-for="t in tipos" :key="t.id" :value="t.id">{{t.tipo}} </option>
                            </select>
                        </div>
                        <div class="formBox">
                            <label for="i3">entrada</label>
                            <input type="date" id="i3" v-model="entrada" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="i4">saida</label>
                            <input type="date" id="i4" v-model="saida" class="form-input">
                        </div>
                        <div class="formBox">
                            <label for="e2">estado</label>
                            <select name="estado-select" id="e2" v-model="estado" class="form-select">
                                <option  v-for="e in estados" :key="e.id" :value="e.id" >{{e.estado}}</option>
                            </select>
                        </div>
                        <div class="formBox">
                            <label >situacao atual</label>
                            <div class="formCheckBox">
                                <div class="item-checknox">
                                    <div v-for="s in situacoes" :key="s.id">
                                        <input type="radio" name="radio" v-model="situacao" :id="'c'+s.id" :value="s.id">
                                        <label class="label-checkbox" :for="'c'+s.id">{{s.situacao}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="formBox">
                            <label for="i5">quantidade</label>
                            <input type="number" id="i5" v-model="quantidade" class="form-input">
                        </div>
                        <div class="formBox">
                            
                            <!-- <input type="submit" class="form-button" value="Cadastar" @submit="setEstoque"  v-if="!form_atualizacao"> -->
                            <input type="submit" class="form-button" >
                        </div>
                    </form>

                        </div> 
                              
                        <!-- <form action="#" method="POST" @submit="updateEstoque" class="form" >     -->
                        
                </div>
</template>

<script>
import Toastify from 'toastify-js';
export default {
    name:'form-item',
    data(){
        return{
            servidor:'"http://127.0.0.1:8000/api/',
            // servidor:'"http://127.0.0.1:8000/api/',
            tipos:[],
            estados:[],
            situacoes:[],
            nome:null,
            descricao:null,
            tipo:null,
            entrada:null,
            saida:null,
            estado:null,
            situacao:null,
            quantidade:null,
            id_estoque:null,
            form_atualizacao:false,

        }
    },
    methods:{
        async getTipo(){
            const req = await fetch(`http://127.0.0.1:8000/api/tipo`);
            const data = await req.json();
            this.tipos = data;
        },
        async getEstados(){
            const req = await fetch(`http://127.0.0.1:8000/api/estado`);
            const data = await req.json();
            this.estados = data;
            console.log('lista',data);
        },
        async getSituacoes(){
            const req = await fetch(`http://127.0.0.1:8000/api/situacao`);
            const data = await req.json();
            this.situacoes = data;
        },
        async carregarBotaoEditar(){
            console.log('registrando agora!');
            if(this.$route.params.id){
                this.form_atualizacao = !this.form_atualizacao;
            }
        },
        async getItem(){
            if(this.$route.params.id){
                const id = this.$route.params.id;
                this.form_atualizacao = !this.form_atualizacao;
                const req = await fetch(`http://127.0.0.1:8000/api/estoque/${id}`);
                    const data = await req.json();
                        const find_data = data.find((el)=>{
                            return  el.id == id
                        });
                            this.nome = find_data.nome;
                            this.descricao = find_data.descricao;
                            this.tipo = find_data.tipo;
                            this.entrada = find_data.entrada;
                            this.saida = find_data.saida;
                            this.estado = find_data.estado;
                            this.situacao = find_data.situacao;
                            this.quantidade = find_data.quantidade;
                            this.id_estoque = find_data.id;
                            
            }else{
                console.log('nada por aqui!');
            }
        },
        async updateEstoque(e){
            e.preventDefault();
            const id = this.$route.params.id;
                const data = {
                    nome:this.nome,
                    descricao:this.descricao,
                    tipo:this.tipo,
                    entrada:this.entrada,
                    saida:this.saida,
                    estado:this.estado,
                    situacao:this.situacao,
                    quantidade:this.quantidade,
                    id:id 
                }
                
                console.log(data);
                
                    const url_update = 'http://127.0.0.1:8000/api/estoque';
                    const dataJson = JSON.stringify(data);
                        const req = await fetch(url_update,{
                            method:"PUT",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body: dataJson
                        })
                        .catch(err=>{
                            console.log('err msg:',err);
                        });
                            const res = await req.json();
                            console.log('retorno update',res);
                            alert(`registro ${id} foi atualizado com sucesso!`);
        },
        async setEstoque(e){
            e.preventDefault();
            const data = {
                nome:this.nome,
                descricao:this.descricao,
                tipo:this.tipo,
                entrada:this.entrada,
                saida:this.saida,
                estado:this.estado,
                situacao:this.situacao,
                quantidade:this.quantidade
            }
            console.log('dados brutos',data);
            const dataJson = JSON.stringify(data);
                const req = await fetch('http://127.0.0.1:8000/api/estoque',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:dataJson
                })
                .catch(err=>{
                    console.log('err msg:',err);
                });
                   
                    alert(`item ${this.nome} foi Cadastrado com sucesso!`);
                    
                    // usar o Toastify para enviar mansagem mais proficional
        },
        msg(){
            Toastify({
                        text: "Cadastrado com Sucesso",
                        className: "info",
                        gravity: "top", 
                        position: "left",
                            style: {
                                background: "linear-gradient(to right, #0c9e7a, #0c9e38')",
                                maxWidth:"10vw",
                                maxHeight:"10vw",
                            }
                    }).showToast(); 
        }

    },
    watch: {
        // whenever question changes, this function will run
        $route(to, from) {
            console.log('de',to);
            console.log('from',from);
            // if (newQuestion.includes('?')) {
            //     this.getAnswer()
            // }
        }
    },
    mounted(){
        this.getTipo();
        this.getEstados();
        this.getSituacoes();
        this.getItem();
        // this.carregarBotaoEditar();
        // this.msg();
    }
}
</script>

<style scoped>
        /* form */
        form{
            width:50vw;
            margin: 0 auto;
        }
        .formBox{
            display: grid;
            border: 1px solid #d1d1d194;
            padding: 1.5rem 1.1rem;
            margin-bottom: 1.2rem;
            border-radius: .25rem;
           
        }
        .formBox input{
            margin-top: 1rem;
            padding: .37rem .75rem;
            border-radius: .25rem;
            outline: none;
            max-width: 25vw;
            box-shadow: inset 0 4px 2px 0 #cccccc80;
            border: 1px solid #ced4da;
            height: 2.6rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            background-clip: padding-box;
            color: #212529;
        }
        .formBox select{
            margin-top: 1rem;
            padding: .37rem .75rem;
            border-radius: .25rem;
            outline: none;
            max-width: 25vw;
            box-shadow: inset 0 4px 2px 0 #cccccc80;
            border: 1px solid #ced4da;
            height: 2.6rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            background-clip: padding-box;
            color: #212529;
        }
        .formBox .formCheckBox {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
        .formBox .formCheckBox .item-checknox {
            display: flex;
            justify-content: space-around;
            padding-top: 2rem;
        }
        .formBox .formCheckBox .item-checknox input{
            display: none;
        }

        label.label-checkbox {
            padding: 2.5rem 2.5rem;
            border-radius: 0.25rem;
            border: 1px solid #cccccce0;
            box-shadow: 2px 2px 3px #363949;
            transition: all 300ms ease;
        }
        .item-checknox input:checked + label {
            border: 1px solid #cccccce0;
            box-shadow: inset 2px 2px 3px #363949;
        }
        /* form */
        /*msg*/
        .msg_alerta{
            max-width: 15vw;
            max-height: 5vh;
            position: absolute;
            right: 10vw;
            top: 5vw;

        }
        /*msg*/
</style>