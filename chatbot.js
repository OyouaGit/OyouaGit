document.addEventListener("DOMContentLoaded", function() {
  const chatbotContainer = document.getElementById("chatbot-container");
  const openChatbot = document.getElementById("open-chatbot");
  const closeChatbot = document.getElementById("close-chatbot");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const questions = {
    "etudes": [
      { text: "Quel est ton domaine d’étude ?", response: "J'étudie l'économie avec une spécialisation finance." },
      { text: "Quelle université as-tu fréquentée ?", response: "J’ai étudié à Tours." }
    ],
    "projets": [
      { text: "Quels sont tes projets en économie ?", response: "J’ai travaillé sur des analyses financières et des études électorales." },
      { text: "Où puis-je voir tes projets ?", response: "Mes projets sont visibles dans la section 'Projets' de mon site." }
    ],
    "contact": [
      { text: "Comment puis-je te contacter ?", response: "Tu peux m’envoyer un e-mail à : <a href='mailto:ingrid.oyoua@gmail.com'>ingrid.oyoua@gmail.com</a>" }
    ]
  };

  function showQuestions(category) {
    chatbotMessages.innerHTML = "";
    questions[category].forEach(q => {
      let btn = document.createElement("button");
      btn.classList.add("chatbot-btn");
      btn.innerText = q.text;
      btn.onclick = () => showResponse(q.response);
      chatbotMessages.appendChild(btn);
    });
  }

  function showResponse(response) {
    chatbotMessages.innerHTML = `<p>${response}</p>`;
  }

  openChatbot.addEventListener("click", function() {
    chatbotContainer.style.display = "block";
    openChatbot.style.display = "none";
  });

  closeChatbot.addEventListener("click", function() {
    chatbotContainer.style.display = "none";
    openChatbot.style.display = "block";
  });
});
