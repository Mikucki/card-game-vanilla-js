function getDiceRollArray(diceCount) {
  let newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return newDiceRolls;
}

/*
Challenge 
1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls 
   returned from getDiceRollArray to generate the html 
   we need to render our dice with random values. This is 
   the HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our 
   new getDiceHtml function. Remember to give it the argument
   it needs. 
5. Delete any code we no longer need.
**hint.md for help**
*/
function getDiceHtml() {
  newArr = getDiceRollArray(3);
  return newArr.map(function (item) {
    return `<div class="dice">${item}</div>`;
  });
}

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "img/cat.jpg",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "img/dog.jpg",
  health: 10,
  diceRoll: [6],
  diceCount: 1,
};

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  const diceHtml = diceRoll
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join("");

  document.getElementById(elementId).innerHTML = `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${getDiceHtml()}
            </div>
        </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
