
// Lista de importância do agro
const importancia = [
    "Geração de empregos diretos e indiretos",
    "Produção de alimentos essenciais",
    "Contribuição significativa para o PIB estadual",
    "Base para exportações e comércio internacional",
    "Desenvolvimento de tecnologia agrícola"
];

// Exibindo a lista na página
const lista = document.getElementById("lista-importancia");
importancia.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
});

// Curiosidades
const curiosidades = [
    "O Paraná é o maior produtor de soja do Brasil.",
    "O estado também se destaca na produção de milho e trigo.",
    "O agronegócio responde por mais de 40% das exportações do Paraná."
];

const btnCuriosidade = document.getElementById("mostrar-curiosidade");
const pCuriosidade = document.getElementById("curiosidade");

btnCuriosidade.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    pCuriosidade.textContent = curiosidades[randomIndex];
});
