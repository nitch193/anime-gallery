import React, { useState } from 'react';
import ImageGallery from './ImageGallery';

function App() {
  const [type, setType] = useState("111");
  const [purity, setPurity] = useState("111")
  const changeSelection = (e) => {
    if (e.target.id === "type") setType(e.target.value)
    else setPurity(e.target.value)
  }
  return (
    <main>
      <p>Hello,  this is a wallpaper gallery.</p>
      <p className='logo-para'>
        <img src='./faces.svg' className='app-logo' alt='app-logo' />
      </p>
      <div className='selection-container'>
        <select defaultValue="All" value={type} id="type" onChange={changeSelection}>
          <option value={"111"}>All</option>
          <option value={"100"} >
            General
          </option>
          <option value={"001"}>
            People
          </option>
          <option value={"010"}>
            Anime
          </option>
        </select>
        <select defaultValue="All" value={purity} onChange={changeSelection}>
          <option value={"111"}>
            Alll
          </option>
          <option value={"100"}>
            Normal
          </option>
          <option value={"010"}>
            Sketchy
          </option>
          <option value={"001"}>
            NSFW
          </option>
        </select>
      </div>
      <ImageGallery type={type} purity={purity} />
    </main>

  );
}

export default App;
