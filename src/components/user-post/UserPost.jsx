import styles from './user-post.module.css'

export function UserPost({ post }) {
  return (
    <div className={styles['post']}>
      <div className={styles['image__box']}>
        <img className={styles['image']} src={post.mainImage.url} alt="post.mainImage.name" />
      </div>
    </div>
  )
}
