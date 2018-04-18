(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null


    function init() {
        createBoard()
        createPlayer()
        createStartingPage()
    }

    function createStartingPage() {
        var login = document.createElement('div')
        var button = document.createElement('button')
        var instructions

        login.style.position = 'absolute'
        login.style.top = '5%'
        login.style.left = '5%'
        login.style.width = '90%'
        login.style.height = '90%'
        login.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ', ' + 0.7 + ')';

        button.style.position = 'absolute'
        button.style.top = '60%'
        button.style.left = '30%'
        button.style.height = '15%'
        button.style.width = '40%'
        button.style.backgroundColor = 'rgba(' + 237 + ',' + 28 + ',' + 36 + ', ' + 1 + ')';

        button.addEventListener('click', function () {
            // HERE GOES FUNCTION STARTING THE GAME
        })

        login.appendChild(button)
        _gameBoard.appendChild(login)
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
        placePlayer(45, 90)
    }

    function placePlayer(x, y) {
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