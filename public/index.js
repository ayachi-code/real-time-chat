var naam = document.getElementById('naam').value;

localStorage.setItem("naam",naam)

var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', () => {
  window.open("/chat/index.html");
});
