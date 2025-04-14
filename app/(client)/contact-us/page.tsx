"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import contact from "@/public/traveling.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

const ContactPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    trekName: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setisLoading(true);
    setTimeout(() => setisLoading(false), 2000); // Simulating API call
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 lg:px-20 py-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-ocean-green-500 to-ocean-green-700 text-white p-12 w-1/2">
          <h1 className="text-3xl font-bold text-center">
            We ❤️ love to hear from you!
          </h1>
          <p className="mt-4 text-lg text-center">
            Fill out the form below to get in touch, and let&apos;s start
            planning your next adventure.
          </p>
          <div className="mt-8">
            <Image src={contact} alt="contact-us" width={300} height={300} />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Contact Us
          </h2>
          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <Input
              name="fullName"
              placeholder="Full Name"
              className="py-3 border-gray-300 focus:ring-2 focus:ring-ocean-green-500"
              required
              onChange={handleChange}
            />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              className="py-3 border-gray-300 focus:ring-2 focus:ring-ocean-green-500"
              required
              onChange={handleChange}
            />
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              className="py-3 border-gray-300 focus:ring-2 focus:ring-ocean-green-500"
              onChange={handleChange}
            />
            <Input
              name="trekName"
              placeholder="Trek Name"
              className="py-3 border-gray-300 focus:ring-2 focus:ring-ocean-green-500"
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="border-gray-300 focus:ring-2 focus:ring-ocean-green-500"
              required
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="mt-4 bg-ocean-green-600 text-white py-3 rounded-md hover:bg-ocean-green-700 transition-all flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="animate-spin mr-2" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
