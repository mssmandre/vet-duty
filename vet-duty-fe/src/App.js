import './App.css';
import Header from './elements/Header';
import SearchBox from './elements/SearchBox';
import ImageSlideshow from './elements/ImageSlideshow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ImageSlideshow />
        <SearchBox />
          
      </div>
    </div>
  );
}

export default App;
