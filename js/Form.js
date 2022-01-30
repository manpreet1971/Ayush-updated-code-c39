class Form {
  constructor(){
   // this.input=createInput("Enter Your Name"); 
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton=createButton("Play");
    this.titleImg=createImg("assets/title.png","Game Title");
    this.greeting=createElement("h1");
}

setElementsPosition(){
  this.titleImg.position(120, 50);                                    //error not written

  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 90, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
}
 
setElementsStyle() {
  this.titleImg.class("gameTitle");
  this.input.class("customInput");
  this.playButton.class("customButton");
  this.greeting.class("greeting");
}

hide() {
 this.greeting.hide();
 this.playButton.hide();
 this.input.hide();
}

handleMousePressed(){
  this.playButton.mousePressed(
    () =>{
      this.input.hide();
      this.playButton.hide();

      var message = ` Hello ${this.input.value()} </br>Waiting for another player to join...`; this.greeting.html(message);
      this.greeting.html(message);

      playerCount=playerCount+1;
      player.updateCount(playerCount);
      player.name=this.input.value();
      player.index=playerCount;
      player.addPlayer();
      player.getDistance();
    }
  );
}

display(){
   this.setElementsPosition();
   this.handleMousePressed();
   this.setElementsStyle();
 }
}



























































// class Form {
//   constructor() {
//     this.input = createInput("").attribute("placeholder", "Enter your name");
//     this.playButton = createButton("Play");
//     this.titleImg = createImg("./assets/title.png", "game title");
//     this.greeting = createElement("h2");
//   }

//   setElementsPosition() {
//     this.titleImg.position(120,50);
//     this.input.position(width / 2 - 110, height / 2 - 80);
//     this.playButton.position(width / 2 - 90, height / 2 - 20);
//     this.greeting.position(width / 2 - 300, height / 2 - 100);
//   }

//   setElementsStyle() {
//     this.titleImg.class("gameTitle");
//     this.input.class("customInput");
//     this.playButton.class("customButton");
//     this.greeting.class("greeting");
//   }

//   hide() {
//     this.greeting.hide();
//     this.playButton.hide();
//     this.input.hide();
//   }

//   display() {
//     this.setElementsPosition();
//     this.setElementsStyle();
//   }
// }