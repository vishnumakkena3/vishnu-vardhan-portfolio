import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Trophy, Zap } from 'lucide-react';

const Games: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Hey! Wanna Play game 🎮
        </h2>
        <p className="text-gray-400 text-lg">
          Take a break and enjoy some fun interactive games!
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <SnakeGame />
        <MemoryGame />
      </div>
    </div>
  );
};

// Snake Game Component
const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const BOARD_SIZE = 20;

  const generateFood = useCallback(() => {
    return [
      Math.floor(Math.random() * BOARD_SIZE),
      Math.floor(Math.random() * BOARD_SIZE)
    ];
  }, []);

  const resetGame = () => {
    setSnake([[10, 10]]);
    setFood(generateFood());
    setDirection([0, 1]);
    setScore(0);
    setGameOver(false);
    setGameRunning(false);
  };

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = [...newSnake[0]];
      
      head[0] += direction[0];
      head[1] += direction[1];

      // Check wall collision
      if (head[0] < 0 || head[0] >= BOARD_SIZE || head[1] < 0 || head[1] >= BOARD_SIZE) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameRunning, gameOver, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case 'ArrowDown':
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case 'ArrowLeft':
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case 'ArrowRight':
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameRunning]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Zap className="text-green-400" />
          Snake Game
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={20} />
            <span className="font-bold text-yellow-400">{score}</span>
          </div>
          <button
            onClick={() => setGameRunning(!gameRunning)}
            disabled={gameOver}
            className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors disabled:opacity-50"
          >
            {gameRunning ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={resetGame}
            className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div 
          className="grid gap-1 bg-gray-900 p-4 rounded-lg mx-auto"
          style={{ 
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
            width: 'fit-content'
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const row = Math.floor(index / BOARD_SIZE);
            const col = index % BOARD_SIZE;
            
            const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
            const isFood = food[0] === row && food[1] === col;
            const isHead = snake[0] && snake[0][0] === row && snake[0][1] === col;

            return (
              <div
                key={index}
                className={`w-4 h-4 rounded-sm ${
                  isSnake 
                    ? isHead 
                      ? 'bg-green-400' 
                      : 'bg-green-600'
                    : isFood 
                      ? 'bg-red-500' 
                      : 'bg-gray-800'
                }`}
              />
            );
          })}
        </div>

        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-red-400 mb-2">Game Over!</h4>
              <p className="text-gray-300 mb-4">Final Score: {score}</p>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        Use arrow keys to control the snake
      </div>
    </div>
  );
};

// Memory Game Component
const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const emojis = ['🎮', '🚀', '⭐', '🎯', '🔥', '💎', '🎨', '🎪'];

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => index);
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setGameWon(true);
    }
  }, [matched, cards]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      
      const [first, second] = newFlipped;
      const firstEmoji = emojis[Math.floor(cards[first] / 2)];
      const secondEmoji = emojis[Math.floor(cards[second] / 2)];

      if (firstEmoji === secondEmoji) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="text-purple-400" />
          Memory Game
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-gray-400">Moves</div>
            <div className="font-bold text-purple-400">{moves}</div>
          </div>
          <button
            onClick={initializeGame}
            className="p-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
          {cards.map((card, index) => {
            const isFlipped = flipped.includes(index) || matched.includes(index);
            const emoji = emojis[Math.floor(card / 2)];

            return (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                  aspect-square rounded-lg text-2xl font-bold transition-all duration-300 transform
                  ${isFlipped 
                    ? 'bg-purple-500 text-white scale-105' 
                    : 'bg-gray-700 hover:bg-gray-600 hover:scale-105'
                  }
                  ${matched.includes(index) ? 'bg-green-500' : ''}
                `}
                disabled={gameWon}
              >
                {isFlipped ? emoji : '?'}
              </button>
            );
          })}
        </div>

        {gameWon && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-400 mb-2">Congratulations!</h4>
              <p className="text-gray-300 mb-4">You won in {moves} moves!</p>
              <button
                onClick={initializeGame}
                className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        Match all pairs to win!
      </div>
    </div>
  );
};

export default Games;