// ==========================================
// 1. BANCO DE DADOS COMPLETO DO QUIZ DE LISTENING
// ==========================================
const listeningQuizData = {
  A1: [
    { audio: "I live in a big house.", options: ["I live in a small house.", "I live in a big house.", "I leave a big house."], correct: 1 },
    { audio: "She studies at school every day.", options: ["She studies at school every day.", "He studies at school every day.", "She studies at home every day."], correct: 0 },
    { audio: "They have a new book.", options: ["We have a new book.", "They have an old book.", "They have a new book."], correct: 2 },
    { audio: "We drink water every morning.", options: ["We drink water every morning.", "They drink water every morning.", "We drink coffee every morning."], correct: 0 },
    { audio: "He likes good food.", options: ["She likes good food.", "He likes good food.", "He likes cold food."], correct: 1 },
    { audio: "The teacher has a small car.", options: ["The student has a small car.", "The teacher has a big car.", "The teacher has a small car."], correct: 2 },
    { audio: "My friend is always happy.", options: ["My friend is always happy.", "My friend is never happy.", "Her friend is always happy."], correct: 0 },
    { audio: "I eat at home with my family.", options: ["I cook at home with my family.", "I eat at school with my family.", "I eat at home with my family."], correct: 2 },
    { audio: "The students study together.", options: ["The students play together.", "The students study together.", "The teachers study together."], correct: 1 },
    { audio: "She comes from Brazil.", options: ["She comes from Brazil.", "He comes from Brazil.", "She comes from Spain."], correct: 0 },
    { audio: "The water is cold.", options: ["The coffee is cold.", "The water is hot.", "The water is cold."], correct: 2 },
    { audio: "The food is hot.", options: ["The food is hot.", "The food is cold.", "The soup is hot."], correct: 0 },
    { audio: "He never drinks coffee.", options: ["She never drinks coffee.", "He never drinks coffee.", "He always drinks coffee."], correct: 1 },
    { audio: "We usually go to school by car.", options: ["We usually go to school by car.", "They usually go to school by car.", "We usually go to school by bus."], correct: 0 },
    { audio: "Who is your teacher?", options: ["Where is your teacher?", "Who is your brother?", "Who is your teacher?"], correct: 2 },
    { audio: "Where do you live?", options: ["Where do you work?", "Where do you live?", "What do you like?"], correct: 1 },
    { audio: "What book do you have?", options: ["What book do you have?", "What car do you have?", "What book does she have?"], correct: 0 },
    { audio: "When do they study?", options: ["When do we study?", "Where do they study?", "When do they study?"], correct: 2 },
    { audio: "The old house is good.", options: ["The new house is good.", "The old house is good.", "The old car is good."], correct: 1 },
    { audio: "I like my school because my friends are there.", options: ["I like my school because my friends are there.", "I like my home because my family is there.", "I like my school because the teachers are there."], correct: 0 }
  ],
  A2: [
    { audio: "We arrived at the restaurant yesterday.", options: ["They arrived at the restaurant yesterday.", "We arrived at the restaurant yesterday.", "We arrived at the hotel yesterday."], correct: 1 },
    { audio: "She chose a different book.", options: ["She chose a different book.", "She chose the same book.", "He chose a different book."], correct: 0 },
    { audio: "I forgot my question.", options: ["I forgot my answer.", "He forgot his question.", "I forgot my question."], correct: 2 },
    { audio: "They remembered the teacher.", options: ["They remembered the student.", "They remembered the teacher.", "We remembered the teacher."], correct: 1 },
    { audio: "He wore a new jacket.", options: ["He wore a new jacket.", "He wore an old jacket.", "She wore a new jacket."], correct: 0 },
    { audio: "Tomorrow we will travel together.", options: ["Today we will travel together.", "Tomorrow they will travel together.", "Tomorrow we will travel together."], correct: 2 },
    { audio: "I hope you will come tomorrow.", options: ["I know you will come tomorrow.", "I hope you will come tomorrow.", "I hope she will come tomorrow."], correct: 1 },
    { audio: "She will leave early because she is busy.", options: ["She will leave early because she is busy.", "She will leave late because she is busy.", "He will leave early because he is tired."], correct: 0 },
    { audio: "We met our neighbor yesterday.", options: ["We met our friend yesterday.", "They met our neighbor yesterday.", "We met our neighbor yesterday."], correct: 2 },
    { audio: "Everyone liked the restaurant.", options: ["Someone liked the restaurant.", "Everyone liked the restaurant.", "Everyone liked the food."], correct: 1 },
    { audio: "Someone asked an important question.", options: ["Someone asked an important question.", "Everyone asked an important question.", "Someone asked a simple question."], correct: 0 },
    { audio: "Nothing was difficult.", options: ["Everything was difficult.", "Nothing was easy.", "Nothing was difficult."], correct: 2 },
    { audio: "The weather was beautiful yesterday.", options: ["The weather is beautiful today.", "The weather was beautiful yesterday.", "The weather was bad yesterday."], correct: 1 },
    { audio: "Although he was busy, he helped us.", options: ["Because he was busy, he helped us.", "Although she was busy, she helped us.", "Although he was busy, he helped us."], correct: 2 },
    { audio: "After dinner, we went to the market.", options: ["After dinner, we went to the market.", "Before dinner, we went to the market.", "After lunch, we went to the market."], correct: 0 },
    { audio: "Before school, I visited my friend.", options: ["After school, I visited my friend.", "Before school, I visited my friend.", "Before school, he visited his friend."], correct: 1 },
    { audio: "The hospital is across the market.", options: ["The hospital is across the market.", "The hospital is near the market.", "The school is across the market."], correct: 0 },
    { audio: "The restaurant is between the hospital and the market.", options: ["The hotel is between the hospital and the market.", "The restaurant is behind the hospital and the market.", "The restaurant is between the hospital and the market."], correct: 2 },
    { audio: "She came without her book.", options: ["She came with her book.", "She came without her book.", "He came without his book."], correct: 1 },
    { audio: "If the weather is good, we will travel tomorrow.", options: ["If the weather is bad, we will travel tomorrow.", "If the weather is good, they will travel tomorrow.", "If the weather is good, we will travel tomorrow."], correct: 2 }
  ],
  B1: [
    { audio: "I have improved my English.", options: ["I improved my English.", "I have improved my English.", "I have improve my English."], correct: 1 },
    { audio: "She has achieved her goal.", options: ["She has achieved her goal.", "She achieved her goal.", "He has achieved his goal."], correct: 0 },
    { audio: "We have developed new knowledge.", options: ["We developed new knowledge.", "They have developed new knowledge.", "We have developed new knowledge."], correct: 2 },
    { audio: "They have prepared for the challenge.", options: ["They have prepared for the challenge.", "We have prepared for the challenge.", "They prepared for the challenge."], correct: 0 },
    { audio: "He has avoided many problems.", options: ["He avoids many problems.", "He has avoided many problems.", "She has avoided many problems."], correct: 1 },
    { audio: "I have recently increased my knowledge.", options: ["I have recently increased my knowledge.", "I recently increased my knowledge.", "I have recently increase my knowledge."], correct: 0 },
    { audio: "She has supported her friends.", options: ["He has supported his friends.", "She supported her friends.", "She has supported her friends."], correct: 2 },
    { audio: "We have managed the problem together.", options: ["We managed the problem together.", "We have managed the problem together.", "They have managed the problem together."], correct: 1 },
    { audio: "They have suggested a different approach.", options: ["They have suggested a different approach.", "They suggested a different approach.", "We have suggested a different approach."], correct: 0 },
    { audio: "The teacher has encouraged every student.", options: ["The teacher encouraged every student.", "The teacher has encourage every student.", "The teacher has encouraged every student."], correct: 2 },
    { audio: "Technology has improved our lives.", options: ["Technology improved our lives.", "Technology has improved our lives.", "Technology has improve our lives."], correct: 1 },
    { audio: "The environment has changed recently.", options: ["The environment has changed recently.", "The environment changed recently.", "Our environment has changed recently."], correct: 0 },
    { audio: "I have become more confident.", options: ["I became more confident.", "I have become more confident.", "I have become less confident."], correct: 1 },
    { audio: "She has become more independent.", options: ["She has become more independent.", "She became more independent.", "He has become more independent."], correct: 0 },
    { audio: "We have found a possible solution.", options: ["We found a possible solution.", "They have found a possible solution.", "We have found a possible solution."], correct: 2 },
    { audio: "He has made an important decision.", options: ["He made an important decision.", "He has made an important decision.", "She has made an important decision."], correct: 1 },
    { audio: "Several students have achieved success.", options: ["Several students have achieved success.", "Several students achieved success.", "Some students have achieved success."], correct: 0 },
    { audio: "Our career has required responsibility.", options: ["Our career required responsibility.", "My career has required responsibility.", "Our career has required responsibility."], correct: 2 },
    { audio: "The challenge has become easier.", options: ["The challenge became easier.", "The challenge has become easier.", "The challenge has become harder."], correct: 1 },
    { audio: "I have never avoided a difficult decision.", options: ["I have never avoided a difficult decision.", "I never avoided a difficult decision.", "I have always avoided a difficult decision."], correct: 0 },
    { audio: "Have you improved your English?", options: ["Did you improve your English?", "Have you improve your English?", "Have you improved your English?"], correct: 2 },
    { audio: "Has she prepared for the challenge?", options: ["Has she prepared for the challenge?", "Did she prepare for the challenge?", "Has he prepared for the challenge?"], correct: 0 },
    { audio: "Have they developed new technology?", options: ["Did they develop new technology?", "Have they developed new technology.", "Have they develop new technology?"], correct: 1 },
    { audio: "We have not forgotten our goal.", options: ["We did not forget our goal.", "We have not forget our goal.", "We have not forgotten our goal."], correct: 2 },
    { audio: "He has not achieved his goal yet.", options: ["He has not achieved his goal yet.", "He did not achieve his goal yet.", "He has not achieve his goal yet."], correct: 0 },
    { audio: "You should study every day.", options: ["You must study every day.", "You should study every day.", "You could study every day."], correct: 1 },
    { audio: "We must protect the environment.", options: ["We should protect the environment.", "We can protect the environment.", "We must protect the environment."], correct: 2 },
    { audio: "He would like a new challenge.", options: ["He would like a new challenge.", "He should like a new challenge.", "He will like a new challenge."], correct: 0 },
    { audio: "This task is easier than the last one.", options: ["This task is easiest than the last one.", "This task is easier than the last one.", "This task was easier than the last one."], correct: 1 },
    { audio: "It is the most important decision.", options: ["It is the more important decision.", "It is a very important decision.", "It is the most important decision."], correct: 2 }
  ],
  B2: [
    { audio: "The research was completed yesterday.", options: ["The research is completed yesterday.", "The research was completed yesterday.", "The research had completed yesterday."], correct: 1 },
    { audio: "The evidence was analyzed carefully.", options: ["The evidence was analyzed carefully.", "The evidence analyzed carefully.", "The evidence has analyzed carefully."], correct: 0 },
    { audio: "New technology is used in many schools.", options: ["New technology was used in many schools.", "New technology uses in many schools.", "New technology is used in many schools."], correct: 2 },
    { audio: "The project was developed by teachers.", options: ["The project developed by teachers.", "The project was developed by teachers.", "The project had developed by teachers."], correct: 1 },
    { audio: "The results were published last week.", options: ["The results were published last week.", "The results published last week.", "The results are published last week."], correct: 0 },
    { audio: "The lesson was explained by the teacher.", options: ["The lesson explained the teacher.", "The lesson was explain by the teacher.", "The lesson was explained by the teacher."], correct: 2 },
    { audio: "The book was written by a famous author.", options: ["The book was written by a famous author.", "The book wrote a famous author.", "The book has written by a famous author."], correct: 0 },
    { audio: "The decision was made by the manager.", options: ["The decision made the manager.", "The decision was make by the manager.", "The decision was made by the manager."], correct: 2 },
    { audio: "The problem was solved quickly.", options: ["The problem was solved quickly.", "The problem solved quickly.", "The problem is solved quickly."], correct: 0 },
    { audio: "The information was shared with everyone.", options: ["The information shared with everyone.", "The information was shared with everyone.", "The information has shared with everyone."], correct: 1 },
    { audio: "The room was cleaned by the students.", options: ["The room was cleaned by the students.", "The room cleaned the students.", "The room is cleaned by the students."], correct: 0 },
    { audio: "The task was completed on time.", options: ["The task completed on time.", "The task was complete on time.", "The task was completed on time."], correct: 2 },
    { audio: "The document was reviewed by the teacher.", options: ["The document was reviewed by the teacher.", "The document reviewed by the teacher.", "The document is reviewed by the teacher."], correct: 0 },
    { audio: "The system was updated yesterday.", options: ["The system updated yesterday.", "The system was updated yesterday.", "The system has updated yesterday."], correct: 1 },
    { audio: "The message was sent to all students.", options: ["The message sent to all students.", "The message was send to all students.", "The message was sent to all students."], correct: 2 },
    { audio: "The house was built in 2005.", options: ["The house was built in 2005.", "The house built in 2005.", "The house has built in 2005."], correct: 0 },
    { audio: "The car was repaired by the mechanic.", options: ["The car repaired the mechanic.", "The car was repaired by the mechanic.", "The car is repaired by the mechanic."], correct: 1 },
    { audio: "The exam was prepared by the school.", options: ["The exam was prepared by the school.", "The exam prepared the school.", "The exam has prepared by the school."], correct: 0 },
    { audio: "The report was submitted today.", options: ["The report submitted today.", "The report is submit today.", "The report was submitted today."], correct: 2 },
    { audio: "The mistake was corrected immediately.", options: ["The mistake was corrected immediately.", "The mistake corrected immediately.", "The mistake is corrected immediately."], correct: 0 },
    { audio: "The student who studied hard passed the exam.", options: ["The student which studied hard passed the exam.", "The student who studied hard passed the exam.", "The student whom studied hard passed the exam."], correct: 1 },
    { audio: "The teacher who helped me was very kind.", options: ["The teacher who helped me was very kind.", "The teacher which helped me was very kind.", "The teacher whose helped me was very kind."], correct: 0 },
    { audio: "The book that I read was interesting.", options: ["The book who I read was interesting.", "The book where I read was interesting.", "The book that I read was interesting."], correct: 2 },
    { audio: "The school where I studied is very big.", options: ["The school where I studied is very big.", "The school which I studied is very big.", "The school that I studied is very big."], correct: 0 },
    { audio: "The woman who lives next door is my neighbor.", options: ["The woman which lives next door is my neighbor.", "The woman who lives next door is my neighbor.", "The woman whose lives next door is my neighbor."], correct: 1 },
    { audio: "The man who called you is waiting.", options: ["The man who called you is waiting.", "The man which called you is waiting.", "The man whom called you is waiting."], correct: 0 },
    { audio: "The place where we met is far away.", options: ["The place which we met is far away.", "The place that we met is far away.", "The place where we met is far away."], correct: 2 },
    { audio: "The students who arrived early are inside.", options: ["The students who arrived early are inside.", "The students which arrived early are inside.", "The students whose arrived early are inside."], correct: 0 },
    { audio: "The idea that you suggested is good.", options: ["The idea who you suggested is good.", "The idea that you suggested is good.", "The idea where you suggested is good."], correct: 1 },
    { audio: "The project that we finished is important.", options: ["The project where we finished is important.", "The project who we finished is important.", "The project that we finished is important."], correct: 2 },
    { audio: "Furthermore, the results were positive.", options: ["Furthermore, the results were positive.", "Nevertheless, the results were positive.", "Consequently, the results were positive."], correct: 0 },
    { audio: "Nevertheless, the problem remained.", options: ["Therefore, the problem remained.", "Nevertheless, the problem remained.", "Moreover, the problem remained."], correct: 1 },
    { audio: "Consequently, the situation improved.", options: ["Furthermore, the situation improved.", "However, the situation improved.", "Consequently, the situation improved."], correct: 2 },
    { audio: "Despite the difficulty, we succeeded.", options: ["Despite the difficulty, we succeeded.", "Although the difficulty, we succeeded.", "However the difficulty, we succeeded."], correct: 0 },
    { audio: "Although the task was hard, we finished it.", options: ["Despite the task was hard, we finished it.", "Although the task was hard, we finished it.", "Therefore the task was hard, we finished it."], correct: 1 },
    { audio: "However, the result was unexpected.", options: ["Moreover, the result was unexpected.", "Consequently, the result was unexpected.", "However, the result was unexpected."], correct: 2 },
    { audio: "Therefore, the decision was changed.", options: ["Therefore, the decision was changed.", "Nevertheless, the decision was changed.", "Although, the decision was changed."], correct: 0 },
    { audio: "In addition, the teacher explained everything.", options: ["Consequently, the teacher explained everything.", "In addition, the teacher explained everything.", "However, the teacher explained everything."], correct: 1 },
    { audio: "Moreover, the evidence was clear.", options: ["Nevertheless, the evidence was clear.", "Therefore, the evidence was clear.", "Moreover, the evidence was clear."], correct: 2 },
    { audio: "As a result, the project was successful.", options: ["As a result, the project was successful.", "Despite this, the project was successful.", "Furthermore, the project was successful."], correct: 0 }
  ],
  C1: [
    { audio: "The proposal has been carefully evaluated by the committee.", options: ["The proposal was carefully evaluated by the committee.", "The proposal has been carefully evaluated by the committee.", "The proposal had been carefully evaluated by the committee."], correct: 1 },
    { audio: "The findings were considered highly relevant.", options: ["The findings were considered highly relevant.", "The findings considered highly relevant.", "The findings have considered highly relevant."], correct: 0 },
    { audio: "The results have been significantly influenced by external factors.", options: ["The results were significantly influenced by external factors.", "The results had been significantly influenced by external factors.", "The results have been significantly influenced by external factors."], correct: 2 },
    { audio: "The data will be analyzed in greater detail.", options: ["The data will analyze in greater detail.", "The data will be analyzed in greater detail.", "The data would be analyzed in greater detail."], correct: 1 },
    { audio: "The report had been completed before the deadline.", options: ["The report had been completed before the deadline.", "The report has been completed before the deadline.", "The report was completed before the deadline."], correct: 0 },
    { audio: "It is widely acknowledged that education is essential.", options: ["It is widely acknowledging that education is essential.", "It widely acknowledges that education is essential.", "It is widely acknowledged that education is essential."], correct: 2 },
    { audio: "The issue is being addressed by experts.", options: ["The issue is addressed by experts.", "The issue is being addressed by experts.", "The issue has been addressed by experts."], correct: 1 },
    { audio: "The decision has been justified by new evidence.", options: ["The decision has been justified by new evidence.", "The decision was justified by new evidence.", "The decision had been justified by new evidence."], correct: 0 },
    { audio: "The theory was developed over several decades.", options: ["The theory developed over several decades.", "The theory has developed over several decades.", "The theory was developed over several decades."], correct: 2 },
    { audio: "The policy will be implemented next year.", options: ["The policy will implement next year.", "The policy will be implemented next year.", "The policy would be implemented next year."], correct: 1 },
    { audio: "The experiment had been conducted under strict conditions.", options: ["The experiment had been conducted under strict conditions.", "The experiment has been conducted under strict conditions.", "The experiment was conducted under strict conditions."], correct: 0 },
    { audio: "The results are expected to be published soon.", options: ["The results are expecting to be published soon.", "The results expect to be published soon.", "The results are expected to be published soon."], correct: 2 },
    { audio: "The research has been funded by the government.", options: ["The research was funded by the government.", "The research has been funded by the government.", "The research had been funded by the government."], correct: 1 },
    { audio: "The conclusion was drawn after extensive analysis.", options: ["The conclusion was drawn after extensive analysis.", "The conclusion drew after extensive analysis.", "The conclusion has drawn after extensive analysis."], correct: 0 },
    { audio: "The structure is considered highly effective.", options: ["The structure considers highly effective.", "The structure is considering highly effective.", "The structure is considered highly effective."], correct: 2 },
    { audio: "The student whose research was outstanding received an award.", options: ["The student who research was outstanding received an award.", "The student whose research was outstanding received an award.", "The student which research was outstanding received an award."], correct: 1 },
    { audio: "The system, which had been updated recently, improved efficiency.", options: ["The system, which had been updated recently, improved efficiency.", "The system, that had been updated recently, improved efficiency.", "The system, whose had been updated recently, improved efficiency."], correct: 0 },
    { audio: "The environment in which we operate is constantly changing.", options: ["The environment which we operate is constantly changing.", "The environment where in we operate is constantly changing.", "The environment in which we operate is constantly changing."], correct: 2 },
    { audio: "The professor with whom I discussed the topic was very knowledgeable.", options: ["The professor whom I discussed the topic was very knowledgeable.", "The professor with whom I discussed the topic was very knowledgeable.", "The professor with who I discussed the topic was very knowledgeable."], correct: 1 },
    { audio: "The decision to which they referred was controversial.", options: ["The decision to which they referred was controversial.", "The decision which they referred to was controversial.", "The decision to what they referred was controversial."], correct: 0 },
    { audio: "It is essential that the results be carefully interpreted.", options: ["It is essential that the results are carefully interpreted.", "It is essential that the results were carefully interpreted.", "It is essential that the results be carefully interpreted."], correct: 2 },
    { audio: "It is important that the system remain stable.", options: ["It is important that the system remain stable.", "It is important that the system remains stable.", "It is important that the system should remain stable."], correct: 0 },
    { audio: "Had the problem been identified earlier, it could have been avoided.", options: ["If the problem had been identified earlier, it could have been avoided.", "Had the problem been identified earlier, it could have been avoided.", "Had the problem identified earlier, it could have been avoided."], correct: 1 },
    { audio: "Were the data more reliable, the conclusions would be stronger.", options: ["Were the data more reliable, the conclusions would be stronger.", "If the data were more reliable, the conclusions would be stronger.", "Were the data most reliable, the conclusions would be stronger."], correct: 0 },
    { audio: "Not only did the project succeed, but it also exceeded expectations.", options: ["Not only the project succeeded, but it also exceeded expectations.", "Not only did the project succeed, but it also exceed expectations.", "Not only did the project succeed, but it also exceeded expectations."], correct: 2 },
    { audio: "Only after the analysis was completed did we understand the issue.", options: ["Only after the analysis was completed did we understand the issue.", "Only after the analysis completed we understood the issue.", "Only after the analysis was completed we did understand the issue."], correct: 0 },
    { audio: "Such was the complexity of the situation that immediate action was required.", options: ["Such the complexity of the situation was that immediate action was required.", "Such was the complexity of the situation that immediate action was required.", "So was the complexity of the situation that immediate action was required."], correct: 1 },
    { audio: "The more we study, the more we understand the topic.", options: ["The more we study, the more we understand the topic.", "More we study, more we understand the topic.", "The most we study, the most we understand the topic."], correct: 0 },
    { audio: "No sooner had the meeting started than the problem was raised.", options: ["No sooner the meeting had started than the problem was raised.", "No sooner had the meeting started when the problem was raised.", "No sooner had the meeting started than the problem was raised."], correct: 2 },
    { audio: "Hardly had the results been published when criticism began.", options: ["Hardly had the results been published when criticism began.", "Hardly the results had been published when criticism began.", "Hardly had the results been published than criticism began."], correct: 0 },
    { audio: "The extent to which the project succeeded is still debated.", options: ["The extent which the project succeeded is still debated.", "The extent to which the project succeeded is still debated.", "The extent where the project succeeded is still debated."], correct: 1 },
    { audio: "What matters most is how the information is interpreted.", options: ["What matters most is how the information is interpreted.", "That matters most is how the information is interpreted.", "Which matters most is how the information is interpreted."], correct: 0 },
    { audio: "It cannot be denied that the results are significant.", options: ["It cannot deny that the results are significant.", "It cannot be denying that the results are significant.", "It cannot be denied that the results are significant."], correct: 2 },
    { audio: "There is no doubt that the situation has improved.", options: ["There is no doubt that the situation has improved.", "There is not doubt that the situation has improved.", "It has no doubt that the situation has improved."], correct: 0 },
    { audio: "The possibility that the theory is incorrect cannot be ignored.", options: ["The possibility which the theory is incorrect cannot be ignored.", "The possibility that the theory is incorrect cannot be ignored.", "The possibility where the theory is incorrect cannot be ignored."], correct: 1 },
    { audio: "Furthermore, the implications of this study are significant.", options: ["Furthermore, the implications of this study are significant.", "Nevertheless, the implications of this study are significant.", "Consequently, the implications of this study are significant."], correct: 0 },
    { audio: "Nevertheless, the evidence remains inconclusive.", options: ["Therefore, the evidence remains inconclusive.", "Nevertheless, the evidence remains inconclusive.", "Moreover, the evidence remains inconclusive."], correct: 1 },
    { audio: "Consequently, further research is required.", options: ["Furthermore, further research is required.", "However, further research is required.", "Consequently, further research is required."], correct: 2 },
    { audio: "In contrast, previous studies reached different conclusions.", options: ["In contrast, previous studies reached different conclusions.", "Alternatively, previous studies reached different conclusions.", "Moreover, previous studies reached different conclusions."], correct: 0 },
    { audio: "As a result, policy changes were introduced.", options: ["Despite this, policy changes were introduced.", "As a result, policy changes were introduced.", "Furthermore, policy changes were introduced."], correct: 1 },
    { audio: "In addition to this, several factors must be considered.", options: ["In addition to this, several factors must be considered.", "Consequently to this, several factors must be considered.", "However to this, several factors must be considered."], correct: 0 },
    { audio: "From a theoretical perspective, the model is valid.", options: ["Of a theoretical perspective, the model is valid.", "By a theoretical perspective, the model is valid.", "From a theoretical perspective, the model is valid."], correct: 2 },
    { audio: "It is worth noting that the approach varies across contexts.", options: ["It is worth noting that the approach varies across contexts.", "It is worth note that the approach varies across contexts.", "It worths noting that the approach varies across contexts."], correct: 0 },
    { audio: "The extent of the problem has not yet been fully understood.", options: ["The extent of the problem has not yet been fully understand.", "The extent of the problem has not yet been fully understood.", "The extent of the problem did not yet fully understood."], correct: 1 },
    { audio: "This suggests that further investigation is necessary.", options: ["This suggests that further investigation is necessary.", "This suggest that further investigation is necessary.", "This is suggesting that further investigation is necessary."], correct: 0 },
    { audio: "The study highlights the importance of early intervention.", options: ["The study highlights the importance of early intervention.", "The study highlight the importance of early intervention.", "The study is highlight the importance of early intervention."], correct: 0 },
    { audio: "The findings contribute to a better understanding of the issue.", options: ["The findings contribute to a better understanding of the issue.", "The findings contributes to a better understanding of the issue.", "The findings contribute to a best understanding of the issue."], correct: 0 },
    { audio: "There is growing evidence that supports this claim.", options: ["There is growing evidence that supports this claim.", "There are growing evidence that supports this claim.", "It has growing evidence that supports this claim."], correct: 0 },
    { audio: "It is increasingly clear that changes are required.", options: ["It is increasingly clear that changes are required.", "It is increase clear that changes are required.", "It is increasingly clearly that changes are required."], correct: 0 },
    { audio: "Ultimately, the success of the project depends on collaboration.", options: ["Ultimately, the success of the project depends on collaboration.", "Ultimately, the success of the project depend on collaboration.", "Ultimately, the success of the project is depend on collaboration."], correct: 0 }
  ]
};

