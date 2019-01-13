function openSesame() {
  document.getElementById('truediv').classList = 'visible';
  document.getElementById('signinsuccess').classList = 'hidden';
  document.getElementById('googlesignin').classList = 'hidden';
}





function openPage(evt, pageName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSite(evt, siteName) {
  var l, tabcontente, tablinkse;

  tabcontent = document.getElementsByClassName("tabcontente");
  for (l = 0; l < tabcontente.length; l++) {
    tabcontente[l].style.display = "none";
  }
  tablinkse = document.getElementsByClassName("tablinkse");
  for (l = 0; l < tablinkse.length; l++) {
    tablinkse[l].className = tablinkse[l].className.replace(" active", "");
  }
  document.getElementById(siteName).style.display = "block";
  evt.currentTarget.className += " active";
}

