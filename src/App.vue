<template>
  <main class="conteiner">
    <menuLateral/>
    <section>
        <router-view/>
    </section>  
  </main>
</template>
<script>
import menuLateral from "./components/MenuLateral.vue";
export default{
    name:'App',
    components:{menuLateral}
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
        }
        body{
            width: 100vw;
            height: 100vh;
            font-family: sans-serif;
            font-size: 0.88rem;
            background-color: #f6f6f9;
            user-select: none;
            overflow-x: hidden;
            color: #363949;
        }
        .conteiner{
            display: grid;
            width: 96%;
            margin: 0 auto;
            gap: 1.8rem;
            grid-template-columns: 14rem auto;
        }
        .menu_lateral{
            display: flex;
            flex-direction: column;
            position: relative;
            height: 86vh;
            top: 3rem;
        }
        .menu_lateral a{
            display: flex;
            gap: 1rem;
            align-items: center;
            color:#7d8da1;
            height: 3.7rem;
            /* margin-left: 2rem; */
            transition: all 300ms ease;
        }
        .menu_lateral a.active {
            margin-left: 0;
        }
        .menu_lateral a span {
            margin-left: 2rem;
            transition: all 300ms ease;
        }
        .menu_lateral a.active span {
            margin-left: calc(2rem - 21px);
           
        }
        .menu_lateral a.active::before {
            content: '';
            width: 6px;
            height: 100%;
            background-color: #7380ec;
        }
        .menu_lateral a:hover span{
            margin-left: 3rem;

        }
        /* linha */
        .linha{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1.6rem;
        }

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
        .linha_2{
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1.2rem;
            margin-top: 3.1rem;
        }
        .linha_2>.card{
            background-color: #fff;
            padding: 1.1rem;
            border-radius: 1.6rem;
        }
        .linha_2 .card .card_grafic{
            max-width: 5rem;
            max-height: 5rem;
        }
        table{
            padding: .5rem;
            border: 2px solid #c3c3c32b;
            border-radius: 1.6rem;
            width: 100%;
            text-align: left;
        }
        table th,td{
            padding: 10px 15px;
        }
        table thead tr{
            border-bottom: 1px solid #f6f6f9;
        }
        table tbody tr:nth-child(even){
            background-color: #f6f6f9;
        }
        /* cards */
        .icone-card{
            padding: 0.5rem;
            border-radius: 50%;
            font-size: 2rem;
            color: #fff;
            background-color: #7380ec;
        }
        .card-content {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
       .card .card-content .left h3{
            margin: 1rem 0 0.5rem;
            font-size: 1rem;
        }
        .card .card-content .left  h1{
            font-size: 1.8rem;
            font-weight: 800;
        }
        /* grafico */
        .card .card-content .grafico{
            width: 92px;
            height: 92px;
            position: relative;
        }
        
        .card .card-content .grafico .number{
            position: absolute;
            top: -1px;
            left: -1px;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* grafico */
        .card .card-content .grafico svg circle{
            fill: none;
            stroke: #7380ec;
            stroke-width: 14;
            stroke-linecap: round;
            transform: translate(5px, 5px);
        }
        .text-muted{
            margin-top: 1.6rem;
            color: #545557a2;
        }
        /* fim cards */
</style>
