class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image(
      "background",
      "space-game/tree/master/assets/background.jpg"
    );
    this.load.image("ship", "space-game/tree/master/assets/ship2.png");
    this.load.image("enemy", "space-game/tree/master/assets/enemy2.png");
    this.load.image("enemy2", "space-game/tree/master/assets/enemy3.png");

    this.load.spritesheet(
      "explosion",
      "space-game/tree/master/assets/boom.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
