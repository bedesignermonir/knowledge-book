import React, { useState } from 'react';
import Header from './component/header/Header';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmark/Bookmarks';

const App = () => {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarkClick = () => {
    console.log('bookmark will coming')
  }
  return (
    <>
      <Header></Header>
      <main className='flex max-w-6xl mx-auto mt-8'>
        <Blogs handleBookmarkClick={handleBookmarkClick} ></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
};

export default App;