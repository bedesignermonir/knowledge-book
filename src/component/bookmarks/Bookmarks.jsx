import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime }) => {
    return (
        <div className="rounded-3xl ml-4 md:w-1/3 bg-gray-300">
            <div>
                <h1 className="bg-blue-100 m-2 p-4 rounded-3xl border-blue-400 border text-blue-700">Spend Time on Read: {readingTime} min</h1>
            </div>
               <div className="rounded-3xl ml-4 bg-gray-300">
            
            <h1 className="text-2xl font-bold p-4 ml-2">Bookmarks Blogged: {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, idx) => <Bookmark
                     key={idx} 
                     bookmark={bookmark}
                     readingTime={readingTime}
                     ></Bookmark>)
            }
        </div>
        </div>

     
    );
};

export default Bookmarks;