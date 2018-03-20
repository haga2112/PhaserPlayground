/// <reference path="../tsDefinitions/phaser.d.ts" />

class SimpleGame
{
	game:Phaser.Game;
	
	constructor()
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        var gameConfig = {
            width: 800,
            height: 600,
            type: Phaser.AUTO,
            title: "Playground",
            parent: 'content',
            scene: { preload:this.preload, create:this.create}
        };
		this.game = new Phaser.Game(gameConfig);
	}
	
	preload()
	{
		// add our logo image to the assets class under the
		// key 'logo'. We're also setting the background colour
		// so it's the same as the background colour in the image
        
        //this.game.load.image( 'logo', "assets/ds_logo.png" );
		//this.game.stage.backgroundColor = 0xB20059;
	}
	
	create()
	{
		// add the 'logo' sprite to the game, position it in the
		// center of the screen, and set the anchor to the center of
		// the image so it's centered properly. There's a lot of
		// centering in that last sentence
        
        //var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
		//logo.anchor.setTo( 0.5, 0.5 );
	}
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}