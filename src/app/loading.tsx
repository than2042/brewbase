'use client'
import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true)
        }, 200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='m-auto w-3/6'>
            {showAnimation && (
                <DotLottieReact
                    src="https://lottie.host/501386e4-0a31-4292-9dc0-ecd4ea2d6d39/fULsLX3PiG.lottie"
                    loop
                    autoplay
                    style={{ width: "300px", height: "300px" }}
                />
            )}
        </div>
    )
}

export default Loading
