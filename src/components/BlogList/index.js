import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="blogs-list-container">
      {blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </div>
  )
}
export default BlogList
