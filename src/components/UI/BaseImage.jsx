import Image from 'next/image'
import React from 'react'

export default function BaseImage({ url, className, width, height }) {

    const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
    return (
        <Image src={imageUrl + url} className={className} width={width} height={height} alt={"img"} />
    )
}
