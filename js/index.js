// select button.

const playerButtons = document.querySelectorAll('.card-group button');



for (let i = 0; i < playerButtons.length; i++){
    const playerButton = playerButtons[i];

    
    playerButton.addEventListener('click', function () {

        const playersName = document.querySelectorAll('.card-group h5');
            const playerName = playersName[i];
            const playerNameString = playerName.innerText;

           //create element and set text
            const allPlayers = document.getElementById('all-players');

            const li = document.createElement('li');
            li.setAttribute("type", "1");
            li.style.color = 'white';
            li.innerText = playerNameString;
            allPlayers.appendChild(li);

 })
}

// const playerButtons = document.querySelectorAll('.card-group button');


// for (let i = 0; i < playerButtons.length; i++){
//     const playerButton = playerButtons[i];
//     if (playerButton.length > 5) {

//         alert('cant add more than 5 names');
        
//     }
//     else {
//         playerButton.addEventListener('click', function() {


//             const playersName = document.querySelectorAll('.card-group h5');
    
            
//             for (let j = 0; j < playersName.length; j++){
//                 const playerName = playersName[j];
//                 const playerNameString = playerName.innerText;
                 
    
//             const allPlayers = document.getElementById('all-players');
    
//             const li = document.createElement('li');
//                         li.setAttribute("type", "1");
//                         li.style.color = 'white';
//                         li.innerText = playerNameString;
//                         allPlayers.appendChild(li);
       
    
//              }
//      })
      
        
//     }
// }



