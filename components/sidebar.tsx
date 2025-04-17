"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  FileUp,
  Box,
  Filter,
  Move,
  Eye,
  ChevronLeft,
  ChevronRight,
  Layers,
  CuboidIcon as Cube,
  Workflow,
} from "lucide-react"

const nodeCategories = [
  {
    name: "Input",
    nodes: [{ id: "ifcNode", label: "IFC File", icon: <FileUp className="h-4 w-4 mr-2" /> }],
  },
  {
    name: "Geometry",
    nodes: [
      { id: "geometryNode", label: "Extract Geometry", icon: <Box className="h-4 w-4 mr-2" /> },
      { id: "transformNode", label: "Transform", icon: <Move className="h-4 w-4 mr-2" /> },
    ],
  },
  {
    name: "Data",
    nodes: [{ id: "filterNode", label: "Filter Elements", icon: <Filter className="h-4 w-4 mr-2" /> }],
  },
  {
    name: "Output",
    nodes: [{ id: "viewerNode", label: "Viewer", icon: <Eye className="h-4 w-4 mr-2" /> }],
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div className={`relative border-r bg-card ${collapsed ? "w-12" : "w-64"} transition-all duration-300`}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-3 z-10 h-6 w-6 rounded-full border bg-background"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>

      {collapsed ? (
        <div className="flex flex-col items-center py-4 gap-4">
          <Workflow className="h-6 w-6 text-primary" />
          <Separator />
          <Button variant="ghost" size="icon" title="Input">
            <FileUp className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Geometry">
            <Cube className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Data">
            <Layers className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Output">
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center p-4">
            <Workflow className="h-6 w-6 mr-2 text-primary" />
            <h2 className="text-lg font-semibold">IFC Grasshopper</h2>
          </div>
          <Separator />
          <Tabs defaultValue="nodes" className="flex-1">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nodes">Nodes</TabsTrigger>
              <TabsTrigger value="presets">Presets</TabsTrigger>
            </TabsList>
            <TabsContent value="nodes" className="flex-1">
              <ScrollArea className="h-[calc(100vh-120px)]">
                <div className="p-4 space-y-4">
                  {nodeCategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">{category.name}</h3>
                      <div className="space-y-1">
                        {category.nodes.map((node) => (
                          <div
                            key={node.id}
                            className="flex items-center rounded-md border border-dashed px-3 py-2 cursor-grab bg-background hover:bg-accent"
                            draggable
                            onDragStart={(event) => onDragStart(event, node.id)}
                          >
                            {node.icon}
                            <span className="text-sm">{node.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="presets">
              <div className="p-4 text-center text-sm text-muted-foreground">
                Saved workflows and presets will appear here.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

