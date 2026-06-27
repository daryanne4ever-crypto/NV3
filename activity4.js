const phrases = [
  { text: 'What time is breakfast?', tips: { breakfast: { ipa: '/ˈbrek.fəst/', tip: "Keep the first syllable strong: BREK-fuhst." } } },
  { text: 'Where is the gym?', tips: { where: { ipa: '/wer/', tip: "Start with a rounded /w/ sound." }, gym: { ipa: '/dʒɪm/', tip: "Use the soft J sound, like 'jam'." } } },
  { text: 'When does the restaurant close?', tips: { restaurant: { ipa: '/ˈres.tə.rɑːnt/', tip: "Stress the first syllable: RES-tuh-rahnt." }, close: { ipa: '/kloʊz/', tip: "End with a voiced /z/ sound." } } },
  { text: 'How much is the room?', tips: { much: { ipa: '/mʌtʃ/', tip: "Use the short /ʌ/ sound." }, room: { ipa: '/ruːm/', tip: "Stretch the long /uː/ sound." } } },
  { text: 'How can I call a taxi?', tips: { taxi: { ipa: '/ˈtæk.si/', tip: "Use the short /æ/ sound in the first syllable." } } },
  { text: 'Can I have another towel?', tips: { another: { ipa: '/əˈnʌð.ər/', tip: "The middle sound is /ð/, like 'this'." }, towel: { ipa: '/ˈtaʊ.əl/', tip: "Say it in two parts: TOW-uhl." } } },
  { text: 'Could you help me?', tips: { could: { ipa: '/kʊd/', tip: "Use the short /ʊ/ sound, not /uː/." }, help: { ipa: '/help/', tip: "Clearly pronounce the final /p/." } } },
  { text: 'What is the Wi-Fi password?', tips: { password: { ipa: '/ˈpæs.wɝːd/', tip: "Stress PAS and keep the final /d/." } } },
];

let currentIndex = 0;
let recognition;
let isRecording = false;
let lastTranscript = '';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function normalize(text) {
  return text.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/).filter(Boolean);
}

function compareWords(target, heard) {
  const targetWords = normalize(target);
  const heardWords = normalize(heard);
  return targetWords.map((word, index) => ({ word, heard: heardWords[index] || '', correct: heardWords[index] === word }));
}

function renderFeedback(transcript) {
  const phrase = phrases[currentIndex];
  const comparison = compareWords(phrase.text, transcript);
  const correctCount = comparison.filter((item) => item.correct).length;
  const score = Math.round((correctCount / comparison.length) * 100);
  const mistakes = comparison.filter((item) => !item.correct);

  document.getElementById('transcriptionSection').style.display = 'block';
  document.getElementById('transcriptionBox').innerHTML = comparison.map((item) => `<span class="word ${item.correct ? 'correct' : 'incorrect'}">${item.heard || '—'}</span>`).join(' ');
  document.getElementById('scoreSection').style.display = 'block';
  document.getElementById('scoreNumber').textContent = score;
  document.getElementById('scoreMessage').textContent = score >= 80 ? 'Great pronunciation!' : score >= 40 ? 'Good effort. Review the highlighted words.' : 'Keep practicing. Focus on each word slowly.';

  const errorsContainer = document.getElementById('errorsContainer');
  errorsContainer.innerHTML = mistakes.length ? mistakes.map((item) => `<p>O sistema ouviu "${item.heard || 'nothing'}" em vez de "${item.word}".</p>`).join('') : '<p>No pronunciation issues detected.</p>';
  document.getElementById('errorAnalysisSection').style.display = 'block';

  const tipsContainer = document.getElementById('tipsContainer');
  tipsContainer.innerHTML = mistakes.map((item) => phrase.tips[item.word] ? `<p><strong>Dica para '${item.word}':</strong> ${phrase.tips[item.word].tip} Transcrição fonética: ${phrase.tips[item.word].ipa}</p>` : `<p><strong>Dica para '${item.word}':</strong> Speak this word slowly and clearly.</p>`).join('') || '<p>No extra tips needed.</p>';
  document.getElementById('pronunciationTipsSection').style.display = 'block';
  document.getElementById('submitActivityBtn').disabled = false;
  localStorage.setItem('nv3_activity4_last_score', String(score));
}

function setRecordingState(recording) {
  isRecording = recording;
  document.getElementById('microphoneBtn').classList.toggle('recording', recording);
  document.querySelector('.mic-text').textContent = recording ? 'Gravando... Clique para pausar' : 'Click to Record';
  document.getElementById('recordingStatus').textContent = recording ? 'Recording...' : 'Processing feedback...';
}

function startRecording() {
  if (!SpeechRecognition) {
    const transcript = prompt('Speech recognition is unavailable. Type what you said:') || '';
    renderFeedback(transcript);
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.onresult = (event) => { lastTranscript = event.results[0][0].transcript; };
  recognition.onend = () => { setRecordingState(false); if (lastTranscript) renderFeedback(lastTranscript); };
  lastTranscript = '';
  recognition.start();
  setRecordingState(true);
}

function stopRecording() {
  if (recognition && isRecording) recognition.stop();
}

function updatePhrase() {
  document.getElementById('currentPhrase').textContent = phrases[currentIndex].text;
  document.getElementById('phraseCounter').textContent = `Phrase ${currentIndex + 1} of ${phrases.length}`;
  document.getElementById('progressFill').style.width = `${((currentIndex + 1) / phrases.length) * 100}%`;
}

function status(score) { return score >= 80 ? 'Completed' : score >= 40 ? 'Needs Review' : 'Urgent Review'; }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startPracticeBtn').addEventListener('click', () => { updatePhrase(); document.getElementById('nextPhraseBtn').disabled = false; });
  document.getElementById('nextPhraseBtn').addEventListener('click', () => { currentIndex = (currentIndex + 1) % phrases.length; updatePhrase(); });
  document.getElementById('microphoneBtn').addEventListener('click', () => isRecording ? stopRecording() : startRecording());
  document.getElementById('submitActivityBtn').addEventListener('click', () => {
    const score = Number(localStorage.getItem('nv3_activity4_last_score') || 0);
    localStorage.setItem('nv3_activity_activity4_speaking', JSON.stringify({ id: 'activity4_speaking', name: 'Activity 4: Speaking Practice', url: 'activity4.html', percentage: score, status: status(score), completedAt: new Date().toISOString() }));
    alert(`Activity 4 saved with ${score}% (${status(score)}).`);
  });
});
