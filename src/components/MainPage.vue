<template>
            <div class="linha">
                <!-- <div class="card"> 
                    <span class="material-icons icone-card"> check_box </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>sub titulo</h3>
                            <h1>$ 34,89</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>100%</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="text-muted"> sub titulo esmaecido</div> 
                </div>
                <div class="card"> 
                    <span class="material-icons icone-card"> check_box </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>sub titulo</h3>
                            <h1>$ 34,89</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>100%</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="text-muted"> sub titulo esmaecido</div> 
                </div>
                <div class="card"> 
                    <span class="material-icons icone-card"> check_box </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>sub titulo</h3>
                            <h1>$ 34,89</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>100%</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="text-muted"> sub titulo esmaecido</div> 
                </div> -->
                <DashboardCards />
            </div>
            <div class="linha_2">
                <div class="card">
                    <DashboardTable />
                </div>    
                <div class="card">
                    <canvas id="card_grafic"></canvas>
                   
                </div>
            </div>
</template>

<script>
// import { Chart, registerables } from "chart.js";
import Chart from 'chart.js/auto';
import DashboardTable from '@/components/DashboardTable.vue';
import DashboardCards from '@/components/DashboardCards.vue';

export default {
name:"MainPage",
data(){
    return{
        dados:[
            { lab: 'entrada', count: 0 },
            { lab: 'saida', count: 0 },
            { lab: 'total', count: 0 },
        ]
    }
},
components:{
    DashboardTable,
    DashboardCards
},
methods:{
    
    async carregarDadosGrafocoPie(){
        console.log('controle de carregar dados!');
        const req = await fetch("http://127.0.0.1:8000/api/estoquedash");
        const data = await req.json();
        this.dados[0].count = data.entrada;
                this.dados[1].count = data.saida;
                this.dados[2].count = data.total;
                console.log('dados alterados:',this.dados);

    },
    graficoPie(){
        console.log('os dados vindo para o graficopie são',this.dados);
        new Chart(
            document.getElementById('card_grafic'),
            {
            type: 'pie',
            data: {
                labels: this.dados.map(row => row.lab),
                datasets: [
                {
                    label: 'Estoque itens',
                    data: this.dados.map(row => row.count)
                }
                ]
            }
            }
        );
    }
},
created(){
    this.carregarDadosGrafocoPie();
},
mounted(){
   
    this.graficoPie();
    
}

};


</script>

<style scoped>

</style>