import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MainSection from './components/Mainsection';
import CardsSection from './components/CardsSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <CardsSection />
      <ContentSection />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
