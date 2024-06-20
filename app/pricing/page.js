"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Shirt } from 'lucide-react'
import MySVGComponent from '../_components/myComponent'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';
import { X, Check } from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const products = [
    {
        id: 1,
        top: 5,
        name: 'Wash and Fold',
        href: 'productdetails',
        image: '/shirt.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹35',
        color: 'wash  +  tumble dry  +  fold ',
        included_items: ' Shirts, T-Shirts, Trousers, Innergarments, socks, Handkerchiefs',
    },
    {
        id: 2,
        top: 5,
        name: 'Wash and Iron',
        href: '#',
        image: '/shirt.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹85',
        color: 'wash  +  tumble dry  +  fold ',
        included_items: 'Shirts, T-Shirts, Trousers, Kurtis, Everyday Wears ',
    },
    {
        id: 3,
        top: 5,
        name: 'Heavy Wash',
        href: '#',
        image: '/shirt.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹55',
        color: 'wash  +  tumble dry  +  fold ',
        included_items: ' Pillow Covers, Curtains, Blankets, Bedsheets and Towels',
    },
    {
        id: 4,
        top: 5,
        name: 'Iron Only',
        href: '#',
        image: '/shirt.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹55',
        color: 'wash  +  tumble dry  +  fold ',
        included_items: 'Shirts, T-Shirts and  Trousers',
    },
    {
        id: 5,
        top: 5,
        name: 'Dry Cleaning',
        href: '#',
        image: '/shirt.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'starts from ₹95',
        color: 'wash  +  tumble dry  +  fold ',
        included_items: '',
    },


]

export default function Example() {

    return (
        <div className="bg-white ">

            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 pt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Simplified Pricing</h2>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product, i) => (
                        <div key={product.id} className="group relative" >



                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="mt-4 flex flex-col justify-between px-2 gap-3 bg-slate-100 pb-4 rounded-xl">

                                        <div className="relative z-100">
                                            {/* <Shirt size={60} className=" absolute top-11 left-11" /> */}
                                            <Image src={product.image} alt={product.id} width={70} height={70} className={""} />
                                            {/* <MySVGComponent /> */}
                                        </div>
                                        <h3 className=" text-xl font-bold text-gray-700">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                        <div className=' flex underline-offset-4 hover:underline'>
                                            <h1 className=' font-semibold text-sm text-primary '>Book Now </h1><ArrowRight size={22} color='blue' />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">

                                    <DialogHeader>
                                        <div className='flex space-x-2'>
                                            <DialogTitle>{product.name}</DialogTitle>
                                            <DialogDescription>
                                                {product.color}
                                            </DialogDescription>
                                        </div>
                                        <DialogDescription>
                                            Best For {product.included_items}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Tabs defaultValue="account" className="w-[400px]">
                                        <TabsList>
                                            <TabsTrigger value="account">PRICING</TabsTrigger>
                                            <TabsTrigger value="password">DETAILS</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="account">
                                            <div className='flex px-2 py-4 justify-between'>
                                                <h3>Steam Ironing ( 0 - 10 pcs )</h3>
                                                <h3>Rs. 300</h3>
                                            </div>
                                            <Separator />
                                            <div className='flex px-2 py-4 justify-between items-end'>
                                                <div className=' flex flex-col'>
                                                    <h3>Add On</h3>
                                                    <h5>If the load has more than 10 pcs</h5>
                                                </div>
                                                <h3>Rs. 20/pc</h3>
                                            </div>
                                            <Separator />
                                        </TabsContent>
                                        <TabsContent value="password">
                                            <div className=' px-2 py-4 '>
                                                <div className=' flex items-center'>
                                                    <h3 className=' font-bold text-xl'>Inclusions</h3>

                                                    <div className='flex items-center justify-center p-0.5 m-2 bg-green-500 w-10 h-10 rounded-full'>
                                                        <div className='flex items-center justify-center w-full h-full'>
                                                            <Check size={70} color='white' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className=' font-light text-sm text-gray-600'>Shirts, T-Shirts, Formal Pants, Everyday Wear Women Kurtis and Jeans Pants</h3>
                                            </div>
                                            <Separator />
                                            <div className=' px-2 py-4 '>
                                                <div className=' flex items-center'>
                                                    <h3 className=' font-bold text-xl'>Exclusions</h3>

                                                    <div className='flex items-center justify-center p-0.5 m-2 bg-red-500 w-10 h-10 rounded-full'>
                                                        <div className='flex items-center justify-center w-full h-full'>
                                                            <X size={70} color='white' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className=' font-light text-sm text-gray-600'>Blazers, Sarees, Blouses, Kurta, Salwar, Tie, Indian Ethnic Wears</h3>
                                            </div>
                                            <Separator />
                                        </TabsContent>
                                    </Tabs>
                                    <div className="flex items-center space-x-2">

                                    </div>
                                    <DialogFooter className="sm:justify-end space-x-3 ">
                                        <DialogClose asChild>
                                            <div >
                                                <Button type="button" variant="ghost" className="mr-4" size='lg'>
                                                    Close
                                                </Button>
                                                <Link href='/Booking'>
                                                    <Button type="button" >
                                                        Continue
                                                    </Button>
                                                </Link>


                                            </div>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


