let sites = {
	"creatur": "https://www.creatur.io/",
	"paper": "https://www.paper-io.com/",
	"hole": "https://hole-io.com/",
	"worm": "https://wormate.io/",
	"silver": "https://silvergames.com/",
	"rider": "https://www.silvergames.com/en/rider-2/iframe",
	"blank": "about:blank",
	"bing": "https://bing.com/",
};

function mute() {
	var tomute = document.querySelectorAll('.site').muted;
	tomute.audio.muted = true;
}

function openLinks() {
	var atags = document.querySelectorAll('a');
	var attrib = document.createAttribute('target');
	attrib.value = "_blank";
	atags.setAttributeNode(attrib); 
}
/*
function embed() {
	var url, h, w;
    url = prompt("Website url"),
    w = '-webkit-fill-available';
    h = '80vmin';
    prepareFrame()
}

function prepareFrame() {
	var url, h, w;
    var ifrm = document.getElementById('embedfrm');
    ifrm.setAttribute("src", url),
    document.body.appendChild(ifrm)
    ifrm.classList = 'visible';
}
*/
function tempYT() {
	var ytlink = prompt('Paste a youtube embed link:', 'https://youtube.com/embed/[video-id]')
}

function openSesame() {
	/*var user = firebase.auth().currentUser;

	let name = prompt("Choose a username:");
	user.updateProfile({
          displayName: name
    }).then(function() {
      openRealSesame();
    }).catch(function(error) {
      alert("Something went wrong. Please try again.");
    });*/
	document.getElementById('truediv').classList = 'visible';
	document.getElementById('signinsuccess').classList = 'hidden';
	document.getElementById('googlesignin').classList = 'hidden';
	/*document.getElementById('body').classList = 'bgimg';*/
}
/*
function openRealSesame() {
	document.getElementById('truediv').classList = 'visible';
	document.getElementById('signinsuccess').classList = 'hidden';
	document.getElementById('googlesignin').classList = 'hidden';
}*/

function toggle_night_mode() {
	set_night_mode(!config['night_mode']);
}

function set_night_mode(state) {
  if (state) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
  config['night_mode'] = state;
  localStorage.thebutton_config = JSON.stringify(config);
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
	var l, tabcontent1, tablink;

	tabcontent1 = document.getElementsByClassName("tabcontent1");
	for (l = 0; l < tabcontent1.length; l++) {
		tabcontent1[l].style.display = "none";
		/* document.getElementById(Object.keys(sites)[l]).src = "";*/
	}

	tablinks1 = document.getElementsByClassName("tablinks1");
	for (l = 0; l < tablinks1.length; l++) {
		tablinks1[l].className = tablinks1[l].className.replace(" active", "");
	}

	document.getElementById(siteName).parentElement.style.display = "block";

	document.getElementById(siteName).src = sites[siteName];
	evt.currentTarget.className += " active";
}
