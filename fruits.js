var playing=false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries','grapes','mango', 'orange', 'peach','pear', 'watermelon'];
$(function(){
   $("#startorreset").click(function(){
      if(playing==true){
        location.reload();
      }
      else{
        playing=true;
        score=0;
        $("#scorevalue").html(score);
        $("#startorreset").html("Reset Game");
        trialsleft=3;
        addHeart();
        $("#lives").show();
        $("#gameover").hide();
        startAction();
      }   
   });
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        $("#slicesound")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode",500);
        setTimeout(startAction,500);
    });
    function addHeart(){
        $("#lives").empty();
        for(i=0;i<trialsleft;i++){
            $("#lives").append('<img src="images/heart.png" class="life">');
        }
    }
    function startAction(){
        $("#fruit1").show();
        chooseFruit(); $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50});
        step=1+Math.round(5*Math.random());
        action=setInterval(function(){
            
        $("#fruit1").css('top',$("#fruit1").position().top + step);
            if($("#fruit1").position().top>$("#fruitcontainer").height()){
                if(trialsleft>1){
                    $("#fruit1").show();
                    chooseFruit(); $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50});
                    step=1+Math.round(5*Math.random());
                    trialsleft--;
                    addHeart();
                }
                else{
                    $("#startorreset").html("Start Game");
                    $("#gameover").show();
                    $("#gameover").html('<p>Game Over!</p><p>Your Score Is:'+score+'</p>');
                    $("#lives").hide();
                    clearInterval(action);
                    $("#fruit1").hide();
                }
            }
        },10)
    }
    function chooseFruit(){
        $("#fruit1").attr('src' , 'images/' +
fruits[Math.round(8*Math.random())] +'.png');
    }
});