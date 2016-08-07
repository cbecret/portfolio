// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(900, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('vaisseau', './assets/img/vaisseau.png');
}

var ship;


function create() {

    // Background noir
    game.stage.backgroundColor = '#000';

    // Fullsize
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(gofull, this);

    // Joueur
    var player = game.add.sprite(100, 100, 'vaisseau');
    player.anchor.setTo(0.5, 0.5);


}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function update() {

}

function render () {

    // game.debug.text('Click / Tap to go fullscreen', 270, 16);
    // game.debug.text('Click / Tap to go fullscreen', 0, 16);

    game.debug.inputInfo(32, 32);
    // game.debug.pointer(game.input.activePointer);

}