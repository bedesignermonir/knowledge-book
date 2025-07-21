import { useState } from 'react';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmarks/Bookmarks';
import Header from './component/header/Header';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarkClick = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkRead = (time, id) =>{
    setReadingTime(readingTime+time);
    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id != id)
    setBookmarks(reaminingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='flex max-w-6xl mx-auto mt-8'>
        <Blogs
         handleBookmarkClick={handleBookmarkClick}
         handleMarkRead={handleMarkRead}
          ></Blogs>
        <Bookmarks
         bookmarks={bookmarks}
         readingTime={readingTime}
         ></Bookmarks>
      </main>
    </>
  );
};

export default App;