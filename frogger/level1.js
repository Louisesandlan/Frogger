let currentIndex = 76;

resetButton.addEventListener('click', () => {
    squares[currentIndex].classList.remove('frog');

    currentIndex = 76;
    currentTime = 20;
    clearInterval(timerId);
    clearInterval(outcomeTimerId);
    timerId = null;
    outcomeTimerId = null;

    resultDisplay.textContent = "";
    timeLeft.textContent = currentTime;
    squares[currentIndex].classList.add('frog');

    stratPauseButton.innerHTML = "Start";
})