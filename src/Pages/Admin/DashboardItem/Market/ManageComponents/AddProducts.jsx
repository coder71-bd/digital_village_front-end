import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useMarketAdminDashboard from '../utility/useMarketAdminDashboard';

const AddProducts = ({ sidebar, setSidebar }) => {
  const { addANewProduct } = useMarketAdminDashboard();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const handleAddProduct = (data) => {
    addANewProduct(data);
    reset();
  };
  return (
    <div
      className={`absolute w-2/4 top-[80px] rounded-xl bg-slate-400 right-0  ${
        sidebar ? 'translate-x-0' : 'translate-x-full'
      } ease-in-out duration-700`}
    >
      {/* body */}
      <div className="justify-center items-center min-h-full  space-y-6 px-4 py-6">
        <h3 className="text-center space-y-2">Add a New Product</h3>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="space-y-6 mx-auto w-3/4"
        >
          {/* name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('name', { required: true })}
            placeholder="Name"
          />
          <div className="flex items-center space-x-3">
            {/* categorie */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('categorie', { required: true })}
              placeholder="Categorie"
            />
            {/* brand */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('brand')}
              placeholder="Brand"
            />
          </div>
          {/* price */}
          <input
            type="number"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('price', { required: true })}
            placeholder="Price"
          />
          {/* description */}
          <textarea
            type="text"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('description', { required: true })}
            placeholder="Description"
          />
          {/* img */}
          <input
            type="url"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('img', { required: true })}
            placeholder="Image Link"
          />
          {/* rating */}
          <input
            type="number"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('rating', { required: true })}
            placeholder="Rating"
          />
          {/* submit btn */}
          <input
            className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
      {/* close sidebar */}
      <div className="absolute top-0 right-0 cursor-pointer">
        <AiOutlineCloseCircle
          size={30}
          className="text-primary"
          onClick={() => setSidebar(false)}
        />
      </div>
    </div>
  );
};

export default AddProducts;