// ==========================================
// 2. LÓGICA DO QUIZ
// ==========================================
let currentLQuizLevel = "";
let currentLQuestionIndex = 0;
let currentLScore = 0;
let currentLAudioText = "";
let currentLCorrectIndex = 0;

function startListeningQuiz(level) {
  currentLQuizLevel = level;
  currentLQuestionIndex = 0;
  currentLScore = 0;

  document.getElementById("quiz-level-controls").style.display = "none";
  document.getElementById("l-quiz-result").style.display = "none";
  document.getElementById("listening-quiz-container").style.display = "block";

  loadListeningQuestion();
}

function loadListeningQuestion() {
  const questionData = listeningQuizData[currentLQuizLevel][currentLQuestionIndex];
  currentLAudioText = questionData.audio;
  currentLCorrectIndex = questionData.correct;

  document.getElementById("l-quiz-progress").innerText = `Question ${currentLQuestionIndex + 1}/${listeningQuizData[currentLQuizLevel].length}`;
  document.getElementById("l-quiz-score").innerText = `Score: ${currentLScore}`;

  const optionsContainer = document.getElementById("l-quiz-options");
  optionsContainer.innerHTML = ""; // Limpa opções anteriores

  questionData.options.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "l-option-btn";
    btn.innerText = optText;
    btn.onclick = () => checkListeningAnswer(index, btn);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("l-next-btn").style.display = "none";

  // Opcional: tocar o áudio automaticamente ao carregar a questão
  // playQuizAudio();
}

function playQuizAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(currentLAudioText);
    msg.lang = "en-US";
    msg.rate = 0.85; // Velocidade ideal para dictation/listening didático
    window.speechSynthesis.speak(msg);
  }
}

function checkListeningAnswer(selectedIndex, clickedBtn) {
  const buttons = document.querySelectorAll(".l-option-btn");

  // Desabilita todos os botões após o clique
  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === currentLCorrectIndex) {
    clickedBtn.classList.add("l-correct");
    currentLScore++;
    document.getElementById("l-quiz-score").innerText = `Score: ${currentLScore}`;
  } else {
    clickedBtn.classList.add("l-wrong");
    // Mostra qual era a correta
    buttons[currentLCorrectIndex].classList.add("l-correct");
  }

  document.getElementById("l-next-btn").style.display = "block";
}

function nextListeningQuestion() {
  currentLQuestionIndex++;

  if (currentLQuestionIndex < listeningQuizData[currentLQuizLevel].length) {
    loadListeningQuestion();
  } else {
    showListeningResult();
  }
}

function showListeningResult() {
  document.getElementById("listening-quiz-container").style.display = "none";
  document.getElementById("l-quiz-result").style.display = "block";

  const totalQuestions = listeningQuizData[currentLQuizLevel].length;
  const percentage = (currentLScore / totalQuestions) * 100;
  document.getElementById("l-final-score-text").innerHTML = `
    🎉 Quiz Completed!<br><br>
    Your Score: <strong>${currentLScore} / ${totalQuestions}</strong><br>
    <span style="font-size: 1.2rem;">${percentage.toFixed(0)}%</span>
  `;
}
