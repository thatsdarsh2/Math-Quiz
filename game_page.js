player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player-1_name").innerHTML = player1_name + " : ";
document.getElementById("player-2_name").innerHTML = player2_name + " : ";

document.getElementById("player-1_score").innerHTML = player1_score;
document.getElementById("player-2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function Send(){
    Num1 = document.getElementById("Num1").value
    Num2 = document.getElementById("Num2").value
    actual_ans = parseInt(Num1)*parseInt(Num2);
    console.log(actual_ans);

    question_num = "<h4>"+Num1+" X "+Num2+"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_num + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
}

question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value
    if(get_answer == actual_ans){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player-1_score").innerHTML = player1_score;
        }else{
            player2_score = player2_score + 1;
            document.getElementById("player-2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Answer Turn: " + player2_name;
    }else{
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Answer Turn: " + player1_name;
    }
document.getElementById("output").innerHTML = "";
}

