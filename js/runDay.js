function game() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _placePlayerX = 45
    var _placePlayerY = 70
    /*checking element must delete when game will be done*/
    var _element = null
    var _fallingElement = null
    var _time = 0
    var _timeContainer = null
    var _lifeFirst = null
    var _lifeSecond = null
    var _lifeThird = null
    var _lifeContainer = null


    function init() {
        createBoard()
        createPlayer()
        attacListeners()
        placePlayer(_placePlayerX, _placePlayerY)
        /*checking element must delete when game will be done*/

        createFallingElement()
        decTime(_time)
        life()


        checking()
    }

    function createBoard() {
        var board = document.createElement('div')
        board.style.position = 'relative'
        board.style.width = '80vh'
        board.style.height = '80vh'
        board.style.margin = '0 auto'
        board.style.backgroundImage = "url('img/_images_7')"
        board.style.backgroundRepeat='no-repeat'
        _gameContainer.appendChild(board)

        _gameBoard = board

    }

    function createPlayer() {
        var player = document.createElement('span')
        player.style.position = 'absolute'
        //player.style.width = '100px'
        //player.style.height = '100px'
        //player.style.top='50px'
        //player.style.backgroundImage = "url('img/player.png')"
        player.innerHTML='<img style="width: 100px" src="img/runner.png"/>'
        //player.style.backgroundRepeat='no-repeat'
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
        fallingElement.classList.add('element')
        fallingElement.style.position = 'absolute'
        fallingElement.style.top = '0'
        fallingElement.style.width = '40%'
        fallingElement.style.height = '10%'
        fallingElement.style.backgroundImage = "url('img/kloda2.png')"
        fallingElement.style.backgroundRepeat='no-repeat'
        fallingElement.style.transition = 'all 3s ease-in'
        _gameBoard.appendChild(fallingElement)
        _fallingElement = fallingElement

        placeFallingElement()


        setTimeout(removeElement, 4000)

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

    function life() {
        var lifeContainer = document.createElement('div')
        var lifeFirst = document.createElement('span')
        var lifeSecond = document.createElement('span')
        var lifeThird = document.createElement('span')
        lifeContainer.appendChild(lifeFirst)
        lifeContainer.appendChild(lifeSecond)
        lifeContainer.appendChild(lifeThird)
        _gameBoard.appendChild(lifeContainer)
        lifeFirst.style.position = 'absolute'
        lifeFirst.style.top = '85px'
        lifeFirst.style.left = '50px'
        lifeFirst.style.zIndex = '99999999'
        lifeFirst.innerHTML = '<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'
        lifeSecond.style.position = 'absolute'
        lifeSecond.style.top = '85px'
        lifeSecond.style.left = '130px'
        lifeSecond.style.zIndex = '99999999'
        lifeSecond.innerHTML = '<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'
        lifeThird.style.position = 'absolute'
        lifeThird.style.top = '85px'
        lifeThird.style.left = '210px'
        lifeThird.style.zIndex = '99999999'
        lifeThird.innerHTML = '<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'
        _lifeThird = lifeThird
        _lifeSecond = lifeSecond
        _lifeFirst = lifeFirst
        _lifeContainer = lifeContainer


    }

//END MICHAŁ

    function placePlayer(x, y) {
        _player.style.top = y + '%'
        _player.style.left = x + '%'
    }

    function tempcheck() {
        var eachElement = document.querySelectorAll('.element')

        for (var i = 0; i < eachElement.length; i++) {
            var element = eachElement[i];
            checkSmashEvent(element);
        }

    }

    function checking() {
        window.setInterval(tempcheck, 10)
    }

    function checkSmashEvent(element) {
        var playerLeft = parseFloat(_player.style.left)
        var elementLeft = parseFloat(element.style.left)
        var playerTop = _player.offsetTop
        var playerHeight = _gameBoard.offsetWidth * .1

        var elementTop = element.getBoundingClientRect().top + playerHeight



        if (elementLeft - playerLeft < 15 && playerLeft - elementLeft < 15 && elementTop > playerTop && _lifeFirst &&_lifeSecond === null){
            element.remove()
            var life = 5
            console.log(life)
            _lifeContainer.removeChild(_lifeFirst)
            _lifeFirst = null
            end()
            _gameContainer.removeChild(_gameBoard)

        }


        if (elementLeft - playerLeft < 15 && playerLeft - elementLeft < 15 && elementTop > playerTop && _lifeSecond &&_lifeThird === null){
            element.remove()
            var life = 5
            console.log(life)
            _lifeContainer.removeChild(_lifeSecond)
            _lifeSecond = null
        }


        if (elementLeft - playerLeft < 15 && playerLeft - elementLeft < 15 && elementTop > playerTop && _lifeThird) {
            element.remove()
            console.log(elementTop, playerTop)
            _lifeContainer.removeChild(_lifeThird)
            _lifeThird = null
            console.log(_lifeThird)
        }




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
        timeContainer.style.color = 'black'
        timeContainer.style.zIndex = '99999999'
        timeContainer.style.backgroundColor = 'white'
        timeContainer.style.width = '70px'
        timeContainer.style.height = '70px'
        timeContainer.style.display = 'flex'
        timeContainer.style.alignItems = 'center'
        timeContainer.style.justifyContent = 'center'
        timeContainer.style.borderRadius = '100%'
        timeContainer.style.border = "3px solid red"

    }


    function reduceTime() {
        _time++
        _timeContainer.innerHTML = _time;

    }


    init()


}

