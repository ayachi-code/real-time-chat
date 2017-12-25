var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', () => {
  var naam = document.getElementById('naam').value;
  localStorage.setItem("naam",naam)
  window.open("/chat/index.html");
});
