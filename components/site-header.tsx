import Link from "next/link"
import { ServerIcon } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ServerIcon className="h-6 w-6 text-primary" />
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">Nginx Config Generator</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="default" size="sm" asChild>
            <Link href="https://github.com/amoltribhuwan05/nginx-config-generator" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

