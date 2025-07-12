import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg border shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-smoke-white border-graphite-gray/20",
        highlight: "bg-solar-gradient border-solar-yellow shadow-lg",
        outline: "bg-transparent border-2 border-solar-yellow",
        ghost: "bg-transparent border-none shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string
  description?: string
  image?: string
  icon?: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, title, description, image, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        {image && (
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={title || "Card image"}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {(icon || title) && (
            <div className="flex items-center mb-4">
              {icon && (
                <div className="mr-3 text-2xl text-solar-yellow">
                  {icon}
                </div>
              )}
              {title && (
                <h3 className="text-xl font-semibold text-graphite-gray">
                  {title}
                </h3>
              )}
            </div>
          )}
          {description && (
            <p className="text-graphite-gray/80 mb-4 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-graphite-gray/80", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } 