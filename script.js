console.log('loading...');

const descriptionText = document.querySelector('.adventure-description');
const buttons = document.querySelectorAll('.button');
const textAdventure = [
  {
    description: 'This is the adventure of Johnny sins, who went on a hike with his wife, but go separated from her.',
    options: [
      'Head back to where you came from',
      'Look up at the sky and had towards the sun'
    ]
  },
  {
    description: 'great, Johnny was able to find his way back, but still cannot spot his wife, what should he do now?',
    options: [
      'Look for shelter',
      'Continue searching at the risk of getting lost again'
    ]
  },
  {
    description: 'Johnny is safe in the shelter. But now it is starting to rain, What should Johnny do?',
    options: [
      'Leave the cave as soon as it stops raining',
      'Wait until the sun comes out again and continue searching'
    ]
  }
]

let index = 0;

function setGameState() {
  let gameStateText = textAdventure[index];
  descriptionText.textContent = gameStateText.description;
  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    let buttonText = gameStateText.options[i];

    button.textContent = buttonText;
  }
}

function resetGame() {
  index = 0;

  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    button.removeEventListener('click', resetGame);
    button.addEventListener('click', buttonClick);  
  }

  setGameState();
}

function forward() {
  if (index == textAdventure.length - 1) {
    descriptionText.textContent = 'Thank you for playing!';
    for (let i=0, ii=buttons.length; i<ii; i++) {
      let button = buttons[i];
      button.removeEventListener('click', buttonClick);
      button.textContent = 'Play Again';
      button.addEventListener('click', resetGame);
    }
  }
  index++;
  setGameState();
}

function back() {
  if (index == 0) {
    console.log("can't go back any further!")
    return;
  }
  
  index--;
  setGameState();
}

function buttonClick(event) {
  if (event.target.id == 'first_btn') {
    forward();
  } else {
    back();
  }
}

for (let i=0, ii=buttons.length; i<ii; i++) {
  let button = buttons[i];
  button.addEventListener('click', buttonClick);  
}

setGameState();