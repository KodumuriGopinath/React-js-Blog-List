// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="total-list-items">
      {blogsList.map(eachList => (
        <BlogItem key={eachList.id} blogDetails={eachList} />
      ))}
    </ul>
  )
}
export default BlogList
