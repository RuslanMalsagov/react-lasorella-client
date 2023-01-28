import { Category } from './components/category';
import { Header } from './components/header';
import { MainPage } from './pages/main-page';

export function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Category />
    </div>
  );
}
