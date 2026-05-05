const COLUNAS = 20;
const LINHAS = 20;
const PONTOS_POR_COMIDA = 10;

const VELOCIDADE = parseInt(localStorage.getItem
    ("snake_velocidade"
))  || 130;

let cobra = [];
let direcao = {x:1, y:0} //Começa indo para direita
let proximaDirecao = {x: 1, y:0} // Dá o passo pra direito
let comida = {x:0, y; 0} // Ponto inicial da comida
let recorde = parseInt(localStorage.getItem ("snake_recorde")) || 0;
let intervalo = null;
let emJogo = false;

//GRADE

const grade = document.getElementById("grade");
let celulas = []; // Aqui vamos armazenar 400 células

function criarGrade(){
    grade.innerHTML ="";
    celulas = [];

    for (let y = 0; y < LINHAS; y ++){
        const linha = [];

        for(let x = 0; x < COLUNAS; x++){
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
            linha.push(celula);
        }
        celulas.push(linha);
    }
}

function limparGrade(){
    for(let y =0; y< LINHAS; y++){
        for (let x =0; x< LINHAS; x ++) {
    celula[y][x].className = "celula";

        }
    }
}

function renderizar(){
    limparGrade();

//DESENHAR A comida
celulas[comida.y][comida.x].classList.add("comida");

//DESENHAR o corpo da cobra

for(let i = 1; i< cobra.length; i++){
    celular[cobra[i].y  ]
}

}