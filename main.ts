input.onGesture(Gesture.Shake, function () {
    Roll = Math.randomRange(0, 5)
    myImage.showImage(Roll * 5)
})
let Roll = 0
let myImage = images.createBigImage(`
..... ..... ..... ..... ..... .....
..... ...#. ...#. .#.#. .#.#. .#.#.
..#.. ..... ..#.. ..... ..#.. .#.#.
..... .#... .#... .#.#. .#.#. .#.#.
..... ..... ..... ..... ..... .....
`)
