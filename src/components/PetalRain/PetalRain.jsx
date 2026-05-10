import { useState, useEffect } from 'react';
import './PetalRain.css';

const PETAL_EMOJIS = ['🌸', '🌺', '💮', '🏵️', '✿', '❀'];

function PetalRain() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const initialPetals = Array.from({ length: 18 }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const filtered = prev.filter(p => Date.now() - p.createdAt < 12000);
        return [...filtered, createPetal(Date.now())];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  function createPetal(id) {
    return {
      id,
      emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
      left: Math.random() * 100,
      size: 14 + Math.random() * 16,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 6,
      driftX: -60 + Math.random() * 120,
      endRotation: Math.random() * 720 - 360,
      createdAt: Date.now(),
    };
  }

  return (
    <div className="petal-rain" aria-hidden="true">
      {petals.map(petal => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            '--drift-x': `${petal.driftX}px`,
            '--end-rotation': `${petal.endRotation}deg`,
          }}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
}

export default PetalRain;
