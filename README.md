# 🤖 Assistente de IA Web —  Projeto 6  

Este projeto é um **assistente de IA Web** que permite conversar com modelos de linguagem da **Google Gemini API** de forma simples e interativa.  
Foi desenvolvido em etapas, começando com a integração básica e evoluindo para uma interface mais rica em funcionalidades e experiência do usuário. 

---

## 🧠 Tecnologias Utilizadas  

- **HTML + CSS + JavaScript** — Estrutura, estilo e interatividade  
- **Google Gemini API** — Inteligência artificial generativa  
- **Web Speech API** — Entrada e saída de voz no navegador  
- **Navigator Clipboard API** — Copiar respostas para a área de transferência  
- **LocalStorage** — Armazenar chave de API e histórico (opcional)

---
## 🔐 API Utilizada  

- **Google Gemini API**  
  - Modelos suportados: `gemini-1.5-pro` ou `gemini-1.5-flash`  
  - Chave gerada via [Google AI Studio](https://aistudio.google.com/app/apikey)  
  - SDK: `@google/generative-ai`  
---

## 📦 Dependências

Instale com:

```bash
npm install @google/generative-ai react-icons react-toastify
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=AIza...sua_chave_aqui
```

---

## 🚀 Funcionalidades

### 📄 Parte 1 — Funcionalidades iniciais  
- Enviar perguntas para o modelo Gemini  
- Receber respostas em tempo real  
- Interface básica com HTML/CSS  
- Integração com API da Google 

### ✨ Parte 2 — Novas funcionalidades (UX e usabilidade)  
- **Botão Limpar**: apaga pergunta e resposta atuais  
- **Botão Copiar**: copia resposta para a área de transferência  
- **Mostrar pergunta junto da resposta** para contexto  
- **Interface reorganizada** com botões intuitivos e ícones  
- **Layout mobile-first**: responsividade melhorada 
- **Feedback visual e animações** em botões e transições  
- **Contador de caracteres** no campo de entrada  
- **Modo dark/light** para conforto do usuário  


### 📨 Próximos Passos*
- Histórico de conversas - Salvar perguntas anteriores **(em construção)**
- Suporte a múltiplos provedores de IA **(em construção)**
- Exportar conversas em arquivo **(em construção)**

---

## 🖱️ Função de cada botão  

| Ícone/Texto      | Função                                |  
|------------------|----------------------------------------|  
| 📨 Enviar        | Envia a pergunta para a IA              |  
| 🧽 Limpar        | Limpa pergunta e resposta               |  
| 📋 Copiar        | Copia a resposta para a área de transferência |  
| 🎙️ Microfone    | Entrada de voz (Web Speech API)         |  
| 🔊 Ouvir         | Lê em voz alta a resposta da IA         |  
| 📁 Upload        | Enviar arquivo `.txt` ou `.pdf`         |  
| 📥 Exportar      | Baixar histórico da conversa            |  
| 🌙 / ☀️ Tema     | Alternar entre modo escuro e claro      |  


## 📚 📌 Conclusão: Este projeto foi desenvolvido para permitir aprender sobre:  

- Manipulação do **DOM** com `document.getElementById` para capturar e atualizar elementos  
- Consumo de APIs usando `fetch()` com `async/await`  
- Tratamento de erros para melhorar a experiência do usuário  
- Uso da **Clipboard API** para copiar texto  
- Uso da **Web Speech API** para entrada e saída de voz  
- Aplicação de **responsividade mobile-first** com CSS  
- Criação de botões intuitivos com ícones e feedback visual  
- Implementação de **animações** para melhorar a interação  
- Organização e clareza no código, mantendo acessível para iniciantes  

---

## 📌 Observações

- A chave da API deve ser gerada no [Google AI Studio](https://aistudio.google.com/app/apikey)
- O projeto salva o histórico no `localStorage`
- O campo de input é validado para evitar envios vazios
- O modo escuro não afeta a legibilidade do título ou botões

---

## 🧪 Teste local

```bash
npm install
npm run dev
```

---

## 📤 Deploy sugerido

- **Vercel** ou **Netlify**
- Lembre-se de configurar a variável `VITE_GEMINI_API_KEY` no painel de ambiente

---
---

## 👨‍💻 Projeto desenvolvido como exercício prático de aprendizado por:

- [Andrelis Scheppa](https://github.com/Andrelissg)
- [Daiane Bandeira](https://github.com/Daiane-source)
- [Fábio Costa Silva](https://github.com/fabiocosta123)
- [Fernando Maurício](https://github.com/Fernando-Roque)
- [Jeferson valentim](https://github.com/jefersonvalentimvenancio)
- [Marta_Gomes](https://github.com/marta9007)
- [Nediane Silva Dos Prazeres](https://github.com/NedianePrazeres)

Inspirado na experiência de chat com IA, adaptado para uso com a API Gemini. 





<br>

# Visão Geral do Projeto

Este guia abrange as Aulas 22 e 25 do projeto fullstack, onde desenvolveremos um Assistente
de IA Web completo usando HTML, CSS e JavaScript puro (sem frameworks).

## Objetivos Gerais

Ao final das duas tutorias, você será capaz de:

●​ Criar uma aplicação web interativa do zero <br>
●​ Integrar com APIs externas (OpenAI/Gemini) <br>
●​ Implementar validação de formulários <br>
●​ Gerenciar estados de loading e erro <br>
●​ Usar APIs do navegador (localStorage, clipboard) <br>
●​ Criar interfaces responsivas e acessíveis <br>
●​ Aplicar boas práticas de UX/UI

## Estrutura do Projeto

assistente-ia/

├── index.html <br>
├── style.css<br>
└── script.js

## Conceito da Aplicação:

1.​ Usuário digita uma pergunta <br>
2.​ Clica em "Perguntar"<br>
3.​ App faz requisição para API da OpenAI<br>
4.​ Exibe a resposta da IA<br>

# Funcionalidades do Projeto

## Requisitos Básicos

Serão 04 requisitos básicos para esse projeto.

### 01 - Estrutura HTML Básica

●​ Cabeçalho com título da aplicação <br>
●​ Input para inserir a chave de API da OpenAI <br>
●​Área principal com input para pergunta e botão de envio <br>
●​ Seção para exibir a resposta da IA

### 02 - Interface de Entrada

●​ Input de texto para a pergunta do usuário <br>
●​ Botão "Perguntar" para enviar a pergunta <br>
●​ Input para API Key (tipo password) <br>

### 03 - Exibição da Resposta

●​ Área dedicada para mostrar a resposta da IA <br>
●​ Texto deve ser legível e bem formatado <br>
●​ Área deve ficar oculta até haver uma resposta <br>

### 04 - Integração com API da IA

●​ Fazer requisição POST para endpoint da OpenAI <br>
●​ Enviar pergunta e API Key corretamente <br>
●​ Processar resposta e exibir para o usuário <br>
●​ Usar fetch() e async/await <br>

## Requisitos Extras (Opcionais)

### Estados e Validação

●​ Estados de loading/carregamento enquanto aguarda resposta <br>
●​ Botão desabilitado durante carregamento <br>
●​ Validação de formulários (API Key e pergunta não vazias) <br>

●​ Tratamento e exibição de erros de conexão <br>
●​ Mensagens de erro amigáveis <br>
Funcionalidades de Interação <br>
●​ Botão para limpar resposta da tela <br>
●​ Copiar resposta da IA para área de transferência <br>
●​ Salvar API Key no localStorage <br>
●​ Atalhos de teclado (Ctrl+Enter para enviar) <br>

### Melhorias na Interface

●​ Mostrar a pergunta junto com a resposta <br>
●​ Ícones nos botões <br>
●​ Animações suaves e feedback visual <br>
●​ Contador de caracteres <br>
●​ Scroll automático para resposta <br>
●​ Dropdown para seleção de diferentes modelos de IA <br>

### Configurações Avançadas

●​ Histórico de conversas anteriores <br>
●​ Temas (dark mode / light mode) <br>

# Configuração e Uso 🔧

## Pré-requisitos

●​ Navegador moderno (Chrome, Firefox, Safari, Edge) <br>
●​ Chave de API da OpenAI <br>
●​ Editor de código (VS Code recomendado) <br>
●​ Editor de código (VS Code recomendado) <br>
●​ Conhecimentos básicos em HTML, CSS e JavaScript

## Fluxo da Aplicação

1.​ Usuário obtém uma API Key da OpenAI <br>
2.​ Usuário abre a aplicação no navegador <br>
3.​ Usuário insere sua API Key no campo apropriado <br>
4.​ Usuário digita sua pergunta no textarea <br>
5.​ Usuário clica em "Perguntar" ou usa Ctrl+Enter <br>
6.​ Aplicação exibe a resposta da IA <br>
7.​ Usuário pode copiar a resposta ou limpar para nova pergunta <br>

# Como Obter uma API Key Gratuita

## OpenAI API Key (Modelos Pago)

Para usar a API da OpenAI, você precisará criar uma conta e obter uma chave de API:

1.​ Acesse: [link para plataforma Open IA](https://platform.openai.com/) <br>
2.​ Crie uma conta ou faça login <br>
3.​ Vá para API Keys: No painel, procure por "API Keys" no menu <br>
4.​ Gere nova chave: Clique em "Create new secret key" <br>
5.​ Copie e guarde a chave em local seguro (não será mostrada novamente) <br>

**Importante:** A OpenAI oferece créditos gratuitos limitados para novos usuários. Consulte os
preços e limites no site oficial.

## Google Gemini API Key (Alternativa Gratuita)

Uma excelente alternativa gratuita é usar o Google Gemini:
Passo a Passo para Gemini

### 1.​ Acesse o Google AI Studio

[link para AI Studio](https://aistudio.google.com/)
<br>

    ○​ Vá para: https://aistudio.google.com/
    ○​ Faça login com sua conta Google

### 2.​ Gere sua API Key

    ○​ Clique em "Get API Key" ou "Obter chave da API"
    ○​ Selecione "Create API Key"
    ○​ Copie e guarde sua chave em local seguro

### 3.​ Limites do Plano Gratuito

    ○​ O Gemini oferece uso gratuito generoso para desenvolvimento
    ○​ Consulte os limites atuais na documentação oficial
    ○​ Ideal para aprender e testar aplicações
    ○​ NÃO ADICIONE DADOS DE PAGAMENTO para conseguir obter os limites gratuitos.

# Modificando o Código para Gemini

O Google Gemini oferece uma API compatível com a OpenAI, permitindo usar praticamente o
mesmo código JavaScript. Você só precisa trocar algumas configurações:

Para usar Gemini (compatível com OpenAI):

●​ [Use a url ](https://generativelanguage.googleapis.com/v1beta/openai/chat/completions)

●​ Obtenha API Key do Google AI Studio (como mostrado acima)

# Conclusão

Parabéns! Ao final do desenvolvimento, você terá criado uma aplicação web completa e
funcional que:

●​ ✅ Integra com uma API de IA real <br>
●​ ✅ Possui interface profissional e responsiva <br>
●​ ✅ Implementa boas práticas de desenvolvimento <br>
●​ ✅ Oferece excelente experiência do usuário <br>
●​ ✅ Demonstra conceitos fundamentais do desenvolvimento web <br>

Este projeto serve como uma excelente base para entender como construir aplicações web
modernas usando tecnologias fundamentais da web!

# Assistente de IA Web (Parte 2)

Nesta segunda parte do projeto, vamos melhorar nossa aplicação de IA adicionando
funcionalidades importantes: botão para limpar resposta, botão para copiar
resposta, e outras melhorias na experiência do usuário.

## Recapitulação da Parte 1

Até então criamos:
• Interface básica com HTML/CSS
• Integração com API da OpenAI <br>

## Objetivos da Parte 2

Agora vamos adicionar:

1. Botão "Limpar" - Para limpar a resposta atual
2. Botão "Copiar" - Para copiar a resposta da IA
3. Melhorias na Interface - UX mais polida
4. Responsividade melhorada - Mobile-first

# Novas Funcionalidades

### 01 - Botão Limpar Resposta

• Botão para limpar a resposta atual da tela
• Deve esconder a seção de resposta
• Deve limpar o campo de pergunta também
• Confirmar ação antes de limpar (opcional)

### 02 - Botão Copiar Resposta

• Botão para copiar o texto da resposta da IA
• Usar navigator.clipboard API
• Feedback visual quando copiado com sucesso
• Tratamento de erro se clipboard não disponível

### 03 - Melhorias na Interface

• Mostrar a pergunta feita junto com a resposta
• Botões organizados de forma intuitiva
• Ícones nos botões para melhor UX
• Animações de entrada para elementos

### 04 - Responsividade Aprimorada

• Layout otimizado para mobile
• Botões com tamanhos adequados para touch
• Textos legíveis em telas pequenas

### 05 - Funcionalidades Extras

• Contador de caracteres no textarea
• Salvar API Key no localStorage (opcional)
Próximos Passos (Ideias para Extensão)
• Histórico de conversas - Salvar perguntas anteriores
• Temas - Dark mode / Light mode
• Múltiplos provedores - Anthropic, Google, etc.
• Markdown rendering - Para respostas formatadas
• Export - Salvar conversas em arquivo ou PDF




