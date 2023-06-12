(function(){"use strict";var a={8379:function(a,e,t){var o=t(9242),s=t(3396);const i={class:"mainConteiner"};function n(a,e,t,o,n,l){const d=(0,s.up)("menuLateral"),r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("main",i,[n.visibilidadeDoMenu?((0,s.wg)(),(0,s.j4)(d,{key:0})):(0,s.kq)("",!0),(0,s._)("section",null,[(0,s.Wm)(r)])])}const l=a=>((0,s.dD)("data-v-50a0cd4d"),a=a(),(0,s.Cn)(),a),d={class:"menu_lateral"},r=l((()=>(0,s._)("span",{class:"material-icons"}," home ",-1))),c=l((()=>(0,s._)("span",{class:"material-icons"}," settings ",-1))),u=l((()=>(0,s._)("span",{class:"material-icons"}," logout ",-1)));function m(a,e,t,o,i,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("aside",null,[(0,s._)("div",d,[(0,s.Wm)(l,{class:"item",to:"/"},{default:(0,s.w5)((()=>[r,(0,s.Uk)(" Principal")])),_:1}),(0,s.Wm)(l,{class:"item",to:"/table"},{default:(0,s.w5)((()=>[c,(0,s.Uk)(" Gerênciar")])),_:1}),(0,s._)("a",{href:"#",class:"item",onClick:e[0]||(e[0]=(...a)=>n.logout&&n.logout(...a))},[u,(0,s.Uk)(" sair ")])])])}t(7658);var f={name:"MenuLateral",methods:{async logout(){localStorage.chaveLogin&&(localStorage.removeItem("chaveLogin"),this.$router.push("/login"))}}},p=t(89);const v=(0,p.Z)(f,[["render",m],["__scopeId","data-v-50a0cd4d"]]);var h=v,_={name:"App",data(){return{visibilidadeDoMenu:!1}},watch:{$route(a,e){this.verificarSeExisteChave()}},methods:{verificarSeExisteChave(){localStorage.chaveLogin?(console.log("exite chave"),this.visibilidadeDoMenu=!0):(console.log("estáBloquado"),this.visibilidadeDoMenu=!1)}},created(){this.verificarSeExisteChave()},components:{menuLateral:h}};const b=(0,p.Z)(_,[["render",n]]);var g=b,y=t(2483);var w=t(7139);const k={class:"linha"},x={class:"linha_2"},q={class:"card"},D=(0,s._)("div",{class:"card"},[(0,s._)("canvas",{id:"card_grafic"})],-1);function I(a,e,t,o,i,n){const l=(0,s.up)("DashboardCards"),d=(0,s.up)("DashboardTable");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",k,[(0,s.Wm)(l)]),(0,s._)("div",x,[(0,s._)("div",q,[(0,s.Wm)(d)]),D])],64)}var B=t(1632);const C=a=>((0,s.dD)("data-v-392f8167"),a=a(),(0,s.Cn)(),a),S={class:"table"},U=(0,s.uE)('<div class="tableHead" data-v-392f8167><div class="tableHeadLine" data-v-392f8167><div class="tableHeadItem" data-v-392f8167>#</div><div class="tableHeadItem" data-v-392f8167>nome</div><div class="tableHeadItem" data-v-392f8167>estado</div><div class="tableHeadItem" data-v-392f8167>situacao</div><div class="tableHeadItem" data-v-392f8167>editar</div><div class="tableHeadItem" data-v-392f8167>excluir</div></div></div>',1),z={class:"tableBody"},H={class:"tableBodyItem"},j={class:"tableBodyItem"},E={class:"tableBodyItem"},T={class:"tableBodyItem"},O={class:"tableBodyItem"},P={class:"tableBodyItem"},L=["onClick"],V={key:0,class:"spinner-grow",role:"status"},$=C((()=>(0,s._)("span",{class:"sr-only"},null,-1))),M=[$];function Y(a,e,t,o,i,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",S,[U,(0,s._)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.estoque,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"tableBodyLine",key:e.id},[(0,s._)("div",H,"#"+(0,w.zw)(e.id),1),(0,s._)("div",j,(0,w.zw)(e.nome),1),(0,s._)("div",E,(0,w.zw)(e.descricao),1),(0,s._)("div",T,(0,w.zw)(e.situacao),1),(0,s._)("div",O,[(0,s.Wm)(l,{class:"btn btn-editar",to:`/editar/${e.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)("editar")])),_:2},1032,["to"])]),(0,s._)("div",P,[(0,s._)("button",{class:"btn btn-excluir",onClick:t=>a.deleteItem(e.id)},"deletar",8,L)])])))),128))])]),i.exibir_tabela?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",V,M))],64)}var Z={name:"DashboardTable",data(){return{estoque:[],situacao:[],exibir_tabela:!1}},methods:{async loadItems(){const a=await fetch("http://127.0.0.1:8000/api/estoque"),e=await a.json();this.exibir_tabela=!0,this.estoque=e}},mounted(){this.loadItems()}};const N=(0,p.Z)(Z,[["render",Y],["__scopeId","data-v-392f8167"]]);var W=N;const K=a=>((0,s.dD)("data-v-20dff019"),a=a(),(0,s.Cn)(),a),G={class:"card"},A=K((()=>(0,s._)("span",{class:"material-icons icone-card"}," file_download ",-1))),J={class:"card-content"},F={class:"left"},R=K((()=>(0,s._)("h3",null,"entrada",-1))),Q=K((()=>(0,s._)("div",{class:"grafico-card"},[(0,s._)("div",{class:"grafico"},[(0,s._)("div",{class:"progressbar-circle"},[(0,s._)("div",{class:"number-porcent-circle"},"100%")])])],-1))),X=K((()=>(0,s._)("div",{class:"text-muted"}," Entradas mensais ",-1))),aa={class:"card"},ea=K((()=>(0,s._)("span",{class:"material-icons icone-card"}," file_upload ",-1))),ta={class:"card-content"},oa={class:"left"},sa=K((()=>(0,s._)("h3",null,"saida",-1))),ia=K((()=>(0,s._)("div",{class:"grafico-card"},[(0,s._)("div",{class:"grafico"},[(0,s._)("div",{class:"progressbar-circle"},[(0,s._)("div",{class:"number-porcent-circle"},"100%")])])],-1))),na=K((()=>(0,s._)("div",{class:"text-muted"},"Saidas mensais ",-1))),la={class:"card"},da=K((()=>(0,s._)("span",{class:"material-icons icone-card"}," business_center ",-1))),ra={class:"card-content"},ca={class:"left"},ua=K((()=>(0,s._)("h3",null,"Total no estoque",-1))),ma=K((()=>(0,s._)("div",{class:"grafico-card"},[(0,s._)("div",{class:"grafico"},[(0,s._)("div",{class:"progressbar-circle"},[(0,s._)("div",{class:"number-porcent-circle"},"100%")])])],-1))),fa=K((()=>(0,s._)("div",{class:"text-muted"}," itens no estoque",-1)));function pa(a,e,t,o,i,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",G,[A,(0,s._)("div",J,[(0,s._)("div",F,[R,(0,s._)("h1",null,(0,w.zw)(i.entrada_estoque),1)]),Q]),X]),(0,s._)("div",aa,[ea,(0,s._)("div",ta,[(0,s._)("div",oa,[sa,(0,s._)("h1",null,(0,w.zw)(i.saida_estoque),1)]),ia]),na]),(0,s._)("div",la,[da,(0,s._)("div",ra,[(0,s._)("div",ca,[ua,(0,s._)("h1",null,(0,w.zw)(i.total_estoque),1)]),ma]),fa])],64)}var va={name:"DashboardCards",data(){return{entrada_estoque:0,saida_estoque:0,total_estoque:0}},methods:{loadItems(){fetch("http://127.0.0.1:8000/api/estoquedash").then((a=>a.json())).then((a=>{this.entrada_estoque=a.entrada,this.saida_estoque=a.saida,this.total_estoque=a.total}))}},mounted(){this.loadItems()}};const ha=(0,p.Z)(va,[["render",pa],["__scopeId","data-v-20dff019"]]);var _a=ha,ba={name:"MainPage",data(){return{dados:[{lab:"entrada",count:0},{lab:"saida",count:0},{lab:"total",count:0}]}},components:{DashboardTable:W,DashboardCards:_a},methods:{async carregarDadosGrafocoPie(){console.log("controle de carregar dados!");const a=await fetch("http://127.0.0.1:8000/api/estoquedash"),e=await a.json();this.dados[0].count=e.entrada,this.dados[1].count=e.saida,this.dados[2].count=e.total,console.log("dados alterados:",this.dados)},graficoPie(){console.log("os dados vindo para o graficopie são",this.dados),new B.ZP(document.getElementById("card_grafic"),{type:"pie",data:{labels:this.dados.map((a=>a.lab)),datasets:[{label:"Estoque itens",data:this.dados.map((a=>a.count))}]}})}},created(){this.carregarDadosGrafocoPie()},mounted(){this.graficoPie()}};const ga=(0,p.Z)(ba,[["render",I]]);var ya=ga;const wa=a=>((0,s.dD)("data-v-1b2c972c"),a=a(),(0,s.Cn)(),a),ka={class:"card"},xa={key:0},qa={class:"formBox"},Da=wa((()=>(0,s._)("label",{for:"i1"},"nome",-1))),Ia={class:"formBox"},Ba=wa((()=>(0,s._)("label",{for:"i2"},"descricao",-1))),Ca={class:"formBox"},Sa=wa((()=>(0,s._)("label",{for:"e1"},"tipo",-1))),Ua=["value"],za={class:"formBox"},Ha=wa((()=>(0,s._)("label",{for:"i3"},"entrada",-1))),ja={class:"formBox"},Ea=wa((()=>(0,s._)("label",{for:"i4"},"saida",-1))),Ta={class:"formBox"},Oa=wa((()=>(0,s._)("label",{for:"e2"},"estado",-1))),Pa=["value"],La={class:"formBox"},Va=wa((()=>(0,s._)("label",null,"situacao atual",-1))),$a={class:"formCheckBox"},Ma={class:"item-checknox"},Ya=["id","value"],Za=["for"],Na={class:"formBox"},Wa=wa((()=>(0,s._)("label",{for:"i5"},"quantidade",-1))),Ka=wa((()=>(0,s._)("div",{class:"formBox"},[(0,s._)("input",{type:"submit",class:"form-button"})],-1))),Ga={key:1},Aa={class:"formBox"},Ja=wa((()=>(0,s._)("label",{for:"i1"},"nome",-1))),Fa={class:"formBox"},Ra=wa((()=>(0,s._)("label",{for:"i2"},"descricao",-1))),Qa={class:"formBox"},Xa=wa((()=>(0,s._)("label",{for:"e1"},"tipo",-1))),ae=["value"],ee={class:"formBox"},te=wa((()=>(0,s._)("label",{for:"i3"},"entrada",-1))),oe={class:"formBox"},se=wa((()=>(0,s._)("label",{for:"i4"},"saida",-1))),ie={class:"formBox"},ne=wa((()=>(0,s._)("label",{for:"e2"},"estado",-1))),le=["value"],de={class:"formBox"},re=wa((()=>(0,s._)("label",null,"situacao atual",-1))),ce={class:"formCheckBox"},ue={class:"item-checknox"},me=["id","value"],fe=["for"],pe={class:"formBox"},ve=wa((()=>(0,s._)("label",{for:"i5"},"quantidade",-1))),he=wa((()=>(0,s._)("div",{class:"formBox"},[(0,s._)("input",{type:"submit",class:"form-button"})],-1)));function _e(a,e,t,i,n,l){return(0,s.wg)(),(0,s.iD)("div",ka,[n.form_atualizacao?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",xa,[(0,s.Uk)((0,w.zw)(n.form_atualizacao)+" ",1),(0,s._)("form",{action:"#",method:"POST",onSubmit:e[8]||(e[8]=(...a)=>l.setEstoque&&l.setEstoque(...a)),class:"form"},[(0,s._)("div",qa,[Da,(0,s.wy)((0,s._)("input",{type:"text",id:"i1","onUpdate:modelValue":e[0]||(e[0]=a=>n.nome=a),class:"form-input"},null,512),[[o.nr,n.nome]])]),(0,s._)("div",Ia,[Ba,(0,s.wy)((0,s._)("input",{type:"text",id:"i2","onUpdate:modelValue":e[1]||(e[1]=a=>n.descricao=a),class:"form-input"},null,512),[[o.nr,n.descricao]])]),(0,s._)("div",Ca,[Sa,(0,s.wy)((0,s._)("select",{name:"",id:"e1",class:"form-select","onUpdate:modelValue":e[2]||(e[2]=a=>n.tipo=a)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tipos,(a=>((0,s.wg)(),(0,s.iD)("option",{key:a.id,value:a.id},(0,w.zw)(a.tipo),9,Ua)))),128))],512),[[o.bM,n.tipo]])]),(0,s._)("div",za,[Ha,(0,s.wy)((0,s._)("input",{type:"date",id:"i3","onUpdate:modelValue":e[3]||(e[3]=a=>n.entrada=a),class:"form-input"},null,512),[[o.nr,n.entrada]])]),(0,s._)("div",ja,[Ea,(0,s.wy)((0,s._)("input",{type:"date",id:"i4","onUpdate:modelValue":e[4]||(e[4]=a=>n.saida=a),class:"form-input"},null,512),[[o.nr,n.saida]])]),(0,s._)("div",Ta,[Oa,(0,s.wy)((0,s._)("select",{name:"estado-select",id:"e2","onUpdate:modelValue":e[5]||(e[5]=a=>n.estado=a),class:"form-select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.estados,(a=>((0,s.wg)(),(0,s.iD)("option",{key:a.id,value:a.id},(0,w.zw)(a.estado),9,Pa)))),128))],512),[[o.bM,n.estado]])]),(0,s._)("div",La,[Va,(0,s._)("div",$a,[(0,s._)("div",Ma,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.situacoes,(a=>((0,s.wg)(),(0,s.iD)("div",{key:a.id},[(0,s.wy)((0,s._)("input",{type:"radio",name:"radio","onUpdate:modelValue":e[6]||(e[6]=a=>n.situacao=a),id:"c"+a.id,value:a.id},null,8,Ya),[[o.G2,n.situacao]]),(0,s._)("label",{class:"label-checkbox",for:"c"+a.id},(0,w.zw)(a.situacao),9,Za)])))),128))])])]),(0,s._)("div",Na,[Wa,(0,s.wy)((0,s._)("input",{type:"number",id:"i5","onUpdate:modelValue":e[7]||(e[7]=a=>n.quantidade=a),class:"form-input"},null,512),[[o.nr,n.quantidade]])]),Ka],32)])),n.form_atualizacao?((0,s.wg)(),(0,s.iD)("div",Ga,[(0,s.Uk)((0,w.zw)(n.form_atualizacao)+" ",1),(0,s._)("form",{action:"#",method:"POST",onSubmit:e[17]||(e[17]=(...a)=>l.updateEstoque&&l.updateEstoque(...a)),class:"form"},[(0,s._)("div",Aa,[Ja,(0,s.wy)((0,s._)("input",{type:"text",id:"i1","onUpdate:modelValue":e[9]||(e[9]=a=>n.nome=a),class:"form-input"},null,512),[[o.nr,n.nome]])]),(0,s._)("div",Fa,[Ra,(0,s.wy)((0,s._)("input",{type:"text",id:"i2","onUpdate:modelValue":e[10]||(e[10]=a=>n.descricao=a),class:"form-input"},null,512),[[o.nr,n.descricao]])]),(0,s._)("div",Qa,[Xa,(0,s.wy)((0,s._)("select",{name:"",id:"e1",class:"form-select","onUpdate:modelValue":e[11]||(e[11]=a=>n.tipo=a)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tipos,(a=>((0,s.wg)(),(0,s.iD)("option",{key:a.id,value:a.id},(0,w.zw)(a.tipo),9,ae)))),128))],512),[[o.bM,n.tipo]])]),(0,s._)("div",ee,[te,(0,s.wy)((0,s._)("input",{type:"date",id:"i3","onUpdate:modelValue":e[12]||(e[12]=a=>n.entrada=a),class:"form-input"},null,512),[[o.nr,n.entrada]])]),(0,s._)("div",oe,[se,(0,s.wy)((0,s._)("input",{type:"date",id:"i4","onUpdate:modelValue":e[13]||(e[13]=a=>n.saida=a),class:"form-input"},null,512),[[o.nr,n.saida]])]),(0,s._)("div",ie,[ne,(0,s.wy)((0,s._)("select",{name:"estado-select",id:"e2","onUpdate:modelValue":e[14]||(e[14]=a=>n.estado=a),class:"form-select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.estados,(a=>((0,s.wg)(),(0,s.iD)("option",{key:a.id,value:a.id},(0,w.zw)(a.estado),9,le)))),128))],512),[[o.bM,n.estado]])]),(0,s._)("div",de,[re,(0,s._)("div",ce,[(0,s._)("div",ue,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.situacoes,(a=>((0,s.wg)(),(0,s.iD)("div",{key:a.id},[(0,s.wy)((0,s._)("input",{type:"radio",name:"radio","onUpdate:modelValue":e[15]||(e[15]=a=>n.situacao=a),id:"c"+a.id,value:a.id},null,8,me),[[o.G2,n.situacao]]),(0,s._)("label",{class:"label-checkbox",for:"c"+a.id},(0,w.zw)(a.situacao),9,fe)])))),128))])])]),(0,s._)("div",pe,[ve,(0,s.wy)((0,s._)("input",{type:"number",id:"i5","onUpdate:modelValue":e[16]||(e[16]=a=>n.quantidade=a),class:"form-input"},null,512),[[o.nr,n.quantidade]])]),he],32)])):(0,s.kq)("",!0)])}var be=t(2310),ge=t.n(be),ye={name:"form-item",data(){return{servidor:'"http://127.0.0.1:8000/api/',tipos:[],estados:[],situacoes:[],nome:null,descricao:null,tipo:null,entrada:null,saida:null,estado:null,situacao:null,quantidade:null,id_estoque:null,form_atualizacao:!1}},methods:{async getTipo(){const a=await fetch("http://127.0.0.1:8000/api/tipo"),e=await a.json();this.tipos=e},async getEstados(){const a=await fetch("http://127.0.0.1:8000/api/estado"),e=await a.json();this.estados=e,console.log("lista",e)},async getSituacoes(){const a=await fetch("http://127.0.0.1:8000/api/situacao"),e=await a.json();this.situacoes=e},async carregarBotaoEditar(){console.log("registrando agora!"),this.$route.params.id&&(this.form_atualizacao=!this.form_atualizacao)},async getItem(){if(this.$route.params.id){const a=this.$route.params.id;this.form_atualizacao=!this.form_atualizacao;const e=await fetch(`http://127.0.0.1:8000/api/estoque/${a}`),t=await e.json(),o=t.find((e=>e.id==a));this.nome=o.nome,this.descricao=o.descricao,this.tipo=o.tipo,this.entrada=o.entrada,this.saida=o.saida,this.estado=o.estado,this.situacao=o.situacao,this.quantidade=o.quantidade,this.id_estoque=o.id}else console.log("nada por aqui!")},async updateEstoque(a){a.preventDefault();const e=this.$route.params.id,t={nome:this.nome,descricao:this.descricao,tipo:this.tipo,entrada:this.entrada,saida:this.saida,estado:this.estado,situacao:this.situacao,quantidade:this.quantidade,id:e};console.log(t);const o="http://127.0.0.1:8000/api/estoque",s=JSON.stringify(t),i=await fetch(o,{method:"PUT",headers:{"Content-Type":"application/json"},body:s}).catch((a=>{console.log("err msg:",a)})),n=await i.json();console.log("retorno update",n),alert(`registro ${e} foi atualizado com sucesso!`)},async setEstoque(a){a.preventDefault();const e={nome:this.nome,descricao:this.descricao,tipo:this.tipo,entrada:this.entrada,saida:this.saida,estado:this.estado,situacao:this.situacao,quantidade:this.quantidade};console.log("dados brutos",e);const t=JSON.stringify(e);await fetch("http://127.0.0.1:8000/api/estoque",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).catch((a=>{console.log("err msg:",a)}));alert(`item ${this.nome} foi Cadastrado com sucesso!`)},msg(){ge()({text:"Cadastrado com Sucesso",className:"info",gravity:"top",position:"left",style:{background:"linear-gradient(to right, #0c9e7a, #0c9e38')",maxWidth:"10vw",maxHeight:"10vw"}}).showToast()}},watch:{$route(a,e){console.log("de",a),console.log("from",e)}},mounted(){this.getTipo(),this.getEstados(),this.getSituacoes(),this.getItem()}};const we=(0,p.Z)(ye,[["render",_e],["__scopeId","data-v-1b2c972c"]]);var ke=we;const xe=a=>((0,s.dD)("data-v-7708ec2f"),a=a(),(0,s.Cn)(),a),qe={class:"linha_1"},De={class:"card"},Ie={class:"btnConteiner"},Be=xe((()=>(0,s._)("span",{class:"material-icons"}," star ",-1))),Ce={class:"linha_2"},Se={class:"card"},Ue={key:0,class:"table"},ze=(0,s.uE)('<div class="tableHead" data-v-7708ec2f><div class="tableHeadLine" data-v-7708ec2f><div class="tableHeadItem" data-v-7708ec2f>#</div><div class="tableHeadItem" data-v-7708ec2f>nome</div><div class="tableHeadItem" data-v-7708ec2f>estado</div><div class="tableHeadItem" data-v-7708ec2f>situacao</div><div class="tableHeadItem" data-v-7708ec2f>editar</div><div class="tableHeadItem" data-v-7708ec2f>excluir</div></div></div>',1),He={class:"tableBody"},je={class:"tableBodyItem"},Ee={class:"tableBodyItem"},Te={class:"tableBodyItem"},Oe={class:"tableBodyItem"},Pe={class:"tableBodyItem"},Le={class:"tableBodyItem"},Ve=["onClick"],$e={key:1,class:"spinner-grow",role:"status"},Me=xe((()=>(0,s._)("span",{class:"sr-only"},null,-1))),Ye=[Me];function Ze(a,e,t,o,i,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",qe,[(0,s._)("div",De,[(0,s._)("div",Ie,[(0,s.Wm)(l,{class:"btn btn-novo",to:"/form"},{default:(0,s.w5)((()=>[Be,(0,s.Uk)(" Novo Item")])),_:1})])])]),(0,s._)("div",Ce,[(0,s._)("div",Se,[i.exibir_tabela?((0,s.wg)(),(0,s.iD)("div",Ue,[ze,(0,s._)("div",He,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.estoque,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"tableBodyLine",key:a.id},[(0,s._)("div",je,"#"+(0,w.zw)(a.id),1),(0,s._)("div",Ee,(0,w.zw)(a.nome),1),(0,s._)("div",Te,(0,w.zw)(a.descricao),1),(0,s._)("div",Oe,(0,w.zw)(a.situacao),1),(0,s._)("div",Pe,[(0,s.Wm)(l,{class:"btn btn-editar",to:`/editar/${a.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)("editar")])),_:2},1032,["to"])]),(0,s._)("div",Le,[(0,s._)("button",{class:"btn btn-excluir",onClick:e=>n.deleteItem(a.id)},"deletar",8,Ve)])])))),128))])])):(0,s.kq)("",!0),i.exibir_tabela?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",$e,Ye))])])],64)}var Ne={name:"Table",data(){return{estoque:[],situacao:[],servidor:"http://127.0.0.1:8000/api/estoque",exibir_tabela:!1}},methods:{async loadItems(){const a=await fetch(this.servidor),e=await a.json();this.exibir_tabela=!0,this.estoque=e},async loadSituacao(){const a=await fetch("http://127.0.0.1:8000/api/situacao"),e=await a.json();this.situacao=e},async deleteItem(a){const e=await fetch(`http://127.0.0.1:8000/api/estoque/${a}`,{method:"DELETE"});await e.json();alert(`registro ${a} foi excluido com sucesso!`),this.loadItems()},async observarParametro(){if(this.$route.params.id){const a=this.$route.params.id;this.deleteItem(a)}}},mounted(){this.loadItems(),this.observarParametro()}};const We=(0,p.Z)(Ne,[["render",Ze],["__scopeId","data-v-7708ec2f"]]);var Ke=We;const Ge=a=>((0,s.dD)("data-v-069a6233"),a=a(),(0,s.Cn)(),a),Ae={class:"loginConteiner"},Je={class:"text-center"},Fe=Ge((()=>(0,s._)("h1",{class:"h3 mb-3 font-weight-normal"},"Login",-1))),Re=Ge((()=>(0,s._)("label",{for:"",class:"sr-only"},"E-mail",-1))),Qe=Ge((()=>(0,s._)("label",{for:"",class:"sr-only mt-3"},"Senha",-1))),Xe=Ge((()=>(0,s._)("div",{class:"checkbox mb-3"},[(0,s._)("label",null,[(0,s._)("input",{type:"checkbox",value:"remember-me"}),(0,s.Uk)("Remembe me ")])],-1))),at=Ge((()=>(0,s._)("div",{class:"mb-2"},[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("b",null,"email:"),(0,s.Uk)(" email@provedor.com")]),(0,s._)("li",null,[(0,s._)("b",null,"pass:"),(0,s.Uk)(" 123")])])],-1))),et=Ge((()=>(0,s._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Logar",-1)));function tt(a,e,t,i,n,l){return(0,s.wg)(),(0,s.iD)("div",Ae,[(0,s._)("div",Je,[(0,s._)("form",{class:"form-signin",method:"POST",onSubmit:e[2]||(e[2]=(...a)=>l.logIn&&l.logIn(...a))},[Fe,Re,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",name:"email",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=a=>n.email=a)},null,512),[[o.nr,n.email]]),Qe,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",name:"senha","onUpdate:modelValue":e[1]||(e[1]=a=>n.pass=a)},null,512),[[o.nr,n.pass]]),Xe,at,et],32)])])}var ot={name:"Login",data(){return{email:null,pass:null}},methods:{geradorDeMsg(a="",e=null){ge()({text:`${a}`,className:"info",gravity:"top",position:"center",style:e}).showToast()},async logIn(a){a.preventDefault();const e={usuario:this.email,senha:this.pass},t=JSON.stringify(e),o=await fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:t}),s=await o.json();if(console.log("controle",s),s)localStorage.chaveLogin=this.keyGenerator(),this.$router.push("/");else{const a={background:"linear-gradient(to right,#793609, #ffbc00)"};this.geradorDeMsg("Ocorreu um erro no login!",a)}},keyGenerator(){const a=Math.floor(99e3*Math.random()+999);return a}},mounted(){}};const st=(0,p.Z)(ot,[["render",tt],["__scopeId","data-v-069a6233"]]);var it=st;const nt=[{path:"/",name:"home",component:ya},{path:"/form",name:"form",component:ke},{path:"/editar/:id",name:"editar",component:ke},{path:"/delete/:id",name:"delete",component:Ke},{path:"/table",name:"table",component:Ke},{path:"/login",name:"login",component:it},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],lt=(0,y.p7)({history:(0,y.PO)("/"),routes:nt});lt.beforeEach((async(a,e)=>{localStorage.chaveLogin||"login"===a.name||lt.push("/login")}));var dt=lt,rt=t(7722),ct=rt.Z;(0,o.ri)(g).use(ct),(0,o.ri)(g).mixin({data(){return{menuLateral:!1}}}),(0,o.ri)(g).use(dt).mount("#app")}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return a[o].call(i.exports,i,i.exports,t),i.exports}t.m=a,function(){var a=[];t.O=function(e,o,s,i){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],s=a[c][1],i=a[c][2];for(var l=!0,d=0;d<o.length;d++)(!1&i||n>=i)&&Object.keys(t.O).every((function(a){return t.O[a](o[d])}))?o.splice(d--,1):(l=!1,i<n&&(n=i));if(l){a.splice(c--,1);var r=s();void 0!==r&&(e=r)}}return e}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[o,s,i]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/about.3c133e75.js"}}(),function(){t.miniCssF=function(a){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="front_estoque:";t.l=function(o,s,i,n){if(a[o])a[o].push(s);else{var l,d;if(void 0!==i)for(var r=document.getElementsByTagName("script"),c=0;c<r.length;c++){var u=r[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+i){l=u;break}}l||(d=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",e+i),l.src=o),a[o]=[s];var m=function(e,t){l.onerror=l.onload=null,clearTimeout(f);var s=a[o];if(delete a[o],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(a){return a(t)})),e)return e(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),d&&document.head.appendChild(l)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={143:0};t.f.j=function(e,o){var s=t.o(a,e)?a[e]:void 0;if(0!==s)if(s)o.push(s[2]);else{var i=new Promise((function(t,o){s=a[e]=[t,o]}));o.push(s[2]=i);var n=t.p+t.u(e),l=new Error,d=function(o){if(t.o(a,e)&&(s=a[e],0!==s&&(a[e]=void 0),s)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,s[1](l)}};t.l(n,d,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,o){var s,i,n=o[0],l=o[1],d=o[2],r=0;if(n.some((function(e){return 0!==a[e]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(d)var c=d(t)}for(e&&e(o);r<n.length;r++)i=n[r],t.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return t.O(c)},o=self["webpackChunkfront_estoque"]=self["webpackChunkfront_estoque"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8379)}));o=t.O(o)})();
//# sourceMappingURL=app.6ca7c5c9.js.map