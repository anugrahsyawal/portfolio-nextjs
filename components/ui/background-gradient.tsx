"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
 children,
 className,
 containerClassName,
 animate = true,
}: {
 children?: React.ReactNode;
 className?: string;
 containerClassName?: string;
 animate?: boolean;
}) => {
 return (
 <div className={cn("relative p-[4px] group", containerClassName)}>
 <div
 className={cn(
 "absolute inset-0 rounded-lg",
 "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
 "opacity-50 group-hover:opacity-100 transition-opacity duration-500",
 animate ? "motion-safe:animate-[spin_2s_linear_infinite]" : "",
 className
 )}
 style={{
 backgroundSize: "400% 400%",
 }}
 />
 <div
 className={cn(
 "absolute inset-0 rounded-lg",
 "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
 "opacity-50 group-hover:opacity-100 transition-opacity duration-500",
 "blur-lg",
 animate ? "motion-safe:animate-[spin_2s_linear_infinite]" : "",
 className
 )}
 style={{
 backgroundSize: "400% 400%",
 }}
 />
 <div className={cn("relative bg-background rounded-lg", className)}>
 {children}
 </div>
 </div>
 );
};