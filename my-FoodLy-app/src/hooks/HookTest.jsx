import { useState, useEffect } from "react"

export default function HookTest(){
  const [count, setCount] = useState(0)
  return {
    count,
    setCount
  }
}