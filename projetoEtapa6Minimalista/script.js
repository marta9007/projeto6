const perguntaEl = document.getElementById("pergunta");
const enviarBtn = document.getElementById("enviarBtn");
const limparBtn = document.getElementById("limparBtn");
const respostaEl = document.getElementById("resposta");
const copiarBtn = document.getElementById("copiarBtn");
const themeToggle = document.getElementById("themeToggle");

let API_KEY = localStorage.getItem("OPENROUTER_KEY") || "";
const MODEL = "deepseek/deepseek-r1:free";

perguntaEl.addEventListener("input", () => {
  const hasText = perguntaEl.value.trim().length > 0;
  enviarBtn.disabled = !hasText;
  limparBtn.disabled = !hasText && !respostaEl.textContent.trim();
  toggleBtnState();
});

function toggleBtnState() {
  enviarBtn.classList.toggle("btn-disabled", enviarBtn.disabled);
  limparBtn.classList.toggle("btn-disabled", limparBtn.disabled);
}

enviarBtn.addEventListener("click", enviarPergunta);
limparBtn.addEventListener("click", limparPergunta);
copiarBtn.addEventListener("click", copiarResposta);
themeToggle.addEventListener("click", toggleTheme);

function setLoading(loading) {
  enviarBtn.disabled = loading;
  toggleBtnState();
  enviarBtn.textContent = loading ? "Enviando..." : "Enviar";
}

async function enviarPergunta() {
  const pergunta = perguntaEl.value.trim();
  if (!pergunta) return;

  setLoading(true);
  respostaEl.textContent = "Pensando...";
  copiarBtn.style.display = "none";

  try {
    const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: pergunta }],
        temperature: 0.7,
      }),
    });

    const data = await resp.json();

    if (data.choices && data.choices.length > 0) {
      const texto = data.choices[0].message.content;
      respostaEl.textContent = texto;
      copiarBtn.style.display = "inline-block";
    } else {
      respostaEl.textContent = "Nenhuma resposta recebida.";
    }
  } catch (err) {
    respostaEl.textContent = `Erro: ${err.message}`;
  } finally {
    setLoading(false);
  }
}

function limparPergunta() {
  perguntaEl.value = "";
  respostaEl.textContent = "";
  copiarBtn.style.display = "none";
  enviarBtn.disabled = true;
  limparBtn.disabled = true;
  toggleBtnState();
}

function copiarResposta() {
  const texto = respostaEl.textContent.trim();
  if (!texto) return;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Resposta copiada!");
  });
}

/* Tema */
function toggleTheme() {
  const isDark = document.body.dataset.theme === "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("theme", isDark ? "light" : "dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
}

(function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = saved;
  themeToggle.textContent = saved === "dark" ? "☀️" : "🌙";
})();
