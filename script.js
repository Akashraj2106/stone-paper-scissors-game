let userscore = 0 ;
let compscore = 0;

let user_score =document.querySelector("#user-score");
let computer_score =document.querySelector("#comp-score")
// Generate computer choice ramdom


const get_computer_choice = () => {
     const option  = ["rock" , "paper" , "scissors"]; 
     const random_Idx = Math.floor(Math.random() * 3);
     return option[random_Idx];
}



// game play 
const playGame = (userchoice) => {
    console.log("user choice " , userchoice);
    const comp_Choice = get_computer_choice();
    console.log("computer choice " , comp_Choice);
     let msgcontain = document.querySelector("#msg");
     // for draw match
    if(userchoice === comp_Choice){
          console.log("game draw!");
          msgcontain.innerText = "match draw play again!";
          msgcontain.style.backgroundColor = 'black';
    }
    
    // for not draw match
    
    else{

        let userwin = true;

        if(userchoice === "rock"){
           // computer choice will be  : paper , scissors     

          userwin = comp_Choice === "paper" ? false : true;   

        }

            

        else if(userchoice === "paper"){
         // computer choice will be  : rock , scissors     

          userwin = comp_Choice === "scissors" ? false : true;   
        }


       else{
             // computer choice will be  : rock , paper    

          userwin = comp_Choice === "rock" ? false : true;   
       }


       if(userwin == true){
          console.log("you win!");
          msgcontain.style.backgroundColor = "green";
          msgcontain.innerText =`You win! ${userchoice} beat! ${comp_Choice}`
          userscore++;
          user_score.innerText = userscore;

          
       }

       else{
            console.log("you loss!");
            msgcontain.style.backgroundColor = "red";
          msgcontain.innerText = `You lose! ${comp_Choice} beat! ${userchoice}`;
          compscore++;
          computer_score.innerText = compscore;

          
       }

    }


    
    
}


// user choice

const selectChoice = document.querySelectorAll(".choice");

selectChoice.forEach((user_choice) => {
  user_choice.addEventListener("click" , () => {
   const get_Attribute_of_choice = user_choice.getAttribute("id");
     playGame(get_Attribute_of_choice);
  });
});




