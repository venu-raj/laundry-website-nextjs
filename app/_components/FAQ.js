import { cn } from "@/lib/utils";
import Image from "next/image";

const faqData = [
    {
        question: "Where would my clothes reach after home pick up?",
        answer: "Your clothes will be safely transported to our store located in Rajajinagar 4th block Bengaluru for steam ironing.",
    },
    {
        question: "Where is the Iron Spot store located?",
        answer: "Our store address is #106 B, ground floor, 46th Cross, Rajajinagar 4th Block, Bengaluru 560010, you are always welcomed.",
    },
    {
        question: "Is it possible for me to visit the store directly for steam ironing services and what is the Store timings?",
        answer: "Yes, we are more than happy to serve you on your store visit. We are open between 09:00 AM to 07:00 PM",
    },
    {
        question: "Is there a price difference to your steam iron services when compared to coal or electric iron services?",
        answer: "Absolutely not! We're providing our exceptional services at the same price as coal or electric ironing. Our goal is to ease the process of routine cloth ironing activity in this busy urban lifestyle through tech and latest machinery.",
    },
    {
        question: "As you are closed on Sunday, what happens if I give my clothes after 02:00 PM on Saturday?",
        answer: " As a part of wellbeing and work-life balance, we are closed on Sundays. We all agree that a day's break is deserving thus, your clothes will be delivered on the next business day i.e. before 2:00 PM on Monday.",
    },
    {
        question: "What is the minimum order value to qualify for home pick-up?",
        answer: "The minimum order value is ₹200. Since our delivery person needs to visit your location twice, we must manage significant coordination at the back-end thus, we set this limit to ensure the process is worthwhile.",
    },
    {
        question: " What should I do if I'm unhappy with the ironing quality of specific clothes?",
        answer: " If you are unsatisfied, please report it to us immediately (Mob: 74837 27502). We will re-iron your clothes at no additional cost - that's our promise. Rest assured, we will go the extra mile to meet your expectations to not end up in this state.",
    },
    {
        question: "The type of clothes which I want to give is not listed in the service list, what should I do?",
        answer: " For easy access, we've included the most commonly ordered items in our service list. If your item isn't listed, please select the 'Others' category and update the quantity of clothes. Rest assured, we will provide a detailed bill at the time of delivery, and our prices would definitely be fairly economical would not shock or surprise you.",
    },
    {
        question: "Can I choose to pay via the Cash on Delivery (COD)?",
        answer: "Absolutely yes, you can make a cash payment directly to our delivery person. They are also equipped to accept payments via UPI apps (PhonePe, GPay, Paytm).",
    },
]

export default function FAQ() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <h1 className=" p-3 font-bold text-4xl">Frequently asked questions</h1>
                    <div className="flow-root">
                        <div className="-my-8 divide-y divide-gray-100">
                            {faqData.map((faq, key) => (
                                <details className="group py-8 [&_summary::-webkit-details-marker]:hidden" key={key}>
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                        <h2 className="text-lg font-medium">{faq.question}</h2>

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
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}