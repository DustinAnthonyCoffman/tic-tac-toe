/*----- constants -----*/
//values that cannot change

const winningCombo = [
    '1,2,3',  '1,5,9', '1,4,7', 
    '2,5,8', '3,5,7', '3,6,9', 
    '4,5,6', '6,5,4', '7,5,3', 
    '7,8,9', '7,4,1', '8,5,2', 
    '9,8,7', '9,6,3', '9,5,1'
];

/*----- app's state (variables) -----*/
//the stuff that your storing in values, changable Data
let turn = 'player1';
let player1 = [];
let player2 = [];


/*----- cached element references -----*/



/*----- event listeners -----*/
//user clicks div, pulls value from div puts in player array
document.getElementById('grid')
    .addEventListener('click', function(evt) {
        if ( !(evt.target.textContent) ) { 
            alert('you cant click twice!!');  
            return;
    };
    
        let boxValue = evt.target.textContent;
        
 
        
        if (turn === 'player1') {
           
            player1.push(boxValue);
            backgroundChange(evt);
            checkWinner(player1, player2);
            turn = 'player2';
            return;

        }
        if (turn === 'player2') {
            player2.push(boxValue);
            backgroundChange(evt);
            checkWinner(player1, player2);
            turn = 'player1';
            return;
        }
    });


/*----- functions -----*/

function init() {
    turn = player1;
    render();
}

function render() {
   //clear all values
   player1 = [];
   player2 = [];
   turn = player1;
}

function checkWinner(p1, p2) {
    
    console.log('Player 1 boxes taken');  
    console.log(p1.join());
    console.log('Player 2 boxes taken');  
    console.log(p2.join());
    if (winningCombo.includes(p1.join())) {
       alert('player1wins');
       render();

   }
    if (winningCombo.includes(p2.join())) {
        alert('player2wins');
        render();
}
}

function backgroundChange(evt) {
    let targetDiv = evt.target;
    let badClick = document.getElementById('grid');
    if (targetDiv === badClick) {
        return;
    }
        if (turn === 'player1') {
           targetDiv.style.backgroundImage = 'url(https://i.imgur.com/k7SbxY5.png)';
            targetDiv.textContent = '';
        }
        if (turn === 'player2') {
            targetDiv.style.backgroundImage = 'url(https://i.imgur.com/Z9XWiPy.png)';
            targetDiv.textContent = '';
        }
}