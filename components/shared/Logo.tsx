import React from "react"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  href?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { width: 32, height: 32 },
  md: { width: 170, height: 40 },
  lg: { width: 64, height: 64 },
}

export default function Logo({
  href = "/dashboard",
  className = "",
  size = "md",
}: LogoProps) {
  const dimensions = sizeMap[size]

  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="mhapy Logo"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="rounded-lg object-contain"
      />
      {/* <span className="hidden sm:inline font-bold text-primary">mhapy</span> */}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
