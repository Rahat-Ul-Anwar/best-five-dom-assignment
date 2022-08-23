// select button.

// const playerButtons = document.querySelectorAll('.card-group button');



// for (let i = 0; i < playerButtons.length; i++){
//     const playerButton = playerButtons[i];

    
//     playerButton.addEventListener('click', function () {

//         const playersName = document.querySelectorAll('.card-group h5');
//             const playerName = playersName[i];
//             const playerNameString = playerName.innerText;

//            //create element and set text
//             const allPlayers = document.getElementById('all-players');

//             const li = document.createElement('li');
//             li.setAttribute("type", "1");
//             li.style.color = 'white';
//             li.innerText = playerNameString;
//         allPlayers.appendChild(li);
        
//         playerButton.disabled = true;
        


//  })
// }

const playerButtons = document.querySelectorAll('.card-group button');

const allPlayers = document.getElementById('all-players');


 
for (let i = 0; i < playerButtons.length; i++){
    const playerButton = playerButtons[i];
    
    playerButton.addEventListener('click', function () {

     //getting selected player number
     const selected = document.getElementById('selected');
                        
                    // const selectedString = selected.innerText;
                    // const selectedNumber = parseInt(selectedString);
                    // const newSelectedNum = selectedNumber + 1;
        
        //callin a function
      const selectedNum =  selectivePlayer('selected');
        
        if (selectedNum > 5) {
        
            alert('can not add more than 5 players');
            return alert;
     }
        else {
           
            selected.innerText = selectedNum;
            
    //get the player name from card group
            const playersName = document.querySelectorAll('.card-group h5');
            const playerName = playersName[i];
            const playerNameString = playerName.innerText;
            
    //create element and set text
         const li = document.createElement('li');
            li.setAttribute("type", "1");
            li.style.color = 'white';
            li.innerText = playerNameString;
            allPlayers.appendChild(li);
    
   //button disable for matching condition
            playerButton.disabled = true;
            playerButton.style.backgroundColor = 'goldenrod';
            playerButton.style.color = 'black';
            
}
    })
    
}


//*******************************     selected player and their expenses   **********************************

//get the calculate button
const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', function () {
     
    const selectedNum =  selectivePlayer('selected');
    //input field for Budget
    
    const inputFieldPlayer = document.getElementById('input-text-player');
    const inputFieldPlayerString = inputFieldPlayer.value;
    const inputFieldPlayerAmount = parseInt(inputFieldPlayerString);
 
    //get the player expenses
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesAmount = parseInt(playerExpensesString);
    const expenses = inputFieldPlayerAmount * selectedNum;

    console.log(expenses);
    playerExpenses.innerText = expenses;
    
})
 

 //common function
 function selectivePlayer(id) {

    const selected = document.getElementById(id);
            
    const selectedString = selected.innerText;
    const selectedNumber = parseInt(selectedString);
    const newSelectedNum = selectedNumber + 1;
        
    return newSelectedNum;  
    
    }

