const simplePresentMasteryHtml = `
  <div class="mastery-dashboard">
    <h2>🏆 Simple Present Mastery</h2>
    <div class="progress-item">
      <label>Entendeu quando usar?</label>
      <div class="progress-bar-bg"><div class="progress-fill" style="width: 85%;">85%</div></div>
    </div>
    <div class="progress-item">
      <label>Conjuga corretamente? (-S / -ES / -IES)</label>
      <div class="progress-bar-bg"><div class="progress-fill warning" style="width: 60%;">60%</div></div>
    </div>
    <div class="progress-item">
      <label>Faz perguntas e negativas com DO / DOES?</label>
      <div class="progress-bar-bg"><div class="progress-fill" style="width: 72%;">72%</div></div>
    </div>
  </div>

  <div class="dialog-box">
    <h3>🗣️ Daily Routine Dialog</h3>
    <p><strong>Linda:</strong> <span class="clickable-word" onclick="speakWord(this)">Do you wake up early every day?</span></p>
    <p><strong>Mateus:</strong> <span class="clickable-word" onclick="speakWord(this)">Yes, I do. I wake up at 6 AM. What about you?</span></p>
    <p><strong>Linda:</strong> <span class="clickable-word" onclick="speakWord(this)">I don't like mornings. I usually sleep until 8 AM.</span></p>
  </div>

  <h2>🔥 Irregular Verb Trainer: Top Essentials</h2>
  <p><em>Auntie's Tip: Clique em qualquer palavra em inglês para ouvir a pronúncia nativa!</em></p>
  <table class="verb-table">
    <thead>
      <tr><th>#</th><th>Infinitive (Blue)</th><th>Simple Past (Red)</th><th>Past Participle (Green)</th><th>IPA Focus</th><th>Tradução</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">be</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">was / were</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">been</span></td><td>/biː/</td><td>ser / estar</td></tr>
      <tr><td>2</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">have</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">had</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">had</span></td><td>/hæv/</td><td>ter</td></tr>
      <tr><td>3</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">do</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">did</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">done</span></td><td>/duː/</td><td>fazer</td></tr>
      <tr><td>4</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">go</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">went</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">gone</span></td><td>/ɡoʊ/</td><td>ir</td></tr>
      <tr><td>5</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">see</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">saw</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">seen</span></td><td>/siː/</td><td>ver</td></tr>
      <tr><td>6</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">put</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">put</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">put</span></td><td>/pʊt/</td><td>colocar</td></tr>
      <tr><td>7</td><td><span class="clickable-word c-infinitive" onclick="speakWord(this)">drink</span></td><td><span class="clickable-word c-past" onclick="speakWord(this)">drank</span></td><td><span class="clickable-word c-participle" onclick="speakWord(this)">drunk</span></td><td>/drɪŋk/</td><td>beber</td></tr>
    </tbody>
  </table>
`;

