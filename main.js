const formContato = document.getElementById('form-agenda');
let nomeContato = document.getElementById('nome-contato');
let telContato = document.getElementById('tel-contato');
const contato = [];
const telefone = [];

let linhas = '';

formContato.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    
});

function adcionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('tel-contato');

    if(contato.includes(inputNomeContato.value)) {
        alert(`O contato ${inputTelefone.value} ja foi inserido`);
    } else {

    contato.push(inputNomeContato.value);
    telefone.push(Number(inputTelefone.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</td>`;

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelefone.value = '';
}
function atualizaTabela(){
    const corpoTabela =  document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
