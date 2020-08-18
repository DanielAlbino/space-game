class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {
    this.background = this.add.tileSprite(0, 0, 300, 400, "background");
    this.background.setOrigin(0, 0);

    this.ship = this.add.image(125, 200, "ship");
    this.enemy = this.add.image(50, 80, "enemy");
    this.enemy2 = this.add.image(50, 80, "enemy2");

    this.anims.create({
      key: "explode",
      frame: this.anims.generateFrameNumbers("explosion", { start: 0, end: 6 }),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.ship.setInteractive();
    this.enemy.setInteractive();
    this.enemy2.setInteractive();

    this.input.on("gameobjectdown", this.destroyShip, this);
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > 300) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(10, 250);
    ship.x = randomX;
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }

  update() {
    this.moveShip(this.enemy, 2);
    this.moveShip(this.enemy2, 3);
    this.moveShip(this.ship, 1);

    this.background.tilePositionY -= 0.5;
  }
}
