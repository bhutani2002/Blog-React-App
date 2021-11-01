import { Link } from "react-router-dom";
const BlogList= ({blogs, title,setData,isPending,error})=>{
// const handleDelete=(id)=>{
//     const newBlogs=blogs.filter(blog=>blog.id!==id);
//     setData(newBlogs);
// }
return(
    <div className="blog-list">
        {!isPending && !error && <h2>{title}</h2>}
       {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            </Link>
            {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
        
        ))}
    </div>)
    }

export default BlogList