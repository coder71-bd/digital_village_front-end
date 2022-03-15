import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../../../../../api/axios';

const Status = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user.email;
  useEffect(() => {
    axios.get(`/vaccine/findInfo?email=${email}`).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="my-20 p-10 min-h-screen">
      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-blue-900 text-center">
                Your Status
              </h2>
              <div>
                <div>
                  <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                    <div>
                      <span>Name</span>
                    </div>
                    <div>
                      <span>Email</span>
                    </div>

                    <div>
                      <span>Status</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                      <div class="px-2 flex">
                        <span>{info.name}</span>
                      </div>
                      <div>
                        <span>{info.email}</span>
                      </div>

                      <div class="px-2">
                        <span>Panding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
