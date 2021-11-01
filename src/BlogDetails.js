import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,isPending,error}= useFetch('http://localhost:8000/blogs/' + id);
    const history= useHistory();
    const handleDelete=(id)=>{
       fetch('http://localhost:8000/blogs/'+ blog.id, {
           method:"DELETE"
       }).then(()=>
       {
            history.push('/');
       })
    }
    return (  
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* {isPending && error && <div>Loading...</div>} */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    {!isPending && !error && <p>Written By {blog.author}</p>}
                    <p>{blog.body}</p>
                    {!isPending && !error && <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>}
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;