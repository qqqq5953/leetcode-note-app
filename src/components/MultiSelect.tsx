import { useState, MouseEvent, KeyboardEvent, forwardRef } from 'react'
import { cn } from "@/lib/utils"

import { Check, X, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area"

export type Option = {
  label: string;
  value: string;
}

export type OptionWithHeading = {
  heading: string;
  options: Option[]
}

interface MultiSelectProps {
  optionGroups: OptionWithHeading[];
  selected: Option[];
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<Option[]>>;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = forwardRef(({ optionGroups, selected, onChange, placeholder, className, ...props }, _ref) => {
  const [open, setOpen] = useState(false)

  function handleUnselect(
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    selectedValue: string
  ) {
    e.preventDefault();
    e.stopPropagation();
    onChange(selected.filter((option) => option.value !== selectedValue))
  }

  function isDisable(heading: string, optionVal: string) {
    const disableMap: Record<string, () => boolean> = {
      Category: () => {
        return (
          optionVal !== "allCategories" &&
          selected.findIndex(item => item.value === "allCategories") !== -1
        )
      },
      Difficulty: () => {
        return (
          optionVal !== "allDifficulties" &&
          selected.findIndex(item => item.value === "allDifficulties") !== -1
        )
      },
      Problem: () => {
        return (
          optionVal !== "allProblems" &&
          selected.findIndex(item => item.value === "allProblems") !== -1
        )
      }
    }

    const isDisableGroup = disableMap[heading]

    return isDisableGroup()
  }

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          tabIndex={0}
          aria-expanded={open}
          className={`flex items-center justify-between w-full border rounded-md bg-white px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${selected.length > 1 ? "h-full py-2" : "h-10"}`}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setOpen(!open)
          }}
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            {selected.length ? selected.map((selectedOption) => (
              <Badge
                variant="secondary"
                key={selectedOption.value}
              >
                {selectedOption.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUnselect(e, selectedOption.value);
                  }}
                  onClick={(e) => handleUnselect(e, selectedOption.value)}
                // onMouseDown={(e) => {
                //   e.preventDefault();
                //   e.stopPropagation();
                // }}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )) :
              <div className='text-sm text-neutral-500'>{placeholder}</div>
            }
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className={className}>
          <CommandInput placeholder="Search ..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <ScrollArea className='h-[360px]'>
            {optionGroups.map(group => {
              return <CommandGroup
                key={group.heading}
                heading={group.heading}
                className='max-h-64 overflow-auto'
              >
                {group.options.map((option) => {
                  const isInclude = selected.findIndex(selectedOption => selectedOption.value === option.value) !== -1

                  return <CommandItem
                    key={option.value}
                    disabled={isDisable(group.heading, option.value)}
                    onSelect={() => {
                      const result = isInclude
                        ? selected.filter((selectedOption) => selectedOption.value !== option.value)
                        : [...selected, option]

                      onChange(result)
                      setOpen(true)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        isInclude ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                })}
              </CommandGroup>
            })}
          </ScrollArea>

        </Command>

      </PopoverContent>
    </Popover>
  )
})


export { MultiSelect }