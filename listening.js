// ==========================================
// 1. DADOS: FRASES ESTRUTURAIS POR NÍVEL CEFR
// ==========================================
const listeningData = {
    "A1": [
        {en: "I live in a big house.", pt: "Eu moro em uma casa grande."},
        {en: "She studies at school every day.", pt: "Ela estuda na escola todos os dias."},
        {en: "They have a new book.", pt: "Eles têm um livro novo."},
        {en: "We drink water every morning.", pt: "Nós bebemos água todas as manhãs."},
        {en: "He likes good food.", pt: "Ele gosta de comida boa."},
        {en: "The teacher has a small car.", pt: "O professor tem um carro pequeno."},
        {en: "My friend is always happy.", pt: "Meu amigo está sempre feliz."},
        {en: "I eat at home with my family.", pt: "Eu como em casa com a minha família."},
        {en: "The students study together.", pt: "Os alunos estudam juntos."},
        {en: "She comes from Brazil.", pt: "Ela vem do Brasil."},
        {en: "The water is cold.", pt: "A água está fria."},
        {en: "The food is hot.", pt: "A comida está quente."},
        {en: "He never drinks coffee.", pt: "Ele nunca bebe café."},
        {en: "We usually go to school by car.", pt: "Nós geralmente vamos para a escola de carro."},
        {en: "Who is your teacher?", pt: "Quem é o seu professor?"},
        {en: "Where do you live?", pt: "Onde você mora?"},
        {en: "What book do you have?", pt: "Que livro você tem?"},
        {en: "When do they study?", pt: "Quando eles estudam?"},
        {en: "The old house is good.", pt: "A casa antiga é boa."},
        {en: "I like my school because my friends are there.", pt: "Eu gosto da minha escola porque meus amigos estão lá."}
    ],
    "A2": [
        {en: "We arrived at the restaurant yesterday.", pt: "Nós chegamos ao restaurante ontem."},
        {en: "She chose a different book.", pt: "Ela escolheu um livro diferente."},
        {en: "I forgot my question.", pt: "Eu esqueci minha pergunta."},
        {en: "They remembered the teacher.", pt: "Eles lembraram do professor."},
        {en: "He wore a new jacket.", pt: "Ele usou uma jaqueta nova."},
        {en: "Tomorrow we will travel together.", pt: "Amanhã nós viajaremos juntos."},
        {en: "I hope you will come tomorrow.", pt: "Espero que você venha amanhã."},
        {en: "She will leave early because she is busy.", pt: "Ela sairá cedo porque está ocupada."},
        {en: "We met our neighbor yesterday.", pt: "Nós encontramos nosso vizinho ontem."},
        {en: "Everyone liked the restaurant.", pt: "Todo mundo gostou do restaurante."},
        {en: "Someone asked an important question.", pt: "Alguém fez uma pergunta importante."},
        {en: "Nothing was difficult.", pt: "Nada foi difícil."},
        {en: "The weather was beautiful yesterday.", pt: "O tempo estava bonito ontem."},
        {en: "Although he was busy, he helped us.", pt: "Embora ele estivesse ocupado, ele nos ajudou."},
        {en: "After dinner, we went to the market.", pt: "Depois do jantar, nós fomos ao mercado."},
        {en: "Before school, I visited my friend.", pt: "Antes da escola, visitei meu amigo."},
        {en: "The hospital is across the market.", pt: "O hospital fica do outro lado do mercado."},
        {en: "The restaurant is between the hospital and the market.", pt: "O restaurante fica entre o hospital e o mercado."},
        {en: "She came without her book.", pt: "Ela veio sem o livro dela."},
        {en: "If the weather is good, we will travel tomorrow.", pt: "Se o tempo estiver bom, nós viajaremos amanhã."}
    ],
    "B1": [
        {en: "I have improved my English.", pt: "Eu tenho melhorado o meu inglês."},
        {en: "She has achieved her goal.", pt: "Ela tem alcançado o objetivo dela."},
        {en: "We have developed new knowledge.", pt: "Nós temos desenvolvido novos conhecimentos."},
        {en: "They have prepared for the challenge.", pt: "Eles têm se preparado para o desafio."},
        {en: "He has avoided many problems.", pt: "Ele tem evitado muitos problemas."},
        {en: "I have recently increased my knowledge.", pt: "Eu tenho aumentado o meu conhecimento recentemente."},
        {en: "She has supported her friends.", pt: "Ela tem apoiado os amigos dela."},
        {en: "We have managed the problem together.", pt: "Nós temos conseguido resolver o problema juntos."},
        {en: "They have suggested a different approach.", pt: "Eles têm sugerido uma abordagem diferente."},
        {en: "The teacher has encouraged every student.", pt: "O professor tem incentivado cada aluno."},
        {en: "Technology has improved our lives.", pt: "A tecnologia tem melhorado as nossas vidas."},
        {en: "The environment has changed recently.", pt: "O meio ambiente tem mudado recentemente."},
        {en: "I have become more confident.", pt: "Eu tenho me tornado mais confiante."},
        {en: "She has become more independent.", pt: "Ela tem se tornado mais independente."},
        {en: "We have found a possible solution.", pt: "Nós temos encontrado uma solução possível."},
        {en: "He has made an important decision.", pt: "Ele tem tomado uma decisão importante."},
        {en: "Several students have achieved success.", pt: "Vários alunos têm alcançado sucesso."},
        {en: "Our career has required responsibility.", pt: "A nossa carreira tem exigido responsabilidade."},
        {en: "The challenge has become easier.", pt: "O desafio tem se tornado mais fácil."},
        {en: "I have never avoided a difficult decision.", pt: "Eu nunca tenho evitado uma decisão difícil."},
        {en: "Have you improved your English?", pt: "Você tem melhorado o seu inglês?"},
        {en: "Has she prepared for the challenge?", pt: "Ela tem se preparado para o desafio?"},
        {en: "Have they developed new technology?", pt: "Eles têm desenvolvido nova tecnologia?"},
        {en: "We have not forgotten our goal.", pt: "Nós não temos esquecido o nosso objetivo."},
        {en: "He has not achieved his goal yet.", pt: "Ele ainda não tem alcançado o objetivo dele."}
    ],
    "B2": [
        {en: "The research was completed yesterday.", pt: "A pesquisa foi concluída ontem."},
        {en: "The evidence was analyzed carefully.", pt: "A evidência foi analisada cuidadosamente."},
        {en: "New technology is used in many schools.", pt: "Nova tecnologia é usada em muitas escolas."},
        {en: "The project was developed by teachers.", pt: "O projeto foi desenvolvido por professores."},
        {en: "The results were published last week.", pt: "Os resultados foram publicados na semana passada."},
        {en: "The lesson was explained by the teacher.", pt: "A lição foi explicada pelo professor."},
        {en: "The book was written by a famous author.", pt: "O livro foi escrito por um autor famoso."},
        {en: "The decision was made by the manager.", pt: "A decisão foi tomada pelo gerente."},
        {en: "The problem was solved quickly.", pt: "O problema foi resolvido rapidamente."},
        {en: "The information was shared with everyone.", pt: "A informação foi compartilhada com todos."},
        {en: "The room was cleaned by the students.", pt: "A sala foi limpa pelos alunos."},
        {en: "The task was completed on time.", pt: "A tarefa foi concluída no tempo."},
        {en: "The document was reviewed by the teacher.", pt: "O documento foi revisado pelo professor."},
        {en: "The system was updated yesterday.", pt: "O sistema foi atualizado ontem."},
        {en: "The message was sent to all students.", pt: "A mensagem foi enviada para todos os alunos."},
        {en: "The house was built in 2005.", pt: "A casa foi construída em 2005."},
        {en: "The car was repaired by the mechanic.", pt: "O carro foi consertado pelo mecânico."},
        {en: "The exam was prepared by the school.", pt: "A prova foi preparada pela escola."},
        {en: "The report was submitted today.", pt: "O relatório foi enviado hoje."},
        {en: "The mistake was corrected immediately.", pt: "O erro foi corrigido imediatamente."},
        {en: "The student who studied hard passed the exam.", pt: "O aluno que estudou muito passou na prova."},
        {en: "The teacher who helped me was very kind.", pt: "O professor que me ajudou foi muito gentil."},
        {en: "The book that I read was interesting.", pt: "O livro que eu li era interessante."},
        {en: "The school where I studied is very big.", pt: "A escola onde eu estudei é muito grande."},
        {en: "The woman who lives next door is my neighbor.", pt: "A mulher que mora ao lado é minha vizinha."},
        {en: "The man who called you is waiting.", pt: "O homem que te ligou está esperando."},
        {en: "The place where we met is far away.", pt: "O lugar onde nos encontramos é longe."},
        {en: "The students who arrived early are inside.", pt: "Os alunos que chegaram cedo estão dentro."},
        {en: "The idea that you suggested is good.", pt: "A ideia que você sugeriu é boa."},
        {en: "The project that we finished is important.", pt: "O projeto que nós terminamos é importante."},
        {en: "The person who teaches English is new.", pt: "A pessoa que ensina inglês é nova."},
        {en: "The house that we bought is old.", pt: "A casa que nós compramos é antiga."},
        {en: "The city where I live is small.", pt: "A cidade onde eu moro é pequena."},
        {en: "The students who passed were happy.", pt: "Os alunos que passaram estavam felizes."},
        {en: "The book that explains grammar is useful.", pt: "O livro que explica gramática é útil."},
        {en: "Furthermore, the results were positive.", pt: "Além disso, os resultados foram positivos."},
        {en: "Nevertheless, the problem remained.", pt: "Mesmo assim, o problema permaneceu."},
        {en: "Consequently, the situation improved.", pt: "Consequentemente, a situação melhorou."},
        {en: "Despite the difficulty, we succeeded.", pt: "Apesar da dificuldade, nós tivemos sucesso."},
        {en: "Although the task was hard, we finished it.", pt: "Embora a tarefa fosse difícil, nós a terminamos."},
        {en: "However, the result was unexpected.", pt: "Entretanto, o resultado foi inesperado."},
        {en: "Therefore, the decision was changed.", pt: "Portanto, a decisão foi mudada."},
        {en: "In addition, the teacher explained everything.", pt: "Além disso, o professor explicou tudo."},
        {en: "Moreover, the evidence was clear.", pt: "Além disso, a evidência era clara."},
        {en: "As a result, the project was successful.", pt: "Como resultado, o projeto foi bem-sucedido."},
        {en: "Even though it was difficult, we continued.", pt: "Mesmo que tenha sido difícil, nós continuamos."},
        {en: "On the other hand, the situation changed.", pt: "Por outro lado, a situação mudou."},
        {en: "In contrast, the results were different.", pt: "Em contraste, os resultados foram diferentes."},
        {en: "For example, the teacher used simple words.", pt: "Por exemplo, o professor usou palavras simples."},
        {en: "In conclusion, the project was effective.", pt: "Em conclusão, o projeto foi eficaz."}
    ],
    "C1": [
        {en: "The proposal has been carefully evaluated by the committee.", pt: "A proposta tem sido cuidadosamente avaliada pelo comitê."},
        {en: "The findings were considered highly relevant.", pt: "As descobertas foram consideradas altamente relevantes."},
        {en: "The results have been significantly influenced by external factors.", pt: "Os resultados têm sido significativamente influenciados por fatores externos."},
        {en: "The data will be analyzed in greater detail.", pt: "Os dados serão analisados em maior detalhe."},
        {en: "The report had been completed before the deadline.", pt: "O relatório tinha sido concluído antes do prazo final."},
        {en: "It is widely acknowledged that education is essential.", pt: "É amplamente reconhecido que a educação é essencial."},
        {en: "The issue is being addressed by experts.", pt: "A questão está sendo abordada por especialistas."},
        {en: "The decision has been justified by new evidence.", pt: "A decisão tem sido justificada por novas evidências."},
        {en: "The theory was developed over several decades.", pt: "A teoria foi desenvolvida ao longo de várias décadas."},
        {en: "The policy will be implemented next year.", pt: "A política será implementada no próximo ano."},
        {en: "The experiment had been conducted under strict conditions.", pt: "O experimento tinha sido conduzido sob condições rigorosas."},
        {en: "The results are expected to be published soon.", pt: "Os resultados são esperados para serem publicados em breve."},
        {en: "The research has been funded by the government.", pt: "A pesquisa tem sido financiada pelo governo."},
        {en: "The conclusion was drawn after extensive analysis.", pt: "A conclusão foi tirada após análise extensa."},
        {en: "The structure is considered highly effective.", pt: "A estrutura é considerada altamente eficaz."},
        {en: "The student whose research was outstanding received an award.", pt: "O aluno cuja pesquisa foi excelente recebeu um prêmio."},
        {en: "The system, which had been updated recently, improved efficiency.", pt: "O sistema, que tinha sido atualizado recentemente, melhorou a eficiência."},
        {en: "The environment in which we operate is constantly changing.", pt: "O ambiente no qual nós operamos está constantemente mudando."},
        {en: "The professor with whom I discussed the topic was very knowledgeable.", pt: "O professor com quem eu discuti o tema era muito experiente."},
        {en: "The decision to which they referred was controversial.", pt: "A decisão à qual eles se referiram foi controversa."},
        {en: "It is essential that the results be carefully interpreted.", pt: "É essencial que os resultados sejam cuidadosamente interpretados."},
        {en: "It is important that the system remain stable.", pt: "É importante que o sistema permaneça estável."},
        {en: "Had the problem been identified earlier, it could have been avoided.", pt: "Se o problema tivesse sido identificado antes, poderia ter sido evitado."},
        {en: "Were the data more reliable, the conclusions would be stronger.", pt: "Se os dados fossem mais confiáveis, as conclusões seriam mais fortes."},
        {en: "Not only did the project succeed, but it also exceeded expectations.", pt: "Não apenas o projeto teve sucesso, mas também superou expectativas."},
        {en: "Only after the analysis was completed did we understand the issue.", pt: "Somente após a análise ser concluída nós entendemos a questão."},
        {en: "Such was the complexity of the situation that immediate action was required.", pt: "Tamanha era a complexidade da situação que ação imediata foi necessária."},
        {en: "The more we study, the more we understand the topic.", pt: "Quanto mais estudamos, mais entendemos o tema."},
        {en: "No sooner had the meeting started than the problem was raised.", pt: "Mal a reunião começou, o problema foi levantado."},
        {en: "Hardly had the results been published when criticism began.", pt: "Mal os resultados foram publicados quando as críticas começaram."},
        {en: "The extent to which the project succeeded is still debated.", pt: "A extensão em que o projeto teve sucesso ainda é debatida."},
        {en: "What matters most is how the information is interpreted.", pt: "O que mais importa é como a informação é interpretada."},
        {en: "It cannot be denied that the results are significant.", pt: "Não pode ser negado que os resultados são significativos."},
        {en: "There is no doubt that the situation has improved.", pt: "Não há dúvida de que a situação melhorou."},
        {en: "The possibility that the theory is incorrect cannot be ignored.", pt: "A possibilidade de que a teoria esteja incorreta não pode ser ignorada."},
        {en: "Furthermore, the implications of this study are significant.", pt: "Além disso, as implicações deste estudo são significativas."},
        {en: "Nevertheless, the evidence remains inconclusive.", pt: "Mesmo assim, a evidência permanece inconclusiva."},
        {en: "Consequently, further research is required.", pt: "Consequentemente, mais pesquisa é necessária."},
        {en: "In contrast, previous studies reached different conclusions.", pt: "Em contraste, estudos anteriores chegaram a conclusões diferentes."},
        {en: "As a result, policy changes were introduced.", pt: "Como resultado, mudanças de política foram introduzidas."},
        {en: "In addition to this, several factors must be considered.", pt: "Além disso, vários fatores devem ser considerados."},
        {en: "From a theoretical perspective, the model is valid.", pt: "De uma perspectiva teórica, o modelo é válido."},
        {en: "It is worth noting that the approach varies across contexts.", pt: "Vale notar que a abordagem varia entre contextos."},
        {en: "The extent of the problem has not yet been fully understood.", pt: "A extensão do problema ainda não foi totalmente compreendida."},
        {en: "This suggests that further investigation is necessary.", pt: "Isso sugere que uma investigação adicional é necessária."},
        {en: "The study highlights the importance of early intervention.", pt: "O estudo destaca a importância da intervenção precoce."},
        {en: "The findings contribute to a better understanding of the issue.", pt: "As descobertas contribuem para uma melhor compreensão da questão."},
        {en: "There is growing evidence that supports this claim.", pt: "Há evidências crescentes que sustentam essa afirmação."},
        {en: "It is increasingly clear that changes are required.", pt: "Está cada vez mais claro que mudanças são necessárias."},
        {en: "Ultimately, the success of the project depends on collaboration.", pt: "Em última análise, o sucesso do projeto depende da colaboração."}
    ]
};

