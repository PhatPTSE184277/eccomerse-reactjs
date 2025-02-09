import React from 'react';
import styles from './style.module.scss';

const MyButton = () => {
  return (
    <div>
        <button className={styles.btn}>M</button>
        <button className={styles.btn2}>X</button>
    </div>
  )
}

export default MyButton