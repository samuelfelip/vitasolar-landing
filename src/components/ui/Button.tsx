import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-solar-yellow text-graphite-gray hover:bg-gradient-to-r hover:from-solar-yellow hover:to-nature-green hover:text-white hover:scale-105 shadow-lg",
        secondary: "bg-nature-green text-white hover:bg-clean-blue hover:scale-105 shadow-lg",
        outline: "border-2 border-solar-yellow text-solar-yellow hover:bg-solar-yellow hover:text-graphite-gray hover:scale-105",
        ghost: "text-graphite-gray hover:bg-solar-yellow/10 hover:text-clean-blue",
        link: "text-clean-blue underline-offset-4 hover:underline hover:text-nature-green",
        cta: "bg-solar-yellow text-graphite-gray hover:bg-gradient-to-r hover:from-solar-yellow hover:to-nature-green hover:text-white hover:scale-110 shadow-xl font-bold",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8 py-3 text-lg",
        xl: "h-14 px-10 py-4 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 