import readlineSync from 'readline-sync';

export const greeting = () => {
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
};

