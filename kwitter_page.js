//YOUR FIREBASE LINKS
var firebaseConfig = {

    apiKey: "AIzaSyA2Z7r0CR7e5iv1OOrcUy42kLhcO047Arg",

    authDomain: "kaylee-9822b.firebaseapp.com",

    databaseURL: "https://kaylee-9822b-default-rtdb.firebaseio.com",

    projectId: "kaylee-9822b",

    storageBucket: "kaylee-9822b.appspot.com",

    messagingSenderId: "588952991775",

    appId: "1:588952991775:web:f11f75ad1ddbe5d4273d2a",

    measurementId: "G-G7ZVSX53ZT"

};
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + roomname).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

var roomname = localStorage.getItem("roomname");
var username = localStorage.getItem("username");

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}