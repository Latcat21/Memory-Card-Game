

class MemoryGame{
constructor(){
this.storage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.imgRec = [];
this.rand;
this.cardtextRec = [];
this.cardRec = [];
this.cardNum
this.front
this.back
this.memory = $('.memory-game')

}

}

const game = {
  flipCount: 0,
  cardCheck: 0,
  correct:0,
  status:0,
  gameOver:false,



flipCardId(){
  memory.on('click', function(e){
    let el = e.target.parent()
    let numId = el.id;
    if(Number.isInteger(parseInt(numId.replace("back", ""),10))){
      cardClick(el.parentElement.id);
    }
    else{
      cardClick(el.id);
    }

    
     
  });
}


}
