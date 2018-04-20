(function x() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _placePlayerX = 45
    var _placePlayerY = 90
    /*checking element must delete when game will be done*/
    var _element = null
    var _fallingElement = null
    var _time = 0
    var _timeContainer = null


    function init() {
        createBoard()
        createPlayer()
        attacListeners()
        placePlayer(_placePlayerX, _placePlayerY)
        /*checking element must delete when game will be done*/

        createFallingElement()
        decTime(_time)

        checking()
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
        player.classList.add('player')
        _gameBoard.appendChild(player)

        _player = player
        placePlayer(45, 90)
    }

//START MICHAŁ

    function createFallingElement() {
        function removeElement() {
            fallingElement.remove()
        }

        var fallingElement = document.createElement('div')
        fallingElement.style.position = 'absolute'
        fallingElement.style.width = '40%'
        fallingElement.style.height = '10%'
        fallingElement.style.backgroundColor = 'red'
        fallingElement.style.transition = 'all 2s ease-in'
        fallingElement.classList.add('element')
        _gameBoard.appendChild(fallingElement)
        _fallingElement = fallingElement

        placeFallingElement()

        setTimeout(removeElement, 3000)

        function transformElement() {
            fallingElement.style.transform = 'translate(0, 80vh)'
        }

        setTimeout(transformElement, 1000)

    }

    setInterval(createFallingElement, 2000);

    function placeFallingElement() {


        var elemPosY = Math.floor(Math.random() * 60)


        _fallingElement.style.left = elemPosY + '%'
    }

//END MICHAŁ

    function placePlayer(x, y) {
        _player.style.top = y + '%'
        _player.style.left = x + '%'
    }

    function tempcheck() {
        var eachElement = document.querySelectorAll('.element')

        for (var i = 0; i<eachElement.length; i++) {
            var element = eachElement[i];

            checkSmashEvent(element);
        }

    }

 function checking (){
        window.setInterval(tempcheck, 10)
 }

    function checkSmashEvent(element) {

        var playerLeft = parseFloat(_player.style.left)
        var elementLeft = parseFloat(element.style.left)
        var playerTop = _player.offsetTop
        var playerHeight = _gameBoard.offsetWidth * .1

        var elementTop = element.getBoundingClientRect().top + playerHeight



        if (elementLeft - playerLeft <10 && playerLeft - elementLeft<40 && elementTop > playerTop)
            {
                element.remove()
                console.log(elementTop, playerTop)
                alert()

        } else {
            // console.warn('none')
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
                    if (_placePlayerX < 0)
                        _placePlayerX += 5
                    move()

                    break
                case 'ArrowRight':
                    _placePlayerX += 5
                    if (_placePlayerX > 90)
                        _placePlayerX -= 5
                    move()

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

    var getInterval = setInterval(reduceTime, 1000)


    function decTime(timeparam) {
        var timeContainer = document.createElement('div')
        _timeContainer = timeContainer
        timeContainer.classList.add('time')
        _gameBoard.appendChild(timeContainer)
        timeContainer.style.position = 'absolute'
        timeContainer.style.right = '10%'
        timeContainer.style.top = '10%'
        timeContainer.style.fontSize = '40px'
        timeContainer.style.color = 'white'

    }

    function displayTIme() {
    }

    function reduceTime() {
        _time++
        _timeContainer.innerText = 'Your time: ' + _time;
        if (_time === 0) {
            clearInterval(getInterval)
        }
    }


    function endGame() {
    }



    init()
})()