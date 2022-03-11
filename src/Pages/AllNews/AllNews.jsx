
import React, { useEffect, useState } from 'react';
import NewsBanner from '../shared/Home/News/NewsBanner/NewsBanner';
import NewsCard from '../shared/Home/News/NewsCard/NewsCard';
import BreakingNews from '../shared/Home/News/NewsDetails/BreakingNews/BreakingNews'
import NewsSidebar from './NewsSidebar/NewsSidebar';


 

const AllNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news/allNews')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  if (news.length === 0) return <p>no news</p>;

  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <NewsBanner />
      <BreakingNews/>
      <div className="grid grid-cols-1 gap-4 mx-auto md:mx-10 mt-14 md:grid-cols-4">
        <div className="mx-5">
          <NewsSidebar />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-4">
            {news.map((n) => (
              <NewsCard key={n.id} n={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;