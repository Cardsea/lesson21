const games = [
    { name: "Snake Game ��", image: "https://cdn-icons-png.flaticon.com/512/2171/2171947.png", link: "games/snake/" },
    { name: "Tic Tac Toe ⭕", image: "https://cdn-icons-png.flaticon.com/512/2171/2171991.png", link: "games/tictactoe/" },
    { name: "Memory Game 🧠", image: "https://cdn-icons-png.flaticon.com/512/2171/2171990.png", link: "games/memory/" },
    { name: "Pong 🏓", image: "https://cdn-icons-png.flaticon.com/512/2171/2171992.png", link: "games/pong/" },
    { name: "Breakout 🎯", image: "https://cdn-icons-png.flaticon.com/512/2171/2171946.png", link: "games/breakout/" },
    { name: "Flappy Bird 🐦", image: "https://cdn-icons-png.flaticon.com/512/2171/2171948.png", link: "games/flappy/" },
    { name: "2048 🎲", image: "https://cdn-icons-png.flaticon.com/512/2171/2171945.png", link: "games/2048/" },
    { name: "Tetris 🟦", image: "https://cdn-icons-png.flaticon.com/512/2171/2171993.png", link: "games/tetris/" },
    { name: "Pac-Man 👻", image: "https://cdn-icons-png.flaticon.com/512/2171/2171994.png", link: "games/pacman/" },
    { name: "Space Invaders 🚀", image: "https://cdn-icons-png.flaticon.com/512/2171/2171995.png", link: "games/space/" },
    { name: "Word Scramble 📝", image: "https://cdn-icons-png.flaticon.com/512/2171/2171996.png", link: "games/word/" },
    { name: "Minesweeper 💣", image: "https://cdn-icons-png.flaticon.com/512/2171/2171989.png", link: "games/mines/" },
    { name: "Sudoku 🔢", image: "https://cdn-icons-png.flaticon.com/512/2171/2171997.png", link: "games/sudoku/" },
    { name: "Whack-a-Mole 🔨", image: "https://cdn-icons-png.flaticon.com/512/2171/2171998.png", link: "games/whack/" },
    { name: "Color Match 🎨", image: "https://cdn-icons-png.flaticon.com/512/2171/2171949.png", link: "games/color/" },
    { name: "Math Quiz ➗", image: "https://cdn-icons-png.flaticon.com/512/2171/2171990.png", link: "games/math/" },
    { name: "Puzzle Slide 🧩", image: "https://cdn-icons-png.flaticon.com/512/2171/2171991.png", link: "games/puzzle/" },
    { name: "Typing Race ⌨️", image: "https://cdn-icons-png.flaticon.com/512/2171/2171992.png", link: "games/typing/" },
    { name: "Bubble Pop 🫧", image: "https://cdn-icons-png.flaticon.com/512/2171/2171947.png", link: "games/bubble/" },
    { name: "Rock Paper Scissors ✂️", image: "https://cdn-icons-png.flaticon.com/512/2171/2171993.png", link: "games/rps/" }
];

function createGameCards() {
    const gamesGrid = document.querySelector('.games-grid');
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
        `;
        
        gameCard.addEventListener('click', () => {
            window.location.href = game.link;
        });
        
        gamesGrid.appendChild(gameCard);
    });
}

// Create game cards when the page loads
document.addEventListener('DOMContentLoaded', createGameCards); 