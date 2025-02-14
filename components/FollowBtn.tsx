"use client";
import React from "react";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFollow } from "@/hooks/use-follow";

interface FollowBtnProps {
  text: string;
}
const FollowBtn = ({ text }: FollowBtnProps) => {
  const { onOpen } = useFollow();
  return (
    <Button
      onClick={onOpen}
      className="flex items-center justify-center bg-ocean-green-500 hover:bg-ocean-green-600 text-white rounded-3xl"
    >
      <Link />
      <span>{text}</span>
    </Button>
  );
};

export default FollowBtn;
