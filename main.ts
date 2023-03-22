scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy = -100
    }
})
function Mario_walk () {
    if (controller.right.isPressed() || controller.left.isPressed()) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mario)
    }
}
function Mario_Jump () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mario)
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
let luigi: Sprite = null
let mario: Sprite = null
mario = sprites.create(img`
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 1 1 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d 1 8 d d 8 1 d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 . 5 2 2 5 . 2 . . . . 
    . . . . 1 . 8 2 2 8 . 1 . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . e e . . e e . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
mario.ay = 250
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mario, assets.tile`myTile4`)
scene.cameraFollowSprite(mario)
game.onUpdateInterval(100, function () {
	
})
