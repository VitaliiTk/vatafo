import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'

import styles from './user-post.module.css'

export function UserPost({ post, postDelete, editPost }) {
  function deletePostHandler(postId) {
    postDelete(postId)
  }

  function editPostHandler(postId) {
    console.log(`Edit post with id: ${post}`)

    const newEditedPost = { ...post }

    editPost(post)
  }

  console.log(post)
  return (
    <div className={styles['post']}>
      <div className={styles['image__box']}>
        <img className={styles['image']} src={post.mainImage.url} alt="post.mainImage.name" />
      </div>
      <div className={styles['info__block']}>
        <div>{post.info}</div>
      </div>
      <div className={styles['btn__block']}>
        <button
          onClick={() => deletePostHandler(post.id)}
          id={styles['delete__btn']}
          className={styles['btn']}
        >
          <RiDeleteBin6Line />
        </button>
        <button
          onClick={() => editPostHandler(post.id)}
          id={styles['edit__btn']}
          className={styles['btn']}
        >
          <GrEdit />
        </button>
      </div>
    </div>
  )
}
