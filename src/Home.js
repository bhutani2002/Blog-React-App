import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,error,setData}= useFetch('http://localhost:8000/blogs');
    return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
       {blogs && <BlogList blogs={blogs} title="All Blogs!" setData={setData} isPending={isPending} error={error}/>}
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs" setBlogs={setBlogs} /> */}
    </div>  
    );
}
 
export default Home