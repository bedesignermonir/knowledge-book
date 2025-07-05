

const Blog = ({ blog }) => {
    const { cover, author_name, author_img, post_date, reading_time } = blog;
    return (
        <div>
            <div>
                <img src={cover} alt="" />
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
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
        </div>
    );

}
export default Blog;