# 🤖 Assistente de IA — OpenRouter

Este projeto é um assistente de inteligência artificial feito em **JavaScript**, consumindo a **API do OpenRouter**. O usuário pode fazer perguntas e receber respostas diretamente na tela.

---

## 🚀 Funcionalidades

- Enviar perguntas para um modelo de IA via API do OpenRouter
- Exibir a resposta recebida na tela
- Botão para copiar resposta
- Botão para limpar campos
- Mensagens de carregamento e tratamento básico de erros

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js com Express
- [OpenRouter API](https://openrouter.ai/)

---

## 📦 Como usar
- Link do deploy: https://marta9007.github.io/projeto6/

  ou
  
- git clone https://github.com/marta9007
- Abra o arquivo index.html no navegador
- Digite um Pergunta e clique em Pesquisar **(Estamos usando uma API gratuita e esta possui poucos créditos diários para pesquisa)**

---

## 📌 Conclusão

Este projeto foi desenvolvido de forma simples, permitindo aprender sobre:

- Uso de `document.getElementById()` e `querySelector()` para capturar e atualizar elementos na página
- Consumo de APIs usando `fetch()` com `async/await`
- Criação e uso de uma API Key no OpenRouter
- Consulta à documentação oficial para entender parâmetros e modelos disponíveis
- Tratamento de erros e boas práticas de experiência do usuário

---

## 👨‍💻 Desenvolvido por

- [Andrelis](https://github.com/Andrelissg)
- [Fábio Costa Silva](https://github.com/fabiocosta123)
- [Fernando Maurício](https://github.com/Fernando-Roque)
- [Jeferson valentim](https://github.com/jefersonvalentimvenancio)
- [Marta_Gomes](https://github.com/marta9007)
- [Nediane Silva Dos Prazeres](https://github.com/NedianePrazeres)


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



