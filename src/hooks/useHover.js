import { useRef } from 'react'
import { useState } from 'react'

export default function useHover() {
  const [hovered] = useState('1')
  const ref = useRef()
  return { hovered, ref }
}
