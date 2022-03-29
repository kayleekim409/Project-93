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
var username = localStorage.getItem("username");

function addRoom() {
    var roomname = document.getElementById("roomname").value;
    localStorage.setItem("roomname", roomname);
    firebase.database().ref("/").child(roomname).update({
        purpose: "adding the Room"
    });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room_names = " + Room_names);
            var row = "<div class='room_name' id = " + Room_names + " onclick='redirecttoroomname(this.id)'>#" +
                Room_names + "</div><hr>";
            document.getElementById("output").innerHTML = row;
        });
    });
}

function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}
getData();

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}