import { Button } from "@/components/ui/button";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "Push to deploy",
    description:
      "Stressed about finding time to iron clothes for tomorrow's office/event?",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description: "Tired of iron shops being closed when you need them?",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description: "Don't have time for multiple trips to the iron shop?",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description: "Frustrated by seeing wrinkles on freshly ironed clothes?",
    icon: FingerPrintIcon,
  },
];

export default function WhyUs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base leading-7 text-gray-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.description}
                </dt>
                {/* <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd> */}
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-6 text-md leading-8 text-gray-900">
            Then, IRON SPOT is the solution to all your worries. From convenient
            home pick-up to expert wrinkle-free ironing and same-day delivery,
            we've got you covered in all aspects. Experience the wonder of steam
            iron over coal or electric iron services. Try us today!
          </p>
          <Link href={"/pricing"}>
            <Button className=" px-8 mt-3">Explore Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
