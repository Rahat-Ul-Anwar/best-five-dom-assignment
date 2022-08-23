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
     //showing selected player number
        const selected = document.getElementById('selected');
        
        const selectedString = selected.innerText;
        console.log(selectedString);
        const selectedNumber = parseInt(selectedString);
        selected.innerText = playerButton.length;
        
        if (playerButton.length > 4) {
    
            alert('can not add more than 5 players');
            return alert;
}
        else {
            const playersName = document.querySelectorAll('.card-group h5');
            const playerName = playersName[i];
            const playerNameString = playerName.innerText;


            

           //create element and set text
         const li = document.createElement('li');
            li.setAttribute("type", "1");
            li.style.color = 'white';
            li.innerText = playerNameString;
        allPlayers.appendChild(li);
        
        playerButton.disabled = true;
        playerButton.style.backgroundColor = 'goldenrod';
        playerButton.style.color = 'black';
            

            
         
            
        }
    })
    
}


// selected player and their due


 