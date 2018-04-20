function game() {

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
        life()




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
        fallingElement.style.top='0'
        fallingElement.style.width='10%'
        fallingElement.style.height='10%'
        fallingElement.style.backgroundColor='black'
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



        var elemPosY = Math.floor(Math.random()*90+1)



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
        lifeFirst.style.position='absolute'
        lifeFirst.style.top='85px'
        lifeFirst.style.left='50px'
        lifeFirst.style.zIndex='99999999'
        lifeFirst.innerHTML='<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'
        lifeSecond.style.position='absolute'
        lifeSecond.style.top='85px'
        lifeSecond.style.left='130px'
        lifeSecond.style.zIndex='99999999'
        lifeSecond.innerHTML='<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'
        lifeThird.style.position='absolute'
        lifeThird.style.top='90px'
        lifeThird.style.left='210px'
        lifeThird.style.zIndex='99999999'
        lifeThird.innerHTML='<img style="width: 60px" src="img/2000px-Love_Heart_SVG.svg.png"/>'


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
        timeContainer.style.color='black'
        timeContainer.style.zIndex='99999999'
        timeContainer.style.backgroundColor='white'
        timeContainer.style.width='70px'
        timeContainer.style.height='70px'
        timeContainer.style.display='flex'
        timeContainer.style.alignItems='center'
        timeContainer.style.justifyContent='center'
        timeContainer.style.borderRadius='100%'
        timeContainer.style.border="3px solid red"

    }


    function reduceTime() {
        _time++
        _timeContainer.innerHTML= _time;
        if (_time===0){
            clearInterval(getInterval)
        }
    }

    function removeInstruction() {

    }

    function endGame() {


    }


    init()

};



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

    function instructionContainer (){
        var instructionContainer = document.createElement('div')
        instructionContainer.style.position = 'relative'
        instructionContainer.style.width = '80vh'
        instructionContainer.style.height = '80vh'
        instructionContainer.style.margin = '20px auto'
        instructionContainer.style.border = '3px solid black'
        instructionContainer.style.borderRadius='5px'
        instructionContainer.style.display='flex';
        instructionContainer.style.justifyContent='center';
        instructionContainer.style.alignItems='center';
        instructionContainer.style.flexDirection='column'
        instructionContainer.style.backgroundImage="url('img/woman_run.jpg')"
        instructionContainer.style.backgroundAttachment='fixed'
        instructionContainer.style.backgroundPosition='center'



        _instruction.appendChild(instructionContainer)


        _instructionContainer = instructionContainer

    }

    function button (){
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
        buttonStart.style.border='1px solid black'
        buttonStart.style.borderRadius='5px'
        buttonStart.innerText='START'
        buttonStart.style.fontSize='20px'
        buttonStart.style.display=''

        buttonHome.style.width = '15vh'
        buttonHome.style.height = '5vh'
        buttonHome.style.backgroundColor = 'white'
        buttonHome.style.border='1px solid black'
        buttonHome.style.borderRadius='5px'
        buttonHome.innerText='RESULTS'
        buttonHome.style.fontSize='20px'
        buttonHome.style.display=''
        buttonHome.style.marginLeft='10px'

        buttonResults.style.width = '15vh'
        buttonResults.style.height = '5vh'
        buttonResults.style.backgroundColor = 'white'
        buttonResults.style.border='1px solid black'
        buttonResults.style.borderRadius='5px'
        buttonResults.innerText='HOME'
        buttonResults.style.fontSize='20px'
        buttonResults.style.display=''
        buttonResults.style.marginLeft='10px'
        _instructionContainer.appendChild(divButton)

        _buttonStart = buttonStart

        buttonStart.addEventListener('click',function () {
            game()
            _instruction.removeChild(_instructionContainer)
        })

        buttonResults.addEventListener('click',function () {
            myWindow('index.html')

        })

    }

    function myWindow(url) {
        const newWindow = window.open(url);
    }



    function textInstruction(){
        var textArea = document.createElement('div')
        var textInstruction = document.createElement('p')
        textArea.appendChild(textInstruction)
        _instructionContainer.appendChild(textArea)
        textArea.style.width = '60vh'
        textArea.style.height = '30vh'
        textArea.style.margin = '10px'
        textArea.style.backgroundColor='white'
        textArea.style.border='1px solid black'
        textArea.style.borderRadius='5px'
        textInstruction.innerText='Thank you for leaving the email. Now a challenge is waiting for you. The game is to avoid obstacles, you can move left and right using the arrows. The player has three lives. Experience as long as possible and sign up on the pages of history.\n' +
            '\n' +
            'Clicking start activates the board. ' +
            '\n' +
            '\n' +
            'Good luck! \ '
        textInstruction.style.fontSize='20px'
        textInstruction.style.textAlign='justify'
        textInstruction.style.padding='10px'
    }

    function textOther(){
        var textOther = document.createElement('p')
        var textOtherSecond = document.createElement('p')
        _instructionContainer.appendChild(textOther)
        _instructionContainer.appendChild(textOtherSecond)
        textOther.innerText='RUNDAY GAME'
        textOther.style.fontSize='50px'
        textOtherSecond.innerText='INSTRUCTION'
        textOtherSecond.style.fontSize='40px'
        textOtherSecond.style.margin='0'
        textOtherSecond.style.paddingTop='0px'
        textOther.style.margin='0'
        textOther.style.fontWeight='bold'

    }




    init()

})()

