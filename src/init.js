$(document).ready(function(){
  window.dancers = [];


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      50 + Math.random() * 1000
    );
    $('.dancer').mouseover(function(event){
      $(this).addClass('green');
    });
    $('.dancer').mouseleave(function(event){
      $(this).removeClass('green');
    });


    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  var lineUp = function(){
    var dancers = window.dancers.slice();
    for(var i = 0; i < dancers.length; i++){
      dancers[i].setPosition(550, 50*i + 150);
    }
  };

  $('.lineUp').click(lineUp);

  $('.eat').click(function(){
    lineUp();
    setTimeout(function(){
      var node = $('<span class="cell"></span>');
      var laser = $('<span class="laser"></span>');
      $('body').append(node);

      $('body').append(laser);

      var count = 100;
      var offset = 495;
      var cellOffset = -55;
      var timer = setInterval(function(){
        $('.laser').css({paddingRight: count});
        $('.laser').css({marginTop: offset});
        if(offset < 500){
          offset = 505;
        } else {
          offset = 495;
        }

        $('.cell').css({marginTop: cellOffset});
        if(cellOffset < -50){
          cellOffset = -45;
        } else {
          cellOffset = -55;
        }


        count += 30;
        if(count > 4000){
          clearInterval(timer);
          $('.blueBlinkyDancer').remove();
          $('.cat').remove();
          $('.rotating').remove();
          $('.laser').fadeOut();
          setTimeout(function(){
            $('.cell').fadeOut();
          }, 750);
        }
      }, 3);
      window.dancers = [];
    }, 300);

  });




});

