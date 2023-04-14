import { Category } from './components/category';
import { CategorySection } from './components/category-section';
import { Divider } from './components/divider';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { LeafletMap } from './components/leaflet-map';
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
      <LeafletMap />
      <Footer />
    </div>
  );
}
