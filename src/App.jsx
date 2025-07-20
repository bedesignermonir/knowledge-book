import { useState } from 'react';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmarks/Bookmarks';
import Header from './component/header/Header';

const App = () => {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarkClick = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <main className='flex max-w-6xl mx-auto mt-8'>
        <Blogs handleBookmarkClick={handleBookmarkClick} ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
};

export default App;