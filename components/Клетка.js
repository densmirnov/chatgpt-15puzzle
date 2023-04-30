import React from 'react';
import styles from '../styles/пятнашки.module.css';

const Клетка = ({ номер, переместитьКлетку }) => {
  const handleClick = () => {
    if (номер !== 0) {
      переместитьКлетку(номер);
    }
  };

  const buttonStyle = номер === 0 ? styles.пустаяКлетка : styles.кнопка;

  return (
    <button className={buttonStyle} onClick={handleClick}>
      {номер !== 0 && номер}
    </button>
  );
};

export default Клетка;
