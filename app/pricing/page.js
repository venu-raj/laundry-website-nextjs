'use client'
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation";

const initialServices = [
    {
        name: "Shirts / T-Shirts / Kurtas",
        price: 15,
        deliveryTime: "24 hr Delivery",
        ecoSafe: true,
        backgroundColor: "bg-red-400",
        countValue: 0
    },
    {
        name: "Trousers / Pants / Jeans",
        price: 12,
        deliveryTime: "24 hr Delivery",
        ecoSafe: true,
        backgroundColor: "bg-green-500",
        countValue: 0
    },
    {
        name: "Chudi Tops Daily Wear",
        price: 16,
        deliveryTime: "24-48 hr Delivery",
        ecoSafe: true,
        backgroundColor: "bg-purple-500",
        countValue: 0
    },
    {
        name: "Chudi Tops Others (Anarkali/Gowns/Layered)",
        price: 24,
        deliveryTime: "24-48 hr Delivery",
        ecoSafe: false,
        backgroundColor: "bg-orange-500",
        countValue: 0
    },
    {
        name: "Chudi Bottom (any)",
        price: 12,
        deliveryTime: "24 hr Delivery",
        ecoSafe: false,
        backgroundColor: "bg-cyan-400",
        countValue: 0
    },
    {
        name: "Dhoti",
        price: 28,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-indigo-600",
        countValue: 0
    },
    {
        name: "Saree",
        price: 45,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-sky-500",
        countValue: 0
    },
    {
        name: "Silk Sarees / Satin Sarees",
        price: 55,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-lime-800",
        countValue: 0
    },
    {
        name: "Blouse",
        price: 12,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-fuchsia-700",
        countValue: 0
    },
    {
        name: "Kids Wear (1 piece, under 10 years)",
        price: 9,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-rose-700",
        countValue: 0
    },
    {
        name: "Others (billed upon delivery)",
        price: 0,
        deliveryTime: "3 Day Delivery",
        ecoSafe: false,
        backgroundColor: "bg-amber-400",
        countValue: 0
    },
];

