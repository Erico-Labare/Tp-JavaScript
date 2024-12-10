function startTimer() {
    let seconds = 0;

    const timer = setInterval(() => {
        seconds++;
        console.log(`Temps écoulé : ${seconds} seconde(s)`);

        if (seconds === 10) {
            clearInterval(timer);
            console.log("Temps écoulé !");
        }
    }, 1000);
}

startTimer();