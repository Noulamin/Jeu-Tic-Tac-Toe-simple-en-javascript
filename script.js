

const content = document.getElementById('buttons');
const inputs = document.getElementById('inputs');

turn = true

let player1 = []
let player2 = []
let player1_name = ''
let player2_name = ''
let clicked_buttons = []

winner = false
can_player = false


document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('player_1'))
    {
        player1_name = localStorage.getItem('player_1')
        player2_name = localStorage.getItem('player_2')
        document.getElementById('player1').value = player1_name
        document.getElementById('player2').value = player2_name
        can_player = true
        document.getElementById('winner').textContent = player1_name + "'s turn..."
    }

    if(document.getElementById('player1').value == '' || document.getElementById('player2').value == '')
    {
        document.getElementById('winner').textContent = "Enter player's names"
        return
    }
});


inputs.addEventListener('input', (event) => {

    let isInput = event.target.nodeName === 'INPUT';

    if (!isInput || winner) {
        return
    }

    

    if(document.getElementById('player1').value == '' || document.getElementById('player2').value == '')
    {
        document.getElementById('winner').textContent = "Enter player's names"
        can_player = false
        return
    }
    else
    {
        can_player = true
        player1_name = document.getElementById('player1').value
        player2_name = document.getElementById('player2').value
        document.getElementById('winner').textContent = player1_name + "'s turn..."
        if(localStorage.getItem('player_1') != player1_name)
        {
            localStorage.setItem('player_1',player1_name)
        }

        if(localStorage.getItem('player_2') != player2_name)
        {
            localStorage.setItem('player_2',player2_name)
        }
    }
});

content.addEventListener('click', (event) => {
    
    let isButton = event.target.nodeName === 'BUTTON';

    if(event.target.className == 'restart_button')
    {
        window.open('index.html','_self')
        return
    }

    if (!isButton || winner || !can_player) {
        return
    }

    if(winner)
    {
        if(!turn)
        {
            document.getElementById('winner').textContent =  player1_name + " is the winner"
        }
        else
        {
            document.getElementById('winner').textContent =  player2_name + " is the winner"
        }
    }
    else
    {
        if(!turn)
        {
            document.getElementById('winner').textContent =  player1_name + "'s turn..."
        }
        else
        {
            document.getElementById('winner').textContent =  player2_name + "'s turn..."
        }
    }


    console.log(event.target.id)

    if(clicked_buttons.includes(event.target.id))
    {
        return
    }
    else
    {
        clicked_buttons.push(event.target.id)
    }

    if(turn == true)
    {
        turn = false
        player1.push(event.target.id)
        event.target.style.background = 'blue'
        event.target.textContent = '✖'
    }
    else
    {
        turn = true
        player2.push(event.target.id)
        event.target.style.background = 'green'
        event.target.textContent = 'O'
    }

    check_winner()

    if(clicked_buttons.length == 9 && winner == false)
    {
        document.getElementById('winner').textContent = 'Draw XD'
        winner = true
    }
})

function check_winner()
{
    // player 1
    if(player1.includes('1') && player1.includes('2') && player1.includes('3'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    if(player1.includes('4') && player1.includes('5') && player1.includes('6'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    if(player1.includes('7') && player1.includes('8') && player1.includes('9'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    // rows

    if(player1.includes('1') && player1.includes('5') && player1.includes('9'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    if(player1.includes('3') && player1.includes('5') && player1.includes('7'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    if(player1.includes('2') && player1.includes('5') && player1.includes('8'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    //

    if(player1.includes('1') && player1.includes('4') && player1.includes('7'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    if(player1.includes('3') && player1.includes('6') && player1.includes('9'))
    {
        document.getElementById('winner').textContent = player1_name + ' is the winner'
        winner = true
    }

    // player 2
    if(player2.includes('1') && player2.includes('2') && player2.includes('3'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    if(player2.includes('4') && player2.includes('5') && player2.includes('6'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    if(player2.includes('7') && player2.includes('8') && player2.includes('9'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    // rows

    if(player2.includes('1') && player2.includes('5') && player2.includes('9'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    if(player2.includes('3') && player2.includes('5') && player2.includes('7'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    if(player2.includes('2') && player2.includes('5') && player2.includes('8'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    //

    if(player2.includes('1') && player2.includes('4') && player2.includes('7'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }

    if(player2.includes('3') && player2.includes('6') && player2.includes('9'))
    {
        document.getElementById('winner').textContent = player2_name + ' is the winner'
        winner = true
    }
}