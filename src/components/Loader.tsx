import { cn } from "@/lib/utils"
import { LuLoader2 } from 'react-icons/lu'

type Props = {
  size?: number
  className?: string
}

export default function Loader(props: Props) {
  return (
    <div className='grid place-items-center h-full '>
      <div
        className={cn(
          "animate-spin",
          props.className
        )}>
        <LuLoader2 size={props.size ?? 16} />
      </div>
    </div>
  )
}