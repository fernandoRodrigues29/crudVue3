<template>
  <aside>
            <div class="menu_lateral">
                <router-link class="item" to="/"> <span class="material-icons"> home </span> Principal</router-link> 
                <router-link class="item" to="/table"> <span class="material-icons"> settings </span> Gerênciar</router-link>                               
                
                <a href="#" class="item" @click="logout">
                    <span class="material-icons"> logout </span>
                    sair
                </a>
            </div>
        </aside>
</template>

<script>
export default {
    name:'MenuLateral',
    methods:{
        async logout(){
            if(localStorage.chaveLogin){
                localStorage.removeItem('chaveLogin');
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style scoped>
    aside{
        position: fixed;
        left: 0;
        height: 100vh;
        border-right:1px solid #d2d2d2;
        width: 14vw;
    }
    .item{
        position: relative;
        text-decoration: none;
    }
    .item::before{
        content: '';
        position: absolute;
        left: 0;
        width: 0%;
        height: 100%;
        transition: all 300ms ease;
    }
    .item:hover:before{
        background-color: #ceceeb71;
        width: 100%;
        z-index: -1;
    }
</style>