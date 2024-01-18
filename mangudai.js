class Mangudai {
    constructor (game, x, y) {
        Object.assign(this, {game, x, y});

        // animation for attack, facing down
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/mangudaisprites.png"), 0, 0, 82, 98, 13, 0.1, 0, false, true);

        // animation for attack, facing down-left
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/mangudaisprites.png"), 0, 1274, 82, 98, 13, 0.1, 0, false, true);

        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/mangudaisprites.png"), 190, 0, 50, 89, 10, 0.1, 0, false, true);
        this.x = 0;
        this.y = -89;
        
        // pixels of original images
        // attack 82x96
        // walk 84x89
        // stand 92x158

        this.speed = 50;




        this.facing = 0; // 0 = down, 1 = downleft, 2 = left, etc... clockwise
        this.state = 0; // 0 = idle, 1 = walking, 2 = attacking

        // this.animation = new Animator(this.spritesheet, 18, 8, 64, 88, 3, 0.5, 0, false, true)

        // this.animations = [];
        // this.loadAnimations(spritesheet);
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
    }

    update() {
        this.y += this.speed * this.game.clockTick;
        if (this.y > 768) {
            this.y = -89;
            this.x += 50;
            gameEngine.addEntity(new Mangudai(gameEngine, 0, -89))
        }
        if (this.x > 1068) {
            this.removeFromWorld = true;
        }
    }
}