import type React from 'react'
import './Badge.css'
import clsx from 'clsx'

type Variant = "circle" | "Square"
type Color = "red" | "blue" | "green" | "brown"
type Size = "sm" | "md" | "lg"

type BadgeProps = {
    children : React.ReactNode
    variant : Variant
    color : Color
    size ?: Size 
}



const  Badge:React.FC<BadgeProps> = ( {variant , color , size="md", children})=> {
    const baseClass = "badgeBase"

const className = clsx(
    baseClass , 
    checkVariant(variant),
    checkColor(color),
    checkSize(size)
)

  
    
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Badge


 const  checkVariant = (variant : Variant)=>{
    
    if(variant === "circle"){
        return  "circleVariant"
    }else{
        return "SquareVariant"
    }
}


const checkColor =(color : Color)=>{
    
        if(color === "blue"){
            return "colorBlue"
        }else if(color === "green"){
            return  "colorGreen"
        }else if (color === "brown"){
            return  "colorBrown"
        }else {
            return  "colorRed"
        }
}


const checkSize = (size : Size)=>{
        if(size === "sm"){
            return "size__sm";
        }else if(size === "md"){
            return "size__md";
        }else{
            return "size__lg"
        }
}