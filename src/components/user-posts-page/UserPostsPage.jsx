import { UserPost } from '../user-post/UserPost'

import styles from './user-posts-page.module.css'

export function UserPostsPage({ user, cardItems }) {
  console.log(user)
  // console.log(cardItems)

  const userPosts = cardItems.filter(item => item.userId === user.id)

  console.log(userPosts)

  return (
    <section className="user-posts-page">
      <div className="container">
        <div className="user-posts-page__wrapper">
          <h2>Мои объявления</h2>
          <div className={styles['user-posts__list']}>
            {userPosts.map(item => (
              <UserPost key={item.id} post={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
  // здесь должен быть массив объявлений пользователя
}
