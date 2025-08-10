const API_KEY = "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";
const MODEL = "openai/gpt-3.5-turbo"; // você pode trocar por outro modelo aqui

document.getElementById("enviarBtn").addEventListener("click", enviarPergunta);
document.getElementById("limparBtn").addEventListener("click", limparPergunta);
document.getElementById("copiarBtn").addEventListener("click", copiarResposta);

async function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value.trim();
  const respostaDiv = document.getElementById("resposta");
  const copiarBtn = document.getElementById("copiarBtn");

  if (!pergunta) {
    respostaDiv.innerHTML = "Digite uma pergunta antes de enviar.";
    copiarBtn.style.display = "none";
    return;
  }

  respostaDiv.innerHTML = "Pensando...";
  copiarBtn.style.display = "none";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: pergunta }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    console.log("Resposta da API:", data);

    if (data.choices && data.choices.length > 0) {
      const respostaTexto = data.choices[0].message.content;
      respostaDiv.innerHTML = respostaTexto;
      copiarBtn.style.display = "inline-block";
    } else {
      respostaDiv.innerHTML = "A API não retornou nenhuma resposta.";
    }
  } catch (error) {
    console.error("Erro:", error);
    respostaDiv.innerHTML = `Erro ao obter resposta: ${error.message}`;
  }
}

function limparPergunta() {
  document.getElementById("pergunta").value = "";
  document.getElementById("resposta").innerHTML = "";
  document.getElementById("copiarBtn").style.display = "none";
}

function copiarResposta() {
  const resposta = document.getElementById("resposta").innerText;

  if (!resposta) {
    alert("Nenhuma resposta para ser copiada.");
    return;
  }

  navigator.clipboard.writeText(resposta)
    .then(() => alert("Resposta copiada"))
    .catch(() => alert("Erro ao copiar resposta"));
}