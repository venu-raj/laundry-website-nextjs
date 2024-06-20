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
import axios from "axios";
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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
  fullName: z.string().min(4).max(20),
  phoneNumber: z.string().min(10).max(20),
  emailAddress: z.string().email(),
  address: z.string(),
});

export default function Booking() {
  const [date, setDate] = useState(Date);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = form.getValues(); // Retrieve form data
      const response = await axios.post("http://localhost:1337/api/customer", {
        data: {
          name: formData.fullName,
          phone_number: formData.phoneNumber,
          email: formData.emailAddress,
          address: formData.address,
          date: date ? format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") : null, // Format date if available
        },
      });
      console.log(response);

      router.replace("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Please Fill all the fields properly.",
      });
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
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter Pickup Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Pickup Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div onClick={handleSubmit}>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "CONTINUE"}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
