window.onload = function () {
  var config = {
    width: 256,
    height: 272,
    background: 0xff0000,
    scene: [Scene1, Scene2],
    pixelArt: true,
  };
  var game = new Phaser.Game(config);
};
