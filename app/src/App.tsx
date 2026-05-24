import ParticleField from './components/ParticleField';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <ParticleField />
      <div className="relative z-10">
        <Header />
        <Landing />
        <Footer />
      </div>
    </>
  );
}

export default App;
