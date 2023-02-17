import React from 'react'
export const Controls = (props) => {
  const handleCheckbox = (value) => {
    props.isChecked(value);
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
<select style={{display: 'inline-flex', margin: '6px 12px', padding: '4px 8px', borderRadius: '4px', border: '2px solid green'}} onChange={(e)=>props.selectValue(e.target.value)}>
    <option value={'all'}>все товары</option>
    <option value={'mats'}>коврики</option>
    <option value={'clothes'}>одежда</option>
    <option value={'props'}>пропсы</option>
    <option value={'extra'}>аксессуары</option>
</select>
<label style={{display: 'inline-flex', alignItems: 'center', marginLeft: '20px'}}> сначала недорогие
<input
        type="checkbox"
        className="checkbox"
        checked={props.checked}
        onChange={(event) => handleCheckbox(event.target.checked)}
      ></input>
   </label> </div>
  )
}
