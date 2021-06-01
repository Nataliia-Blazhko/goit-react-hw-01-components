import React from 'react';
import styles from './Statistics.module.scss';

function getRandomColors() {
  return {
    background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`,
  };
}

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(stat => (
          <li className={styles.item} style={getRandomColors()}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
