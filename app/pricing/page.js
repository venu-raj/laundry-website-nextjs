import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from 'next/link'


const products = [
    {
        id: 1,
        name: 'Wash and Fold',
        href: 'productdetails',
        imageSrc: 'https://images.sagarimpex.net/102667_01%20(2).jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹35',
        color: 'wash  +  tumble dry  +  fold ',
    },
    {
        id: 1,
        name: 'Wash and Iron',
        href: '#',
        imageSrc: 'https://images.sagarimpex.net/102667_01%20(2).jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹85',
        color: 'wash  +  tumble dry  +  fold ',
    },
    {
        id: 1,
        name: 'Wash and Dry',
        href: '#',
        imageSrc: 'https://images.sagarimpex.net/102667_01%20(2).jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹55',
        color: 'wash  +  tumble dry  +  fold ',
    },


]

export default function Example() {
    return (
        <div className="bg-white">

            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Simplified Pricing</h2>

                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
                    {products.map((product) => (

                        <Link href={product.href} >
                            <div key={product.id} className="group relative">
                                <div className=" justify-between overflow-hidden rounded-md  items-center lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    {/* <Avatar>
                                    <AvatarImage src={product.imageSrc} className=" w-4/6" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar> */}
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        width={50}
                                        height={50}
                                        className="h-full w-full object-cover object-center lg:w-full"
                                    />

                                    <div className="mt-4 flex justify-between px-2 gap-3">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
