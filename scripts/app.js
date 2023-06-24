// document.getElementById("myImageId").src="newSource.png";
const img = document.getElementById("img-src")
const duasIrmas = document.getElementById('duas-irmas')
const gerenciador = document.getElementById('gerenciador-turmas')
const calculadora = document.getElementById('calculadora')
const github = document.getElementById('github')

function duasIrmasEnter(){
    img.src="../images/home.png"
    img.style.display = "block"
}

function duasIrmasLeave(){
    img.style.display = "none"
}

function gerenciadorEnter(){
    img.src="../images/gerenciador-turmas.png"
    img.style.display = "block"
}

function gerenciadorLeave(){
    img.style.display = "none"
}

function calculadoraEnter(){
    img.src="../images/calculadora-js.png"
    img.style.display = "block"
}

function calculadoraLeave(){
    img.style.display = "none"
}

function githubEnter(){
    img.src="../images/github-png.png"
    img.style.display = "block"
}

function githubLeave(){
    img.style.display = "none"
}

duasIrmas.addEventListener('mouseenter', duasIrmasEnter)
duasIrmas.addEventListener('mouseleave', duasIrmasLeave)
gerenciador.addEventListener('mouseenter', gerenciadorEnter)
gerenciador.addEventListener('mouseleave', gerenciadorLeave)
calculadora.addEventListener('mouseenter', calculadoraEnter)
calculadora.addEventListener('mouseleave', calculadoraLeave)
github.addEventListener('mouseenter', githubEnter)
github.addEventListener('mouseleave', githubLeave)