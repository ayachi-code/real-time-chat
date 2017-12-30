var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', () => {
  var naam_gebruiker = document.getElementById('naam').value;
  if (naam_gebruiker != "") {
    localStorage.setItem("naam",naam_gebruiker)
    window.open("/chat/index.html");
  } else {
    document.getElementById('waarschuwing').innerHTML = "Type een naam...";
  }

});
