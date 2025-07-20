import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleBookmarkClick }) => {
    const { cover, author_name, author_img, post_date, reading_time, title, hashtag } = blog;
    return (
        <div className="mb-10">
            <div>
                <img className="mb-8 w-full rounded-3xl" src={cover} alt="" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-16">
                        <img className="rounded-4xl" src={author_img} alt="" />
                    </div>
                    <div className="ml-4">
                        <h3>{author_name}</h3>
                        <h5>{post_date}</h5>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmarkClick(blog)} className="text-2xl ml-2">  <IoBookmarks></IoBookmarks></button>
                </div>
            </div>
            <h1 className="text-5xl font-bold mt-4">{title}</h1>
            <a className="mt-4" href='#'>{hashtag}</a>
            <br />
            <a className="mt-4" href='#'>Mark as Read</a>
        </div>
    );

}
export default Blog;