const grammarData = {
  phases: [
    {
      title: 'FASE 1 — Módulos Básicos (A1)',
      topics: [
        { id: 'alphabet', name: 'Alphabet' },
        { id: 'pronunciation_basic', name: 'Pronunciation (IPA básico)' },
        { id: 'verb_to_be', name: 'Verb To Be' },
        { id: 'personal_pronouns', name: 'Personal Pronouns' },
        { id: 'articles', name: 'Articles (A/An/The)' },
        { id: 'plural', name: 'Plural Rules' },
        { id: 'possessive_adjectives', name: 'Possessive Adjectives' },
        { id: 'demonstratives', name: 'Demonstratives (This/That)' },
        { id: 'there_is_are', name: 'There is / There are' },
        { id: 'imperatives', name: 'Imperatives' },
        { id: 'simple_present', name: 'Simple Present ★' },
        { id: 'adverbs_freq', name: 'Adverbs of Frequency' },
        { id: 'prepositions', name: 'Prepositions (In/On/At)' },
        { id: 'question_words', name: 'Question Words (Wh-)' },
        { id: 'basic_vocab', name: 'Basic Vocabulary' },
        { id: 'mini_review_1', name: 'Mini Review A1' },
        { id: 'boss_battle_1', name: '🛡️ Boss Battle A1' }
      ]
    },
    {
      title: 'FASE 2 — Construindo Frases (A2)',
      topics: [
        { id: 'present_continuous', name: 'Present Continuous' },
        { id: 'simple_past', name: 'Simple Past' },
        { id: 'past_continuous', name: 'Past Continuous' },
        { id: 'countable_uncountable', name: 'Countable × Uncountable' },
        { id: 'quantifiers', name: 'Quantifiers' },
        { id: 'comparatives', name: 'Comparatives' },
        { id: 'superlatives', name: 'Superlatives' },
        { id: 'future_will', name: 'Future (Will)' },
        { id: 'going_to', name: 'Going To' },
        { id: 'modal_can', name: 'Modal Can' },
        { id: 'should', name: 'Should' },
        { id: 'object_pronouns', name: 'Object Pronouns' },
        { id: 'reflexive_pronouns', name: 'Reflexive Pronouns' },
        { id: 'linking_words_a2', name: 'Linking Words' },
        { id: 'review_a2', name: 'Review A2' },
        { id: 'boss_battle_2', name: '🛡️ Boss Battle A2' }
      ]
    },
    {
      title: 'FASE 3 — Inglês Intermediário (B1) — O Inglês Real',
      topics: [
        { id: 'present_perfect', name: 'Present Perfect' },
        { id: 'present_perfect_cont', name: 'Present Perfect Continuous' },
        { id: 'past_perfect', name: 'Past Perfect' },
        { id: 'future_continuous', name: 'Future Continuous' },
        { id: 'passive_intro', name: 'Passive Voice (Introdução)' },
        { id: 'first_conditional', name: 'First Conditional' },
        { id: 'zero_conditional', name: 'Zero Conditional' },
        { id: 'relative_clauses', name: 'Relative Clauses' },
        { id: 'reported_speech', name: 'Reported Speech' },
        { id: 'modals_b1', name: 'Modals (Must/Might/Could)' },
        { id: 'phrasal_verbs', name: 'Phrasal Verbs' },
        { id: 'collocations', name: 'Collocations' },
        { id: 'review_b1', name: 'Review B1' },
        { id: 'boss_battle_3', name: '🛡️ Boss Battle B1' }
      ]
    },
    {
      title: 'FASE 4 — Intermediário Avançado (B2)',
      topics: [
        { id: 'future_perfect', name: 'Future Perfect' },
        { id: 'future_perfect_cont', name: 'Future Perfect Continuous' },
        { id: 'second_conditional', name: 'Second Conditional' },
        { id: 'third_conditional', name: 'Third Conditional' },
        { id: 'mixed_conditionals', name: 'Mixed Conditionals' },
        { id: 'passive_advanced', name: 'Passive Voice Avançada' },
        { id: 'causative_have', name: 'Causative Have' },
        { id: 'wish', name: 'Wish Clauses' },
        { id: 'used_to', name: 'Used To / Accustomed To' },
        { id: 'would_rather', name: 'Would Rather / Prefer' },
        { id: 'inversion_intro', name: 'Inversion (Introdução)' },
        { id: 'review_b2', name: 'Review B2' },
        { id: 'boss_battle_4', name: '🛡️ Boss Battle B2' }
      ]
    },
    {
      title: 'FASE 5 — Avançado (C1)',
      topics: [
        { id: 'cleft_sentences', name: 'Cleft Sentences' },
        { id: 'advanced_passive', name: 'Advanced Passive' },
        { id: 'advanced_reported', name: 'Advanced Reported Speech' },
        { id: 'advanced_conditionals', name: 'Advanced Conditionals' },
        { id: 'hedging', name: 'Hedging (Linguagem Cautelosa)' },
        { id: 'nominalisation', name: 'Nominalisation' },
        { id: 'advanced_linking', name: 'Advanced Linking Words' },
        { id: 'formal_english', name: 'Formal & Business English' },
        { id: 'academic_english', name: 'Academic English' },
        { id: 'inversion_c1', name: 'Full Inversion Structure' },
        { id: 'advanced_relative', name: 'Advanced Relative Clauses' }
      ]
    }
  ],
  lessons: {
    simple_present: {
      title: 'Simple Present — O Alicerce do Inglês',
      activities: {
        writing: 'Crie 3 frases afirmativas, 3 negativas e 3 perguntas sobre sua rotina usando do/does e a regra do -S.',
        listening: 'Use o diálogo Daily Routine Dialog para shadowing: clique nas frases, repita e grave sua própria rotina.',
        quiz: 'Responda um quiz de 10 itens alternando affirmative, negative e interrogative sentences.'
      },
      sections: [
        { num: 1, title: 'Introdução e Filosofia', content: '<p>O Simple Present é a espinha dorsal do cotidiano em inglês. Não tente traduzi-lo literalmente: ele representa a estabilidade, a rotina e as verdades que não mudam no momento da fala.</p>' },
        { num: 2, title: 'Objetivos da Aula', content: '<ul><li>Falar sobre rotinas diárias e hábitos com naturalidade.</li><li>Dominar o uso dos auxiliares DO e DOES sem hesitação.</li><li>Aplicar a regra fonética correta para o -S na 3ª pessoa do singular.</li></ul>' },
        { num: 3, title: 'Linha do Tempo Visual', content: '<div class="timeline-callout"><b>PASSADO ← [ HÁBITO / VERDADE PERMANENTE ] → FUTURO</b><br><small>A ação se repete consistentemente através do tempo.</small></div>' },
        { num: 4, title: 'Quando Usamos?', content: '<p><b>1. Hábitos:</b> I drink black coffee every morning.<br><b>2. Verdades Universais:</b> Water boils at 100°C.<br><b>3. Horários Fixos:</b> The flight leaves at 8:30 PM.</p>' },
        { num: 5, title: 'Estrutura e Tabelas', content: '<p><b>Afirmativa:</b> Subject + Verb (+ S/ES para He/She/It)<br><b>Negativa:</b> Subject + don\'t / doesn\'t + Verb (Forma Base)<br><b>Interrogativa:</b> Do / Does + Subject + Verb (Forma Base)?</p>' },
        { num: 6, title: 'Fórmulas Matemáticas da Frase', content: '<code>[Subject] + [Auxiliary DO/DOES] + [NOT] + [Base Verb]</code>' },
        { num: 7, title: 'Conjugação Completa', content: '<p>I/You/We/They <b>work</b> | He/She/It <b>works</b></p>' },
        { num: 8, title: 'Regras de Ortografia (-S, -ES, -IES)', content: '<p>Verbos terminados em CH, SH, X, Z, S, O ganham <b>-ES</b> (Ex: watch → watches, go → goes). Consoante + Y vira <b>-IES</b> (study → studies).</p>' },
        { num: 9, title: 'Pronúncia Fonética do -S (IPA)', content: '<p>Auntie\'s Phonetic Guide: Existem 3 sons distintos para o -S final:<br><b>/s/</b> após sons surdos (works /wɜːrks/)<br><b>/z/</b> após sons sonoros (plays /pleɪz/)<br><b>/ɪz/</b> após sons sibilantes (watches /ˈwɑːtʃɪz/)</p>' },
        { num: 10, title: 'Top Verbos Mais Usados', content: '<p>Work, Live, Study, Want, Need, Like, Know, Think.</p>' },
        { num: 11, title: '🏆 Mastery, Daily Routine Dialog & Irregular Verb Trainer', content: simplePresentMasteryHtml },
        { num: 12, title: '👩‍🏫 Auntie\'s Tips (Dica de Ouro)', content: '<blockquote class="auntie-tip"><b>Auntie Anny diz:</b> Quando o auxiliar <i>DOES</i> entra na pergunta ou na negativa, ele rouba o "S" do verbo principal! Lembre-se: <i>He doesn\'t work</i> (e nunca "doesn\'t works").</blockquote>' },
        { num: 13, title: '🤖 Chatzinho (Assistente IA)', content: '<p>Dúvidas com o Simple Present? Pergunte para a nossa IA integrada ou peça mais exemplos com foco no seu ambiente de trabalho!</p>' }
      ]
    }
  }
};


