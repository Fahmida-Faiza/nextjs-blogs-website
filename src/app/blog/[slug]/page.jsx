// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);


  return res.json();
};


const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug)

  return (
    <div>



 

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold">{post.id}. {post.title}</h1>
            <div className="py-6">
              <p>{post.body} {post.body} {post.body}</p>
            </div>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>

      </div>


    </div>
  );
};

export default SinglePostPage;
