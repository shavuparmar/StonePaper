let userScore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");


const gencompchoise = () => {
     const option = ["rock", "paper", "scissor"];
     const randominx = Math.floor(Math.random() * 3);
     return option[randominx];
}

const drawgame = () => {
     console.log("Game was draw")
     msg.innertext ="SAME SAME PUPPY SAME  "
}
const showwiner = (userwin) =>{
     if(userwin){
          userScore++
          userscorepara.innerText = userScore
          console.log("JEET GYA BHAI TU");
         msg.innerText = "JEET GYA🎉🎉🎉"
         msg.style.background = "green"
     }else{
          compscore++
          compscorepara.innerText = compscore
          console.log("HAAR GYA BE");
          msg.innerText = "HAAR GYA😂😂 ";
          msg.style.background = "red"
     }
}



const playgame = (userchoice) => {
     console.log("user choise = ", userchoice);
     const compchoise = gencompchoise();
     console.log("comp choise = ", compchoise);



     if (userchoice === compchoise) {
          drawgame();
     } else {
          let userwin = true;
          if (userchoice === "rock") {
               userwin = compchoise === "paper" ? false : true;
          }else if(userchoice === "paper"){
               userwin = compchoise==="scissor" ? false : true;
          }else{
             userwin=  compchoise ==="rock" ? false : true;
          }
          showwiner(userwin);
     }




}


choice.forEach((choice) => {
     console.log(choice)
     choice.addEventListener("click", () => {
          const userchoice = choice.getAttribute("id");
          playgame(userchoice);
     })
})