import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FAQ() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <h1 className=" p-3 font-bold text-4xl">Frequently asked questions</h1>
                    <div className="flow-root">
                        <div className="-my-8 divide-y divide-gray-100">
                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden" open>
                                <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                                    <h2 className="text-lg font-medium">If I give my clothes today for Wash + Iron, when will I get it back ?</h2>

                                    <span className="relative size-5 shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Suppose your order is collected between 12:00 PM to 03:00 PM Today, it'll be delivered in the same timeslot tomorrow. By Default
                                </p>
                            </details>

                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium">Can I pay by Credit Card ?</h2>

                                    <span className="relative size-5 shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Yes, Payments can be made via UPI, Wallets, Credit or Debit Cards and Net Banking.

                                    Once your order is out for delivery, You'll usually receive a RAZORPAY payment link via SMS or WhatsApp,
                                </p>
                            </details>

                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium">Where do you wash my clothes ?</h2>

                                    <span className="relative size-5 shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Once our driver picks up your items, we ensure they receive the utmost care by
                                    transporting them to one of our trusted partner facilities nearby your locality.
                                    Our commitment to supporting local businesses and minimizing pollution from transportation is a source of pride for us.
                                </p>
                            </details>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}