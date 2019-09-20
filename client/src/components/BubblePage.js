import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const [newColor, setNewColor] = useState({ color: '', code: {hex: ''}});

  const getColor = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
        console.log('Color api', res.data);

        setColorList(res.data);
      })
      .catch(err => {
        console.log('Error in Color api', err.response);
      })
  };

  useEffect(() => {
    getColor();
  }, [])


  const addColor = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/colors', newColor)
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log('Error in Add Color api', err.response);
      })
    setNewColor('');
  };

  return (
    <>
      <form>
        <div className="color-form">
          <label>Color: </label>
          <input 
            className="color-form"
            type="text"
            name="color"
            placeholder="Add a color name"
            value={colorList.color}
            onChange={(e) => setNewColor({...newColor, color: e.target.value})}
          />
        </div>

        <div className="color-form">
          <label>Code: </label>
          <input
            className="color-form"
            type="text"
            name="code"
            value={colorList.code}
            onChange={(e) => setNewColor({...newColor, code:{hex: e.target.value}})}
          />
        </div>

        <button className="add-color-btn" onClick={addColor}>Add</button>
      </form>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
