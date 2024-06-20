import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 pt-20 pb-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 gap-4 items-center text-center max-w-max">
          <h4 className="mb-5 sm:text-5xl text-4xl font-bold items-center Avenir xl:w-2/2 text-gray-900">

            Experience The<br />Difference Of<br /><span className=" text-green-rgba">Perfectly Stream<br />Ironed Clothes</span>
          </h4>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg ">

            We handle your garments with the utmost care and attention, ensuring through Ironing and Folding. Hurry up And book now in ಬೆಂಗಳೂರು
          </p>

          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg ">
            Our services are available in Rajajinagar and surrounding areas, covering zip codes 560010 and 560021.
          </p>
          <div className="">
            <Link href={'/pricing'}><Button size='lg' className='mr-4'>Book Now</Button></Link>
            {/* <Button size='lg' variant='outline'>Sehedule Time</Button> */}
          </div>
        </div>
        <div className="xl:mr-4 sm:mr-0 hidden lg:flex mb-0 lg:mb-0 md:pl-1">
          {/* <Image
            className="w-80 md:ml-1 ml-24 absolute z-30"
            alt="iPhone-12"
            width={50}
            height={50}
            src="/laundry_box.svg"
          ></Image> */}

          <Image
            className=""
            alt="iPhone2" width={500}
            height={300}
            src="/i_2.jpg"
          />
        </div>
      </div>

    </section>
  );
}