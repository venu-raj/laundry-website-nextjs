"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Locate } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { request, gql } from "graphql-request";
import axios from "axios";

const formSchema = z.object({
  fullName: z.string().min(4).max(20),
  phoneNumber: z.string().min(10).max(20),
  emailAddress: z.string().email(),
  address: z.string().min(10),
});

export default function Booking() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(Date);
  const [isLoading, setIsLoading] = useState(false);
  const [humanaddress, sethumanaddress] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
    },
  });

  const handleSubmit = async () => {
    const formData = form.getValues();
    const mutation =
      gql`
      mutation MyMutation {
        createCustomer(
          data: {
          name: "` +
      formData.fullName +
      `",
          email: "` +
      formData.emailAddress +
      `",
          phoneNumber: ` +
      formData.phoneNumber +
      `,
          address: "` +
      formData.address +
      `"  date: "` +
      date +
      `"
        }
        ) {
          id
        }
        publishManyCustomers(to: PUBLISHED) {
          count
        }
      }
    `;
    const endpoint =
      "https://api-ap-south-1.hygraph.com/v2/clxoyzx5v018806uxpcgqljnw/master";

    try {
      const result = await request(endpoint, mutation);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error sending GraphQL request:", error);
    }
  };

  const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Update location state
          setLocation({ latitude, longitude });

          try {
            // Fetch address using reverse geocoding (Google Maps Geocoding API)
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDXn6KSA4exy08KiKicYZ53wCfs20__qWU`
            );

            // Extract formatted address from response
            const formattedAddress = response.data.results[0].formatted_address;
            sethumanaddress(formattedAddress);
            console.log(humanaddress);
          } catch (error) {
            setError(error.toString());
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 p-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className=" max-w-lg w-full flex flex-col gap-4"
        >
          <h2 className="font-semibold text-3xl">Personal Details</h2>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />{" "}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormLabel>Select Date And Time</FormLabel>
          <div className=" flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <FormField
              control={form.control}
              name="address"
              value={"humanaddress"}
              // onChange={(e) => setAddress(e.target.value)}
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className=" flex  place-items-center px-4 gap-3">
                      <FormLabel>Enter Pickup Address</FormLabel>
                      <Locate onClick={handleFetchLocation} />
                    </div>
                    <FormControl>
                      <Textarea placeholder="Pickup Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : " Book Now"}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
// onClick={handleSubmit}
