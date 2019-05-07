function startGame() {
    //starting a new game.
   
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'Multinath player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = 
        <HTMLInputElement>document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'Multimath player'): void {
    let logger: 
        (value: string) => void;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerHTML = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}

let logMessage = (message: string) => console.log(message);

function logError(message: string): void {
    console.error(message);
}

logMessage('Welcome to Multimath app');

document.getElementById('startGame')!.addEventListener('click', startGame);