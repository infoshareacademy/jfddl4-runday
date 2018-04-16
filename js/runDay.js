(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _placePlayerX = 45
    var _placePlayerY = 90



    function init() {
        createBoard()
        createPlayer()
        attacListeners()
    }

    function createBoard() {
        var board = document.createElement('div')
        board.style.position = 'relative'
        board.style.width = '80vh'
        board.style.height = '80vh'
        board.style.margin = '0 auto'
        board.style.backgroundColor = 'green'
        _gameContainer.appendChild(board)

        _gameBoard = board

    }

    function createPlayer() {
        var player = document.createElement('div')
        player.style.position = 'absolute'
        player.style.width = '10%'
        player.style.height = '10%'
        player.style.backgroundColor = 'black'
        _gameBoard.appendChild(player)

        _player = player
        placePlayer(_placePlayerX, _placePlayerY)
    }

    function placePlayer(x, y) {
        _player.style.top = y + '%'
        _player.style.left = x + '%'
    }

    function render() {

    }

    function attacListeners() {
        window.addEventListener('keydown', press, true)

        function press(event) {
            switch (event.keyCode) {
                case 37:
                    console.log('left')
                    _placePlayerX -= 5
                    if (_placePlayerX<0)
                        _placePlayerX += 5
                    console.log(_placePlayerX)
                    createPlayer()
                    break
                case 39:
                    _placePlayerX += 5
                    if (_placePlayerX>90)
                        _placePlayerX -= 5
                    console.log(_placePlayerX)
                    createPlayer()
                    console.log("right")
                    break
                case 38:
                    console.log('up')
                    break
                case 40:
                    console.log("down")
                    break
            }

        }
    }



    function move() {

    }

    function gameTick() {

    }


    function incScore() {

    }

    function displayScore() {

    }

    function decTime() {

    }

    function displayTIme() {

    }

    function endGame() {

    }


    init()
})()