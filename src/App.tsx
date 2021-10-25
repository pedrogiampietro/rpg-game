import * as C from './App.styles';
import { Character } from './components/Character';

export function App() {
  return (
    <C.Container>
      <C.Map>
        <Character />
      </C.Map>
    </C.Container>
  );
}
