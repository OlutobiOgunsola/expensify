const highscores = [
  {
    time: 1122231238283,
    username: 'Sarah',
    highscore: 50,
  },
  {
    time: 1122231238284,
    username: 'Sarah',
    highscore: 50,
  },
];

localStorage.setItem('highscores', highscores);

const getHighscores = _ => {
  const currentHighscore = scoreQuiz();
  const highscores = localStorage.getItem('highscores');
  highscores.push();
};
