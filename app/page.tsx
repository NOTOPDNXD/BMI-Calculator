import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-center py-6">BMI Calculator</h1>
      <div className="info text-center text-lg py-4 px-2">
        Welcome to our BMI website, your ultimate destination for understanding
        and managing your Body Mass Index (BMI).
      </div>
      <div className="flex justify-center">
        <Image src={"/bmi-chart.svg"} alt="bmiChart" width={444} height={444} />
      </div>
      <div className="flex justify-center py-2">
        <Link href={"/home"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started!!
          </button>
        </Link>
      </div>
    </>
  );
}
