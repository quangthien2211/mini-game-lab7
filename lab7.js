'use strict';

let secretNumber = Math.trunc(Math.random() * 30 + 1);
let score = 30;
let highscore = 0;

// DRY

const notification = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // khi Không nhập dữ liệu

  if (!guess) {
    notification('No number 🤐');
  }

  // Khi kết quả đúng
  else if (guess === secretNumber) {
    notification('Correct Number 🎉🎉🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#69db7c';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // khi số mình đoán lớn hơn số bí mật
  else if (guess !== secretNumber) {
    if (score > 0) {
      notification(guess > secretNumber ? 'Too hight 📈' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;

      // notification('Too hight 📈');
      // score--;
      // document.querySelector('.score').textContent = score;
    } else {
      notification('You loss the game 😛😛😛');
    }
  }

  // khi số mình đoán nhỏ hơn số bí mật
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     notification('Too low 📉');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     notification('You loss the game 😛😛😛');
  //   }
  // }
});

// nút again !

// document.querySelector('.again').addEventListener('click', function () {
//   score = 30;
//   secretNumber = Math.trunc(Math.random() * 30 + 1);
//   notification('Start guessing....';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#ffe8cc';
//   document.querySelector('.score').textContent = score;
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  notification('Start guessing...');
  // displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#ffe8cc';
});
