//colcando todos os valores recebidos em um objeto, podendo ser literario, com class ou com função.
class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados(){
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

//lógica dinâmica para o ID
class Bd {
    constructor() {
        let id = localStorage.getItem('id');

        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }
    //pegando, sempre, o próximo ID, para, dessa forma, não sobrepor o ID anterior.
    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }
    //lógica para o id dinâmico e convertendo o objeto literário em JSON
    gravar(d) {
        let id = this.getProximoId();

        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id);
    }
}

let bd = new Bd();

//pegando os respectivos valores, para, dessa forma, ficar armazenado
function cadastrarDespesas() {
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesas = new Despesas(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    if(despesas.validarDados()) {
        bd.gravar(despesas);
        $('#sucessoGravacao').modal('show')
    } else {
        $('#erroGravacao').modal('show')
    }
    
}

//foi introduzido, dessa forma, BD, o índice dinâmico
//objeto BD é mais para controlar a lógica de acrescentar 1 no id, para, assim, não ficar sobrepondo o id anterior, a informação anterior.