export default function Example() {
    const [services, setServices] = useState(initialServices);
    const router = useRouter();

    const handleIncrement = (index) => {
        const newServices = [...services];
        newServices[index].countValue += 1;
        setServices(newServices);
    };

    const handleDecrement = (index) => {
        const newServices = [...services];
        if (newServices[index].countValue > 0) {
            newServices[index].countValue -= 1;
        }
        setServices(newServices);
    };

    const handleNavigation = () => {
        // const props = { services };
        // router.push({
        //     pathname: '/Booking',
        //     query: services,
        // });
    };


    return (
        <div className="bg-blue-500">
            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 pt-24">
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-3xl font-semibold mb-8 text-white">Our Services</h1>
                    <div className="w-full max-w-4xl space-y-4">
                        {services.map((service, index) => (
                            <div className=" flex">
                                <div key={index} className="p-4 rounded-lg shadow-lg bg-white text-black w-full">
                                    <div className="flex justify-between">
                                        <h2 className="text-xl font-bold">{service.name}</h2>
                                        <div className="flex gap-3">
                                            <MinusCircle onClick={() => handleDecrement(index)} className="cursor-pointer" />
                                            <p className="text-lg">{service.countValue}</p>
                                            <PlusCircle onClick={() => handleIncrement(index)} className="cursor-pointer" />
                                        </div>
                                    </div>
                                    <p className="text-lg mb-4">{service.price} per piece</p>
                                    <p className="text-lg mb-4">{service.countValue > 0 ? `Total ₹${service.price * service.countValue}` : null}
                                    </p>
                                </div>
                                <div className={`w-9 rounded-r-lg ${service.backgroundColor}  flex items-center justify-center`}>
                                    <ChevronRight size={24} color="white" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className=" w-full mt-5 text-black    bg-white" onClick={handleNavigation}>
                        CONTINUE
                    </Button>
                </div>
            </div>
        </div>
    );
}


// import { MinusCircle, MinusCircleIcon, Plus, PlusCircle, PlusIcon } from "lucide-react";
// import { useState } from "react";

// const services = [
//     {
//         name: "Shirts / T-Shirts / Kurtas",
//         price: 15,
//         deliveryTime: "24 hr Delivery",
//         ecoSafe: true,
//         backgroundColor: "bg-blue-500"
//     },
//     {
//         name: "Trousers / Pants / Jeans",
//         price: 12,
//         deliveryTime: "24 hr Delivery",
//         ecoSafe: true,
//         backgroundColor: "bg-green-500"
//     },
//     {
//         name: "Chudi Tops Daily Wear",
//         price: 16,
//         deliveryTime: "24-48 hr Delivery",
//         ecoSafe: true,
//         backgroundColor: "bg-purple-500"
//     },
//     {
//         name: "Chudi Tops Others (Anarkali/Gowns/Layered)",
//         price: 24,
//         deliveryTime: "24-48 hr Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-orange-500"
//     },
//     {
//         name: "Chudi Bottom (any)",
//         price: 12,
//         deliveryTime: "24 hr Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Dhoti",
//         price: 28,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Saree",
//         price: 45,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Silk Sarees / Satin Sarees",
//         price: 55,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Blouse",
//         price: 12,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Kids Wear (1 piece, under 10 years)	",
//         price: 9,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
//     {
//         name: "Others (billed upon delivery)		",
//         price: 0,
//         deliveryTime: "3 Day Delivery",
//         ecoSafe: false,
//         backgroundColor: "bg-yellow-500"
//     },
// ];


// export default function Example() {
//     const [count, setCount] = useState(0);

//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     const handleDecrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     };


//     return (
//         <div className=" bg-blue-500">
//             <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 pt-24">
//                 {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
//                     Our Services
//                 </h2> */}
//                 <div className="flex flex-col items-center justify-center   py-10">
//                     <h1 className="text-3xl font-semibold mb-8 text-white"> Our Services</h1>
//                     <div className="w-full max-w-4xl space-y-4">
//                         {services.map((service, index) => (
//                             <div key={index} className={`p-4 rounded-lg shadow-lg bg-white text-black`}>
//                                 <div className=" flex justify-between">
//                                     <h2 className="text-xl font-bold">{service.name}</h2>
//                                     <div className=" flex gap-3">
//                                         <MinusCircle onClick={handleDecrement} />
//                                         <p className="text-lg">{count}</p>
//                                         <PlusCircle onClick={handleIncrement} />
//                                     </div>
//                                 </div>
//                                 <p className="text-lg mb-4">{service.price} per piece</p>
//                                 {/* {service.ecoSafe && <p className="text-sm text-green-200">Eco Safe Detergents</p>}
//                                 <div className="flex justify-between items-center">
//                                     <p className="text-sm">{service.deliveryTime}</p>
//                                     <button className="text-white bg-gray-800 px-2 py-1 rounded">→</button>
//                                 </div> */}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// // export default function Services() {
// //     return (
// //         <div className="flex flex-col items-center justify-center bg-blue-700 text-white py-10">
// //             <h1 className="text-3xl font-bold mb-8">Our Services</h1>
// //             <div className="w-full max-w-4xl space-y-4">
// //                 {services.map((service, index) => (
// //                     <div key={index} className={`p-4 rounded-lg shadow-lg ${service.backgroundColor}`}>
// //                         <h2 className="text-xl font-bold">{service.name}</h2>
// //                         <p className="text-md mb-2">{service.description}</p>
// //                         <p className="text-lg mb-4">{service.price}</p>
// //                         {service.ecoSafe && <p className="text-sm text-green-200">Eco Safe Detergents</p>}
// //                         <div className="flex justify-between items-center">
// //                             <p className="text-sm">{service.deliveryTime}</p>
// //                             <button className="text-white bg-gray-800 px-2 py-1 rounded">→</button>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

