import { Button } from './components/button';
import { Spinner } from './components/spinner';

export function App() {
  return (
    <div className='App'>
      <Button>Добавить</Button>
      <Spinner size={30} />
    </div>
  );
}
