(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _placePlayerX = 45
    var _placePlayerY = 90
    /*checking element must delete when game will be done*/
    var _element = null


    function init() {
        createBoard()
        createPlayer()
        attacListeners()
        placePlayer(_placePlayerX, _placePlayerY)
        /*checking element must delete when game will be done*/
        createEl()
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
    }

    function placePlayer(x, y) {
        _player.style.top = y + '%'
        _player.style.left = x + '%'
    }

    function checkSmashEvent(){
        var playerLeft = parseFloat(_player.style.left)
        var elementLeft = parseFloat(_element.style.left)

        if (playerLeft == elementLeft + 10
            || playerLeft+10 == elementLeft){
            console.warn('crash', playerLeft, elementLeft)
        }else{
            console.log('nothing happened', playerLeft, elementLeft)
        }

    }




    function render() {

    }

    function attacListeners() {
        window.addEventListener('keydown', press, true)

        function press(event) {
            switch (event.key) {
                case 'ArrowLeft':
                    _placePlayerX -= 5
                    if (_placePlayerX<0)
                        _placePlayerX += 5
                    move()
                    checkSmashEvent()
                    break
                case 'ArrowRight':
                    _placePlayerX += 5
                    if (_placePlayerX>90)
                        _placePlayerX -= 5
                    move()
                    checkSmashEvent()
                    break
                case 'ArrowUp':
                    console.log('up')
                    break
                case 'ArrowDown':
                    console.log("down")
                    break
            }

        }
    }






    function move() {
        placePlayer(_placePlayerX, _placePlayerY)
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
/*checking element must delete when game will be done*/
    function createEl() {
        var element = document.createElement('div')
        element.style.position = 'absolute'
        element.style.width = '10%'
        element.style.height = '10%'
        element.style.backgroundColor = 'red'
        element.style.top = '85%'
        element.style.left = '30%'
        _gameBoard.appendChild(element)
        _element = element

    }



    init()
})()