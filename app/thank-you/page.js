
import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {

  return (
    <main className='relative lg:min-h-full'>
      <div className='hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12'>
        <Image
          fill
          src='/hippo-email-sent.png'
          className='h-full w-ful object-contain  object-center'
          alt='thank you for your order'
        />
      </div>

      <div>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24'>
          <div className='lg:col-start-2'>
            <p className='text-sm font-medium text-blue-600'>
              Booking successful
            </p>
            <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Thanks for booking
            </h1>

            <p className='mt-2 text-base text-muted-foreground'>
              Your booking was successful and our agent will call you to conform the order within on hour.
            </p>


            <div className='mt-16 text-sm font-medium'>

              <div className='mt-16 border-t border-gray-200 py-6 text-right'>
                <Link
                  href='/'
                  className='text-sm font-medium text-blue-600 hover:text-blue-500'>
                  Continue &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

