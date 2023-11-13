import React, { useState } from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  const [checked, setChecked] = useState(true);

  function handleCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className='checkbox'>
      <input className='checkbox__switch checkbox__input' type='checkbox' checked={checked} onChange={handleCheckbox} />
      <span className='checkbox__text'>Короткометражки</span>
    </div>
  );
}
