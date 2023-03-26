import './App.css';
import Bencesek from './Bencesek';
import Ferences from './Ferences';
import Trappista from './Trappista';
import Ciszterci from './Ciszterci';
import footer from './Footer';
import Footer from './Footer';

function App() {
  return (
    <div className="App text-white bg-black flex-vertical lg:text-3xl">
      <Bencesek />
      <Ferences />
      <Trappista />
      <Ciszterci />
      <Footer />
    </div>
  );
}

export default App;
