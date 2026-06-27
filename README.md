# NLE Level 3 (NV3)

NLE Level 3 (NV3) é a estrutura inicial de uma plataforma web de estudo de inglês para alunos do nível B1, criada com HTML5, CSS3 e JavaScript moderno puro.

## Escopo inicial

- **Dashboard do aluno (`index.html`)**: XP, nível, ranking, medalhas, personalização do nome e progresso por unidades.
- **Revision (`revision.html`)**: revisão do alfabeto, números, ditado de emails, ditado de telefones e Sentence Builder com Web Speech API.
- **Grammar**: lições e exercícios com correção automática.
- **Vocabulary**: treino de vocabulário, flashcards e revisão espaçada.
- **Listening**: player de áudio, atividades de múltipla escolha e feedback imediato.
- **Speaking**: prática oral com reconhecimento de voz do navegador.
- **Reading**: textos de interpretação nível B1 com perguntas guiadas.
- **Writing**: produção textual com rubricas e sugestões de melhoria.
- **Professor**: painel para acompanhar desempenho, cadastrar tarefas e revisar resultados.

## Funcionalidades planejadas

- Sistema de **XP**, níveis e ranking por turma.
- **Medalhas/badges** por sequência de estudos, acertos, revisão de erros e participação.
- Módulo de **IPA** para trabalhar pronúncia e símbolos fonéticos.
- **Reconhecimento de voz** via Web Speech API para prática de speaking.
- **Síntese de voz** via Web Speech API para atividades de listening, alfabeto e ditado.
- **Games educacionais** para reforçar vocabulário, gramática e listening.
- **Painel do professor** com métricas de desempenho, tarefas e progresso individual.

## Estrutura

```text
nle-level3/
├── index.html
├── revision.html
├── grammar.html
├── vocabulary.html
├── listening.html
├── speaking.html
├── reading.html
├── writing.html
├── professor.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── audio/
│   └── images/
└── README.md
```

## Paleta de cores

- Fundo principal: `#0c0a12`
- Cards e sidebar: `#161224`
- Destaques e links: `#9d4edd` e `#c77dff`
- Texto primário: `#ffffff`
- Sucesso: `#00e676`
- Progresso: `#ffd600`
- Erro: `#ff1744`

## Como executar

Abra o arquivo `index.html` no navegador ou utilize uma extensão de servidor local, como Live Server, para navegar pelas páginas.
