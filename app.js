$(document).ready(function(){
  
    var turnCounter = 1;
    var ifWon = false;
    
     function resetGame(){
      $(".warning").text("")
      $(".cell").text("");
      $(".cell").removeClass("occ");
      $(".cell").removeClass("occ-x");
      $(".cell").removeClass("occ-o");
      $(".cell").removeClass("winner");
      $(".message").text("Next move: O")
      $(".countdown").text("");
      turnCounter = 1;
    };
    
    function checkIfWon(sign){
      if ($(".c-1").hasClass(sign) && $(".c-2").hasClass(sign) && $(".c-3").hasClass(sign)){
        $(".c-1").addClass("winner");
        $(".c-2").addClass("winner");
        $(".c-3").addClass("winner");
        ifWon = true;
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
      } else if ($(".c-4").hasClass(sign) && $(".c-5").hasClass(sign) && $(".c-6").hasClass(sign)){
        $(".c-4").addClass("winner");
        $(".c-5").addClass("winner");
        $(".c-6").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-7").hasClass(sign) && $(".c-8").hasClass(sign) && $(".c-9").hasClass(sign)){
        $(".c-7").addClass("winner");
        $(".c-8").addClass("winner");
        $(".c-9").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-1").hasClass(sign) && $(".c-4").hasClass(sign) && $(".c-7").hasClass(sign)){
        $(".c-1").addClass("winner");
        $(".c-4").addClass("winner");
        $(".c-7").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-2").hasClass(sign) && $(".c-5").hasClass(sign) && $(".c-8").hasClass(sign)){
        $(".c-2").addClass("winner");
        $(".c-5").addClass("winner");
        $(".c-8").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-3").hasClass(sign) && $(".c-6").hasClass(sign) && $(".c-9").hasClass(sign)){
        $(".c-3").addClass("winner");
        $(".c-6").addClass("winner");
        $(".c-9").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-1").hasClass(sign) && $(".c-5").hasClass(sign) && $(".c-9").hasClass(sign)){
        $(".c-1").addClass("winner");
        $(".c-5").addClass("winner");
        $(".c-9").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else if ($(".c-3").hasClass(sign) && $(".c-5").hasClass(sign) && $(".c-7").hasClass(sign)){
        $(".c-3").addClass("winner");
        $(".c-5").addClass("winner");
        $(".c-7").addClass("winner");
        if (sign == "occ-x"){
          $(".message").text("X won!");
        } else {
          $(".message").text("O won!");
        }
        ifWon = true;
      } else {
        ifWon = false;
      }
    };
   
  $(".cell").click(function(){
    if ($(this).hasClass("occ")){
        $(".warning").text("Forbidden action!");
        setTimeout(()=>{
          $(".warning").text("");
        },"1000");
      } else {
          if (turnCounter === 1) {
            $(this).text("O");
            $(this).addClass("occ");
            $(this).addClass("occ-o");
            $(".message").text("Next move: X")
            turnCounter = 2;
            checkIfWon("occ-o");
            if (ifWon){
              $(".countdown").text("Game resets in 3s");
              setTimeout(()=>{
                resetGame();
              },"3000");
            }
          } else {
              $(this).text("X");
              $(this).addClass("occ");
              $(this).addClass("occ-x");
              $(".message").text("Next move: O")
              turnCounter = 1;
              checkIfWon("occ-x");
              if (ifWon){
                $(".countdown").text("Game resets in 3s");
                setTimeout(()=>{
                  resetGame();
                },"3000");
              }
          }
      }
  });
  
    
    $(".reset-btn").click(function(){
      resetGame();
    });
  });