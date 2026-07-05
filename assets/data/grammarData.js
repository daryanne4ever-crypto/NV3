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
