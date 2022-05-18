function addUser(){

    player1_name = document.getElementById("player-1_NameInput").value;
    player2_name = document.getElementById("player-2_NameInput").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}