class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "../assets/background.jpg");
    this.load.image("ship", "../assets/ship2.png");
    this.load.image("enemy", "../assets/enemy2.png");
    this.load.image("enemy2", "../assets/enemy3.png");

    this.load.spritesheet("explosion", "../assets/boom.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
