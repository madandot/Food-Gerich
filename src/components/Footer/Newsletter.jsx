import React from "react";
import "../../index.css";
import { images } from "../../constants";
import { useFormik } from "formik";
import * as yup from "yup";

const Newsletter = () => {
   const formik = useFormik({
      initialValues: {
         email: "",
      },
      validationSchema: yup.object({
         email: yup.string().email("Invalid email address").required("email is required"),
      }),
      onSubmit: (values) => {
         console.log(values);
      },
   });
   console.log(formik);
   return (
      <div className=' bg-slate-500 text-black py-8 my-8  mx-8 border-2 border-[#ddca87]'>
         <div className='md:flex md:flex-col md:justify-center md:items-center ml-8 md:ml-0'>
            <p className='font-[cormorant] text-2xl tracking-wider pb-1'>Newsletter</p>
            <img src={images.spoon} alt='' className='pb-4' />
            <h1 className='text-[#eac540] font-[cormorant] my-8 md:text-8xl text-4xl '>Subscribe To Our Newsletter</h1>
            <p className=' mb-12 font-[cormorant]'>And never miss latest updates!</p>
         </div>
         <form className='md:flex md:justify-center md:items-center md:my-9 ' onSubmit={formik.handleSubmit}>
            <label
               className={`font-sans md:pr-8 font-bold text-xl capitalize md:pb-2 ${
                  formik.touched.email && formik.errors.email ? " text-black" : ""
               } `}
            >
               {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            </label>
            <input
               type='email'
               name='email'
               placeholder='Email Address'
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               className='md:w-[30%] w-64 md:mx-0 md:my-0 mx-4 my-4 py-4 px-2 rounded-sm outline-none border-2 border-[#DDCA87] '
            />
            <button
               className='bg-[#DDCA87] text-black mx-8 mb-4 md:mb-0 py-3 md:px-7 px-4 rounded-sm font-semibold font-sans'
               type='submit'
            >
               Subscribe
            </button>
         </form>
      </div>
   );
};

export default Newsletter;
