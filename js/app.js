/*


Try matching two card that are the same. If they don't match you move on to flip other cards and remember their positions. The game ends when the whole board is uncovered.

-user will see 18 cards laid face down
-user will then click a card to reveal it's property
-user will then click a second card to see if it matches
-
-when a match happens both cards will disapear
-once the user as match all cards, he has won

Break down of where to start

-display 12 cards
-duplicate the cards to have a 2 sets
-randomize the display of cards
-only allow 2 cards to be selected at a time
-determine if the two cards are a match and hide them
-reset guess count after 2
-add delay to selections
-show back of card and flip on select
-finsh game

*/

let game = {
  cards: [ '@', '@', '#', '#', '$', '$', '%', '%', '&', '&', 'X','X'],
  start() {
    game.shuffleCards();
    
  },

shuffleCards() {
  
  
    let random = 0;
    let temp = 0;
    for (i = 1; i < game.cards.length; i++) {
      random = Math.round(Math.random() * i);
      tempNum = game.cards[i];
      game.cards[i] = game.cards[random];
      game.cards[random] = temp;
    }
    
    game.assignData();
   
  },
  assignData() {
    $('.card').each(function(index) {
      $(this).attr('data-value', game.cards[index]);
    });
    
  },
  
  Match() {
      if ($('.clicked').length === 2) {

      if ($('.clicked').first().data('value') == $('.clicked').last().data('value')){
         $('.clicked').each(function() {
          $(this).css({"background-color": "green",}).animate({ opacity: 0 }).removeClass('unmatched');
          });
          $('.clicked').each(function() {
          $(this).removeClass('clicked');
        });

        game.checkWin();
        
      } else {
        setTimeout(function() {
            $('.clicked').each(function() {
            $(this).html('').removeClass('clicked');
           
          });
        }, 1000);
      }
    }
  },
  checkWin() {
    if ($('.unmatched').length === 0) {
         $('.game-wrapper').css({
        'background-image': 'url(./images/leo.jpg)'
      });
    }
  }
};
game.start();

// Event Listeners
   
$('.card').on('click', function() {
    $(this).html('<p>' + $(this).data('value') + '</p>').addClass('clicked');
    game.Match();
  });
