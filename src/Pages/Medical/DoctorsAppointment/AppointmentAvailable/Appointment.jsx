import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../../api/axios';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from './../../../../lotties/medicalService.json';

const Appointment = (props) => {
  const user = useSelector((state) => state.user.user);
  const { service, time, price, description } = props.appointment;
  const email = user.email;
  const name = user.name;
  const date = props.date.toLocaleDateString();

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

  const navigate = useNavigate();
  const redirect_uri = '/medicalDashboard/userAppointments';

  const handleAlert = () => {
    const data = { name, email, service, date, time, price };
    swal({
      title: 'Want to proceed?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        axios.post('/appointment/addAppointment', data).then((response) => {
          swal('Done, Now you can pay to confirm your bookings', {
            icon: 'success',
          });
          navigate(redirect_uri);
        });
      }
    });
  };
  return (
    <div className="p-0 md:p-2 w-full md:w-1/3">
      <div
        class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-all duration-500  "
        style={{
          borderBottom: '5px solid #10217d',
        }}
      >
        <div class="m-0 md:m-5 bg-sky-50 border-1 border-sky-400 ">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 200 : isTablet ? 150 : 100}
            />
          </div>
          <Link to="#">
            <h5 class="mb-2 md:text-xl text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
              {service}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <p className="my-.5">(from {time}) </p>
          <p>Cost : {price} </p>
          <Link
            to="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg my-2 "
            style={{
              backgroundColor: '#10217d',
              color: 'white',
            }}
          >
            <button onClick={handleAlert}>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;