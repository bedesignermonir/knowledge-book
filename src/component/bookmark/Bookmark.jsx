
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className="text-2xl bg-gray-50 p-4 m-4 rounded-xl">{title}</h1>
        </div>
    );
};

export default Bookmark;