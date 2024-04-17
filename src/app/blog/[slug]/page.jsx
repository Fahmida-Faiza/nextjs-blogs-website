// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);


  return res.json();
};


const SinglePostPage = async ({ params }) => {
 const {slug} = params;
 const post = await getData(slug)

  return (
   <div>
 <p> title there:{post.title}</p>
   </div>
  );
};

export default SinglePostPage;
