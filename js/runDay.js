(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null


    function init() {
        createBoard()
        createPlayer()
        createLoginPage()
    }

    function createLoginPage() {


        var login = document.createElement('div')
        login.style.position = 'absolute'
        login.style.top = '5%'
        login.style.left = '5%'
        login.style.width = '90%'
        login.style.height = '90%'
        login.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ', ' + 0.7 + ')';

        var form = document.createElement('form')
        form.style.height = ('10%')
        form.style.width = ('30%')
        form.style.backgroundColor = ('blue')

        _gameBoard.appendChild(login)
        login.appendChild(form)


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