// ==========================================
// 2. RENDERIZAÇÃO DA TELA DE LISTENING
// ==========================================
function renderListening(level) {
    const container = document.getElementById('listen-display');
    container.innerHTML = ''; // Limpa a tela antes de carregar
    
    // Atualiza feedback visual dos botões
    document.querySelectorAll('.listen-controls button').forEach(btn => {
        btn.classList.remove('active-btn');
        if(btn.innerText === level) {
            btn.classList.add('active-btn');
        }
    });

    // Injeta as frases do nível selecionado
    listeningData[level].forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'listen-card';
        // Quando o usuário clicar no card inteiro, a função playAudio é chamada
        div.onclick = () => playAudio(item.en);
        
        div.innerHTML = `
            <div class="listen-text">
                <b>${index + 1}. ${item.en}</b>
                <small>${item.pt}</small>
            </div>
            <div class="listen-play" title="Ouvir pronúncia">▶️</div>
        `;
        container.appendChild(div);
    });
}

// ==========================================
// 3. REPRODUÇÃO DE ÁUDIO (Web Speech API)
// ==========================================
function playAudio(text) {
    if ('speechSynthesis' in window) {
        // Cancela qualquer áudio que já esteja tocando para não encavalar
        window.speechSynthesis.cancel();
        
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'en-US';
        msg.rate = 0.85; // Velocidade ligeiramente reduzida para clareza didática
        
        window.speechSynthesis.speak(msg);
    } else {
        alert("Desculpe, seu navegador não suporta a função de áudio.");
    }
}
