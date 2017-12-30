var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', () => {
  var naam_gebruiker = document.getElementById('naam').value;
  localStorage.setItem("naam",naam_gebruiker)
  window.open("/chat/index.html");
});

var naam = document.getElementById('naam').value;
