class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        this.load.image('spacebackground', './assets/spacebackground.png');
    }

    create() {
        this.spacebackground = this.add.tileSprite(0, 0, 640, 480, 'spacebackground').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use mouse to move & F or trackpad to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00ff00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press LeftArrowKey for Novice or RightArrowKey for Expert', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {

        this.spacebackground.tilePositionX -= 2; 

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            
            game.settings = {
                spaceshipSpeed: 3,
                enemyspaceshipSpeed: 8,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                enemyspaceshipSpeed: 12, 
                gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
    }
}