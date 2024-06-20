
import Image from "next/image";

export default function Featured() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

                    {/* <Image width={100} height={18} /> */}
                    <Image width={800} height={100} className="rounded-xl" src="/i_1.png" alt="Image Description" />
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                    Why Choose Us
                                </h2>
                                {/* <p className="text-gray-500 dark:text-neutral-500">

                                    Few Steps towards
                                    Carbon Neutral Future.
                                </p> */}
                            </div>
                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Crisp perfection for <span className="font-bold">Every outfit </span>
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Handles stubborn <span className="font-bold">wrinkles flawlessly</span>
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Extended lifespan of your clothes
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Steam helps to kill germs and bacteria
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}