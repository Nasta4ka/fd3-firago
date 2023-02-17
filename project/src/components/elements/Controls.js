import React from 'react'


export const Controls = (props) => {
  const handleCheckbox = (value) => {
    props.isChecked(value);
  };

  return (

<label style={{display: 'flex', alignItems: 'baseline', margin: '20px'}}> сначала недорогие
<input
        type="checkbox"
        className="checkbox"
        checked={props.checked}
        onChange={(event) => handleCheckbox(event.target.checked)}
      ></input>
   </label> 

  )
}
