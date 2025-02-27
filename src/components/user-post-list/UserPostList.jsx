import { AddNewBtn } from '../add-new-btn/AddNewBtn'
import UserPostListItem from '../user-post-list-item/UserPostListItem'

import './user-post-list.css'

export default function UserPostList({ data }) {
  return (
    <div className="user-post-list">
      {data?.map((post) => (
        <UserPostListItem key={post.id} post={post} />
      ))}
      <AddNewBtn />
    </div>
  )
}
