function game() {

    var _gameContainer = document.body
    var _gameBoard = null
    var _player = null
    var _placePlayerX = 45
    var _placePlayerY = 70
    var _element = null
    var _fallingElement = null
    var _fallingElementTwo = null
    var _fallingElementThree = null
    var _time = 0
    var _timeContainer = null
    var _lifeFirst = null
    var _lifeSecond = null
    var _lifeThird = null
    var _lifeContainer = null

    console.log(_time)

    function init() {
        createBoard()
        createPlayer()
        attacListeners()
        placePlayer(_placePlayerX, _placePlayerY)
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

    function createFallingElementTwo() {
        function removeElement() {
            fallingElementTwo.remove()
        }

        var fallingElementTwo = document.createElement('div')
        fallingElementTwo.classList.add('element')
        fallingElementTwo.style.position = 'absolute'
        fallingElementTwo.style.top = '0'
        fallingElementTwo.style.width = '20%'
        fallingElementTwo.style.height = '10%'
        fallingElementTwo.style.backgroundImage = "url('img/wolf.png')"
        fallingElementTwo.style.backgroundRepeat='no-repeat'
        fallingElementTwo.style.transition = 'all 3s ease-in'
        _gameBoard.appendChild(fallingElementTwo)
        _fallingElementTwo = fallingElementTwo

        placeFallingElementTwo()


        setTimeout(removeElement, 4000)

        function transformElementTwo() {
            fallingElementTwo.style.transform = 'translate(0, 80vh)'
        }

        setTimeout(transformElementTwo, 1000)

    }




    function placeFallingElementTwo() {
        var elemPosY = Math.floor(Math.random() * 60)
        _fallingElementTwo.style.left = elemPosY + '%'
    }

    function createFallingElementThree() {
        function removeElement() {
            fallingElementThree.remove()

        }

        var fallingElementThree = document.createElement('div')
        fallingElementThree.classList.add('element')
        fallingElementThree.style.position = 'absolute'
        fallingElementThree.style.top = '0'
        fallingElementThree.style.width = '20%'
        fallingElementThree.style.height = '10%'
        //fallingElementThree.style.backgroundImage = "url('img/eks.png')"

        fallingElementThree.innerHTML='<img style="width: 100px" src="img/eks.png"/>'

        fallingElementThree.style.backgroundRepeat='no-repeat'
        fallingElementThree.style.transition = 'all 3s ease-in'
        _gameBoard.appendChild(fallingElementThree)
        _fallingElementThree = fallingElementThree

        placeFallingElementThree()


        setTimeout(removeElement, 4000)

        function transformElementThree() {
            fallingElementThree.style.transform = 'translate(0, 80vh)'
        }

        setTimeout(transformElementThree, 1000)

    }

    function placeFallingElementThree() {


        var elemPosY = Math.floor(Math.random() * 60)


        _fallingElementThree.style.left = elemPosY + '%'
    }

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

    var _levelShow = null


    setTimeout(function () {
        var showLevel = document.createElement('span')
        _levelShow = showLevel
        showLevel.innerText = 'LEVEL 1'
        showLevel.style.fontSize='20px'
        showLevel.style.padding='5px'
        showLevel.style.color = 'white'
        showLevel.style.textAlign='center'
        showLevel.style.position='absolute'
        _gameBoard.appendChild(showLevel)
    },0)

        setTimeout(level,15000)

        function level () {
            setInterval(createFallingElementTwo, 4000);
            _gameBoard.removeChild(_levelShow)
            var showLevel = document.createElement('span')
            _levelShow = showLevel
            showLevel.innerText = 'LEVEL 2'
            showLevel.style.fontSize='20px'
            showLevel.style.padding='5px'
            showLevel.style.color = 'white'
            showLevel.style.textAlign='center'
            showLevel.style.position='absolute'
            _gameBoard.appendChild(showLevel)

        }

    setTimeout(levelThree,30000)

    function levelThree () {
        setInterval(createFallingElementThree, 4000);
        _gameBoard.removeChild(_levelShow)
        var showLevel = document.createElement('span')

        showLevel.innerText = 'LEVEL 3'
        showLevel.style.fontSize='20px'
        showLevel.style.color = 'white'
        showLevel.style.padding='5px'
        showLevel.style.textAlign='center'
        showLevel.style.position='absolute'
        _gameBoard.appendChild(showLevel)
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
        textInstruction.innerText = 'WYNIKI'
        textInstruction.style.fontSize = '20px'
        textInstruction.style.textAlign = 'justify'
        textInstruction.style.padding = '10px'
    }

    function textOther() {
        var textOther = document.createElement('p')
        var textOtherSecond = document.createElement('p')
        _instructionContainer.appendChild(textOther)
        _instructionContainer.appendChild(textOtherSecond)
        textOther.innerText = 'GAME OVER'
        textOther.style.fontSize = '50px'
        textOtherSecond.innerText = 'RESULTS'
        textOtherSecond.style.fontSize = '40px'
        textOtherSecond.style.margin = '0'
        textOtherSecond.style.paddingTop = '0px'
        textOther.style.margin = '0'
        textOther.style.fontWeight = 'bold'

    }


    init()

}