"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  height: string;
  weight: string;
};

const getBMI = (ArrData: number[]) => {
  let height = ArrData[0];
  let weight = ArrData[1];
  let result = (weight / (height * height)) * 10000;
  return result;
};

const Home = () => {
  const [BMI, setBMI] = useState<number | null>(null);
  const [intData, setIntData] = useState<number[]>([]);
  const [underweight, setUnderweight] = useState(false);
  const [normal, setNormal] = useState(false);
  const [overweight, setOverweight] = useState(false);
  const [obese, setObese] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let intHeight = parseInt(data.height);
    let intWeight = parseInt(data.weight);
    setIntData([intHeight, intWeight]);
    setBMI(Math.ceil(getBMI(intData)));
    if (getBMI(intData) < 18.5) {
      setUnderweight(true);
    } else if (getBMI(intData) > 18.5 && getBMI(intData) <= 24.9) {
      setNormal(true);
    } else if (getBMI(intData) > 25 && getBMI(intData) < 29.9) {
      setOverweight(true);
    } else {
      setObese(true);
    }
  };

  const getCategory = () => {
    if (typeof BMI === "number") {
      if (underweight === true) {
        return "You are underweight";
      } else if (normal === true) {
        return "You have normal weight";
      } else if (overweight === true) {
        return "You are overweight";
      } else {
        return "You are obese";
      }
    }
  };

  return (
    <>
    <div className="flex justify-center">
      <span className="lg:text-6xl text-3xl py-6">BMI Calculator</span>
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="text-gray-600 body-font">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Know your BMI
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="height"
                className="leading-7 text-sm text-gray-600"
              >
                Height (cm)
              </label>
              <input
                defaultValue={""}
                {...register("height", { required: true })}
                type="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="weight"
                className="leading-7 text-sm text-gray-600"
              >
                Weight (kg)
              </label>
              <input
                type="number"
                {...register("weight", { required: true })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <input
              disabled={isSubmitting}
              type="submit"
              value={"Double Click to submit"}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            />
            <p className="mt-3 text-black text-center">
              {BMI !== null && isNaN(BMI) === false ? `Your BMI is ${BMI}. ${getCategory()}` : ""}
            </p>
          </div>
        </section>
      </form>
    </>
  );
};

export default Home;
