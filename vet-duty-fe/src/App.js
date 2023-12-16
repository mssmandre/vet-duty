import React, { useState } from 'react';
import './App.css';
import Header from './elements/Header';
import SearchBox from './elements/SearchBox';
import ImageSlideshow from './elements/ImageSlideshow';
import JobListings from './elements/JobListing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <div className="App">
      <Header />
      <div>
      {!searchPerformed ? (
        <div>
          <ImageSlideshow />
          <SearchBox onSearch={() => setSearchPerformed(true)} />
          </div>
        ) : (
          <JobListings />
        )}
      </div>
    </div>
  );
}

export default App;
