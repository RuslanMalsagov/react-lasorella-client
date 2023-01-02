import { Button } from './components/button';
import { Input } from './components/input';
import { Spinner } from './components/spinner';
import { Header } from './components/header';

export function App() {
  return (
    <div className='App'>
      <Header />
      <Button>Добавить</Button>
      <Spinner size={30} />
      <Input placeholder='Введите название блюда' />
    </div>
  );
}
