
let game = {
  cards: [ '@', '@', '#', '#', '$', '$', '%', '%', '&', '&', 'X','X'],
  
  // intializing the game 
  start() {
    game.shuffleCards();
    
  },
// shuffle fucntion for randomizing the array;
shuffleCards() {
    let random = 0;
    let temp = 0;
    for (i = 1; i < game.cards.length; i++) {
      random = Math.round(Math.random() * i);
      temp = game.cards[i];
      game.cards[i] = game.cards[random];
      game.cards[random] = temp;
    }
    game.assignData();
   
  },

  // assigning data to the html so we can match it later
  assignData() {
    $('.card').each(function(index) {
      $(this).attr('data-value', game.cards[index]);
    });
    
  },
  // match function to match the values of the flipped cards
  Match() {
    // if there are two cards with the classes clicked
      if ($('.clicked').length === 2) {
// Than seeing if they match
      if ($('.clicked').first().data('value') == $('.clicked').last().data('value')){
         $('.clicked').each(function() {
          $(this).css({"background-color": "green",}).animate({ opacity: 0 }).removeClass('unmatched');
          });
          $('.clicked').each(function() {
          $(this).removeClass('clicked');
        });

        game.checkWin();
        // using a time out function to make the to flip the cards back 
      } else {
        setTimeout(function() {
            $('.clicked').each(function() {
            $(this).html('').removeClass('clicked');
           
          });
        }, 1000);
      }
    }
  },

  // once there are no more cards with the class match the game is over
  checkWin() {
    if ($('.unmatched').length === 0) {
         $('.game-wrapper').css({
        'background-image': 'url(./images/leo.jpg)'
      });
    }
  }
};
// initlaizing the game
game.start();

// Event Listeners
   
$('.card').on('click', function() {
    $(this).html('<p>' + $(this).data('value') + '</p>').addClass('clicked');
    game.Match();
  });
