(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null


    function init() {
        createBoard()
        createPlayer()
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
        player.style.position ='absolute'
        player.style.width= '10%'
        player.style.height = '10%'
        player.style.backgroundColor = 'black'
        _gameBoard.appendChild(player)

        _player = player
        placePlayer(45, 90)
    }

    function placePlayer(x, y){
        _player.style.top = y + '%'
        _player.style.left = x + '%'
    }

    function render() {

    }

    function attachEventListeners() {

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