(function y() {


    var _instruction = document.body
    var _instructionContainer = null
    var _buttonStart = null


    function init() {
        instructionContainer()
        textOther()
        textInstruction()
        button()


    }

    function instructionContainer() {
        var instructionContainer = document.createElement('div')
        instructionContainer.style.position = 'relative'
        instructionContainer.style.width = '80vh'
        instructionContainer.style.height = '80vh'
        instructionContainer.style.margin = '20px auto'
        instructionContainer.style.border = '3px solid black'
        instructionContainer.style.borderRadius = '5px'
        instructionContainer.style.display = 'flex';
        instructionContainer.style.justifyContent = 'center';
        instructionContainer.style.alignItems = 'center';
        instructionContainer.style.flexDirection = 'column'
        instructionContainer.style.backgroundImage = "url('img/woman_run.jpg')"
        instructionContainer.style.backgroundAttachment = 'fixed'
        instructionContainer.style.backgroundPosition = 'center'


        _instruction.appendChild(instructionContainer)


        _instructionContainer = instructionContainer

    }

    function button() {
        var divButton = document.createElement('div')
        var buttonStart = document.createElement('button')
        var buttonHome = document.createElement('button')
        var buttonResults = document.createElement('button')

        divButton.appendChild(buttonStart);
        divButton.appendChild(buttonHome)
        divButton.appendChild(buttonResults)
        buttonStart.style.width = '15vh'
        buttonStart.style.height = '5vh'
        buttonStart.style.backgroundColor = 'white'
        buttonStart.style.border = '1px solid black'
        buttonStart.style.borderRadius = '5px'
        buttonStart.innerText = 'START'
        buttonStart.style.fontSize = '20px'
        buttonStart.style.display = ''

        buttonHome.style.width = '15vh'
        buttonHome.style.height = '5vh'
        buttonHome.style.backgroundColor = 'white'
        buttonHome.style.border = '1px solid black'
        buttonHome.style.borderRadius = '5px'
        buttonHome.innerText = 'RESULTS'
        buttonHome.style.fontSize = '20px'
        buttonHome.style.display = ''
        buttonHome.style.marginLeft = '10px'

        buttonResults.style.width = '15vh'
        buttonResults.style.height = '5vh'
        buttonResults.style.backgroundColor = 'white'
        buttonResults.style.border = '1px solid black'
        buttonResults.style.borderRadius = '5px'
        buttonResults.innerText = 'HOME'
        buttonResults.style.fontSize = '20px'
        buttonResults.style.display = ''
        buttonResults.style.marginLeft = '10px'
        _instructionContainer.appendChild(divButton)

        _buttonStart = buttonStart

        buttonStart.addEventListener('click', function () {
            game()
            _instruction.removeChild(_instructionContainer)
        })

        buttonResults.addEventListener('click', function () {
            myWindow('index.html')

        })

    }

    function myWindow(url) {
        const newWindow = window.open(url);
    }


    function textInstruction() {
        var textArea = document.createElement('div')
        var textInstruction = document.createElement('p')
        textArea.appendChild(textInstruction)
        _instructionContainer.appendChild(textArea)
        textArea.style.width = '60vh'
        textArea.style.height = '30vh'
        textArea.style.margin = '10px'
        textArea.style.backgroundColor = 'white'
        textArea.style.border = '1px solid black'
        textArea.style.borderRadius = '5px'
        textInstruction.innerText = 'Thank you for leaving the email. Now a challenge is waiting for you. The game is to avoid obstacles, you can move left and right using the arrows. The player has three lives. Experience as long as possible and sign up on the pages of history.\n' +
            '\n' +
            'Clicking start activates the board. ' +
            '\n' +
            '\n' +
            'Good luck! \ '
        textInstruction.style.fontSize = '20px'
        textInstruction.style.textAlign = 'justify'
        textInstruction.style.padding = '10px'
    }

    function textOther() {
        var textOther = document.createElement('p')
        var textOtherSecond = document.createElement('p')
        _instructionContainer.appendChild(textOther)
        _instructionContainer.appendChild(textOtherSecond)
        textOther.innerText = 'RUNDAY GAME'
        textOther.style.fontSize = '50px'
        textOtherSecond.innerText = 'INSTRUCTION'
        textOtherSecond.style.fontSize = '40px'
        textOtherSecond.style.margin = '0'
        textOtherSecond.style.paddingTop = '0px'
        textOther.style.margin = '0'
        textOther.style.fontWeight = 'bold'

    }


    init()

})()


