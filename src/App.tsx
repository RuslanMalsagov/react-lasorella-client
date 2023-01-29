import { Category } from './components/category';
import { Header } from './components/header';
import { ProductCard } from './components/product-card';
import { MainPage } from './pages/main-page';

export function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Category />
      <ProductCard />
    </div>
  );
}
