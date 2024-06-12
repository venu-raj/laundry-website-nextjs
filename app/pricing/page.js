import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Simplified Pricing</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (

                        <Link href={product.href} >
                            <div key={product.id} className="group relative">
                                <div className=" justify-between overflow-hidden rounded-md  items-center bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    {/* <Avatar>
                                    <AvatarImage src={product.imageSrc} className=" w-4/6" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar> */}
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />

                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
