<template>
  <div class="loginConteiner">
    <div class="text-center">
        <form class="form-signin" method="POST" @submit="logIn">
            <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                <label for="" class="sr-only">E-mail</label>
                    <input type="text" class="form-control" name="email" autofocus v-model="email">

                <label for="" class="sr-only mt-3">Senha</label>
                    <input type="password" class="form-control" name="senha" v-model="pass">

                    <div class="checkbox mb-3">
                <label >
                    <input type="checkbox" value="remember-me">Remembe me
                </label>
            </div>
            <div class="mb-2">
                <ul>
                    <li> <b>email:</b> email@provedor.com</li>
                    <li> <b>pass:</b> 123</li>
                </ul>
            </div>
           
            <button class="btn btn-lg btn-primary btn-block" type="submit" >Logar</button>
        </form>
    </div>

    
  </div>   
</template>

<script>

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export default {
name:"Login",
data(){
    return {
        email:null,
        pass:null
    }
},
methods:{
    geradorDeMsg(msg='',styleObj=null){
        Toastify({
            text: `${msg}`,
            className: "info",
            gravity: "top",
            position: "center",
            style: styleObj
        }).showToast();
    },
    async logIn(e){
        e.preventDefault();
        let retorno=false;
            const dado = {
                usuario:this.email,
                senha:this.pass
            }
           
            const dataJson = JSON.stringify(dado);
            const req = await fetch("http://127.0.0.1:8000/api/login",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:dataJson
                        });
                            const data = await req.json();
                            console.log('controle',data);
                        //verifica se bate
                        if(data){
                            localStorage.chaveLogin = this.keyGenerator();
                                this.$router.push('/');
                        }else{
                            const estilo = { background: "linear-gradient(to right,#793609, #ffbc00)"};
                                this.geradorDeMsg('Ocorreu um erro no login!',estilo);
                        }

    },
    keyGenerator(){
        const keyGen = Math.floor(Math.random()*(99999-999)+999);
        return keyGen;
    }
},
mounted(){
    // const estilo = { background: "linear-gradient(to right,#090979, #00d4ff)",};
    // this.teste('teste de mensagem ');
}
}
</script>

<style scoped>
    .loginConteiner{
        max-width: 45vw;
        margin: 15vh auto;
    }
    .info{
        margin: 24vh auto;
        max-width: 30%;
    }
</style>