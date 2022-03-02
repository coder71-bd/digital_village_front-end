import React from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';


const developments=[
  {
    "id": 1,
    "title": "THE LIGHTWIRE | TEMPLATE-1",
    "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
    "img": "http://lightwire.webps.info/assets/themes/lightwire/images/hd-5.jpg",
    "date": "20 September 2022"
  },
  {
    "id": 2,
    "title": "INTERIORS | TEMPLATE-2.",
    "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
    "img": "http://lightwire.webps.info/assets/themes/lightwire/images/hd-7.jpg",
    "date": "21 September 2022"
  },
  {
    "id": 3,
    "title": "CONSULTING | TEMPLATE-1.",
    "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
    "img": "http://lightwire.webps.info/assets/themes/lightwire/images/hd-15.jpg",
    "date": "22 September 2022"
  },
  {
    "id": 4,
    "title": "TECHNOLOGY | TEMPLATE-1",
    "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
    "img": "http://lightwire.webps.info/assets/components/phpthumbof/cache/image-17.6f48a82beff109794692619590fda6592.jpg",
    "date": "23 September 2022"
  },
  {
    "id": 5,
    "title": "NEW YORK THEATRE | TEMPLATE-1",
    "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
    "img": "http://lightwire.webps.info/assets/components/phpthumbof/cache/image-11.6f48a82beff109794692619590fda6592.jpg",
    "date": "24 September 2022"
  },
  
]


const DevelopmentSlider = ({n}) => {
    return (
        <div className='-mt-24'>
              <div className='grid grid-cols-2 md:grid-cols-3 mx-auto md:mx-80 '>

                  <div className=' col-span-2 '>
                  <Swiper
                            // slidesPerView={2}
                            slidesPerGroup={1}
                            autoplay={{
                              delay: 2500,
                            }}
                            breakpoints={{
                              640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                              1024: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                            }}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            modules={[Autoplay]}
                            className="swiper"
                          >
                            {developments.map((n) => (
                              <SwiperSlide key={n.id}>
                          <div  className=' border-2 w-96'>
                          <div className="  cursor-pointer ">
                              
                              <div className=''>
                              <img className='w-full h-64 ' src={n?.img} alt="" />
                              </div>

                          </div>
                          <div className="space-y-4 p-4">
                         

                          <p>{n.description.slice(0,100)} ...</p>
                          <Link to={`/newsDetails/${n.id}`}>
                          <button className="text-primary text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-2 p-2 border-green-600 hover:bg-primary hover:border-0  ">
                          View Service...
                          </button>
                          </Link>
                          </div>
                          </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                  </div>


                  <div>
                  <div  className='mb-10 border w-96 ml-5'>
                          <div className="  cursor-pointer ">
                              
                              

                          </div>
                          <div className="space-y-4 p-4 text-white bg-gray-800 h-96 ">
                          <h3 className="text-yellow-400  flex items-center space-x-2 px-5">
                          FEATURED WEEK PROJECTS
                          </h3>

                          <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at eaque nihil impedit quasi, odio a animi minima exercitationem id debitis quas iste!  </p>
                         
                          <button className="text-yellow-400 text-lg mt-24 px-5 mx-5 hover:text-white hover:rounded-xl transition-all duration-500 border-2 p-2 border-white hover:bg-primary hover:border-0  ">
                          More Project ...
                          </button>
                          
                          
                          
                          </div>
                          </div>
                  </div>
          
              </div>

          <div className='grid grid-cols-3 mx-auto md:mx-80 my-10'>
            
              <div className='col-span-2 mr-5 '>
                 <h3 className='my-2'>SERVICE AND RENTAL TRANSFORMATIONS</h3>
                 <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laudantium ab aspernatur voluptatibus fuga sit, consequatur neque pariatur, iure suscipit tempora sed quibusdam aliquam cupiditate eaque quos doloribus dolore nulla ex. Ex quasi dolore minus fugit quibusdam quia velit !</p>

                 <button className='p-2 bg-gray-200 text-primary'><a href="https://drive.google.com/u/1/uc?id=14vK9v0vP6pucv8RcMAUFlhvVr3Mv2Q21&export=download" target="_blank">Download Brochure</a></button>
              </div>

              <div className='ml-5'>
                <ul>
                  <li>Full opariting system 24/7 active</li>
                  <li>Based in London, United Kingdom</li>
                  <li>More than 50 machines types</li>
                  <li>Training and free instructions</li>
                  <li>Test drive</li>
                  <li>Repair and buying service</li>
                  <li>Explore our rooms</li>
                </ul>
              </div>
            
          </div>

          <div className='mx-80 grid grid-cols-2 my-auto md:my-24 '>
          <h3>LAST PROJECTS</h3>
          <p className='border-l-4 pl-5'>Large-scale construction requires collaboration across multiple disciplines. A project manager normally manages the job and a architect .</p>
            
          </div>

              {/* Project Slider */}

                <div className='grid grid-cols-1 md:grid-cols-3 mx-80'>
                  <div className='col-span-3'>
                  <Swiper
                            // slidesPerView={2}
                            slidesPerGroup={1}
                            autoplay={{
                              delay: 2500,
                            }}
                            breakpoints={{
                              640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                              1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                              },
                            }}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            modules={[Autoplay]}
                            className="swiper"
                          >
                            {developments.map((n) => (
                              <SwiperSlide key={n.id}>
                          <div  className=' border-2'>
                          <div className="  cursor-pointer ">
                              
                              <div className=''>
                              <img className='w-full h-64 ' src={n?.img} alt="" />
                              </div>

                          </div>
                          <div className="space-y-4 p-4">
                          <h3>{n?.title}</h3>
                          <p className='py-5'>{n.description.slice(0,150)} ...</p>
                          <Link to={`/newsDetails/${n.id}`}>
                          <button className="text-black text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-2 p-2 border-blue-600 hover:bg-primary hover:border-0  ">
                          View Project...
                          </button>
                          </Link>
                          </div>
                          </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                  </div>

                  
                </div>

          </div>

       
        
    );
};

export default DevelopmentSlider;