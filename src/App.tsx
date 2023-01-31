import { Category } from './components/category';
import { CategorySection } from './components/category-section';
import { Divider } from './components/divider';
import { Header } from './components/header';
import { ProductCard } from './components/product-card';
// import { YandexMap } from './components/yandex-map';
import { MainPage } from './pages/main-page';
import { OurCafeSection } from './pages/main-page/components/our-cafe-section';

export function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Category />
      <CategorySection />
      <Divider />
      <CategorySection />
      <OurCafeSection />
      {/* <YandexMap /> */}
    </div>
  );
}
