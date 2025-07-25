import { useEffect, useState } from "react";
import Blog from '../blog/Blog';


const Blogs = ({ handleBookmarkClick, handleMarkRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     handleBookmarkClick={handleBookmarkClick} 
                     handleMarkRead={handleMarkRead}
                     blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;