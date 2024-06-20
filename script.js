
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");






const gencompchoice  = () => {
const options = ["Rock" , "Paper" , "Scissors"];
const randidx = Math.floor(Math.random() * 3);
return options[randidx]
};


const drawgame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.background = "purple"


};

const showwinner = (userwin , compchoice , userchoice) => { 
    if(userwin){
        userscore++
        userscorepara.innerText = userscore
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.background = "green"


    }else {
        compscore++
        compscorepara.innerText = compscore
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.background = "red"


    }
}
const playgame = (userchoice) => {
    //genertae computer choice
    const compchoice = gencompchoice();


        if (userchoice === compchoice) {
          drawgame();
        } else {
          let userwin = true;
          if (userchoice === "Rock") {
            //scissors, paper
            userwin = compchoice === "Paper" ? false : true;
          } else if (userchoice === "Paper") {
            //rock, scissors
            userwin = compchoice === "Scissors" ? false : true;
          } else {
            //rock, paper
            userwin = compchoice === "Rock" ? false : true;
          }
          showwinner(userwin, userchoice, compchoice);
        }
      }
    





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});



