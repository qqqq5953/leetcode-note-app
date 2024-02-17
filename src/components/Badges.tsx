import { BaseProps } from '@/@types/common'
import { Badge } from './ui/badge'
import { cn } from "@/lib/utils"

type Props = BaseProps & {
  badges: {
    id: string
    name: string
    slug: string
    createdAt: number
  }[]
}

export default function Badges(props: Props) {
  const colorMap: Record<string, string> = {
    "Easy": "bg-emerald-700",
    "Medium": "bg-yellow-500",
    "Hard": "bg-red-700"
  }

  return (
    <>
      {props.badges.map(badge => {
        return <Badge
          className={cn(
            `${colorMap[badge.name] || "border-neutral-600 bg-transparent text-neutral-600"}`,
            props.className
          )}
          key={badge.id}
        >{badge.name}</Badge>
      })}
    </>
  )
}
