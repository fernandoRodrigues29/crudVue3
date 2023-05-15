<template>
            <div class="linha">
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
                
            </div>
            <div class="linha_2">
                <div class="card">
                    <table>
                        <thead>
                        <tr>
                            <th>item 1</th>
                            <th>item 2</th>
                            <th>item 3</th>
                        </tr>
                       </thead>
                        <tbody>
                            <tr>
                                 <td>item 1</td>
                                 <td>item 2</td>
                                 <td>item 3</td>
                             </tr>
                             <tr>
                                 <td>item 1</td>
                                 <td>item 2</td>
                                 <td>item 3</td>
                             </tr>
                             <tr>
                                 <td>item 1</td>
                                 <td>item 2</td>
                                 <td>item 3</td>
                             </tr> 
                        </tbody>
                    </table>
                </div>
                <div class="card">
                    <canvas id="card_grafic"></canvas>
                   
                </div>
            </div>
</template>

<script>
// import { Chart, registerables } from "chart.js";
import Chart from 'chart.js/auto';
export default {
name:"MainPage",
data(){
    return{
        dados:[
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ]
    }
},
mounted(){
        new Chart(
            document.getElementById('card_grafic'),
            {
            type: 'bar',
            data: {
                labels: this.dados.map(row => row.year),
                datasets: [
                {
                    label: 'acsições por ano!',
                    data: this.dados.map(row => row.count)
                }
                ]
            }
            }
        );

}

};


</script>

<style scoped>

</style>