import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Featured() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

                    {/* <Image width={100} height={18} /> */}
                    <img class="rounded-xl" src="https://static.wixstatic.com/media/42e422_cdf5a650da9640f7b2f0c9245a76f0b8~mv2.jpg/v1/crop/x_397,y_0,w_572,h_667/fill/w_460,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9b351f5f68.jpg" alt="Image Description" />
                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8">
                            <div class="space-y-2 md:space-y-4">
                                <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                    We tackle the challenges start-ups face
                                </h2>
                                <p class="text-gray-500 dark:text-neutral-500">

                                    Few Steps towards
                                    Carbon Neutral Future.
                                </p>
                            </div>
                            <ul class="space-y-2 sm:space-y-4">
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        <span class="font-bold"> 87% Pickup and Drops</span> Using EVs
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        ECO Friendly <span class="font-bold">Detergents</span>
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Minimal Plastic Usage
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
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