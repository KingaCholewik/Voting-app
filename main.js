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

//userzy, którzy już zagłosowali
const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  const user = userName.value;
  const password = userId.value;
  const select = voteOptions.value;

  if (validUserIds.get(user) === password) {
    if (votedUsers.has(user)) {
      alert('już głosowałeś');
    } else {
      votedUsers.add(user);
      voteCounts.set(select, voteCounts.get(select) + 1);
    }
  } else {
    alert('nieprawidłowe dane');
  }

  updateResults();
};

const updateResults = () => {
  let output = '';
  for (const [option, count] of voteCounts) {
    output += `${option} : ${count} głosów.</br>`;
  }

  resultDiv.innerHTML = output;
  userName.value = '';
  userId.value = '';
  voteOptions.value = 'Opcja 1';
};

votingForm.addEventListener('submit', voting);
