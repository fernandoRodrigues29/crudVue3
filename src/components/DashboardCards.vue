<template>
                  <div class="card"> 
                    <span class="material-icons icone-card"> file_download </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>entrada</h3>
                            <h1>{{ entrada_estoque }}</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <div class="progressbar-circle">
                                    <div class="number-porcent-circle">100%</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="text-muted"> Entradas mensais </div> 
                </div>
                <div class="card"> 
                    <span class="material-icons icone-card"> file_upload </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>saida</h3>
                            <h1>{{ saida_estoque }}</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <div class="progressbar-circle">
                                    <div class="number-porcent-circle">100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-muted">Saidas mensais </div> 
                </div>
                <div class="card"> 
                    <span class="material-icons icone-card"> business_center </span>
                    <div class="card-content">
                        <div class="left">
                            <h3>Total no estoque</h3>
                            <h1>{{ total_estoque }}</h1>
                        </div>
                        <div class="grafico-card">
                            <div class="grafico">
                                <div class="progressbar-circle">
                                    <div class="number-porcent-circle">100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-muted"> itens no estoque</div> 
                </div>
</template>

<script>
export default {
    name:'DashboardCards',
    data(){
        return {
            entrada_estoque:0,
            saida_estoque:0,
            total_estoque:0
        }
    },
    methods:{
        loadItems(){
            fetch("http://127.0.0.1:8000/api/estoquedash")
            .then(e=>e.json())
            .then(e=>{
                this.entrada_estoque = e.entrada;
                this.saida_estoque = e.saida;
                this.total_estoque = e.total;
            });
        }
    },
      mounted(){
        this.loadItems();
      }
}
</script>

<style scoped>
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
        .card .card-content .grafico svg circle{
            fill: none;
            stroke: #8bec73;
            stroke-width: 14;
            stroke-linecap: round;
            transform: translate(5px, 5px);
        }
        .progressbar-circle{
			    display: grid;
			    align-items: center;
			    justify-content: center;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background: radial-gradient(closest-side,#fff 75%,transparent 80% 100%),
			conic-gradient(#001380 50%, #8773fa 0 );
		}
        .progressbar-circle .number-porcent-circle{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 900;
            font-size: 20px;
        }
</style>