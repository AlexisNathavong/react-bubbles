import React, { useState, useEffect } from "react";

//Added axiosWithAuth
import { axiosWithAuth } from "./utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const [newColorList, setNewColorList] = useState({name: '', code: ''});

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

  //handleChanges
  const handleChanges = e => {
    setNewColorList({...newColorList, [e.target.name]: e.target.value});
  };

  const addColor = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/colors', newColorList)
      .then(res => {
        console.log(res);
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })

      setNewColorList('');
  };

  return (
    <>

      <form>
        <div className="color-form">
          <label>Name: </label>
            <input 
              className="color-form"
              type="text"
              name="name"
              value={colorList.name}
              onChange={handleChanges}
            />
        </div>

        <div className="color-form">
          <label>Code: </label>
            <input 
              className="color-form"
              type="text"
              name="code"
              value={colorList.code}
              onChange={handleChanges}
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
