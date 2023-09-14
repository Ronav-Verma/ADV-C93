
const firebaseConfig = {
      apiKey: "AIzaSyC_hcci3Qoh-8yTzSjbhOx6wGocipWi4gY",
      authDomain: "letschat-web-app---1-bac6c.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-bac6c-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-bac6c",
      storageBucket: "letschat-web-app---1-bac6c.appspot.com",
      messagingSenderId: "546179752821",
      appId: "1:546179752821:web:c5bc509f6dc4d3acc4e93c" 

};

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room() {

      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_room.html"

      firebase.database().ref("/").child(room_name).update({
             purpose: "Adding Room Name"
      });

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
