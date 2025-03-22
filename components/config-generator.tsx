"use client"

import { useState } from "react"
import { Save, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConfigPreview } from "@/components/config-preview"
import { ServerSettings } from "@/components/server-settings"
import { PerformanceSettings } from "@/components/performance-settings"
import { SecuritySettings } from "@/components/security-settings"
import { AdvancedSettings } from "@/components/advanced-settings"
import { PresetSelector } from "@/components/preset-selector"
import { useToast } from "@/components/ui/use-toast"
import { generateNginxConfig } from "@/lib/generate-config"
import { defaultConfig } from "@/lib/default-config"
import type { ConfigType } from "@/lib/types"

export function ConfigGenerator() {
  const [config, setConfig] = useState<ConfigType>(defaultConfig)
  const [activeTab, setActiveTab] = useState("server")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleConfigChange = (section: string, field: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleDirectChange = (field: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const applyPreset = (presetConfig: Partial<ConfigType>) => {
    setConfig((prev) => ({
      ...prev,
      ...presetConfig,
    }))

    toast({
      title: "Preset Applied",
      description: "The configuration has been updated with the selected preset.",
    })
  }

  const resetConfig = () => {
    if (confirm("Are you sure you want to reset all settings to default?")) {
      setConfig(defaultConfig)
      toast({
        title: "Configuration Reset",
        description: "All settings have been reset to default values.",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateNginxConfig(config))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)

    toast({
      title: "Copied to Clipboard",
      description: "The nginx configuration has been copied to your clipboard.",
    })
  }

  const downloadConfig = () => {
    const element = document.createElement("a")
    const file = new Blob([generateNginxConfig(config)], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "nginx.conf"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    toast({
      title: "Configuration Downloaded",
      description: "The nginx.conf file has been downloaded.",
    })
  }

  const saveConfig = () => {
    try {
      localStorage.setItem("nginxConfig", JSON.stringify(config))
      toast({
        title: "Configuration Saved",
        description: "Your configuration has been saved to local storage.",
      })
    } catch (error) {
      toast({
        title: "Error Saving Configuration",
        description: "There was an error saving your configuration.",
        variant: "destructive",
      })
    }
  }

  const loadConfig = () => {
    try {
      const savedConfig = localStorage.getItem("nginxConfig")
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig))
        toast({
          title: "Configuration Loaded",
          description: "Your saved configuration has been loaded.",
        })
      } else {
        toast({
          title: "No Saved Configuration",
          description: "There is no saved configuration to load.",
        })
      }
    } catch (error) {
      toast({
        title: "Error Loading Configuration",
        description: "There was an error loading your configuration.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nginx Configuration Generator</h1>
          <p className="text-muted-foreground mt-1">Create professional nginx configurations with advanced options</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <PresetSelector onSelectPreset={applyPreset} />
          <Button variant="outline" size="sm" onClick={loadConfig}>
            Load Saved
          </Button>
          <Button variant="outline" size="sm" onClick={saveConfig}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={resetConfig}>
            <Trash className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="server">Server</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="server">
              <ServerSettings config={config} onConfigChange={handleConfigChange} onDirectChange={handleDirectChange} />
            </TabsContent>

            <TabsContent value="performance">
              <PerformanceSettings
                config={config}
                onConfigChange={handleConfigChange}
                onDirectChange={handleDirectChange}
              />
            </TabsContent>

            <TabsContent value="security">
              <SecuritySettings
                config={config}
                onConfigChange={handleConfigChange}
                onDirectChange={handleDirectChange}
              />
            </TabsContent>

            <TabsContent value="advanced">
              <AdvancedSettings
                config={config}
                onConfigChange={handleConfigChange}
                onDirectChange={handleDirectChange}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <ConfigPreview config={config} onCopy={copyToClipboard} onDownload={downloadConfig} copied={copied} />
        </div>
      </div>
    </div>
  )
}