function makeA1Lesson(title, explanation, example, activityFocus = 'o tópico') {
  return {
    title,
    activities: {
      writing: `Escreva 6 frases curtas usando ${activityFocus}: 2 afirmativas, 2 negativas e 2 perguntas.`,
      listening: `Clique nas frases-modelo, repita em voz alta e faça shadowing focando ritmo, som e clareza de ${activityFocus}.`,
      quiz: `Complete um quiz rápido de 8 perguntas sobre uso, forma e significado de ${activityFocus}.`
    },
    sections: [
      { num: 1, title: 'Explicação essencial', content: `<p>${explanation}</p>` },
      { num: 2, title: 'Exemplo prático', content: `<p><span class="clickable-word" onclick="speakWord(this)">${example}</span></p><p><small>Clique na frase em inglês para ouvir a pronúncia nativa.</small></p>` },
      { num: 3, title: 'Auntie\'s Tip', content: `<blockquote class="auntie-tip">Pense em ${activityFocus} como uma ferramenta de comunicação real. Primeiro reconheça o padrão, depois produza frases pequenas e naturais.</blockquote>` }
    ]
  };
}

function makeBossBattleA1() {
  const questions = Array.from({ length: 50 }, (_, index) => `<li>Questão ${index + 1}: escolha a alternativa correta para revisar Alphabet, To Be, Pronouns, Articles, Plural Rules, Simple Present e Wh- Questions.</li>`).join('');
  return {
    title: '🛡️ Boss Battle A1 — Quiz Final da Fase 1',
    activities: {
      writing: 'Revise seus erros e escreva 10 frases corrigidas com os tópicos da Fase 1.',
      listening: 'Leia cada pergunta em voz alta, clique nas palavras-chave e repita as respostas corretas.',
      quiz: 'Complete as 50 questões da Boss Battle A1 e refaça apenas os tópicos com menor pontuação.'
    },
    sections: [
      { num: 1, title: 'Como funciona', content: '<p>Este desafio revisa toda a Fase 1. Use-o como checkpoint antes de avançar para A2.</p>' },
      { num: 2, title: 'Quiz com 50 questões', content: `<ol class="boss-quiz-list">${questions}</ol>` },
      { num: 3, title: 'Meta de aprovação', content: '<p>Objetivo: 80% ou mais. Se ficar abaixo disso, volte ao Mini Review A1 e refaça as atividades.</p>' }
    ]
  };
}

