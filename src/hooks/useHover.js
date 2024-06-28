import { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  const handleMouseOver = () => setHovered(true)
  const handleMouseOut = () => setHovered(false)

  useEffect(() => {
    const refState = ref.current
    if (refState !== null)
      refState.addEventListener('mouseover', handleMouseOver)
    refState.addEventListener('mouseout', handleMouseOut)
  }, [ref])

  return { hovered, ref }
}
