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
  },
  possessive_adjectives: {
    title: 'Possessive Adjectives',
    explanation: {
      intro: "Os Possessive Adjectives (Adjetivos Possessivos) são palavras fundamentais na língua inglesa utilizadas para indicar posse ou pertencimento. Sua principal finalidade é mostrar a quem um objeto, uma pessoa ou um lugar pertence. Diferente da língua portuguesa, onde muitas vezes o possessivo pode concordar com o objeto (por exemplo, dizemos 'o carro dela' ou 'suas coisas'), no inglês a regra é muito clara: o adjetivo possessivo concorda exclusivamente com o sujeito que possui, ou seja, com o dono. Compreender essa estrutura é um passo gigantesco para a fluência, pois usamos possessivos o tempo todo em conversas cotidianas para falar sobre nossas famílias, nossos pertences e nossas rotinas. Eles funcionam de maneira semelhante a outros adjetivos no inglês, o que significa que têm regras de posicionamento fixas e nunca mudam de forma, independentemente da quantidade de coisas que estão sendo possuídas. Dominar os Possessive Adjectives tornará sua comunicação muito mais natural e evitará confusões comuns de quem está começando a aprender o idioma.",
      rules: [
        "Os Possessive Adjectives sempre aparecem imediatamente antes do substantivo que eles estão modificando, pois sua função primordial é especificar de quem é aquele objeto ou pessoa. Como eles atuam estruturalmente como adjetivos na língua inglesa, eles precisam acompanhar um substantivo para que a frase faça sentido, nunca aparecendo sozinhos. Por exemplo, em frases como 'My car is blue', 'Her book is on the table' e 'Our teacher is great', o possessivo informa diretamente quem é o proprietário do carro, do livro e de quem é o professor. Aplicar essa regra é simples: basta colocar o pronome possessivo apropriado logo atrás da coisa possuída.",
        "Uma característica maravilhosa e muito simplificadora da gramática inglesa é que os adjetivos, incluindo os Possessive Adjectives, são completamente invariáveis em relação ao plural ou singular. Isso significa que a palavra indicadora de posse não sofre absolutamente nenhuma alteração, independentemente de você estar falando de apenas um item ou de vários. Por exemplo, dizemos 'My pen' para nos referirmos a uma única caneta, e utilizamos exatamente a mesma forma, 'My pens', ao falarmos de várias canetas. Essa ausência de variação vale para todos os pronomes possessivos, facilitando muito a montagem das frases, já que você não precisa se preocupar em flexionar o possessivo, bastando pluralizar apenas o substantivo principal."
      ]
    },
    table: [
      { subject: 'I', possessive_adj: 'my /maɪ/', example: 'My name is Linda.' },
      { subject: 'You', possessive_adj: 'your /jɔːr/', example: 'What is your phone number?' },
      { subject: 'He', possessive_adj: 'his /hɪz/', example: 'His brother is a teacher.' },
      { subject: 'She', possessive_adj: 'her /hɜːr/', example: 'Her car is new.' },
      { subject: 'It', possessive_adj: 'its /ɪts/', example: 'The dog is wagging its tail.' },
      { subject: 'We', possessive_adj: 'our /ˈaʊər/', example: 'Our class is at Polo Benedito Bentes.' },
      { subject: 'They', possessive_adj: 'their /ðɛər/', example: 'Their house is in Maceió.' }
    ],
    quiz: [
      { q: 'I have a book. ___ book is interesting.', options: ['My', 'Me', 'Mine'], answer: 'My' },
      { q: 'Linda has a car. ___ car is red.', options: ['His', 'Her', 'She'], answer: 'Her' },
      { q: 'We live here. ___ house is very big.', options: ['Us', 'Our', 'We'], answer: 'Our' },
      { q: 'They are students. ___ teacher is great.', options: ['Their', 'There', 'Them'], answer: 'Their' },
      { q: 'You need to clean ___ room.', options: ['you', 'yours', 'your'], answer: 'your' },
      { q: 'The cat is eating ___ food.', options: ["it's", 'its', 'it'], answer: 'its' },
      { q: 'He is my friend. ___ name is John.', options: ['His', 'Her', 'He'], answer: 'His' },
      { q: 'She forgot ___ keys at home.', options: ['hers', 'her', 'she'], answer: 'her' },
      { q: 'I love ___ family.', options: ['me', 'mine', 'my'], answer: 'my' },
      { q: 'Are these ___ shoes, Paul?', options: ['your', 'you', 'yours'], answer: 'your' },
      { q: 'The students did ___ homework.', options: ['their', 'them', 'they'], answer: 'their' },
      { q: 'We love ___ English classes.', options: ['us', 'our', 'we'], answer: 'our' },
      { q: 'Linda and I are friends. ___ favorite color is blue.', options: ['Our', 'Their', 'Us'], answer: 'Our' },
      { q: 'My dog plays with ___ ball.', options: ['it', "it's", 'its'], answer: 'its' },
      { q: 'Mr. Smith is drinking ___ coffee.', options: ['his', 'her', 'him'], answer: 'his' },
      { q: 'Welcome to ___ home!', options: ['our', 'we', 'us'], answer: 'our' }
    ]
  },
  demonstratives: {
    title: 'Demonstratives (This/That/These/Those)',
    explanation: {
      intro: "Os Demonstratives (Pronomes Demonstrativos) são ferramentas essenciais e extremamente práticas na língua inglesa, utilizados especificamente para apontar, indicar ou localizar objetos, animais, lugares ou até mesmo pessoas no espaço e no tempo. Imagine que eles funcionam como o seu 'dedo apontador' virtual dentro da gramática. A principal finalidade deles é evitar repetições desnecessárias e dar clareza imediata sobre exatamente de qual item estamos falando em uma conversa. A utilização correta desses pronomes depende basicamente da combinação de dois fatores simples: a distância física ou temporal em que o objeto se encontra em relação a quem fala (se está perto ou longe) e a quantidade de elementos aos quais estamos nos referindo (se é apenas um, no singular, ou mais de um, no plural). Saber usá-los corretamente é de suma importância para a comunicação diária, pois o inglês exige precisão ao demonstrar onde as coisas estão. Eles formam a base para interações do dia a dia, como fazer compras, apresentar pessoas ou pedir informações, tornando a sua fala incrivelmente mais direta e compreensível."
    },
    table: [
      { distance: 'Perto (Aqui / Here)', singular: 'This /ðɪs/ (Este/Esta/Isto)', plural: 'These /ðiːz/ (Estes/Estas)' },
      { distance: 'Longe (Lá / There)', singular: 'That /ðæt/ (Aquele/Aquela/Isso)', plural: 'Those /ðoʊz/ (Aqueles/Aquelas)' }
    ],
    quiz: [
      { q: '___ book in my hand is very heavy.', options: ['This', 'That', 'Those'], answer: 'This' },
      { q: 'Look at ___ bird in the sky!', options: ['this', 'these', 'that'], answer: 'that' },
      { q: '___ shoes I am wearing are new.', options: ['This', 'These', 'Those'], answer: 'These' },
      { q: 'Are ___ apples over there on the table fresh?', options: ['this', 'these', 'those'], answer: 'those' },
      { q: "I don't like ___ movie we are watching right now.", options: ['this', 'that', 'these'], answer: 'this' },
      { q: 'Who is ___ man standing across the street?', options: ['this', 'that', 'those'], answer: 'that' },
      { q: '___ cookies I just baked are delicious.', options: ['These', 'Those', 'This'], answer: 'These' },
      { q: 'Can you pass me ___ pen on your desk?', options: ['this', 'that', 'those'], answer: 'that' },
      { q: '___ is my friend Linda standing right next to me.', options: ['This', 'That', 'These'], answer: 'This' },
      { q: 'I bought ___ flowers here for you.', options: ['this', 'these', 'those'], answer: 'these' },
      { q: 'Do you remember ___ days when we were kids?', options: ['this', 'these', 'those'], answer: 'those' },
      { q: "___ coffee I'm drinking is too hot.", options: ['This', 'That', 'These'], answer: 'This' },
      { q: 'Look at ___ stars tonight!', options: ['these', 'those', 'this'], answer: 'those' },
      { q: 'Is ___ your car parked outside?', options: ['this', 'that', 'these'], answer: 'that' },
      { q: '___ keys in my pocket are lost.', options: ['This', 'These', 'Those'], answer: 'These' },
      { q: '___ building far away is a hospital.', options: ['This', 'That', 'These'], answer: 'That' }
    ]
  },
  there_is_there_are: {
    title: 'There is / There are',
    explanation: {
      intro: "As estruturas 'There is' e 'There are' são absolutamente vitais no inglês e são utilizadas para expressar a existência de algo ou de alguém em um determinado lugar ou contexto. A finalidade principal dessa estrutura equivale ao uso dos verbos 'haver' ou 'existir' na língua portuguesa, e também substitui o nosso costume informal de usar o verbo 'ter' com sentido de existência (como quando dizemos 'tem um carro na rua'). Essa é uma estrutura de extrema importância, pois sem ela, a descrição de cenários, quartos, cidades ou situações se torna impossível. Ela é a base de todo o vocabulário descritivo. Diferente do português, onde muitas vezes usamos um único verbo para tudo, o inglês exige que prestemos atenção à quantidade do que existe para escolher a forma correta do verbo 'To Be' que acompanha o 'There', criando uma relação direta com o aprendizado dos substantivos singulares, plurais e incontáveis.",
      rules: [
        "Utilizamos a expressão 'There is' para indicar de forma afirmativa a existência de uma única pessoa, um único objeto, animal, ou para nos referirmos a substantivos que são incontáveis na língua inglesa, como água, informações ou dinheiro. Em traduções diretas para o português, essa estrutura geralmente corresponde a 'há', 'existe' ou, na nossa linguagem do dia a dia, 'tem'. O funcionamento é bastante lógico: como estamos lidando com um elemento singular ou incontável, utilizamos o verbo 'is'. Exemplos clássicos como 'There is a book on the table' (Há um livro na mesa) e 'There is some water in the bottle' (Tem um pouco de água na garrafa) ilustram perfeitamente essa estrutura, demonstrando que existe um item específico naquele momento e lugar.",
        "Por outro lado, a estrutura 'There are' entra em cena obrigatoriamente quando precisamos expressar a existência de dois ou mais itens, pessoas ou animais. Trata-se da forma plural, equivalente a 'existem', 'há' (no plural) ou 'têm'. A regra funciona assim porque a palavra 'There' se apoia no verbo 'To Be' flexionado no plural ('are') para concordar gramaticalmente com a pluralidade das coisas que estão sendo mencionadas em seguida. Ao aplicar essa regra, sempre observe se o substantivo que vem logo após está no plural. Frases como 'There are three cars in the garage' (Há três carros na garagem) ou 'There are many students here' (Existem muitos alunos aqui) demonstram como essa forma é essencial para descrevermos grupos ou múltiplas existências em qualquer ambiente."
      ]
    },
    table: [
      { type: 'Affirmative', singular: 'There is a car.', plural: 'There are two cars.' },
      { type: 'Negative', singular: "There isn't a car.", plural: "There aren't any cars." },
      { type: 'Interrogative', singular: 'Is there a car?', plural: 'Are there any cars?' }
    ],
    quiz: [
      { q: '___ a book on the table.', options: ['There is', 'There are', 'Is there'], answer: 'There is' },
      { q: '___ many beautiful beaches in Maceió.', options: ['There is', 'There are', 'Are there'], answer: 'There are' },
      { q: '___ a student in the classroom?', options: ['Is there', 'Are there', 'There is'], answer: 'Is there' },
      { q: '___ any milk in the fridge.', options: ["There aren't", "There isn't", 'Is there'], answer: "There isn't" },
      { q: '___ five apples in the basket.', options: ['There is', 'There are', 'Are there'], answer: 'There are' },
      { q: '___ a hospital near here?', options: ['Are there', 'Is there', 'There is'], answer: 'Is there' },
      { q: '___ any problems with the project.', options: ["There isn't", "There aren't", 'There is'], answer: "There aren't" },
      { q: '___ a spider on the wall!', options: ['There is', 'There are', 'Is there'], answer: 'There is' },
      { q: '___ any questions?', options: ['Is there', 'Are there', 'There are'], answer: 'Are there' },
      { q: 'In my city, ___ a big mall.', options: ['there is', 'there are', 'is there'], answer: 'there is' },
      { q: '___ twenty students in the English class.', options: ['There is', 'There are', 'Are there'], answer: 'There are' },
      { q: '___ water in the glass?', options: ['Is there', 'Are there', 'There is'], answer: 'Is there' },
      { q: '___ no money in my wallet.', options: ['There are', 'There is', 'Is there'], answer: 'There is' },
      { q: '___ any parks near Polo Benedito Bentes?', options: ['Is there', 'Are there', 'There is'], answer: 'Are there' },
      { q: '___ two birds on the tree.', options: ['There is', 'There are', 'Are there'], answer: 'There are' },
      { q: '___ an error in this code.', options: ['There is', 'There are', 'Is there'], answer: 'There is' }
    ]
  },
  imperatives: {
    title: 'Imperatives',
    explanation: {
      intro: "O Imperative (Modo Imperativo) é a estrutura mais direta, enxuta e funcional da língua inglesa. Sua finalidade central é permitir que o falante dê ordens, forneça instruções precisas, faça pedidos diretos, ofereça conselhos rápidos ou emita avisos importantes. É o modo verbal da ação imediata. A sua utilização ocorre o tempo todo no nosso cotidiano: quando você lê uma receita culinária, quando o GPS dá direções, ou quando um professor pede para a turma abrir o livro, o imperativo está sendo usado. A grande importância dessa estrutura reside na sua extrema simplicidade gramatical, o que a torna perfeita para iniciantes ganharem confiança na fala logo de cara. Uma característica fascinante do imperativo é a ausência de um sujeito explícito, como I, you ou he. O sujeito está oculto e subentendido como sendo a pessoa com quem você está falando diretamente. Relaciona-se intimamente com o aprendizado do vocabulário de verbos de ação e permite uma comunicação incisiva e cristalina.",
      rules: [
        "Para construir o imperativo na sua forma afirmativa, a regra é incrivelmente simples: você deve utilizar apenas o verbo na sua forma base (o infinitivo sem a partícula 'to'), e ignorar completamente a menção a qualquer sujeito, pois a pessoa com quem você fala já está implícita. Funciona assim para garantir que a mensagem, seja ela uma ordem ou uma instrução, seja transmitida da maneira mais rápida e clara possível. Para aplicar essa regra no dia a dia, basta iniciar a frase diretamente com a ação desejada. Se você observar o exemplo 'Listen to me!' (Me escute!), notará que a frase começa forte, com o verbo de ação, transmitindo urgência ou foco. Outro exemplo muito comum é 'Open your book' (Abra o seu livro), que demonstra uma instrução clássica, sempre mantendo a estrutura verbal crua e sem pronomes.",
        "Quando precisamos dizer a alguém para não fazer alguma coisa, emitir uma proibição ou um aviso de perigo, utilizamos a forma negativa do imperativo. A regra dita que devemos obrigatoriamente colocar a palavra 'Don't', que é a contração de Do not, imediatamente antes do verbo base, não importando quem é o destinatário daquela ordem. Isso ocorre porque o verbo auxiliar 'Do' é o responsável por carregar a negação em grande parte da gramática do inglês. Na prática, você nunca deve usar apenas o 'Not' isolado antes do verbo para dar uma ordem, algo que confunde muitos alunos. Exemplos como 'Don't talk!' (Não converse!) e 'Don't touch that!' (Não toque nisso!) são perfeitos para visualizar a estrutura, evidenciando como o 'Don't' serve como um bloqueio forte e claro antes da ação que deve ser evitada.",
        "Existe uma categoria especial dentro do imperativo voltada especificamente para fazer convites, dar sugestões coletivas ou encorajar uma ação onde o próprio falante também está incluído. Para isso, utilizamos a estrutura 'Let's', que é a contração de Let us (Deixe-nos). Ao contrário de uma ordem direta e autoritária, essa regra funciona como uma chamada amigável e inclusiva para uma atividade conjunta. A aplicação exige apenas que você posicione o 'Let's' antes do verbo principal da ação que deseja propor. Um exemplo universal e muito famoso é 'Let's go!' (Vamos!), que incentiva o grupo a se mover. Outro bom exemplo seria 'Let's study English' (Vamos estudar inglês), ilustrando perfeitamente como você propõe uma atividade benéfica de forma natural, engajando tanto quem fala quanto quem escuta."
      ]
    },
    table: [
      { usage: 'Order / Instruction', affirmative: 'Open your book.', negative: "Don't open your book." },
      { usage: 'Advice / Warning', affirmative: 'Be careful!', negative: "Don't touch that!" },
      { usage: "Suggestion (Let's)", affirmative: "Let's study English.", negative: "Let's not argue." }
    ],
    quiz: [
      { q: "___ the door, please. It's cold.", options: ['Close', 'Closing', 'You close'], answer: 'Close' },
      { q: '___ run in the corridors!', options: ['No', 'Not', "Don't"], answer: "Don't" },
      { q: '___ quiet, the baby is sleeping.', options: ['Are', 'Be', 'Is'], answer: 'Be' },
      { q: '___ forget to do your homework.', options: ["Don't", "Doesn't", 'Not'], answer: "Don't" },
      { q: '___ me the salt, please.', options: ['Pass', 'Passing', 'To pass'], answer: 'Pass' },
      { q: '___ to the teacher carefully.', options: ['Listen', 'Listens', 'Listening'], answer: 'Listen' },
      { q: '___ late for the meeting.', options: ["Don't be", 'Not be', 'Be not'], answer: "Don't be" },
      { q: '___ a nice day!', options: ['Have', 'Has', 'Having'], answer: 'Have' },
      { q: "___ touch that pan, it's hot!", options: ["Don't", 'No', 'Not'], answer: "Don't" },
      { q: '___ down and open your books.', options: ['Sit', 'Sitting', 'Sits'], answer: 'Sit' },
      { q: "___ at me when I'm talking to you.", options: ['Look', 'Looking', 'Looks'], answer: 'Look' },
      { q: '___ worry, be happy!', options: ['Not', 'No', "Don't"], answer: "Don't" },
      { q: '___ your name at the top of the paper.', options: ['Write', 'Writing', 'Writes'], answer: 'Write' },
      { q: '___ eat all the cake, save some for me.', options: ["Don't", "Doesn't", 'No'], answer: "Don't" },
      { q: '___ let the dog out.', options: ["Don't", 'No', 'Not'], answer: "Don't" },
      { q: '___ carefully when crossing the street.', options: ['Look', 'Looking', 'To look'], answer: 'Look' }
    ]
  },
  simple_present: {
    title: 'Simple Present ★',
    explanation: {
      intro: "O Simple Present (Presente Simples) é sem dúvida o tempo verbal mais basilar e utilizado na língua inglesa. Trata-se da fundação sobre a qual toda a sua comunicação diária será construída. Sua finalidade principal é permitir que descrevamos fatos estabelecidos, verdades universais incontestáveis, estados permanentes, e, de modo muito especial, os nossos hábitos e a nossa rotina do dia a dia. Nós o utilizamos toda vez que precisamos contar ao mundo como a nossa vida funciona normalmente, do momento em que acordamos até irmos dormir. A importância de dominar o Simple Present é imensurável, pois sem ele, é impossível manter uma conversa básica ou conhecer alguém. Ele se relaciona diretamente com os Adverbs of Frequency (Advérbios de Frequência), que muitas vezes o acompanham para detalhar o quão rotineira é uma ação. Aprender o presente simples é como receber a chave principal para começar a falar inglês com independência e confiança, descrevendo a sua realidade e entendendo a realidade dos outros.",
      golden_rule: "A regra de ouro do Simple Present é, sem sombra de dúvidas, a flexão verbal que ocorre na terceira pessoa do singular, ou seja, quando o sujeito da frase for 'He' (ele), 'She' (ela) ou 'It' (ele/ela para coisas e animais). Nas frases afirmativas, o verbo principal deve sofrer uma pequena modificação no seu final. Na grande maioria das vezes, basta acrescentar a letra 'S' ao verbo, como ocorre em 'works' ou 'plays'. No entanto, para verbos terminados em O, S, SH, CH, X e Z, acrescentamos 'ES' por questões de fonética e suavidade na pronúncia, resultando em palavras como 'goes' ou 'watches'. Já para verbos que terminam em uma consoante seguida da letra Y, nós cortamos o Y e adicionamos 'IES', como no caso de 'studies'. É absolutamente vital entender que essas modificações acontecem exclusivamente nas frases afirmativas. Isso ocorre porque a língua inglesa é estruturalmente muito econômica. Assim, quando transformamos a frase para a forma negativa ou interrogativa, nós somos obrigados a introduzir os verbos auxiliares 'Doesn't' (para negativas) e 'Does' (para perguntas). Quando o auxiliar 'Does' entra em cena, ele imediatamente 'rouba' a marcação de terceira pessoa para si. O resultado direto disso é que o verbo principal precisa voltar à sua forma base, ou seja, ao seu estado normal sem o S, ES ou IES. Um erro extremamente comum cometido por falantes nativos de português, o famoso erro clássico dos brasileiros, é continuar colocando o 'S' no verbo mesmo quando já estão usando o auxiliar, gerando construções erradas como 'He doesn't likes'. O correto, seguindo firmemente esta regra de ouro, é sempre limpar o verbo na presença do auxiliar, dizendo ou escrevendo perfeitamente 'He doesn't like'."
    },
    tables: {
      affirmative: [
        { subject: 'I / You / We / They', verb: 'work / play / study' },
        { subject: 'He / She / It', verb: 'works / plays / studies (Ganha S)' }
      ],
      negative: [
        { subject: 'I / You / We / They', auxiliary: "don't (do not)", verb: 'work' },
        { subject: 'He / She / It', auxiliary: "doesn't (does not)", verb: 'work (Sem S)' }
      ],
      interrogative: [
        { auxiliary: 'Do', subject: 'I / You / We / They', verb: 'work?' },
        { auxiliary: 'Does', subject: 'he / she / it', verb: 'work? (Sem S)' }
      ]
    },
    quiz: [
      { q: 'I ___ to school every day.', options: ['go', 'goes', 'going'], answer: 'go' },
      { q: 'Linda ___ English at Polo Benedito Bentes.', options: ['teach', 'teaches', 'teaching'], answer: 'teaches' },
      { q: 'They ___ play tennis on Sundays.', options: ["don't", "doesn't", "aren't"], answer: "don't" },
      { q: '___ you like pizza?', options: ['Do', 'Does', 'Are'], answer: 'Do' },
      { q: 'He ___ not live in Maceió.', options: ['do', 'does', 'is'], answer: 'does' },
      { q: 'My sister ___ very fast.', options: ['run', 'runs', 'running'], answer: 'runs' },
      { q: 'We ___ watch TV in the morning.', options: ["don't", "doesn't", 'not'], answer: "don't" },
      { q: '___ she work at the hospital?', options: ['Do', 'Does', 'Is'], answer: 'Does' },
      { q: 'The sun ___ in the east.', options: ['rise', 'rises', 'rising'], answer: 'rises' },
      { q: 'It ___ a lot in the winter.', options: ['rain', 'rains', 'raining'], answer: 'rains' },
      { q: 'John and Mary ___ Spanish.', options: ['speak', 'speaks', 'speaking'], answer: 'speak' },
      { q: 'My cat ___ fish.', options: ['love', 'loves', 'loving'], answer: 'loves' },
      { q: '___ your brother drive a car?', options: ['Do', 'Does', 'Are'], answer: 'Does' },
      { q: 'She ___ her homework after dinner.', options: ['do', 'does', 'doing'], answer: 'does' },
      { q: "I ___ understand this question.", options: ["don't", "doesn't", 'am not'], answer: "don't" },
      { q: 'He always ___ his teeth before bed.', options: ['brush', 'brushes', 'brushing'], answer: 'brushes' }
    ]
  },
  adverbs_of_frequency: {
    title: 'Adverbs of Frequency',
    explanation: {
      intro: "Os Adverbs of Frequency (Advérbios de Frequência) são peças cruciais do vocabulário que funcionam como os medidores de tempo da nossa rotina. A sua finalidade central é justamente responder à pergunta subentendida: 'com que frequência você faz determinada atividade?'. Nós os utilizamos o tempo todo em conjunto com o Simple Present para dar precisão às nossas frases. Se o Simple Present diz o que você faz, o advérbio de frequência diz o quanto você faz aquilo. A importância desse conteúdo na língua inglesa é imensa, pois ele transforma descrições frias em narrativas ricas sobre o estilo de vida, preferências e hábitos de uma pessoa. Uma frase simples como 'I drink coffee' ganha muita personalidade ao se tornar 'I always drink coffee'. Compreender essa estrutura e as suas posições específicas ajuda o estudante a soar muito mais fluente, natural e capaz de organizar cronologicamente a descrição de qualquer atividade diária.",
      position_rules: [
        "A primeira regra de posicionamento dita que o advérbio de frequência deve sempre ser colocado imediatamente antes do verbo principal da frase, quando estamos lidando com verbos de ação comuns, como comer, trabalhar, jogar ou estudar. Essa estrutura de posição existe no inglês para garantir que o indicativo de frequência modifique diretamente a ação que está prestes a acontecer na frase, criando um fluxo lógico e previsível para quem ouve. Na prática, você identifica o sujeito, coloca o advérbio escolhido e, em seguida, a ação. Por exemplo, na frase 'I always study in the morning' (Eu sempre estudo de manhã), o advérbio 'always' vem antes do verbo 'study', deixando muito claro o quão constante é o ato de estudar. Outro ótimo exemplo é 'They rarely eat fast food' (Eles raramente comem fast food). Uma observação de extrema importância é que, no idioma português, nós temos mais flexibilidade para mover essas palavras na frase, mas em inglês, manter essa ordem rígida antes do verbo principal é exatamente o que garantirá o som natural e gramaticalmente correto da sua comunicação.",
        "A segunda e importantíssima regra de posicionamento entra em vigor única e exclusivamente quando o verbo principal da frase for o famoso verbo 'To Be' (am, is, are). Nesses casos específicos, o advérbio de frequência deve obrigatoriamente ser posicionado depois do verbo 'To Be'. Essa inversão de ordem ocorre porque o verbo 'To Be' é considerado um verbo forte, independente e estruturalmente diferente dos verbos de ação comuns, atraindo os advérbios para depois de si a fim de manter o ritmo e a harmonia da frase em inglês. Ao aplicar essa regra, você dirá primeiro 'I am', 'She is' ou 'They are', e só então colocará a palavra que indica a frequência. Observe com atenção o exemplo 'I am always happy' (Eu estou sempre feliz). Note que a palavra 'always' foi posicionada logo após o 'am'. Um erro crasso seria tentar traduzir literalmente a estrutura do português e dizer 'I always am happy', o que soa muito estranho para os falantes nativos. Outro exemplo perfeitamente correto seria 'She is usually late' (Ela geralmente está atrasada). Portanto, a observação de ouro para não errar é gravar esta lógica: para verbo comum, o advérbio vem antes; para verbo 'To Be', o advérbio vem depois."
      ]
    },
    table: [
      { percentage: '100%', adverb: 'Always (Sempre)', example: 'I always wake up at 7 AM.' },
      { percentage: '90%', adverb: 'Usually (Geralmente)', example: 'I usually drink coffee.' },
      { percentage: '70%', adverb: 'Often (Frequentemente)', example: 'I often read books.' },
      { percentage: '50%', adverb: 'Sometimes (Às vezes)', example: 'I sometimes play games.' },
      { percentage: '10%', adverb: 'Rarely / Seldom (Raramente)', example: 'I rarely eat fast food.' },
      { percentage: '0%', adverb: 'Never (Nunca)', example: 'I never smoke.' }
    ],
    quiz: [
      { q: 'I ___ go to the gym on Mondays. (100%)', options: ['always', 'usually', 'never'], answer: 'always' },
      { q: 'She is ___ late for class. (0%)', options: ['always', 'often', 'never'], answer: 'never' },
      { q: 'We ___ watch a movie on Fridays. (50%)', options: ['sometimes', 'rarely', 'always'], answer: 'sometimes' },
      { q: 'They ___ travel abroad in summer. (70%)', options: ['often', 'rarely', 'never'], answer: 'often' },
      { q: 'He ___ eats vegetables, he hates them. (10%)', options: ['usually', 'rarely', 'always'], answer: 'rarely' },
      { q: 'Choose the correct sentence:', options: ['I always am happy.', 'I am always happy.', 'Always I am happy.'], answer: 'I am always happy.' },
      { q: 'Choose the correct sentence:', options: ['Linda usually plays tennis.', 'Linda plays usually tennis.', 'Usually Linda play tennis.'], answer: 'Linda usually plays tennis.' },
      { q: 'I ___ drink water with my lunch. (90%)', options: ['usually', 'never', 'sometimes'], answer: 'usually' },
      { q: 'My dog is ___ hungry! (100%)', options: ['always', 'often', 'rarely'], answer: 'always' },
      { q: 'We ___ go to the beach in December. (100%)', options: ['always', 'never', 'rarely'], answer: 'always' },
      { q: 'It is ___ cold in this room. (50%)', options: ['always', 'sometimes', 'never'], answer: 'sometimes' },
      { q: 'She ___ reads a book before sleeping. (90%)', options: ['usually', 'rarely', 'never'], answer: 'usually' },
      { q: 'They ___ complain about the food. (70%)', options: ['often', 'sometimes', 'never'], answer: 'often' },
      { q: 'I ___ forget my passwords. (10%)', options: ['rarely', 'usually', 'always'], answer: 'rarely' },
      { q: 'He is ___ tired after work. (90%)', options: ['usually', 'never', 'rarely'], answer: 'usually' },
      { q: 'You should ___ wear a seatbelt. (100%)', options: ['always', 'sometimes', 'never'], answer: 'always' }
  }
};


