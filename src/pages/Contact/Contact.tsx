import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/shared/layout/Navbar";
import { assets } from "@/shared/assets/assets";

export default function ContactPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black text-white font-sans">
      {/* Left Side */}
      <div className="relative flex flex-col justify-center items-center p-10 bg-cover bg-center" style={{ backgroundImage: assets.contact }}>
        <div className="relative z-10 text-center mt-32">
          <p className="text-yellow-400 text-xl font-medium mb-2">Contact</p>
          <h1 className="text-5xl font-bold">Get in Touch</h1>
        </div>
        <div className="absolute bottom-6">
          <Navbar />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center p-10 space-y-6">
        <p className="text-sm text-gray-300">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras fermentum odio eu.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <Input placeholder="Enter your name" className="bg-black border border-gray-600" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input placeholder="Your email address" className="bg-black border border-gray-600" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <Textarea placeholder="Your message" className="bg-black border border-gray-600 min-h-[120px]" />
          </div>
        </div>
        <Button className="bg-yellow-300 text-black hover:bg-yellow-400 mt-4 py-6 rounded-full">
          BOOK A TABLE
        </Button>
      </div>
    </div>
  );
}
