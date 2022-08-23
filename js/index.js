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
        
        //calling a function
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
     
    const selectedNum = selectivePlayer('selected');
    
    //calling budget calculator function
    const budgetAmount = budgetCalculte('input-text-player');
    // const inputFieldPlayer = document.getElementById('input-text-player');
    // const inputFieldPlayerString = inputFieldPlayer.value;
    // const inputFieldPlayerAmount = parseInt(inputFieldPlayerString);

    const allplayerExpenses = playerExpenses('player-expenses');
    //get the player expenses
    // const playerExpenses = document.getElementById('player-expenses');
    // const playerExpensesString = playerExpenses.innerText;
    // const playerExpensesAmount = parseInt(playerExpensesString);
    // const expenses = budgetAmount * (selectedNum - 1);
    // playerExpenses.innerText = expenses;
    
})

// player expenses function

function playerExpenses(expensesId) {
    const budgetAmount = budgetCalculte('input-text-player');
    const selectedNum = selectivePlayer('selected');
    const playerExpensesElement = document.getElementById(expensesId);
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpensesAmount = parseInt(playerExpensesString);
    const expenses = budgetAmount * (selectedNum - 1);
    playerExpensesElement.innerText = expenses;
    return expenses;
  }

// budget calculator
function budgetCalculte(budgetId) {
     
    const inputFieldPlayer = document.getElementById(budgetId);
    const inputFieldPlayerString = inputFieldPlayer.value;
    const inputFieldPlayerAmount = parseInt(inputFieldPlayerString);
    return inputFieldPlayerAmount;

 }
 

 //common function

   function selectivePlayer(id) {

    const selected = document.getElementById(id);
            
    const selectedString = selected.innerText;
    const selectedNumber = parseInt(selectedString);
    const newSelectedNum = selectedNumber + 1;
        
    return newSelectedNum;  
    
}

//**************************manager and coach section*************************
const manager = document.getElementById('input-text-manager');
const coach = document.getElementById('input-text-coach');
//to get manager

const calculateTotalButton = document.getElementById('calculate-total-btn');

calculateTotalButton.addEventListener('click', function () {
    // const budgetAmount = budgetCalculte('input-text-player');
   
    const allplayerExpenses = playerExpenses('player-expenses');
    
const managerString = manager.value;
const managerAmount = parseInt(managerString);
const coachString = coach.value;
const coachAmount = parseInt(coachString);
    
const calculateTotal = allplayerExpenses + managerAmount + coachAmount;
    console.log(calculateTotal);
    
// get final total
    
    const finalTotal = document.getElementById('final-total');
    const finalTotalString = finalTotal.innerText;
    const finalTotalAmount = parseInt(finalTotalString);
    finalTotal.innerText = calculateTotal;
    
 })





