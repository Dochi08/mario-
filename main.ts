// I want to make it so it looks like a goomba comes out of the pipe.
function Goomba () {
    goomba = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e f e f e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e 1 e e e 1 e . . . . . 
        . . . e e e 1 1 1 e e e e . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . e e e . . . e e e . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(goomba, assets.tile`myTile`)
    goomba.y += -20
    pause(100)
    goomba.ay += 150
    goomba.setVelocity(randint(-50, 50), 50)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
function Mario_walk () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 1 1 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . d d d d d d d d . . . . 
            . . . . d 1 8 d d 8 1 d . . . . 
            . . . . d d d d d d d d . 1 . . 
            . . . . . d d d d d d . . 1 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 . . . 5 2 2 5 . . . . . . 
            . . 1 1 . . 8 2 2 8 . . . . . . 
            . . . 1 . . 8 8 8 8 . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . 8 . . 8 . . . . . . 
            . . . . . . 8 . . 8 . . . . . . 
            . . . . . e e . . e e . . . . . 
            `],
        200,
        true
        )
    } else if (controller.left.isPressed()) {
    	
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mario)
    }
}
function Mario_Jump () {
    if (controller.A.isPressed()) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 1 1 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . d d d d d d d d . . . . 
            . . . . d 1 8 d d 8 1 d . . . . 
            . . . . d d d d d d d d . 1 . . 
            . . . . . d d d d d d . . 2 . . 
            . . . . 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . 2 . 5 2 2 5 . . . . . . 
            . . . . 1 . 8 2 2 8 . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . 8 8 8 8 8 8 . . . . 
            . . . . . . 8 . . . . e e . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . . e e . . . . . . . 
            `],
        200,
        true
        )
    }
}
function Use_later () {
    luigi = sprites.create(img`
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 7 7 7 7 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d 1 8 d d 8 1 d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 . 7 5 7 7 5 7 . 7 . . . 
        . . . 7 . 7 8 7 7 8 7 . 7 . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.Player)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(true)
})
// I want to make it so if you jump on the goomba you kill him but if you touch him from the sides you lose.
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (goomba.y < mario.y + mario.height) {
        sprites.destroy(goomba)
        info.changeScoreBy(1)
    } else {
        sprites.destroy(mario)
        game.gameOver(false)
    }
})
let luigi: Sprite = null
let goomba: Sprite = null
let mario: Sprite = null
mario = sprites.create(assets.image`mario`, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
mario.ay = 250
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
tiles.placeOnRandomTile(mario, assets.tile`myTile4`)
scene.cameraFollowSprite(mario)
game.onUpdateInterval(5000, function () {
    Goomba()
})
game.onUpdateInterval(100, function () {
    Mario_Jump()
    Mario_walk()
})
