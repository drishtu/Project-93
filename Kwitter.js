function addUser(){

    user = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "Kwitter_room.html";
    
    }