const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');

const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const resultDiv = document.querySelector('.vote-results');

const validUserIds = new Map([
  ['Kinga', '123kinga'],
  ['Ania', '1234ania'],
  ['Jagoda', '12jagoda'],
  ['Kamila', '12kamila'],
]);

const voteCounts = new Map();
voteCounts.set('Opcja 1', 0);
voteCounts.set('Opcja 2', 0);
voteCounts.set('Opcja 3', 0);

const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  console.log('glosowanie');
  updateResults();
};

const updateResults = () => {
  let output = '';
  console.log(output);
  for (const [option, count] of voteCounts) {
    output += `${option} : ${count} głosów.`;
  }

  resultDiv.innerHTML = output;
};

votingForm.addEventListener('submit', voting);

updateResults();
