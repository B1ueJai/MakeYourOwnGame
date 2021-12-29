class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");
      }
    
      setElementsPosition() { //set the positions of the elements
        this.titleImg.position(120, 100);
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
      
      hide() { //hides these items when game starts
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }

      display() { 
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
      
      handleMousePressed() { //when the mouse pressed the play button, it shows a message and gathers its data
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.level = 1;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }
    }

