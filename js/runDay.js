(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _fallingElement = null
    var _time = 0
    var _timeContainer = null


    function init() {
        createBoard()
        createPlayer()
        createFallingElement()
        decTime(_time)



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
//START MICHAŁ

    function createFallingElement() {
        function removeElement(){
            fallingElement.remove()
        }
        var fallingElement = document.createElement('div')
        fallingElement.style.position='absolute'
        fallingElement.style.width='10%'
        fallingElement.style.height='10%'
        fallingElement.style.backgroundColor='red'
        fallingElement.style.transition='all 2s ease-in'
        _gameBoard.appendChild(fallingElement)
        _fallingElement = fallingElement

        placeFallingElement()

        setTimeout(removeElement,3000)

        function transformElement(){
            fallingElement.style.transform='translate(0, 72vh)'
        }

        setTimeout(transformElement, 1000)

    }

    setInterval(createFallingElement, 2000);

    function placeFallingElement() {



        var elemPosY = Math.floor(Math.random()*90)



        _fallingElement.style.left = elemPosY + '%'
    }
//END MICHAŁ

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

    var getInterval = setInterval(reduceTime, 1000)


    function decTime(timeparam) {
        var timeContainer = document.createElement('div')
        _timeContainer = timeContainer
        timeContainer.classList.add('time')
        _gameBoard.appendChild(timeContainer)
        timeContainer.style.position='absolute'
        timeContainer.style.right='10%'
        timeContainer.style.top='10%'
        timeContainer.style.fontSize='40px'
        timeContainer.style.color='white'

    }


    function reduceTime() {
        _time++
        _timeContainer.innerText='Your time: ' + _time;
        if (_time===0){
            clearInterval(getInterval)
        }
    }

    function endGame() {


    }


    init()

})()