Object.assign(grammarData.lessons, {
  alphabet: makeA1Lesson('Alphabet — Sounds & Spelling', 'O alfabeto em inglês ajuda você a soletrar nomes, e-mails, cidades e informações pessoais com segurança.', 'A as in apple, B as in book, C as in city.', 'alphabet spelling'),
  pronunciation_basic: makeA1Lesson('Pronunciation — IPA básico', 'O IPA básico mostra sons que não existem claramente em português e ajuda a melhorar listening e speaking desde o início.', 'The sound /θ/ appears in three and thank you.', 'basic IPA sounds'),
  verb_to_be: makeA1Lesson('Verb To Be', 'Use am, is e are para falar de identidade, profissão, estado, idade e localização.', 'I am a student. She is at home. They are happy.', 'the verb to be'),
  personal_pronouns: makeA1Lesson('Personal Pronouns', 'Pronomes pessoais substituem nomes e deixam a frase mais natural: I, you, he, she, it, we, they.', 'Maria is my friend. She is from Brazil.', 'personal pronouns'),
  articles: makeA1Lesson('Articles — A, An, The', 'Use a/an para apresentar algo pela primeira vez e the quando a pessoa já sabe exatamente do que você está falando.', 'I have a book. The book is very interesting.', 'articles a, an and the'),
  plural: makeA1Lesson('Plural Rules', 'A maioria dos plurais recebe -s, mas algumas palavras usam -es, -ies ou formas irregulares.', 'One city, two cities. One box, two boxes.', 'plural rules'),
  possessive_adjectives: makeA1Lesson('Possessive Adjectives', 'Use my, your, his, her, its, our e their para mostrar posse ou relação.', 'This is my notebook. Her phone is new.', 'possessive adjectives'),
  demonstratives: makeA1Lesson('Demonstratives — This / That', 'Use this/these para coisas próximas e that/those para coisas distantes.', 'This is my bag. That is your car.', 'this, that, these and those'),
  there_is_are: makeA1Lesson('There is / There are', 'Use there is para singular e there are para plural quando quiser dizer que algo existe em algum lugar.', 'There is a pen on the table. There are two books in my bag.', 'there is and there are'),
  imperatives: makeA1Lesson('Imperatives', 'Imperativos dão instruções, comandos, convites e conselhos de forma direta.', 'Open your book. Please listen and repeat.', 'imperatives'),
  adverbs_freq: makeA1Lesson('Adverbs of Frequency', 'Advérbios como always, usually, sometimes e never mostram com que frequência algo acontece.', 'I usually study at night. She never drinks coffee.', 'adverbs of frequency'),
  prepositions: makeA1Lesson('Prepositions — In, On, At', 'In, on e at organizam tempo e lugar. Use chunks para memorizar: in the morning, on Monday, at 7 o’clock.', 'I study at home on Mondays in the evening.', 'prepositions in, on and at'),
  question_words: makeA1Lesson('Question Words — Wh-', 'Wh- words ajudam a pedir informação: what, where, when, who, why, which e how.', 'Where do you live? What do you do?', 'question words'),
  basic_vocab: makeA1Lesson('Basic Vocabulary', 'Vocabulário básico inclui família, rotina, números, dias, objetos da sala e frases essenciais para sobreviver em inglês.', 'I need water, a notebook and a pen.', 'basic vocabulary'),
  mini_review_1: {
    title: 'Mini Review A1 — Revisão Geral da Fase 1',
    activities: {
      writing: 'Escreva um parágrafo de 8 frases se apresentando e usando pelo menos 6 tópicos da Fase 1.',
      listening: 'Faça shadowing de uma apresentação pessoal curta e marque as palavras que você reconhece.',
      quiz: 'Complete uma revisão geral com 20 perguntas misturando todos os tópicos A1.'
    },
    sections: [
      { num: 1, title: 'Checklist A1', content: '<ul><li>Consigo me apresentar.</li><li>Consigo fazer perguntas simples.</li><li>Consigo falar de rotina e objetos.</li><li>Reconheço artigos, pronomes, plurais e preposições básicas.</li></ul>' },
      { num: 2, title: 'Texto de revisão', content: '<p><span class="clickable-word" onclick="speakWord(this)">Hi, my name is Ana. I am a student. I study English every day and I usually practice at night.</span></p>' },
      { num: 3, title: 'Próximo passo', content: '<p>Se você completou a revisão com confiança, avance para a Boss Battle A1.</p>' }
    ]
  },
  boss_battle_1: makeBossBattleA1()
});
