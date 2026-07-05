const grammarTeachingModules = {
  verb_to_be: {
    title: 'Verb To Be',
    explanation: {
      intro: "O 'Verb To Be' significa SER ou ESTAR. É o verbo mais importante e versátil do inglês.",
      when_to_use: [
        'Identidade e Profissão (I am a teacher).',
        "Idade (Em inglês, nós 'somos' velhos, não 'temos' anos: I am 32 years old).",
        'Localização e Estados (They are at home / She is happy).'
      ],
      when_not_to_use: [
        "Não use com verbos de ação no presente simples. Dizer 'I am work' está ERRADO. O certo é 'I work'.",
        "Não use para posse de objetos (Para isso, use 'have')."
      ]
    },
    tables: {
      present: [
        { subject: 'I', affirmative: 'am', negative: "am not / 'm not" },
        { subject: 'He / She / It', affirmative: 'is', negative: "is not / isn't" },
        { subject: 'You / We / They', affirmative: 'are', negative: "are not / aren't" }
      ],
      past: [
        { subject: 'I / He / She / It', affirmative: 'was /wʌz/', negative: "was not / wasn't" },
        { subject: 'You / We / They', affirmative: 'were /wɜːr/', negative: "were not / weren't" }
      ],
      participle: [
        { subject: 'All Subjects', affirmative: 'been /bɪn/', negative: 'have/has not been' }
      ]
    },
    quiz: [
      { q: 'I ___ an English teacher.', options: ['am', 'is', 'are'], answer: 'am' },
      { q: 'She ___ very tired today.', options: ['are', 'am', 'is'], answer: 'is' },
      { q: 'They ___ in Maceió right now.', options: ['is', 'am', 'are'], answer: 'are' },
      { q: 'We ___ at the park yesterday.', options: ['were', 'was', 'are'], answer: 'were' },
      { q: 'He ___ not at school last week.', options: ['was', 'were', 'is'], answer: 'was' },
      { q: '___ you ready for the test?', options: ['Are', 'Is', 'Am'], answer: 'Are' },
      { q: 'The weather ___ beautiful today.', options: ['is', 'are', 'am'], answer: 'is' },
      { q: 'It ___ raining when I left home.', options: ['were', 'was', 'is'], answer: 'was' },
      { q: 'My sister and I ___ best friends.', options: ['am', 'are', 'is'], answer: 'are' },
      { q: 'I ___ born in 1994.', options: ['were', 'was', 'am'], answer: 'was' },
      { q: 'Where ___ they going?', options: ['is', 'are', 'am'], answer: 'are' },
      { q: 'She has ___ to London twice.', options: ['been', 'was', 'be'], answer: 'been' },
      { q: 'The keys ___ on the table.', options: ['is', 'are', 'am'], answer: 'are' },
      { q: 'I have never ___ so excited!', options: ['been', 'being', 'be'], answer: 'been' },
      { q: '___ he a doctor?', options: ['Are', 'Is', 'Am'], answer: 'Is' },
      { q: 'We ___ late for the meeting yesterday.', options: ['were', 'was', 'are'], answer: 'were' }
    ]
  },
  personal_pronouns: {
    title: 'Personal Pronouns',
    explanation: {
      intro: 'Pronomes substituem os substantivos para evitar repetições. A posição na frase (antes ou depois do verbo) muda completamente a forma do pronome!'
    },
    table: [
      { subject: 'I', object: 'me', possessive_adj: 'my', possessive_pronoun: 'mine', reflexive: 'myself' },
      { subject: 'You', object: 'you', possessive_adj: 'your', possessive_pronoun: 'yours', reflexive: 'yourself' },
      { subject: 'He', object: 'him', possessive_adj: 'his', possessive_pronoun: 'his', reflexive: 'himself' },
      { subject: 'She', object: 'her', possessive_adj: 'her', possessive_pronoun: 'hers', reflexive: 'herself' },
      { subject: 'It', object: 'it', possessive_adj: 'its', possessive_pronoun: 'its', reflexive: 'itself' },
      { subject: 'We', object: 'us', possessive_adj: 'our', possessive_pronoun: 'ours', reflexive: 'ourselves' },
      { subject: 'They', object: 'them', possessive_adj: 'their', possessive_pronoun: 'theirs', reflexive: 'themselves' }
    ],
    quiz: [
      { q: '___ is reading a book.', options: ['He', 'Him', 'His'], answer: 'He' },
      { q: '___ are playing football.', options: ['They', 'Them', 'Their'], answer: 'They' },
      { q: '___ am very happy.', options: ['I', 'Me', 'My'], answer: 'I' },
      { q: '___ is a sunny day.', options: ['It', 'Its', 'He'], answer: 'It' },
      { q: '___ need to study.', options: ['We', 'Us', 'Our'], answer: 'We' },
      { q: 'Can you help ___?', options: ['I', 'me', 'my'], answer: 'me' },
      { q: 'I saw ___ yesterday.', options: ['she', 'her', 'hers'], answer: 'her' },
      { q: 'Tell ___ the truth.', options: ['they', 'them', 'their'], answer: 'them' },
      { q: 'She is looking at ___.', options: ['we', 'us', 'our'], answer: 'us' },
      { q: 'I bought a gift for ___.', options: ['he', 'him', 'his'], answer: 'him' },
      { q: 'This is ___ book.', options: ['I', 'me', 'my'], answer: 'my' },
      { q: 'Where is ___ car?', options: ['they', 'them', 'their'], answer: 'their' },
      { q: 'She lost ___ phone.', options: ['she', 'her', 'hers'], answer: 'her' },
      { q: 'The dog wagged ___ tail.', options: ['it', 'its', "it's"], answer: 'its' },
      { q: '___ house is beautiful.', options: ['We', 'Us', 'Our'], answer: 'Our' },
      { q: 'This pen is ___.', options: ['my', 'mine', 'me'], answer: 'mine' },
      { q: 'The blue car is ___.', options: ['their', 'theirs', 'them'], answer: 'theirs' },
      { q: 'Is this jacket ___?', options: ['your', 'yours', 'you'], answer: 'yours' },
      { q: 'The victory is ___.', options: ['our', 'ours', 'us'], answer: 'ours' },
      { q: 'I think this bag is ___.', options: ['her', 'hers', 'she'], answer: 'hers' },
      { q: 'I did the homework by ___.', options: ['me', 'mine', 'myself'], answer: 'myself' },
      { q: 'He cut ___ while cooking.', options: ['him', 'his', 'himself'], answer: 'himself' },
      { q: 'She taught ___ how to play piano.', options: ['her', 'hers', 'herself'], answer: 'herself' },
      { q: 'We enjoyed ___ at the party.', options: ['us', 'our', 'ourselves'], answer: 'ourselves' },
      { q: 'They built the house ___.', options: ['them', 'their', 'themselves'], answer: 'themselves' },
      { q: 'John called ___ brother.', options: ['him', 'his', 'himself'], answer: 'his' },
      { q: 'Give the money to ___.', options: ['she', 'her', 'hers'], answer: 'her' },
      { q: 'Look at ___ in the mirror!', options: ['you', 'your', 'yourself'], answer: 'yourself' },
      { q: '___ car is parked outside.', options: ['My', 'Mine', 'Me'], answer: 'My' },
      { q: 'The cake is for ___.', options: ['they', 'them', 'their'], answer: 'them' }
    ]
  },
  articles: {
    title: 'Articles (A / An / The)',
    explanation: {
      intro: 'Artigos definem se estamos falando de algo específico ou genérico.',
      rules: [
        'A: Usado antes de sons de CONSOANTE. Ex: a car, a university /juː/.',
        'AN: Usado antes de sons de VOGAL. Ex: an apple, an hour /aʊər/.',
        'THE: Usado para coisas específicas, únicas ou já mencionadas. Ex: The sun, the boy.',
        'ZERO ARTICLE (Ø): Não usamos artigos para cidades, países (na maioria) e substantivos plurais em sentido geral.'
      ]
    },
    quiz: [
      { q: 'I saw ___ movie yesterday.', options: ['a', 'an', 'the'], answer: 'a' },
      { q: 'She wants to be ___ engineer.', options: ['a', 'an', 'the'], answer: 'an' },
      { q: '___ sun is shining brightly.', options: ['A', 'An', 'The'], answer: 'The' },
      { q: 'He is ___ honest man.', options: ['a', 'an', 'the'], answer: 'an' },
      { q: 'I need ___ hour to finish this.', options: ['a', 'an', 'the'], answer: 'an' },
      { q: 'They live in ___ United States.', options: ['a', 'an', 'the'], answer: 'the' },
      { q: 'She has ___ dog. ___ dog is cute.', options: ['a / The', 'an / A', 'the / The'], answer: 'a / The' },
      { q: 'I go to ___ university in Brazil.', options: ['a', 'an', 'the'], answer: 'a' },
      { q: 'He plays ___ guitar.', options: ['a', 'an', 'the'], answer: 'the' },
      { q: 'Can you pass me ___ salt on the table?', options: ['a', 'an', 'the'], answer: 'the' },
      { q: 'I ate ___ apple for breakfast.', options: ['a', 'an', 'the'], answer: 'an' },
      { q: 'She is ___ best student in class.', options: ['a', 'an', 'the'], answer: 'the' },
      { q: 'We traveled to ___ Paris.', options: ['a', 'the', 'Ø (nenhum)'], answer: 'Ø (nenhum)' },
      { q: 'Look at ___ moon!', options: ['a', 'an', 'the'], answer: 'the' },
      { q: 'He is wearing ___ uniform.', options: ['a', 'an', 'the'], answer: 'a' },
      { q: "Let's go to ___ beach.", options: ['a', 'an', 'the'], answer: 'the' }
    ]
  },
  plural_rules: {
    title: 'Plural Rules',
    explanation: {
      intro: 'Diferente do português, o plural em inglês tem várias regras dependendo de como a palavra termina.',
      rules: [
        'Regra Geral: Adicione -s. (car -> cars /s/ ou /z/)',
        'Terminados em S, SS, SH, CH, X, Z: Adicione -es. (box -> boxes /ɪz/)',
        'Consoante + Y: Troque o Y por -ies. (baby -> babies)',
        'Vogal + Y: Apenas adicione -s. (boy -> boys)',
        'Terminados em F ou FE: Troque por -ves. (leaf -> leaves)',
        'Irregulares: Mudam a palavra toda (man -> men, child -> children, foot -> feet).'
      ]
    },
    quiz: [
      { q: 'One cat, two ___.', options: ['cats', 'cates', 'caties'], answer: 'cats' },
      { q: 'One box, two ___.', options: ['boxs', 'boxes', 'boxies'], answer: 'boxes' },
      { q: 'One baby, two ___.', options: ['babys', 'babies', 'babyes'], answer: 'babies' },
      { q: 'One leaf, two ___.', options: ['leafs', 'leaves', 'leavs'], answer: 'leaves' },
      { q: 'One child, three ___.', options: ['childs', 'childrens', 'children'], answer: 'children' },
      { q: 'One man, two ___.', options: ['mans', 'men', 'mens'], answer: 'men' },
      { q: 'One woman, two ___.', options: ['womans', 'women', 'womens'], answer: 'women' },
      { q: 'One foot, two ___.', options: ['foots', 'feet', 'feets'], answer: 'feet' },
      { q: 'One tooth, many ___.', options: ['tooths', 'teeth', 'teeths'], answer: 'teeth' },
      { q: 'One mouse, two ___.', options: ['mouses', 'mice', 'mices'], answer: 'mice' },
      { q: 'One bus, two ___.', options: ['buss', 'buses', 'busses'], answer: 'buses' },
      { q: 'One boy, two ___.', options: ['boys', 'boies', 'boyes'], answer: 'boys' },
      { q: 'One sheep, ten ___.', options: ['sheeps', 'sheep', 'sheepes'], answer: 'sheep' },
      { q: 'One potato, two ___.', options: ['potatos', 'potatoes', 'potatoies'], answer: 'potatoes' },
      { q: 'One knife, two ___.', options: ['knifes', 'knives', 'knivs'], answer: 'knives' },
      { q: 'One person, two ___.', options: ['persons', 'people', 'peoples'], answer: 'people' }
    ]
  }
};

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
    alphabet: {
      title: 'The Alphabet',
      customContent: `
        <section id="alphabet-section" class="alphabet-module fase-1-module">
          <h2>The Alphabet</h2>
          <p class="module-intro">Clique na letra para ouvir o nome em inglês americano ou use o botão de pronúncia para revisar o IPA.</p>
          <div class="alphabet-grid" id="alphabet-grid" aria-label="English alphabet letter cards"></div>

          <div class="alphabet-notes">
            <h3>Notas de Pronúncia</h3>
            <p>As letras em inglês podem mudar de som dependendo da palavra, mas o som isolado de cada uma é a base para soletrar (spelling).</p>
          </div>

          <div class="alphabet-quiz">
            <h3>🎧 Alphabet Quiz</h3>
            <p>Ouça a letra e escolha a opção correta!</p>
            <button onclick="playRandomLetter()" class="btn-play" type="button">▶ Tocar Som Aleatório</button>
            <div id="quiz-options" class="quiz-options" aria-live="polite"></div>
            <p id="quiz-feedback" class="quiz-feedback" aria-live="polite"></p>
          </div>
        </section>
      `
    },
    pronunciation_basic: {
      title: 'Pronunciation (IPA Básico)',
      customContent: `
        <section id="ipa-section" class="ipa-module fase-1-module">
          <h2>Pronunciation (IPA Básico)</h2>
          <p class="module-intro">Clique nas palavras de exemplo para ouvir a pronúncia pela Web Speech API.</p>
          <div class="table-responsive">
            <table class="ipa-table">
              <thead>
                <tr>
                  <th>Símbolo IPA</th>
                  <th>Letras Comuns</th>
                  <th>Som Aproximado</th>
                  <th>Exemplo (Clique para ouvir)</th>
                </tr>
              </thead>
              <tbody id="ipa-table-body"></tbody>
            </table>
          </div>

          <div class="ipa-quiz">
            <h3>🎯 IPA Quiz</h3>
            <p>Qual palavra contém o som abaixo?</p>
            <div id="ipa-quiz-symbol" class="huge-ipa">/θ/</div>
            <div id="ipa-quiz-options" class="quiz-options" aria-live="polite"></div>
            <button onclick="generateIpaQuiz()" class="btn-play" type="button">↻ Novo símbolo</button>
            <p id="ipa-quiz-feedback" class="quiz-feedback" aria-live="polite"></p>
          </div>
        </section>
      `
    },
    simple_present: {
      title: 'Simple Present — O Alicerce do Inglês',
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
        ...Array.from({ length: 26 }, (_, index) => ({
          num: index + 11,
          title: `Prática Guiada ${index + 11}`,
          content: '<p>Seção reservada para expansão da aula com exemplos, microdrills, tradução reversa, listening, speaking e revisão espaçada sem sobrecarregar o DOM inicial.</p>'
        })),
        { num: 37, title: '👩‍🏫 Auntie\'s Tips (Dica de Ouro)', content: '<blockquote class="auntie-tip"><b>Auntie Anny diz:</b> Quando o auxiliar <i>DOES</i> entra na pergunta ou na negativa, ele rouba o "S" do verbo principal! Lembre-se: <i>He doesn\'t work</i> (e nunca "doesn\'t works").</blockquote>' },
        { num: 38, title: '🤖 Chatzinho (Assistente IA)', content: '<p>Dúvidas com o Simple Present? Pergunte para a nossa IA integrada ou peça mais exemplos com foco no seu ambiente de trabalho!</p>' }
      ]
    }
  }
};
