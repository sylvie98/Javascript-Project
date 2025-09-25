  let countdown;
    let remainingTime = 0;
    let isPaused = false;

    const countdownEl = document.getElementById('countdown');
    const timeInput = document.getElementById('timeInput');

    document.getElementById('startBtn').addEventListener('click', () => {
      clearInterval(countdown);
      remainingTime = parseInt(timeInput.value) || 0;
      if (remainingTime > 0) startCountdown();
    });

    document.getElementById('pauseBtn').addEventListener('click', () => {
      isPaused = true;
      clearInterval(countdown);
    });

    document.getElementById('resumeBtn').addEventListener('click', () => {
      if (isPaused && remainingTime > 0) {
        isPaused = false;
        startCountdown();
      }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
      clearInterval(countdown);
      countdownEl.textContent = "00:00:00:00";
      remainingTime = 0;
      isPaused = false;
    });

    function startCountdown() {
      countdown = setInterval(() => {
        if (!isPaused && remainingTime > 0) {
          remainingTime--;
          displayTime(remainingTime);
        } else if (remainingTime <= 0) {
          clearInterval(countdown);
          alert("Countdown finished!");
        }
      }, 1000);
    }

    function displayTime(seconds) {
      const days = Math.floor(seconds / 86400);
      const hrs = Math.floor((seconds % 86400) / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      countdownEl.textContent =
        `${String(days).padStart(2, '0')}:${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }