const API_KEY = "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";

document.getElementById('enviarBtn').addEventListener('click', enviarPergunta);

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
            model: "deepseek/deepseek-r1:free",
            messages: [{role: "user", content: pergunta}],
            temperature: 0.7
           })
        })

        const data = await response.json();
        const respostaTexto = data.choices[0].message.content;
        respostaDiv.innerHTML = respostaTexto;
        copiarBtn.style.display = "inline-block";
    } catch (error) {
        console.error("Erro:", error)
        respostaDiv.innerHTML = "Erro ao obter resposta";
    }    
   
}

 function limparPergunta() {
        document.getElementById("pergunta").value = "";
        document.getElementById("resposta").value = "";
        document.getElementById("copiarBtn").style.display = "none";
    }

    function copiarResposta() {
        const resposta = document.getElementById("resposta").innerText;

        if (!resposta) {
            alert("Nenhuma resposta pra ser copiada");
        }

        navigator.clipboard.writeText(resposta)
            .then(() => alert("Resposta copiada"))
            .catch(() => alert("Erro ao copiar resposta"))
    }

