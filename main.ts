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
    listGoomba.push(goomba)
}
function singleplayermode () {
    mario = sprites.create(assets.image`mario`, SpriteKind.Player)
    controller.moveSprite(mario, 100, 0)
    mario.ay = 250
    tiles.setCurrentTilemap(tilemap`level1`)
    info.startCountdown(25)
    info.setScore(0)
    tiles.placeOnRandomTile(mario, assets.tile`myTile4`)
    scene.cameraFollowSprite(mario)
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
    controller.player2.moveSprite(luigi, 100, 0)
    luigi.ay = 250
    tiles.placeOnRandomTile(luigi, assets.tile`myTile6`)
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
let mario: Sprite = null
let goomba: Sprite = null
let listGoomba: Sprite[] = []
listGoomba = []
game.splash("Hello welcome to rip-off mario!!")
game.splash("Do you want to play single player or multiplayer?")
let number_of_players = game.askForNumber("1 for single player 2 for multiplayer", 1)
if (number_of_players == 2) {
    Use_later()
    singleplayermode()
} else if (number_of_players == 1) {
    singleplayermode()
} else {
    game.splash("Oh oh. I couldn't find what you asked for?")
}
game.onUpdateInterval(5000, function () {
    while (listGoomba.length < 20) {
        Goomba()
    }
})
game.onUpdateInterval(100, function () {
    Mario_Jump()
    Mario_walk()
})
