import React from 'react'
import {IPostProps} from "./types";
import styles from './Post.module.scss'
import classNames from "classnames";
import useControl from "@/hooks/useControl";

export const Post: React.FC<IPostProps> = ({title, body, views, reactions, tags}) => {
  const [likes, isLiked, toggleLike] = useControl(reactions.likes)
  const [dislikes, isDisliked, toggleDislike] = useControl(reactions.dislikes)

  return (
    <div className={styles.card}>
      <p>{title}</p>
      <div className={styles.tags}>
        {tags?.map(tag => (
          <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>
      <p className={'mb-2'}>{body}</p>
      <div className={'flex gap-2'}>
        <span className={'p-2 pl-0'}>{views} 👀</span>
        <button
          onClick={() => {
            toggleLike()
            isDisliked && toggleDislike()
          }}
          className={classNames(styles.control, {'bg-blue-600': isLiked})}
        >
          {likes} 👍
        </button>
        <button
          onClick={() => {
            toggleDislike()
            isLiked && toggleLike()
          }}
          className={classNames(styles.control, {'bg-blue-600': isDisliked})}
        >
          {dislikes} 👎
        </button>
      </div>
    </div>
  );
};