var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', () => {
  var naam_gebruiker = document.getElementById('naam').value;
  var verander_tag = naam_gebruiker.replace("<","''");
  if (naam_gebruiker != "") {
    localStorage.setItem("naam",verander_tag)
    window.open("/chat/index.html");
  } else {
    document.getElementById('waarschuwing').innerHTML = "Type een naam...";
  }

});
