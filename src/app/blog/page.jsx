import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  
  return res.json();
};


const BlogPage =async () => {
  const posts = await getData();
  return (
    <div className="gap-5 grid grid-cols-3 ">



      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post}  />
        </div>
      ))}
    </div>
    
  )
}

export default BlogPage