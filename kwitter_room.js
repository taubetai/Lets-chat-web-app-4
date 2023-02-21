
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCiZPDwbgc_fbNSlONWH95qeqcrZ8z0zzo",
      authDomain: "kwitter-4b6fb.firebaseapp.com",
      databaseURL: "https://kwitter-4b6fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b6fb",
      storageBucket: "kwitter-4b6fb.appspot.com",
      messagingSenderId: "1086506223074",
      appId: "1:1086506223074:web:702957e32f8d4c350425bb",
      measurementId: "G-XZ9HR449CT"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   


   user_name = localStorage.getItem("user name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class= 'room_name'room id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"   
      });
      localstorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
  window.location ="index.html";
}
