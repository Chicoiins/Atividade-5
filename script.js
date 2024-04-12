const ul = document.createElement('div');
const liAluno = [];
const liProfessor = [];

document.getElementById('btn').onclick = () => {
    change(1); // Chamando a função com a opção para aluno
};

function change(opc) {
    ul.innerText = '';
    const btn = document.getElementById('btn');
    if (opc === 1) { // 1 == ALUNO == TRUE /// 0 == PROFESSOR == FALSE
        btn.textContent = 'CRIAR ALUNO';
        btn.onclick = () => { coletaPrompt(1) };
        criarElemento("Aluno");
    } else {
        btn.textContent = 'CRIAR PROFESSOR';
        btn.onclick = () => { coletaPrompt(0) };
        criarElemento("Professor");
    }
}

function coletaPrompt(opc) {
    const str = opc ? "Aluno" : "Professor";
    const ipt = prompt("Cadastrar " + str, "");
    if (!ipt) return;
    (opc ? liAluno : liProfessor).push(ipt); // Adicionando ao array correto
    criarElemento(str);
}

function criarElemento(str) {
    ul.innerText = '';
    (str === "Aluno" ? liAluno : liProfessor).forEach(element => {
        ul.innerHTML += `<div id='d'>${str}: ${element}</div>`;
    });
    document.getElementById('result').insertBefore(ul, document.getElementById('result').firstChild);
}
