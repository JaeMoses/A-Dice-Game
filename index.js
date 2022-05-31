



var button = document.getElementById("roll-button");

function rollDice (){

    var dis=Math.floor(Math.random() * 6) ;
    if (dis  === 0) {
        document.getElementById("img1").setAttribute("src","images/dice1.png"); 
    }
    if (dis  === 1) {
        document.getElementById("img1").setAttribute("src","images/dice2.png");
    }
    if (dis  === 2) {
        document.getElementById("img1").setAttribute("src","images/dice3.png");
    }   
    if (dis  === 3) {
        document.getElementById("img1").setAttribute("src","images/dice4.png");
    }
    if (dis  === 4) {
        document.getElementById("img1").setAttribute("src","images/dice5.png");
    }
    if (dis  === 5) {
        document.getElementById("img1").setAttribute("src","images/dice6.png");
    }
    
    var dis2=Math.floor(Math.random() * 6) ;

    if (dis2  === 0) {
        document.getElementById("img2").setAttribute("src","images/dice1.png");
    }
    if (dis2  === 1) {
    document.getElementById("img2").setAttribute("src","images/dice2.png");
    }
    if (dis2  === 2) {
        document.getElementById("img2").setAttribute("src","images/dice3.png");
    }   
    if (dis2  === 3) {
        document.getElementById("img2").setAttribute("src","images/dice4.png");
    }
    if (dis2  === 4) {
        document.getElementById("img2").setAttribute("src","images/dice5.png");
    }
    if (dis2  === 5) {
        document.getElementById("img2").setAttribute("src","images/dice6.png");
    }

    if ( dis > dis2 ){
        document.getElementById("msg").innerHTML = "Player 1 Won !!!!!!!";
    } else if (dis < dis2){
        
        document.getElementById("msg").innerHTML = "Player 2 Won !!!!!";
    }else{
        document.getElementById("msg").innerHTML = "DRAW Spin Again"
    }
    
}

button.addEventListener("click", rollDice);



//  alert(dis)