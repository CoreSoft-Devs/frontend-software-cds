"use client";
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type Props = {
  children: React.ReactNode;
  content: React.ReactNode | string;
};

const Tooltip = ({ children, content }: Props) => {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="md:inline-flex" asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={8}
          side="top"
          className="z-[999] items-center overflow-hidden rounded-xl border border-gray-500/30 bg-white dark:bg-black shadow-md"
        >
          {typeof content === "string" ? (
            <div className="block max-w-xs px-3 py-2 text-center text-sm text-gray-700 dark:text-white">
              {content}
            </div>
          ) : (
            content
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
