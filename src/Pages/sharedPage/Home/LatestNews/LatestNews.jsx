import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import './LetestNews.css';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('./letestNewsFakeData.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <div className="container">
      <div className="md:mx-20 md:my-4">
        <h1 className="text-center heading_lg font-semibold">Letest News</h1>
        <div className="md:grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-5 pt-10">
          <div className="md:col-span-2 sm:col-span-1 md:px-20">
            <Swiper
              slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.50': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="swiper"
            >
              {news.map((n) => (
                <SwiperSlide key={n.id}>
                  <div className="rounded-lg news-card w-fit">
                    <img
                      className="rounded-t-lg w-100"
                      style={{ height: '280px' }}
                      src={n.img}
                      alt="village-news"
                    />
                    <div className="p-4">
                      <h3 className="text-center heading_sm font-medium py-4">
                        {n.title}
                      </h3>
                      <p>{n.description.slice(0, 200)}</p>
                      <div className="flex justify-between pt-3 font-medium">
                        <p>07/02/2021</p>
                        <p>By Digital village</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="p-4 flex flex-col justify-center">
            {news.slice(0, 3).map((n) => (
              <div className="flex news-card items-center rounded-lg shadow-news mb-4 px-5 py-3">
                <img className="w-3/6 h-fit" src={n.img} alt="" />
                <p className="ml-5">{n.description.slice(0, 100)}</p>
              </div>
            ))}
            <button>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
