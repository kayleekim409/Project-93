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
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
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