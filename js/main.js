function openSesame() {
  document.getElementById('truediv').classList = 'visible';
  document.getElementById('signinsuccess').classList = 'hidden';
  document.getElementById('googlesignin').classList = 'hidden';
  document.getElementById('body').classList = 'bgimg';
}

function trackIP() {}



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
  var l, tabcontent1, tablink;

  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (l = 0; l < tabcontent1.length; l++) {
    tabcontent1[l].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (l = 0; l < tablinks1.length; l++) {
    tablinks1[l].className = tablinks1[l].className.replace(" active", "");
  }
  document.getElementById(siteName).style.display = "block";
  evt.currentTarget.className += " active";
}

