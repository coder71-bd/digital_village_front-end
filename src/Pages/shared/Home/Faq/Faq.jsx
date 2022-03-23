import React, { useState } from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/landingFaq.json';

const datas = [
  {
    id: '1',
    title: 'What is Digital Learning?',
    description:
      'Digital Learning is "learning facilitated by technology that gives students some element of control over time, place, path and/or pace.',
  },

  {
    id: '2',
    title: 'How can I register my self for vaccine?',
    description:
      'You need to go to vaccine registration page where you have to put your valid information. When your application is approved you will get date by sms. you can also check status in website.',
  },
  {
    id: '3',
    title: 'How can we know about future events?',
    description:
      'You can go to event section and click to upcomming event to know abou future events.',
  },
  {
    id: '4',
    title: 'Can I get donation?',
    description:
      'Yes, if you eligible for donation you can get donation. for that go to donation page click get help request button fillup the form. Then the authority will evalute your application ',
  },
  {
    id: '5',
    title: 'What is the purpose of  Development?',
    description:
      'Our proud team working hard for the poor village people and improve their life style.we take somme village development work to develop various area',
  },
  {
    id: '6',
    title: 'What is objective of E-Market?',
    description:
      'E-Market is a nice platform for buying daily necessities.The main objective is to connect the rural people with e-commerce and gaining their trust.',
  },
];

const Faq1 = () => {
  const [active, setActive] = useState('');
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6  px-4 lg:my-20">
      <div className="pb-10">
        <h2 className=" font-bolder text-xl md:text-3xl  lg:text-4xl   lg:leading-9 md:leading-7 leading-9  dark:text-dark_text text-center">
          Frequently Asked Questions
        </h2>

        <p className=" font-normal text-center leading-6 text-gray-600 pt-4 ">
          Here are few of the most frequently asked questions by our valueable
          customers
        </p>
      </div>

      <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className=" md:w-5/12 lg:w-4/12 w-full mb-4  ">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 400 : isTablet ? 300 : 250}
            />
          </div>
        </div>

        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {/* <!-- Digital Section --> */}

          {datas.map((data) => (
            <div>
              <div>
                <div className=" cursor-pointer">
                  {active && data.id === active ? (
                    <div
                      onClick={() => setActive('')}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5 font-semibold text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      <AiOutlineMinusSquare
                        className=" transition duration-700 ease-in-out text-blue-900 dark:bg-dark_primary dark:text-dark_secondary"
                        custome
                        size={30}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setActive(data?.id)}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5 font-semibold text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      <BsPlusSquare
                        className=" transition duration-700 ease-in-out text-blue-900 dark:bg-dark_primary dark:text-dark_secondary"
                        custome
                        size={30}
                      />
                    </div>
                  )}
                </div>
                <p
                  className={
                    'font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 ' +
                    (data.id === active ? 'block' : 'hidden')
                  }
                >
                  {data?.description}
                </p>
              </div>
              <hr className=" my-7 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq1;
