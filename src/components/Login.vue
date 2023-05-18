<template>
  <div class="conteiner">
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
export default {
name:"Login",
data(){
    return {
        email:null,
        pass:null
    }
},
methods:{
    async logIn(e){
        e.preventDefault();
            const req = await fetch("http://localhost:3000/usuario");
                    const data = await req.json();
                    let retorno=false;    
                        if(data.email == this.email && data.pass == this.pass){
                                retorno = true;
                        }
                        //verifica se bate
                        if(retorno){
                            localStorage.chaveLogin = this.keyGenerator();
                            this.$router.push('/');
                        }else{
                            alert('Ocorreu um erro no login!');
                        }

    },
    keyGenerator(){
        const keyGen = Math.floor(Math.random()*(99999-999)+999);
        return keyGen;
    }
}
}
</script>

<style>

</style>