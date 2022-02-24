import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: { yes_i_understand: false }
  });


  const sendEmail = (formData) => {
    console.log(formData)
    
    emailjs
      .send("service_nbv08xi", "template_qw32pvu", formData, "user_NT0NiFlR59zCf04Pr6LZF")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      swal("Successfully!", "!Your Message Send", "success")
    reset();
  };


  // const sendEmail = (e) => {
  //           e.preventDefault();
        
  //         };

  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div
        className="bg-cover bg-no-repeat h-60"
        style={{
          backgroundImage: `url(https://creativecomp.com/wp-content/uploads/2019/02/contact-us-bg.jpg)`,
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-center text-white pt-16 font-bold">
          Contact With Us
        </h1>
        <h3 className="text-center font-semibold my-3 text-xl md:text-2xl lg:text-2xl text-white ">
          Home / Contact Us
        </h3>
      </div>
      <div className="pr-8">
        <h3 className="text-center ml-2 md:ml-0 lg:ml-0 text-2xl font-semibold mt-16 mb-3 text-gray-500 hover:text-red-500">
          FOLLOW OUR INFO
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-center font-bold ml-4 md:ml-0 lg:ml-0 hover:text-blue-600">Contact information</h1>
        <h4 className="text-justify md:text-center lg:text-center mt-5 ml-4 container text-1xl font-semibold">
          Give us a call or drop by anytime, we endeavour to answer all
          enquiries within 24 hours on business days.We will be happy to answer
          your questions.enquiries within 24 hours on business days.We will be
          happy to answer your questions.
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 Container">
        <div className="flex flex-col items-center bg-white rounded-lg pl-10  md:flex-row pl-15     container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className=" rounded-full">
            <img
              className="object-cover  lg:mr-0object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
              src="https://freepngimg.com/thumb/clock/58348-alarm-icon-cartoon-timer-clock-free-photo-png-thumb.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between mr-7 leading-normal py-10">
            <p className="mb-3 font-semibold hover:text-blue-600 text-gray-700 dark:text-gray-400">
              10:00am to 6:00pm
            </p>
            <p className="mb-3 font-semibold hover:text-red-600 dark:text-gray-400mb-3 text-gray-700 dark:text-gray-400">
              Sunday Closed
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg pl-5 md:flex-row  ml-15 container md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
            src="https://image.pngaaa.com/23/203023-middle.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 mr-3 md:mr-0 lg:mr-0 font-semibold hover:text-blue-600 text-gray-700 dark:text-gray-400">
              13005 Greenville Avenue
            </p>
            <p className="mb-3 font-semibold hover:text-red-600 text-gray-700 dark:text-gray-400">
              California, TX 70240
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row pl-10  container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover rounded-full h-20 w-20  my-5 mr-8 md:mr-0 lg:mr-0"
            src="https://www.kindpng.com/picc/m/336-3369375_contact-flower-mound-electrician-today-phone-icon-png.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-semibold hover:text-blue-600 text-gray-700 dark:text-gray-400">
              +1 000999 0099
            </p>
            <p className="mb-3 font-semibold hover:text-red-600 text-gray-700 dark:text-gray-400">
              info@themerange.net
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row      container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h3 className="mb-3  text-gray-700 dark:text-gray-400 text-2xl md:text-3xl lg:text-3xl font-bold">
              Our Socials Links
            </h3>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
              Print this page to PDF for the complete set of vectors.
            </p>
            <div className="inline-grid grid-cols-6 ml-5">
              <img
                className=" d-flex object-cover rounded-full h-10 w-10  ml-5 md:ml-2 lg:ml-2"
                src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png "
                alt=""
              />
              <img
                className=" d-flex object-cover rounded-full h-10 w-10 ml-7 md:ml-2 lg:ml-2"
                src="https://p1.hiclipart.com/preview/1016/686/474/mitu-icon-twitter-png-clipart.jpg"
                alt=""
              />
              <img
                className="object-cover rounded-full h-10 w-10 ml-8 md:ml-2 lg:ml-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                alt=""
              />
              <img
                className="object-cover rounded-full h-10 w-10 ml-10 md:ml-2 lg:ml-2"
                src="https://i.pinimg.com/originals/72/9f/77/729f7798561be2cb67f39e916a22eb6a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-center hover:text-blue-600 text-1xl font-bold mt-16 mb-3 text-gray-600">
          DON’T HASITATE TO CONTACT WITH US
        </h5>
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-center font-bold hover:text-blue-600">Now Very Easy</h1>
        <h4 className=" mt-5  px-10 container text-1xl font-semibold text-justify">
          Our approach to SEO is uniquely built around what we know works…and
          what we know doesn’t work. With over 200 verified factors in
          playworks…and what we know doesn’t work. With over 200 verified
          factors in play.
        </h4>
      </div>

      <div className="mt-10 pt-10 container mx-auto px-4 pb-5">
        <form
          className="flex flex-col justify-center md:grid grid-cols-1 md:grid-cols-2 "
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="mr-2 pl-10 ">
            <input
              className=" p-4 w-full  mb-4 shadow-2xl outline:"
              {...register('name', { required: true, maxLength: 20 })}
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="mr-2 pl-10">
            <input
              className="p-4 w-full  mb-4 shadow-2xl"
              type="number"
              {...register('number', { required: true, maxLength: 20 })}
              placeholder="Your Phone Number"
              name="number"
            />
          </div>
          <div className="mr-2 pl-10 ">
            <input
              className="w-full  p-4 mb-4 shadow-2xl"
              type="email"
              {...register('email')}
              placeholder="Enter Your Email Number"
              name='email'
            />
          </div>
          <div className="mr-2 pl-10 ">
            <input
              className="w-full p-4 mb-4 shadow-2xl"
              type="text"
              {...register('subject')}
              placeholder="Write your Subject"
              name="subject"
            />
          </div>
          <div className=" col-span-2 mx-6 ">
            <textarea
              placeholder="Please Write Your Message"
              className=" w-full ml-5 p-4 mb-2 shadow-2xl"
              {...register('message', { required: true, maxLength: 20 })}
              name="message"
            />
          </div>

          <input
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn mx-auto col-span-2 font-bold rounded-lg  px-6 md:w-2/6   py-2 text-white"
            type="submit"
            value="SEND MESSAGE"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
