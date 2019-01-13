var config = {
                apiKey: "AIzaSyDhfQblwsSixSQVA-Lp1b6STfmsKMBFWpk",
                authDomain: "unblock-web-project.firebaseapp.com",
                databaseURL: "https://unblock-web-project.firebaseio.com",
                projectId: "unblock-web-project",
                storageBucket: "unblock-web-project.appspot.com",
                messagingSenderId: "616494762242"
            };
            firebase.initializeApp(config);

let auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if (user) {
        signedIn();
    }
    else {
        signedOut();
    }
});

function signedIn() {
  document.getElementById('main-div').classList = 'hidden';
  document.getElementById('decoy-div').classList = 'visible';
  document.getElementById("login-div").classList = 'hidden';
  /*document.getElementById('signedOutNotif').style.display = "none";*/
}

function signedOut() {
  alert("Sign in with Google");
  /*document.getElementById('signedOutNotif').style.display = "block";*/
}
  
