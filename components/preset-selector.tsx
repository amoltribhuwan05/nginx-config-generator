"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { presets } from "@/lib/presets"
import type { ConfigType } from "@/lib/types"
import { ChevronDown } from "lucide-react"

interface PresetSelectorProps {
  onSelectPreset: (preset: Partial<ConfigType>) => void
}

export function PresetSelector({ onSelectPreset }: PresetSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Load Preset
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Configuration Presets</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {Object.entries(presets).map(([key, preset]) => (
            <DropdownMenuItem key={key} onClick={() => onSelectPreset(preset.config)}>
              {preset.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

