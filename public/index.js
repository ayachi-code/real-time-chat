//Als je op knop doe_mee drukt
var knop_doe_mee = document.getElementById('doe_mee').addEventListener('click', (event) => {
  var naam_gebruiker = document.getElementById('naam').value;
  //Als naam is niet leeg
  if (naam_gebruiker != "") {
    localStorage.setItem("naam",naam_gebruiker)
    //Je gaat naar de chat
    window.open("/chat/index.html");
    //Anders verschijnt er een p tag met type je naa,
  } else {
    document.getElementById('type_je_naam_gewoon').innerHTML = "Type een naam";
  }
});
