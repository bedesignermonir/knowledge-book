import React from 'react';
import Header from './component/header/Header';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmark/Bookmarks';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='flex mx-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
};

export default App;