function end() {


    var _instruction = document.body
    var _instructionContainer = null
    var _buttonStart = null


    function init() {
        showHiScore()

    }

    function myWindow(url) {
        const newWindow = window.open(url);
    }

    function showHiScore(newScore) {
        var currentHiScore = localStorage.getItem('runDayHiScore') || 0

        if (newScore > currentHiScore) {
            localStorage.setItem('runDayHiScore', newScore)
            currentHiScore = localStorage.getItem('runDayHiScore')
        }

        var highScoreContainer = document.createElement('div')
        highScoreContainer.style.position = 'relative'
        highScoreContainer.style.width = '80vh'
        highScoreContainer.style.height = '80vh'
        highScoreContainer.style.margin = '20px auto'
        highScoreContainer.style.border = '3px solid black'
        highScoreContainer.style.borderRadius = '5px'
        highScoreContainer.style.display = 'flex'
        highScoreContainer.style.justifyContent = 'center'
        highScoreContainer.style.alignItems = 'center'
        highScoreContainer.style.backgroundImage = "url('img/woman_run.jpg')"
        highScoreContainer.style.backgroundAttachment = 'fixed'
        highScoreContainer.style.backgroundPosition = 'center'
        highScoreContainer.style.flexDirection = 'column'

        document.body.appendChild(highScoreContainer)

        var hsTextArea = document.createElement('div')
        var hsTitle = document.createElement('h2')
        var hsText = document.createElement('p')

        hsTextArea.style.width = '60vh'
        hsTextArea.style.height = '30vh'
        hsTextArea.style.margin = '10px'
        hsTextArea.style.backgroundColor = 'white'
        hsTextArea.style.border = '1px solid black'
        hsTextArea.style.borderRadius = '5px'

        hsText.style.fontSize = '20px'
        hsText.style.textAlign = 'justify'
        hsText.style.padding = '10px'
        hsText.innerText = 'Your score is: ' + newScore + ' high score is: ' + currentHiScore

        hsTitle.style.fontSize = '50px'
        hsTitle.style.textAlign = 'justify'
        hsTitle.style.padding = '10px'
        hsTitle.innerText = 'HIGH SCORE'

        highScoreContainer.appendChild(hsTitle)
        highScoreContainer.appendChild(hsTextArea)
        hsTextArea.appendChild(hsText)


        var divButtonHighScore = document.createElement('div')
        var tryAgainButton = document.createElement('button')
        var goBackHomeButton = document.createElement('button')

        goBackHomeButton.style.width = '15vh'
        goBackHomeButton.style.height = '5vh'
        goBackHomeButton.style.backgroundColor = 'white'
        goBackHomeButton.style.border = '1px solid black'
        goBackHomeButton.style.borderRadius = '5px'
        goBackHomeButton.innerText = 'HOME'
        goBackHomeButton.style.fontSize = '20px'
        goBackHomeButton.style.display = ''
        goBackHomeButton.style.marginLeft = '10px'

        tryAgainButton.style.width = '15vh'
        tryAgainButton.style.height = '5vh'
        tryAgainButton.style.backgroundColor = 'white'
        tryAgainButton.style.border = '1px solid black'
        tryAgainButton.style.borderRadius = '5px'
        tryAgainButton.innerText = 'TRY AGAIN'
        tryAgainButton.style.fontSize = '20px'
        tryAgainButton.style.display = ''
        tryAgainButton.style.marginLeft = '10px'

        divButtonHighScore.appendChild(tryAgainButton)
        divButtonHighScore.appendChild(goBackHomeButton)
        highScoreContainer.appendChild(divButtonHighScore)

        tryAgainButton.addEventListener('click', function () {
            game()
            document.body.removeChild(highScoreContainer)
        })
        goBackHomeButton.addEventListener('click', function () {
            myWindow('index.html')

        })

    }

    init()

}