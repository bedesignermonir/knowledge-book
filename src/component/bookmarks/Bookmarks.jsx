import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="rounded-3xl ml-4 md:w-1/3 bg-gray-300">
            <h1 className="text-2xl font-bold p-4 ml-2">Bookmarks Blogged: {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;