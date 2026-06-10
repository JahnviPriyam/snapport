import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        {
          "border-transparent bg-surface text-primaryText hover:bg-surface/80": variant === "default",
          "border-transparent bg-border text-primaryText hover:bg-border/80": variant === "secondary",
          "border-border text-secondaryText": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}
