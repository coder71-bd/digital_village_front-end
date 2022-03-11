import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { ImLab } from 'react-icons/im';
import { MdOutlineMedicalServices } from 'react-icons/md';

const Features = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center my-20">
        <div className="w-full flex justify-center items-center">
          <div
            class=" p-5 flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md bg-white text-justify text-white"
            style={{ backgroundColor: '#10217d' }}
          >
            <MdOutlineMedicalServices style={{ fontSize: '3em' }} />
            <h5 className=" my-4 font-bold">Qualified Doctors</h5>
            <p>preventive care and checkups, to immunizations and exams</p>
          </div>
          <div
            className="p-5  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md bg-white text-justify text-white"
            style={{ backgroundColor: '#10217d' }}
          >
            <AiOutlineClockCircle style={{ fontSize: '3em' }} />
            <h5 className=" my-4 font-bold">24 Hours Service</h5>
            <p>preventive care and checkups, to immunizations and exams</p>
          </div>
          <div
            className="p-5 flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md bg-white text-justify text-white"
            style={{ backgroundColor: '#10217d' }}
          >
            <BiBookAdd style={{ fontSize: '3em' }} />
            <h5 className=" my-4 font-bold">Emergency </h5>
            <p>preventive care and checkups, to immunizations and exams</p>
          </div>
          <div
            className="p-5  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md bg-white text-justify text-white"
            style={{ backgroundColor: '#10217d' }}
          >
            <ImLab style={{ fontSize: '3em' }} />
            <h5 className=" my-4 font-bold">Lab Test </h5>
            <p>preventive care and checkups, to immunizations and exams</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;