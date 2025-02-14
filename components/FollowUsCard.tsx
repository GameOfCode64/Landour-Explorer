"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFollow } from "@/hooks/use-follow";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaCard = () => {
  const { isOpen, onClose, onOpen } = useFollow();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8 text-center text-ocean-green-500 font-bold">
          Follow Us
        </DialogTitle>
        <div className="w-full flex items-center justify-center space-x-4">
          <Button
            onClick={() => {
              window.location.href = "https://www.instagram.com/#";
            }}
            className="w-[50px] h-[50px] rounded-full bg-ocean-green-500 hover:bg-ocean-green-600"
          >
            <Instagram />
          </Button>
          <Button
            onClick={() => {
              window.location.href = "https://www.youtube.com/#";
            }}
            className="w-[50px] h-[50px] rounded-full bg-ocean-green-500 hover:bg-ocean-green-600"
          >
            <Youtube />
          </Button>
          <Button
            onClick={() => {
              window.location.href = "https://www.facebook.com/#";
            }}
            className="w-[50px] h-[50px] rounded-full bg-ocean-green-500 hover:bg-ocean-green-600"
          >
            <Facebook />
          </Button>
          <Button
            onClick={() => {
              window.location.href = "https://www.x.com/#";
            }}
            className="w-[50px] h-[50px] rounded-full bg-ocean-green-500 hover:bg-ocean-green-600"
          >
            <Twitter />
          </Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="bg-ocean-green-500 hover:bg-ocean-green-600 w-full mt-6">
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SocialMediaCard;
