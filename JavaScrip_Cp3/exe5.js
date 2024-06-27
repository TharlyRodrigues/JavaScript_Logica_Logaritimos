const inNome = document.getElementById("inNome");
const inNota1 = document.getElementById("inNota1");
const inNota2 = document.getElementById("inNota2");
const outSituacao = document.getElementById("outSituacao");
const outMedia = document.getElementById("outMedia");
const btnResultado = document.getElementById("btnResultado");

// Remova as atribuições de valor fora da função calMedio()

function calMedio() {
  // Captura dos valores atuais dos campos de entrada
  const nome = inNome.value;
  const nota1 = Number(inNota1.value);
  const nota2 = Number(inNota2.value);

  // Verifica se os valores são numéricos
  if (isNaN(nota1) || isNaN(nota2)) {
    alert("Por favor, informe notas válidas.");
    return;
  }

  // Cálculo da média
  const media = (nota1 + nota2) / 2;
  outMedia.textContent = `Média das Notas: ${media.toFixed(1)}`;

  // Lógica para exibir a situação do aluno
  if (media >= 7) {
    outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a).`;
    outSituacao.style.color = "green";
  } else {
    outSituacao.textContent = `Ops ${nome}... Você foi Reprovado(a).`;
    outSituacao.style.color = "red";
  }
}

// Adiciona o evento de clique no botão
btnResultado.addEventListener("click", calMedio);
