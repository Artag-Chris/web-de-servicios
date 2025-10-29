import { useEffect, useState } from "react"
import { animate } from "framer-motion"

export function useCountUp(
  target: number,
  isActive: boolean,
  duration: number = 2
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.floor(latest))
      },
    })

    return () => controls.stop()
  }, [target, isActive, duration])

  return count
}
