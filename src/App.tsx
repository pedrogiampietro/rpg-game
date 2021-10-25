import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';

import { useCharacter } from './hooks/useCharacter';

export function App() {
  const { x, y, side, moveDown, moveUp, moveLeft, moveRight } = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        moveLeft();
        break;

      case 'KeyW':
      case 'ArrowUp':
        moveUp();
        break;

      case 'KeyD':
      case 'ArrowRight':
        moveRight();
        break;

      case 'KeyS':
      case 'ArrowDown':
        moveDown();
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={x} y={y} side={side} />
      </C.Map>
    </C.Container>
  );
}
