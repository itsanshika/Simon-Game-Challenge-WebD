var gamepattern=[];
var buttonc=["red","blue","green","yellow"];
var patternclick=[];
var strat=false;
var i=0;
$(document).on("keypress",function()
{


  nextsequence();



});

$(".btn").click(function()
{
  var userchoosen=$(this).attr("id");

patternclick.push(userchoosen);
playSound(userchoosen);
animatePress(userchoosen);
checkAnswer(patternclick.length-1);
});

function checkAnswer(currentLevel) {

    if (patternclick[currentLevel] === gamepattern[currentLevel]) {

      console.log("success");

      if (patternclick.length === gamepattern.length){
        setTimeout(function () {
          nextsequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $(".heading").html("Game Over!!<br> Press Refresh to Restart");
    }

}

function nextsequence()
{
  patternclick=[];
  i++;

      $(".heading").html("Level "+i);



  var random= Math.floor((Math.random()*4));
  var randomchoose= buttonc[random];
  gamepattern.push(randomchoose);
    $("#" + randomchoose).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomchoose);

}

function playSound(name)
{

  var audio= new Audio("sounds/"+ name +".mp3");
  audio.play();
}

function animatePress(colorcurrent)
{
$("."+colorcurrent).addClass("pressed");
setTimeout(function () {
  $("#" + colorcurrent).removeClass("pressed");
}, 10);
}
