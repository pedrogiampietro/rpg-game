import * as C from './App.styles';
import { Character } from './components/Character';

import { useCharacter } from './hooks/useCharacter';

export function App() {
  const { x, y, moveDown, moveUp, moveLeft, moveRight } = useCharacter();

  return (
    <C.Container>
      <C.Map>
        <Character x={x} y={y} />
      </C.Map>
    </C.Container>
  );
}
