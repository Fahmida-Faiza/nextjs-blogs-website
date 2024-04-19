

import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className="border bg-red-500  text-white">
    
   

      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">title:{post.title}</h2>
          <p>description:{post.body}</p>
          <div className="card-actions">
          <button className="btn btn-secondary"> <Link href={`/blog/${post.id}`}>Read More</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard