import React, { useState } from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    setChecked(!checked);
  }

  return (
    <form className='checkbox'>
      <input className='checkbox__switch checkbox__input' type='checkbox' checked={checked} onChange={handleCheckbox} />
      <span className='checkbox__text'>Короткометражки</span>
    </form>
  );
}
