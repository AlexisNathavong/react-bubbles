import React, { useState, useEffect } from "react";

//Added axiosWithAuth
import { axiosWithAuth } from "./utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const [newColor, setNewColor] = useState({color: '', code: {hex: ''}});

  const getColor = () => {
    axiosWithAuth().get(`http://localhost:5000/api/colors`)
      .then(res => {
        console.log(res);
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  useEffect(() => {
    getColor();
  }, [])

  // const fetchColor = id => {
  //   axiosWithAuth().get(`http://localhost:5000/api/colors/${id}`)
  //     .then(res => setColorList({ color: res.data}))
  //     .catch(err => console.log(err.response));
  // };

  // useEffect(() => {
  //   fetchColor(props.match.params.id);

  // }, [props.match.params.id]);
  

  //handleChanges
  // const handleChanges = e => {
  //   setNewColor;
  // };

  const addColor = e => {
    e.preventDefault();
    console.log('Welcome', newColor);
    axiosWithAuth().post('http://localhost:5000/api/colors', newColor)
      .then(res => {
        console.log('hello',res);
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })

      setNewColor('');
  };


  return (
    <>

      <form>
        <div className="color-form">
          <label>Name: </label>
            <input 
              className="color-form"
              type="text"
              name="color"
              value={colorList.name}
              onChange={(e)=> setNewColor({...newColor, color: e.target.value})}
            />
        </div>

        <div className="color-form">
          <label>Code: </label>
            <input 
              className="color-form"
              type="text"
              name="code"
              value={colorList.code}
              onChange={(e)=> setNewColor({...newColor, code:{hex: e.target.value}})}
            />
        </div>

          <button onClick={addColor}>Add</button>

      </form>
    
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
