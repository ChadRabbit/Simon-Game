var level=0;
var userChosenColour
var userClickedPattern=new Array();
var buttonArray=["red","blue","green","yellow"];
var gamePattern=new Array();
var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
function newSequence()
{
    level++;
    $("h1").html("LEVEL "+ level);
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColor=buttonArray[randomNumber];
    gamePattern.push(randomChosenColor);
    if(randomChosenColor==="red")
    {
        $("#red").fadeOut().fadeIn(); 
        red.play();
    }
    if(randomChosenColor==="blue")
    {
        $("#blue").fadeOut().fadeIn();
        
        blue.play();
    }
    if(randomChosenColor==="green")
    {
        $("#green").fadeOut().fadeIn();
        
        green.play();
    
    }    
    if(randomChosenColor==="yellow")
    {
        $("#yellow").fadeOut().fadeIn();
        
        yellow.play();
    }
}
$("#green").on("click",function(){
    userChosenColour="green";
    userClickedPattern.push("green");
    green.play();
    checkAnswer();
})
$("#red").on("click",function(){
    userChosenColour="red";
    userClickedPattern.push("red");
    red.play();
    checkAnswer();
})
$("#yellow").on("click",function(){
    userChosenColour="yellow";
    userClickedPattern.push("yellow");
    yellow.play();
    checkAnswer();
})
$("#blue").on("click",function(){
    userChosenColour="blue";
    userClickedPattern.push("blue");
    blue.play();
    checkAnswer();
})
$(document).keydown(function()
{
    if(level===0)
    newSequence();
})
function checkAnswer()
{
    if(level!=0)
    {
    for(var i=0;i<userClickedPattern.length;i++)
    {
    if(userClickedPattern[i]===gamePattern[i])
    {
    }
    else
    {
        $("h1").html("WRONG ANSWER!PRESS A KEY TO START AGAIN");
        userClickedPattern=[];
        gamePattern=[];
        level=0;
        var gameOver=new Audio("sounds/wrong.mp3");
        gameOver.play();
        $("body").toggleClass("flash2");
        setTimeout(function()
        {
            
            $("body").toggleClass("flash2");

        }, 300);
        break;
    }
    if(userClickedPattern[gamePattern.length-1]===gamePattern[gamePattern.length-1])
    {
        userClickedPattern=[];
        newSequence();    
    }
    }
    }
}
