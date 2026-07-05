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
