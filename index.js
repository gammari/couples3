const startButton = document.querySelector('.board__button');
const boardTitle = document.querySelector('.board__title');

function createBoard(count, columns) {
    const gameBoard = document.querySelector('.board');
    gameBoard.textContent = "";

    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    const table = template.querySelector('.table');
    const restartBtn = template.querySelector(".table__button");

    let icons = createIconsArray(count);
    icons.forEach((icon) => {
      table.append(createCard(icon));
    });

    table.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);`;

    gameBoard.append(table);

    restartBtn.addEventListener('click', () => {
        location.reload()
    });

    gameBoard.append(restartBtn);

}

function createCard(flippedIcon) {
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  const card = template.querySelector('.card');

  card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);


  return card;
}

function createIconsArray(initialCount) {
  const cardIcons = [
    "compass", 
    "cloud", 
    "play", 
    "bolt", 
    "stop", 
    "cogs", 
    "atom", 
    "basketball-ball", 
    "arrows", 
    "angle-left", 
    "bars", 
    "file", 
    "filter", 
    "gear", 
    "folder", 
    "folder-open", 
    "shield", 
    "scissors", 
    "pen-clip",
  ];

  let cards = cardIcons.slice(0, Math.floor(initialCount / 2));

  let duobleCards = dublicateElements(cards);

  return shuffleArray(duobleCards);
}

function dublicateElements(array) {
  let dublicate = [];

  array.forEach((item) => {
    dublicate.push(item, item);
  });

  return dublicate;
}

function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    currentIndex--;
    const randomIndex = Math.floor(Math.random() * currentIndex);

    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  };

  return array;
}
startButton.addEventListener("click", (event) => {
  event.preventDefault()
  const input = document.querySelector('.board__input');

  let columns = input.value;
  let count;

  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  };

  createBoard(count, columns);
});

