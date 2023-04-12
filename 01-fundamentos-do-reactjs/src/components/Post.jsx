import React from 'react';

import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/DuhBorba.png" />
          <div className={styles.authorInfo}>
            <strong>Eduardo Borba</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="12 de Abril às 14:40h" dateTime="2023-04-12 14:40:00">Puplicado há 1h</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
      </div>
    </article>
  )
}
