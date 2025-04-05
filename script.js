const games = [
    { name: "Snake Game 🐍", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx32G1N6sJDn2xH4no5KE0HJHs2IiuUtYPbw&s", link: "games/snake.html" },
    { name: "Tic Tac Toe ⭕", image: "https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-2048x2048-g58f0u84.png", link: "games/tictactoe.html" },
    { name: "Memory Game 🧠", image: "https://static.wikia.nocookie.net/rfti/images/f/f5/Nerd.webp/revision/latest?cb=20221109092158", link: "games/memory.html" },
    { name: "Pong 🏓", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pong-9-625202.png", link: "games/pong.html" },
    { name: "Breakout 🎯", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/breakout-game-3927394-3260028.png", link: "games/breakout.html" },
    { name: "Flappy Bird 🐦", image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png", link: "games/flappy.html" },
    { name: "2048 🎲", image: "https://via.placeholder.com/150?text=2048", link: "games/2048.html" },
    { name: "Tetris 🟦", image: "https://via.placeholder.com/150?text=Tetris", link: "games/tetris.html" },
    { name: "Pac-Man 👻", image: "https://via.placeholder.com/150?text=PacMan", link: "games/pacman.html" },
    { name: "Space Invaders 🚀", image: "https://via.placeholder.com/150?text=Space", link: "games/space.html" },
    { name: "Word Scramble 📝", image: "https://via.placeholder.com/150?text=Words", link: "games/word.html" },
    { name: "Minesweeper 💣", image: "https://via.placeholder.com/150?text=Mines", link: "games/mines.html" },
    { name: "Sudoku 🔢", image: "https://via.placeholder.com/150?text=Sudoku", link: "games/sudoku.html" },
    { name: "Whack-a-Mole 🔨", image: "https://via.placeholder.com/150?text=Whack", link: "games/whack.html" },
    { name: "Color Match 🎨", image: "https://via.placeholder.com/150?text=Colors", link: "games/color.html" },
    { name: "Math Quiz ➗", image: "https://via.placeholder.com/150?text=Math", link: "games/math.html" },
    { name: "Puzzle Slide 🧩", image: "https://via.placeholder.com/150?text=Puzzle", link: "games/puzzle.html" },
    { name: "Typing Race ⌨️", image: "https://via.placeholder.com/150?text=Type", link: "games/typing.html" },
    { name: "Bubble Pop 🫧", image: "https://via.placeholder.com/150?text=Bubble", link: "games/bubble.html" },
    { name: "Rock Paper Scissors ✂️", image: "https://via.placeholder.com/150?text=RPS", link: "games/rps.html" }
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