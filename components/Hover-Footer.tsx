// import Link from 'next/link';
// import { Github, Twitter, Linkedin } from 'lucide-react';

// export function Footer() {
//     return (
//         <footer className="w-full border-t border-border/40 bg-background py-8">
//             <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Brand */}
//                 <div className="flex flex-col gap-2">
//                     <span className="text-xl font-bold tracking-tighter">ModernBlog</span>
//                     <p className="text-sm text-muted-foreground">
//                         Exploring the future of web development, one pixel at a time.
//                     </p>
//                 </div>

//                 {/* Links */}
//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-semibold text-foreground">Explore</h3>
//                     <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
//                     <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
//                     <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
//                 </div>

//                 {/* Socials */}
//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-semibold text-foreground">Connect</h3>
//                     <div className="flex items-center gap-4">
//                         <Link href="https://github.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
//                             <Github className="w-4 h-4 text-foreground" />
//                         </Link>
//                         <Link href="https://twitter.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
//                             <Twitter className="w-4 h-4 text-foreground" />
//                         </Link>
//                         <Link href="https://linkedin.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
//                             <Linkedin className="w-4 h-4 text-foreground" />
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="container max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
//                 &copy; {new Date().getFullYear()} ModernBlog. All rights reserved.
//             </div>
//         </footer>
//     );
// }

"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#3ca2fa] font-[helvetica] text-7xl font-bold 
        dark:stroke-[#3ca2fa99]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};