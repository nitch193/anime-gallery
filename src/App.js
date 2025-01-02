import React, { useState } from 'react';
import ImageGallery from './ImageGallery';

function App() {
  const [type, setType] = useState("111");
  const [purity, setPurity] = useState("100")
  return (
    <main>
      <p>Hello,  this is a wallpaper gallery.</p>
      <p className='logo-para'>
        <img src='./faces.svg' className='app-logo' alt='app-logo' />
      </p>
      <ImageGallery type={type} purity={purity} />
    </main>

  );
}

export default App;
