import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Featured() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

                    {/* <Image width={100} height={18} /> */}
                    <Image width={1} height={1} className="rounded-xl" src="/young.jpg" alt="Image Description" />
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                    We tackle the challenges start-ups face
                                </h2>
                                <p className="text-gray-500 dark:text-neutral-500">

                                    Few Steps towards
                                    Carbon Neutral Future.
                                </p>
                            </div>
                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        <span className="font-bold"> 87% Pickup and Drops</span> Using EVs
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        ECO Friendly <span className="font-bold">Detergents</span>
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Minimal Plastic Usage
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Responsible Water Usage
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