const phaseOneModulesData = {
  articles: {
    id: 'articles',
    title: 'Articles (A / An / The)',
    theory: {
      summary: 'Os artigos em inglês são divididos em Indefinidos (A / An) e Definidos (The).',
      rules: [
        { title: "Artigo 'A'", text: 'Usado antes de sons consonantais no singular.', example: "a book, a European city (som de 'y')." },
        { title: "Artigo 'An'", text: 'Usado antes de sons vocálicos no singular.', example: 'an apple, an hour (H mudo).' },
        { title: "Artigo 'The'", text: 'Usado para coisas específicas no singular ou plural.', example: 'The sun, the students in my class.' }
      ]
    },
    game1Written: [
      { id: 1, sentence: 'She bought ___ new car yesterday.', answer: 'a' },
      { id: 2, sentence: 'I ate ___ apple for breakfast.', answer: 'an' },
      { id: 3, sentence: '___ sun is shining bright today.', answer: 'the' },
      { id: 4, sentence: 'He is ___ university student.', answer: 'a' },
      { id: 5, sentence: 'It took me ___ hour to arrive.', answer: 'an' },
      { id: 6, sentence: 'Pass me ___ salt, please.', answer: 'the' },
      { id: 7, sentence: 'They live in ___ old house.', answer: 'an' },
      { id: 8, sentence: 'Can you play ___ guitar?', answer: 'the' },
      { id: 9, sentence: 'She has ___ European friend.', answer: 'a' },
      { id: 10, sentence: 'Look at ___ moon tonight!', answer: 'the' }
    ],
    game2Audio: [
      { id: 1, audioText: 'I saw an elephant at the zoo.', sentence: 'Escute e digite o artigo correto da frase:', answer: 'an' },
      { id: 2, audioText: 'She has a dog and a cat.', sentence: 'Escute e digite o primeiro artigo ouvido:', answer: 'a' },
      { id: 3, audioText: 'The ocean is very deep.', sentence: 'Escute e digite o artigo usado antes de ocean:', answer: 'the' },
      { id: 4, audioText: 'He is an honest man.', sentence: 'Escute e digite o artigo usado antes de honest:', answer: 'an' },
      { id: 5, audioText: 'We stayed at a hotel near the beach.', sentence: 'Escute e digite o artigo que vem antes de hotel:', answer: 'a' },
      { id: 6, audioText: 'The Earth goes around the Sun.', sentence: 'Escute e digite o artigo inicial da frase:', answer: 'the' },
      { id: 7, audioText: 'Do you have an umbrella?', sentence: 'Escute e digite o artigo antes de umbrella:', answer: 'an' },
      { id: 8, audioText: 'Give me a minute.', sentence: 'Escute e digite o artigo antes de minute:', answer: 'a' },
      { id: 9, audioText: 'She played the piano beautifully.', sentence: 'Escute e digite o artigo usado para o instrumento:', answer: 'the' },
      { id: 10, audioText: 'He needs an answer now.', sentence: 'Escute e digite o artigo usado antes de answer:', answer: 'an' }
    ],
    game3Speaking: [
      { id: 1, sentence: 'An apple a day keeps the doctor away.', answer: 'An apple a day keeps the doctor away.' },
      { id: 2, sentence: 'He is a doctor and she is an engineer.', answer: 'He is a doctor and she is an engineer.' },
      { id: 3, sentence: 'The sun rises in the east.', answer: 'The sun rises in the east.' },
      { id: 4, sentence: 'We waited for an hour in the rain.', answer: 'We waited for an hour in the rain.' },
      { id: 5, sentence: 'Can you pass me the book on the table?', answer: 'Can you pass me the book on the table?' },
      { id: 6, sentence: 'It was a wonderful day.', answer: 'It was a wonderful day.' },
      { id: 7, sentence: 'She goes to the gym twice a week.', answer: 'She goes to the gym twice a week.' },
      { id: 8, sentence: 'Look at the stars in the sky.', answer: 'Look at the stars in the sky.' },
      { id: 9, sentence: 'Is there an airport near here?', answer: 'Is there an airport near here?' },
      { id: 10, sentence: 'They have a house in the mountains.', answer: 'They have a house in the mountains.' }
    ]
  },
  'plural-rules': {
    id: 'plural-rules',
    title: 'Plural Rules',
    theory: {
      summary: 'Regras de formação do plural em inglês (regulares e irregulares).',
      rules: [
        { title: 'Regra Geral (+S)', text: 'Adiciona-se S na maioria dos substantivos.', example: 'cat -> cats, dog -> dogs' },
        { title: 'Terminados em -CH, -SH, -S, -X, -Z (+ES)', text: 'Adiciona-se ES ao final.', example: 'bus -> buses, box -> boxes' },
        { title: 'Consoante + Y (-IES)', text: 'Troca-se o Y por IES.', example: 'city -> cities, baby -> babies' },
        { title: 'Irregulares', text: 'Mudam a forma completamente.', example: 'man -> men, child -> children, foot -> feet' }
      ]
    },
    game1Written: [
      { id: 1, sentence: 'One cat, two ___', answer: 'cats' }, { id: 2, sentence: 'One box, three ___', answer: 'boxes' }, { id: 3, sentence: 'One baby, two ___', answer: 'babies' }, { id: 4, sentence: 'One child, four ___', answer: 'children' }, { id: 5, sentence: 'One man, two ___', answer: 'men' }, { id: 6, sentence: 'One watch, two ___', answer: 'watches' }, { id: 7, sentence: 'One knife, three ___', answer: 'knives' }, { id: 8, sentence: 'One city, many ___', answer: 'cities' }, { id: 9, sentence: 'One foot, two ___', answer: 'feet' }, { id: 10, sentence: 'One tomato, five ___', answer: 'tomatoes' }
    ],
    game2Audio: [
      { id: 1, audioText: 'The children are playing outside.', sentence: 'Escute e digite a palavra no plural ouvida:', answer: 'children' }, { id: 2, audioText: 'I have two boxes in my room.', sentence: 'Escute e digite o plural de box falado:', answer: 'boxes' }, { id: 3, audioText: 'Three women arrived early.', sentence: 'Escute e digite o plural de woman falado:', answer: 'women' }, { id: 4, audioText: 'Wash your hands and feet.', sentence: 'Escute e digite o plural de foot ouvido:', answer: 'feet' }, { id: 5, audioText: 'The buses arrive every ten minutes.', sentence: 'Escute e digite o plural de bus ouvido:', answer: 'buses' }, { id: 6, audioText: 'She bought three new watches.', sentence: 'Escute e digite o plural de watch ouvido:', answer: 'watches' }, { id: 7, audioText: 'Look at those cute puppies.', sentence: 'Escute e digite o plural de puppy ouvido:', answer: 'puppies' }, { id: 8, audioText: 'Put all the knives in the drawer.', sentence: 'Escute e digite o plural de knife ouvido:', answer: 'knives' }, { id: 9, audioText: 'Brush your teeth before bed.', sentence: 'Escute e digite o plural de tooth ouvido:', answer: 'teeth' }, { id: 10, audioText: 'The leaves are falling from the trees.', sentence: 'Escute e digite o plural de leaf ouvido:', answer: 'leaves' }
    ],
    game3Speaking: [
      { id: 1, sentence: 'Three men and four women attended the party.', answer: 'Three men and four women attended the party.' }, { id: 2, sentence: 'The children packed their lunch boxes.', answer: 'The children packed their lunch boxes.' }, { id: 3, sentence: 'Brush your teeth twice every day.', answer: 'Brush your teeth twice every day.' }, { id: 4, sentence: 'These watches are very expensive.', answer: 'These watches are very expensive.' }, { id: 5, sentence: 'She takes care of three babies at the nursery.', answer: 'She takes care of three babies at the nursery.' }, { id: 6, sentence: 'Two buses arrived at the station together.', answer: 'Two buses arrived at the station together.' }, { id: 7, sentence: 'The leaves fall from the trees in autumn.', answer: 'The leaves fall from the trees in autumn.' }, { id: 8, sentence: 'Put the forks and knives on the dining table.', answer: 'Put the forks and knives on the dining table.' }, { id: 9, sentence: 'My feet hurt after walking all day.', answer: 'My feet hurt after walking all day.' }, { id: 10, sentence: 'We bought fresh tomatoes at the market.', answer: 'We bought fresh tomatoes at the market.' }
    ]
  },
  'possessive-adjectives': {
    id: 'possessive-adjectives',
    title: 'Possessive Adjectives',
    level: 'FASE 1 — Módulos Básicos (A1)',
    theory: {
      summary: 'Os adjetivos possessivos indicam posse ou relação entre uma pessoa e um objeto/pessoa. Em inglês, eles concordam com o possuidor, e nunca com o objeto possuído.',
      detailedExplanation: 'Em inglês o possessivo vem sempre antes do substantivo: my car, your name, his house. Diferente do português, ele não varia em masculino/feminino ou singular/plural por causa da coisa possuída. A escolha depende de quem possui: I vira my, you vira your, he vira his, she vira her, it vira its, we vira our e they vira their. Use também para relações familiares, partes do corpo, instituições, animais, cidades e ideias abstratas.',
      rules: [
        { title: 'I → MY', text: 'Usado para a primeira pessoa do singular: meu, minha, meus ou minhas.', example: 'My car is red. / My shoes are new.' },
        { title: 'YOU → YOUR', text: 'Usado para you no singular e no plural: seu, sua, seus ou suas.', example: 'What is your name? / Wash your hands.' },
        { title: 'HE → HIS / SHE → HER', text: 'His indica possuidor masculino; her indica possuidor feminino.', example: 'John loves his wife. / Mary loves her husband.' },
        { title: 'IT → ITS', text: 'Usado para objetos, animais, lugares, instituições ou conceitos quando o gênero não é humano.', example: 'The dog wagged its tail. / London is famous for its parks.' },
        { title: 'WE → OUR / THEY → THEIR', text: 'Our é nosso/nossa; their é deles/delas, sempre antes de substantivo.', example: 'This is our house. / Their children go to school.' }
      ],
      commonMistakes: [
        "Não confunda its (possessivo) com it's (it is / it has): The cat ate its food.",
        "Não coloque plural no adjetivo: our friends, nunca ours friends.",
        "Não use artigo antes do possessivo: my car, nunca the my car."
      ]
    },
    game1Written: [
      { id: 1, sentence: 'I have a house. ___ house is big.', answer: 'my' }, { id: 2, sentence: 'She is doing ___ homework right now.', answer: 'her' }, { id: 3, sentence: 'David drove ___ new car to work.', answer: 'his' }, { id: 4, sentence: 'The dog is playing with ___ favorite toy.', answer: 'its' }, { id: 5, sentence: 'We love ___ school very much.', answer: 'our' }, { id: 6, sentence: 'They invited us to ___ wedding.', answer: 'their' }, { id: 7, sentence: 'What is ___ phone number, Sarah?', answer: 'your' }, { id: 8, sentence: 'I forgot ___ keys on the counter.', answer: 'my' }, { id: 9, sentence: 'Lisa lost ___ sunglasses at the beach.', answer: 'her' }, { id: 10, sentence: 'The boys are riding ___ bicycles.', answer: 'their' }
    ],
    game2Audio: [
      { id: 1, audioText: 'Her mother is a doctor.', sentence: 'Escute e digite o adjetivo possessivo ouvido:', answer: 'her' }, { id: 2, audioText: 'Is this your umbrella?', sentence: 'Escute e digite o adjetivo possessivo ouvido:', answer: 'your' }, { id: 3, audioText: 'His brother lives in Canada.', sentence: 'Escute e digite o adjetivo possessivo inicial:', answer: 'his' }, { id: 4, audioText: 'Our flight was delayed.', sentence: 'Escute e digite o adjetivo possessivo ouvido:', answer: 'our' }, { id: 5, audioText: 'The city changed its laws.', sentence: "Escute e digite o possessivo referente a 'city':", answer: 'its' }, { id: 6, audioText: 'They painted their house green.', sentence: 'Escute e digite o adjetivo possessivo ouvido:', answer: 'their' }, { id: 7, audioText: 'I washed my hands before eating.', sentence: "Escute e digite o possessivo usado antes de 'hands':", answer: 'my' }, { id: 8, audioText: 'She gave him her address.', sentence: 'Escute e digite o adjetivo possessivo referente a ela:', answer: 'her' }, { id: 9, audioText: 'He broke his leg skiing.', sentence: "Escute e digite o possessivo usado antes de 'leg':", answer: 'his' }, { id: 10, audioText: 'We sold our old television.', sentence: "Escute e digite o possessivo usado antes de 'old television':", answer: 'our' }
    ],
    game3Speaking: [
      { id: 1, sentence: 'My favorite color is blue.', answer: 'My favorite color is blue.' }, { id: 2, sentence: 'She is riding her new bicycle in the park.', answer: 'She is riding her new bicycle in the park.' }, { id: 3, sentence: 'He cleans his room every weekend.', answer: 'He cleans his room every weekend.' }, { id: 4, sentence: 'We really enjoy our English classes.', answer: 'We really enjoy our English classes.' }, { id: 5, sentence: 'The cat is eating its breakfast now.', answer: 'The cat is eating its breakfast now.' }, { id: 6, sentence: 'They visit their grandparents every Sunday.', answer: 'They visit their grandparents every Sunday.' }, { id: 7, sentence: 'Can I borrow your pencil for a minute?', answer: 'Can I borrow your pencil for a minute?' }, { id: 8, sentence: 'Her father works as an engineer.', answer: 'Her father works as an engineer.' }, { id: 9, sentence: 'His apartment is on the third floor.', answer: 'His apartment is on the third floor.' }, { id: 10, sentence: 'Our team won the championship match.', answer: 'Our team won the championship match.' }
    ]
  },
  demonstratives: {
    id: 'demonstratives', title: 'Demonstratives (This / That / These / Those)', level: 'FASE 1 — Módulos Básicos (A1)',
    theory: { summary: 'Demonstrativos indicam posição física ou temporal em relação ao falante.', detailedExplanation: 'A escolha combina quantidade e distância: this para singular perto, that para singular longe, these para plural perto e those para plural longe. Eles podem vir antes de substantivos ou substituir o substantivo. Também aparecem em apresentações, ligações e referência a ideias citadas no discurso.', rules: [
      { title: 'THIS', text: 'Singular e perto do falante.', example: 'This book in my hand is interesting.' }, { title: 'THAT', text: 'Singular e longe do falante.', example: 'That car over there belongs to Paul.' }, { title: 'THESE', text: 'Plural e perto do falante.', example: 'These shoes are comfortable.' }, { title: 'THOSE', text: 'Plural e longe do falante.', example: 'Look at those birds in the sky.' }, { title: 'Telefone e apresentações', text: "Use this is para se identificar e is that para perguntar quem fala.", example: 'Hello, this is John. / Is that Ana?' }], commonMistakes: ["This não combina com plural: these books, não this books.", "These tem som de /z/ e this tem som de /s/.", "Para algo distante, use that ou those, não this ou these."] },
    game1Written: [
      { id: 1, sentence: '___ shirt I am wearing right now is soft. (Perto/Singular)', answer: 'this' }, { id: 2, sentence: 'Look at ___ house across the street! (Longe/Singular)', answer: 'that' }, { id: 3, sentence: '___ cookies on my plate are delicious. (Perto/Plural)', answer: 'these' }, { id: 4, sentence: 'Who owns ___ cars parked over there? (Longe/Plural)', answer: 'those' }, { id: 5, sentence: 'Is ___ your coffee on my table? (Perto/Singular)', answer: 'this' }, { id: 6, sentence: "I don't like ___ painting on that far wall. (Longe/Singular)", answer: 'that' }, { id: 7, sentence: '___ keys in my hand are for the office. (Perto/Plural)', answer: 'these' }, { id: 8, sentence: '___ stars in the sky are so bright tonight. (Longe/Plural)', answer: 'those' }, { id: 9, sentence: 'Hello! ___ is Mark speaking. (Apresentação)', answer: 'this' }, { id: 10, sentence: 'Can you pass me ___ box over there? (Longe/Singular)', answer: 'that' }
    ],
    game2Audio: [
      { id: 1, audioText: 'This is my favorite song.', sentence: 'Escute e digite o demonstrativo ouvido:', answer: 'this' }, { id: 2, audioText: 'That building is very old.', sentence: 'Escute e digite o demonstrativo ouvido:', answer: 'that' }, { id: 3, audioText: 'These apples are fresh.', sentence: 'Escute e digite o demonstrativo no plural ouvido:', answer: 'these' }, { id: 4, audioText: 'Look at those mountain peaks.', sentence: "Escute e digite o demonstrativo usado antes de 'mountain peaks':", answer: 'those' }, { id: 5, audioText: 'Is this your jacket?', sentence: 'Escute e digite a palavra demonstrativa da pergunta:', answer: 'this' }, { id: 6, audioText: 'That was an amazing performance.', sentence: 'Escute e digite o demonstrativo inicial:', answer: 'that' }, { id: 7, audioText: 'These shoes do not fit me.', sentence: 'Escute e digite o demonstrativo ouvido:', answer: 'these' }, { id: 8, audioText: 'Who are those people over there?', sentence: 'Escute e digite o demonstrativo de distância no plural:', answer: 'those' }, { id: 9, audioText: 'This coffee tastes really good.', sentence: 'Escute e digite o demonstrativo ouvido:', answer: 'this' }, { id: 10, audioText: 'That tree in the garden is tall.', sentence: 'Escute e digite o demonstrativo ouvido:', answer: 'that' }
    ],
    game3Speaking: [
      { id: 1, sentence: 'This is my best friend Peter.', answer: 'This is my best friend Peter.' }, { id: 2, sentence: 'That mountain is the highest in the country.', answer: 'That mountain is the highest in the country.' }, { id: 3, sentence: 'These shoes are very comfortable for walking.', answer: 'These shoes are very comfortable for walking.' }, { id: 4, sentence: 'Look at those beautiful birds in the tree.', answer: 'Look at those beautiful birds in the tree.' }, { id: 5, sentence: 'Is this your notebook on the desk?', answer: 'Is this your notebook on the desk?' }, { id: 6, sentence: 'Who is that man standing near the door?', answer: 'Who is that man standing near the door?' }, { id: 7, sentence: 'These flowers smell absolutely amazing.', answer: 'These flowers smell absolutely amazing.' }, { id: 8, sentence: 'Those clouds mean it is going to rain.', answer: 'Those clouds mean it is going to rain.' }, { id: 9, sentence: 'This is the most important lesson today.', answer: 'This is the most important lesson today.' }, { id: 10, sentence: 'That restaurant serves great Italian food.', answer: 'That restaurant serves great Italian food.' }
    ]
  },
  'there-is-there-are': {
    id: 'there-is-there-are', title: 'There is / There are', level: 'FASE 1 — Módulos Básicos (A1)',
    theory: { summary: "Use there is / there are para indicar existência: 'há', 'existe' ou 'tem' em português.", detailedExplanation: "Em inglês, have expressa posse; para existência em um lugar, use there is ou there are. There is combina com singular e incontáveis; there are combina com plural. Em perguntas, inverta o verbo: Is there...? Are there...? Em negativas, use isn't/aren't e any com frequência.", rules: [
      { title: "THERE IS / THERE'S", text: 'Singular e substantivos incontáveis.', example: 'There is a book on the desk. / There is water in the glass.' }, { title: 'THERE ARE', text: 'Substantivos no plural.', example: 'There are three students in the room.' }, { title: 'Negativa', text: "Use there isn't / there aren't.", example: "There isn't any milk. / There aren't many cars." }, { title: 'Interrogativa', text: 'Inverta o verbo To Be.', example: 'Is there a bank near here? / Are there any questions?' }, { title: 'Diferença com HAVE', text: 'Have é posse; there is/are é existência.', example: 'I have a problem. / There is a problem here.' }], commonMistakes: ["Não use has para haver: There is a church, não Has a church.", "Money, water e furniture usam there is.", "Na pergunta, use Is there...? e Are there...? com inversão."] },
    game1Written: [
      { id: 1, sentence: '___ a book on the desk. (Afirmativa/Singular)', answer: 'there is' }, { id: 2, sentence: '___ three apples in the fridge. (Afirmativa/Plural)', answer: 'there are' }, { id: 3, sentence: '___ any milk in the bottle. (Negativa/Singular)', answer: "there isn't" }, { id: 4, sentence: '___ many chairs in this room. (Negativa/Plural)', answer: "there aren't" }, { id: 5, sentence: '___ a hospital near here? (Interrogativa/Singular)', answer: 'is there' }, { id: 6, sentence: '___ any students in the classroom? (Interrogativa/Plural)', answer: 'are there' }, { id: 7, sentence: '___ some water in the pitcher. (Incontável)', answer: 'there is' }, { id: 8, sentence: '___ five cars parked outside. (Afirmativa/Plural)', answer: 'there are' }, { id: 9, sentence: '___ a problem with my order. (Singular)', answer: 'there is' }, { id: 10, sentence: '___ any mistakes in your test. (Negativa/Plural)', answer: "there aren't" }
    ],
    game2Audio: [
      { id: 1, audioText: 'There is a cat under the table.', sentence: 'Escute e digite as duas primeiras palavras da frase:', answer: 'there is' }, { id: 2, audioText: 'There are many people in the park.', sentence: 'Escute e digite o termo de existência usado:', answer: 'there are' }, { id: 3, audioText: 'Is there a train station nearby?', sentence: 'Escute e digite o termo interrogativo ouvido:', answer: 'is there' }, { id: 4, audioText: "There isn't any time left.", sentence: 'Escute e digite a forma negativa no singular emitida:', answer: "there isn't" }, { id: 5, audioText: 'Are there any questions for today?', sentence: 'Escute e digite o termo interrogativo no plural:', answer: 'are there' }, { id: 6, audioText: 'There are seven days in a week.', sentence: 'Escute e digite as duas primeiras palavras:', answer: 'there are' }, { id: 7, audioText: 'There is some sugar in the bowl.', sentence: "Escute e digite a estrutura usada para 'sugar':", answer: 'there is' }, { id: 8, audioText: "There aren't any eggs in the box.", sentence: 'Escute e digite a forma negativa no plural ouvida:', answer: "there aren't" }, { id: 9, audioText: 'Is there an ocean view from here?', sentence: 'Escute e digite a estrutura da pergunta:', answer: 'is there' }, { id: 10, audioText: 'There are many reasons to learn English.', sentence: 'Escute e digite as duas primeiras palavras:', answer: 'there are' }
    ],
    game3Speaking: [
      { id: 1, sentence: 'There is a laptop on the kitchen table.', answer: 'There is a laptop on the kitchen table.' }, { id: 2, sentence: 'There are twenty students in our classroom.', answer: 'There are twenty students in our classroom.' }, { id: 3, sentence: 'Is there a supermarket open at this hour?', answer: 'Is there a supermarket open at this hour?' }, { id: 4, sentence: "There isn't any coffee left in the pot.", answer: "There isn't any coffee left in the pot." }, { id: 5, sentence: 'Are there any good movies playing tonight?', answer: 'Are there any good movies playing tonight?' }, { id: 6, sentence: 'There is a lot of traffic on the highway today.', answer: 'There is a lot of traffic on the highway today.' }, { id: 7, sentence: 'There are two beautiful parks in this town.', answer: 'There are two beautiful parks in this town.' }, { id: 8, sentence: "There isn't enough space for everyone in the car.", answer: "There isn't enough space for everyone in the car." }, { id: 9, sentence: 'Is there any reason to worry about the exam?', answer: 'Is there any reason to worry about the exam?' }, { id: 10, sentence: 'There are many options available on the menu.', answer: 'There are many options available on the menu.' }
    ]
  },
  imperatives: {
    id: 'imperatives', title: 'Imperatives', level: 'FASE 1 — Módulos Básicos (A1)',
    theory: { summary: 'O imperativo dá ordens, instruções, conselhos, avisos, convites e sugestões.', detailedExplanation: "O imperativo em inglês normalmente não tem sujeito explícito. Comece com o verbo base: Open, Listen, Be. Para negar, coloque Don't antes do verbo. Para suavizar, use please. Para sugerir algo incluindo o falante, use Let's; para a negativa, Let's not.", rules: [
      { title: 'Afirmativo', text: 'Use o verbo na forma base.', example: 'Open the door. / Listen carefully.' }, { title: 'Negativo', text: "Use Don't ou Do not antes do verbo.", example: "Don't touch that! / Don't worry." }, { title: 'Polidez', text: 'Please pode vir no início ou no final.', example: 'Please sit down. / Turn off the light, please.' }, { title: "Let's", text: 'Sugestão em grupo que inclui quem fala.', example: "Let's go to the beach. / Let's not make noise." }, { title: 'Ênfase com DO', text: 'Do antes do verbo deixa o convite mais caloroso ou enfático.', example: 'Do come in!' }], commonMistakes: ["Não use you antes do verbo: Open the window, não You open the window.", "Não use to antes do verbo: Listen to me, não To listen to me.", "A negativa imperativa usa Don't para singular e plural."] },
    game1Written: [
      { id: 1, sentence: '___ the door, please. It is cold outside. (Open/To open)', answer: 'open' }, { id: 2, sentence: '___ smoke in this room. It is forbidden. (Negative)', answer: "don't" }, { id: 3, sentence: '___ quiet! The baby is sleeping. (Verbo To Be)', answer: 'be' }, { id: 4, sentence: '___ eat all the cake! Save some for us. (Negative)', answer: "don't" }, { id: 5, sentence: '___ go to the cinema tonight! (Sugestão com us)', answer: "let's" }, { id: 6, sentence: '___ carefully to what I am saying. (Listen/Listening)', answer: 'listen' }, { id: 7, sentence: '___ forget your passport at home. (Negative)', answer: "don't" }, { id: 8, sentence: '___ down and open your textbooks. (Sit/Sitting)', answer: 'sit' }, { id: 9, sentence: '___ not panic, everything is under control.', answer: "let's" }, { id: 10, sentence: '___ your name at the top of the paper. (Write/To write)', answer: 'write' }
    ],
    game2Audio: [
      { id: 1, audioText: 'Open your books on page ten.', sentence: 'Escute e digite o verbo imperativo inicial:', answer: 'open' }, { id: 2, audioText: "Don't touch that hot pan!", sentence: 'Escute e digite o auxiliar imperativo negativo ouvido:', answer: "don't" }, { id: 3, audioText: 'Please sit down and wait.', sentence: 'Escute e digite a palavra de polidez usada:', answer: 'please' }, { id: 4, audioText: "Let's take a break now.", sentence: 'Escute e digite a expressão de sugestão ouvida:', answer: "let's" }, { id: 5, audioText: 'Turn off the lights when you leave.', sentence: 'Escute e digite o verbo imperativo inicial de duas palavras:', answer: 'turn off' }, { id: 6, audioText: "Don't be late for the meeting.", sentence: 'Escute e digite a forma negativa inicial:', answer: "don't" }, { id: 7, audioText: 'Be quiet in the library.', sentence: 'Escute e digite o verbo imperativo inicial:', answer: 'be' }, { id: 8, audioText: "Let's start the presentation.", sentence: 'Escute e digite o termo inicial de sugestão:', answer: "let's" }, { id: 9, audioText: 'Drink plenty of water every day.', sentence: 'Escute e digite o verbo imperativo inicial:', answer: 'drink' }, { id: 10, audioText: "Don't worry about the small details.", sentence: 'Escute e digite a palavra negativa inicial:', answer: "don't" }
    ],
    game3Speaking: [
      { id: 1, sentence: 'Please close the window before you leave.', answer: 'Please close the window before you leave.' }, { id: 2, sentence: "Don't touch the wet paint on the wall.", answer: "Don't touch the wet paint on the wall." }, { id: 3, sentence: "Let's study together for the grammar test.", answer: "Let's study together for the grammar test." }, { id: 4, sentence: 'Be careful when crossing the street.', answer: 'Be careful when crossing the street.' }, { id: 5, sentence: 'Turn on the air conditioner please.', answer: 'Turn on the air conditioner please.' }, { id: 6, sentence: "Don't forget to send me the email.", answer: "Don't forget to send me the email." }, { id: 7, sentence: "Let's order a pizza for dinner tonight.", answer: "Let's order a pizza for dinner tonight." }, { id: 8, sentence: 'Listen carefully to the instructions.', answer: 'Listen carefully to the instructions.' }, { id: 9, sentence: "Don't make noise while the baby sleeps.", answer: "Don't make noise while the baby sleeps." }, { id: 10, sentence: 'Take a deep breath and relax.', answer: 'Take a deep breath and relax.' }
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
        { id: 'plural-rules', name: 'Plural Rules' },
        { id: 'possessive-adjectives', name: 'Possessive Adjectives' },
        { id: 'possessive_adjectives', name: 'Possessive Adjectives' },
        { id: 'demonstratives', name: 'Demonstratives (This/That)' },
        { id: 'there-is-there-are', name: 'There is / There are' },
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
    verb_to_be: { title: 'Verb To Be', moduleId: 'verb_to_be' },
    personal_pronouns: { title: 'Personal Pronouns', moduleId: 'personal_pronouns' },
    articles: { title: 'Articles (A/An/The)', moduleId: 'articles' },
    plural: { title: 'Plural Rules', moduleId: 'plural_rules' },
    possessive_adjectives: { title: 'Possessive Adjectives', moduleId: 'possessive_adjectives' },
    demonstratives: { title: 'Demonstratives (This/That)', moduleId: 'demonstratives' },
    there_is_are: { title: 'There is / There are', moduleId: 'there_is_there_are' },
    imperatives: { title: 'Imperatives', moduleId: 'imperatives' },
    adverbs_freq: { title: 'Adverbs of Frequency', moduleId: 'adverbs_of_frequency' },
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
