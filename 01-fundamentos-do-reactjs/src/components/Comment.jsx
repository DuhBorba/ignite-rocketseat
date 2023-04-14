import React from 'react';

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export const Comment = ({ content, onDeleteComment }) => {
  function handleDeleteComment(){
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/DuhBorba.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Borba</strong>
              <time title="12 de Abril às 17:50h" dateTime="2023-04-12 17:50:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
