

var playerScore1 = 0;
var playerScore2 = 0;
var randNum = 0;
var setScore = 20;

function restart(){
        
        
        $("#roll-1").show();
        $("#hold-1").show();
        $("#roll-2").show();
        $("#hold-2").show();
        
    
        document.getElementById("player1").value="";
        document.getElementById("player2").value="";
        document.getElementById("player-1-name").innerHTML="Player 1";
        document.getElementById("player-2-name").innerHTML="Player 2";
        document.getElementById("score1").innerHTML="0";
        document.getElementById("score2").innerHTML="0";
        playerScore1 = 0;
        playerScore2 = 0;
        
        

}


document.getElementById("setscore").addEventListener("click",function(){
    
    setScore = prompt("Please set a goal"," ");
    
})


document.getElementById("restart").addEventListener("click",restart);

document.getElementById("instruction").addEventListener("click",function(){
    var string="Roll the dice and see  who get the set number first, hold the number if you decide to stop you round.";
    alert(string);
});


document.getElementById("btn1").addEventListener("click", function(){
    var name1 = document.getElementById("player1").value;
    document.getElementById("player-1-name").innerHTML="<h3>"+name1+"</h3>";
    
})


document.getElementById("roll-1").addEventListener("click",function(){
      
      randNum = Math.floor(Math.random()*6)+1;                                       
                                                   
      document.getElementById("diceNum").innerHTML=randNum; 
    
      if(randNum != 1){
      playerScore1 += randNum;
      }else{
        playerScore1 = 0;                    
      }
    
       document.getElementById("score1").innerHTML= playerScore1;
    
       if(playerScore1>=setScore){
           
            document.getElementById("player-1-name").innerHTML="Winner";
            $("#roll-1").toggle();
            $("#hold-1").toggle();
            $("#roll-2").toggle();
            $("#hold-2").toggle();
       }
                                                   
})


document.getElementById("hold-1").addEventListener("click", function(){
    
     //document.getElementById("score").innerHTML= palyerScore;
     document.getElementById("div1").classList.toggle("active");
     document.getElementById("div2").classList.toggle("active");

})


//------for player 2


document.getElementById("btn2").addEventListener("click", function(){
    var name2 = document.getElementById("player2").value;
    document.getElementById("player-2-name").innerHTML="<h3>"+name2+"</h3>";
    
})


document.getElementById("roll-2").addEventListener("click",function(){
      
      randNum = Math.floor(Math.random()*6)+1;                                       
                                                   
      document.getElementById("diceNum").innerHTML=randNum; 
    
      if(randNum != 1){
      playerScore2 += randNum;
      }else{
        playerScore2 = 0;                    
      }
    
       document.getElementById("score2").innerHTML= playerScore2;
    
      if(playerScore2>=setScore){
           
            document.getElementById("player-2-name").innerHTML="Winner";
            $("#roll-1").toggle();
            $("#hold-1").toggle();
            $("#roll-2").toggle();
            $("#hold-2").toggle();
       }
                                                   
})


document.getElementById("hold-2").addEventListener("click", function(){
    
     //document.getElementById("score").innerHTML= palyerScore;
     document.getElementById("div1").classList.toggle("active");
     document.getElementById("div2").classList.toggle("active");
     
     

})

















