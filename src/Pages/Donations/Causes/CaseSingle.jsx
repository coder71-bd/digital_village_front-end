import React from 'react';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import DonarForm from '../Donate/DonarForm';
import Cuasesidber from '../DonateItems/Cuasesidber';
import PageSection from '../DonateItems/PageSection/PageSection';

// CaseSingle details page
const CaseSingle = () => {
  const { id } = useParams();
  const causes = useSelector((state) => state.donation.causes);
  const cause = causes.find((c) => c._id === id);
  // const cause = causes?.filter((pd) => pd._id === id);
  //Progressbar for
  let donationGoal = cause.goal;
  let donationTotal = cause.raised;

  const percentage = (donationTotal, donationGoal) => {
    return (donationTotal / donationGoal) * 100 > 100
      ? 100
      : (donationTotal / donationGoal) * 100;
  };

  let percent = percentage(donationTotal, donationGoal);
  return (
    <>
      <div
        className="mt-[80px]"
        style={{ minHeight: 'calc(100vh - 700px)' }}
      >
        <PageSection />
        <div className="container mx-auto flex flex-wrap py-6">
          {/* Posts Section */}
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <div className="flex flex-col shadow my-4 rounded-xl p-4 box-border overflow-hidden relative justify-between border-r-4 border-l-4">
              <div className="overflow-hidden">
                <img
                  className="transform hover:scale-125 transition duration-700 object-cover h-full w-full"
                  src={cause.image}
                  alt={cause?.title}
                />
              </div>
              <div className="bg-white flex flex-col justify-start p-6">
                <a
                  href="/"
                  className="text-blue-700 text-sm font-bold uppercase pb-4"
                >
                  {cause?.category}
                </a>
                <a
                  href="/"
                  className=" text-sm md:text-3xl lg:text-4xl font-bold hover:text-gray-700 pb-4"
                >
                  {cause?.title}
                </a>
                <p href="/" className="text-sm pb-3 text-gray-500">
                  By{' '}
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:text-gray-800"
                  >
                    Digital Village
                  </a>
                  ,{' '}
                  <span className="text-gray-500 text-sm">
                    Published on April 25th, 2022
                  </span>
                </p>
                {/* card footer  */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-3 md:space-y-0 space-y-2">
                  <button className="w-100 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-r-indigo-500 border-l-indigo-500">
                    <FaHandsHelping className="text-2xl text-red-400" />
                    RAISED {cause?.raised}
                  </button>
                  <button className="w-100 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-l-indigo-500 border-r-indigo-500">
                    <FaDonate className="text-2xl text-red-400"></FaDonate>GOAL{' '}
                    {cause?.goal}
                  </button>
                </div>
                <div className="flex flex-col space-y-1 my-3">
                  <div className="py-5">
                    <Progress
                      percent={percent.toFixed(0)}
                      theme={{
                        error: {
                          symbol: percent.toFixed(0) + '%',
                          trailColor: 'pink',
                          color: 'red',
                        },
                        default: {
                          symbol: percent.toFixed(0) + '%',
                          trailColor: 'lightblue',
                          color: 'blue',
                        },
                        active: {
                          symbol: `${percent.toFixed(0) + '%'}`,
                          trailColor: 'yellow',
                          color: '#f55767',
                        },
                        success: {
                          symbol: percent.toFixed(0) + '%✅',
                          trailColor: 'lime',
                          color: 'green',
                        },
                      }}
                    />
                  </div>
                  <article>
                    <p className="text-gray-500 text-sm">
                      {cause?.description}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-col justify-center items-center w-full shadow my-4 p-6">
              <div className="py-3">
                <p>
                  If you would like to contribute money, click on the{' '}
                  <b>{'Donation Payment'}</b> button.
                </p>
              </div>
              {/* start */}
              <DonarForm cause={cause} />
              {/* end */}
            </div>
          </section>
          {/*Right Sidebar Section  */}
          <Cuasesidber/>
        </div>
      </div>
    </>
  );
};

export default CaseSingle;
