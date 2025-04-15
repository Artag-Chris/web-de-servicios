import {ReactNode} from "react";


export interface ContentSection {
    title: string
    description: string
    imageUrl: string
    buttonText?: string
    buttonUrl?: string
}

export interface AdvancedHorizontalScrollProps {
    contentSections: ContentSection[]
    videoSrc?: string
    afterScrollContent?: ReactNode
    className?: string
}