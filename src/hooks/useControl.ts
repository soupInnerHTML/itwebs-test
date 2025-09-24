import {useMemo, useState} from "react";

export default function useControl(initial: number): [number, boolean, () => void] {
  const [amount, setAmount] = useState(initial)
  const isPressed = useMemo(() => {
    return amount > initial
  }, [amount])

  const toggle = () => isPressed ? setAmount(amount => amount - 1) : setAmount(amount => amount + 1)

  return [amount, isPressed, toggle]
}