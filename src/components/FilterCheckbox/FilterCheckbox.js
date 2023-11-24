import React from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

export default function FilterCheckbox({ isChecked, setIsChecked, isCheckboxDisabled }) {
  const { pathname } = useLocation();

  function handleCheckbox(evt) {
    setIsChecked(!isChecked);
    if (pathname === '/movies') {
      localStorage.setItem('checkbox', JSON.stringify(evt.target.checked));
    }
  }

  return (
    <div className='checkbox'>
      <input className='checkbox__switch checkbox__input' type='checkbox' checked={isChecked} disabled={isCheckboxDisabled} onChange={handleCheckbox} />
      <span className='checkbox__text'>Короткометражки</span>
    </div>
  );
}
