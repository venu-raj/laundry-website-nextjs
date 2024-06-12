import { Button } from "../../components/ui/button";

export default function Landing() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">

            Laundry and
            Dry Cleaning with
            next day delivery!
          </h1>
          <p className="mb-4 xl:w-1/2 text-gray-600 text-lg">

            Laundry and Dry<br /> Cleaning with next day delivery! book now ಬೆಂಗಳೂರು
          </p>
          <Button size='lg'>Book Your Slot Now</Button>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24 absolute z-30"
            alt="iPhone-12"
            src="/laundry_box.svg"
          ></img>

          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone2"
            src="/Ellipse 10.svg"
          ></img>
        </div>
      </div>

    </section>
  );
}