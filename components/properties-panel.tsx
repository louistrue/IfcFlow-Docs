"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PropertiesPanel({ node, setNodes }) {
  const [properties, setProperties] = useState({})

  useEffect(() => {
    if (node && node.data) {
      setProperties(node.data.properties || {})
    }
  }, [node])

  const updateNodeProperties = () => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) {
          return {
            ...n,
            data: {
              ...n.data,
              properties,
            },
          }
        }
        return n
      }),
    )
  }

  const renderProperties = () => {
    switch (node.type) {
      case "ifcNode":
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">IFC File</Label>
                <div className="flex gap-2">
                  <Input id="file" value={properties.file || ""} readOnly />
                  <Button variant="secondary" size="sm">
                    Browse
                  </Button>
                </div>
              </div>
            </div>
          </>
        )
      case "geometryNode":
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="elementType">Element Type</Label>
                <Select
                  value={properties.elementType || "all"}
                  onValueChange={(value) => setProperties({ ...properties, elementType: value })}
                >
                  <SelectTrigger id="elementType">
                    <SelectValue placeholder="Select element type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Elements</SelectItem>
                    <SelectItem value="walls">Walls</SelectItem>
                    <SelectItem value="slabs">Slabs</SelectItem>
                    <SelectItem value="columns">Columns</SelectItem>
                    <SelectItem value="beams">Beams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="includeOpenings">Include Openings</Label>
                <Select
                  value={properties.includeOpenings || "true"}
                  onValueChange={(value) => setProperties({ ...properties, includeOpenings: value })}
                >
                  <SelectTrigger id="includeOpenings">
                    <SelectValue placeholder="Include openings" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )
      case "filterNode":
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="property">Property</Label>
                <Input
                  id="property"
                  value={properties.property || ""}
                  onChange={(e) => setProperties({ ...properties, property: e.target.value })}
                  placeholder="e.g. Type, Material, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="operator">Operator</Label>
                <Select
                  value={properties.operator || "equals"}
                  onValueChange={(value) => setProperties({ ...properties, operator: value })}
                >
                  <SelectTrigger id="operator">
                    <SelectValue placeholder="Select operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equals">Equals</SelectItem>
                    <SelectItem value="contains">Contains</SelectItem>
                    <SelectItem value="startsWith">Starts With</SelectItem>
                    <SelectItem value="endsWith">Ends With</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Value</Label>
                <Input
                  id="value"
                  value={properties.value || ""}
                  onChange={(e) => setProperties({ ...properties, value: e.target.value })}
                  placeholder="Value to match"
                />
              </div>
            </div>
          </>
        )
      case "transformNode":
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Translation</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label htmlFor="translateX" className="text-xs">
                      X
                    </Label>
                    <Input
                      id="translateX"
                      type="number"
                      value={properties.translateX || 0}
                      onChange={(e) => setProperties({ ...properties, translateX: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="translateY" className="text-xs">
                      Y
                    </Label>
                    <Input
                      id="translateY"
                      type="number"
                      value={properties.translateY || 0}
                      onChange={(e) => setProperties({ ...properties, translateY: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="translateZ" className="text-xs">
                      Z
                    </Label>
                    <Input
                      id="translateZ"
                      type="number"
                      value={properties.translateZ || 0}
                      onChange={(e) => setProperties({ ...properties, translateZ: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Rotation (degrees)</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label htmlFor="rotateX" className="text-xs">
                      X
                    </Label>
                    <Input
                      id="rotateX"
                      type="number"
                      value={properties.rotateX || 0}
                      onChange={(e) => setProperties({ ...properties, rotateX: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rotateY" className="text-xs">
                      Y
                    </Label>
                    <Input
                      id="rotateY"
                      type="number"
                      value={properties.rotateY || 0}
                      onChange={(e) => setProperties({ ...properties, rotateY: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rotateZ" className="text-xs">
                      Z
                    </Label>
                    <Input
                      id="rotateZ"
                      type="number"
                      value={properties.rotateZ || 0}
                      onChange={(e) => setProperties({ ...properties, rotateZ: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Scale</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label htmlFor="scaleX" className="text-xs">
                      X
                    </Label>
                    <Input
                      id="scaleX"
                      type="number"
                      value={properties.scaleX || 1}
                      onChange={(e) => setProperties({ ...properties, scaleX: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="scaleY" className="text-xs">
                      Y
                    </Label>
                    <Input
                      id="scaleY"
                      type="number"
                      value={properties.scaleY || 1}
                      onChange={(e) => setProperties({ ...properties, scaleY: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="scaleZ" className="text-xs">
                      Z
                    </Label>
                    <Input
                      id="scaleZ"
                      type="number"
                      value={properties.scaleZ || 1}
                      onChange={(e) => setProperties({ ...properties, scaleZ: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      case "viewerNode":
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="viewMode">View Mode</Label>
                <Select
                  value={properties.viewMode || "shaded"}
                  onValueChange={(value) => setProperties({ ...properties, viewMode: value })}
                >
                  <SelectTrigger id="viewMode">
                    <SelectValue placeholder="Select view mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shaded">Shaded</SelectItem>
                    <SelectItem value="wireframe">Wireframe</SelectItem>
                    <SelectItem value="hidden">Hidden Line</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="colorBy">Color By</Label>
                <Select
                  value={properties.colorBy || "type"}
                  onValueChange={(value) => setProperties({ ...properties, colorBy: value })}
                >
                  <SelectTrigger id="colorBy">
                    <SelectValue placeholder="Select coloring method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type">Element Type</SelectItem>
                    <SelectItem value="material">Material</SelectItem>
                    <SelectItem value="level">Level</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )
      default:
        return (
          <div className="text-center text-sm text-muted-foreground py-4">
            No properties available for this node type.
          </div>
        )
    }
  }

  if (!node) return null

  return (
    <div className="w-80 border-l bg-card">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-medium">Properties: {node.data.label}</h3>
        <Button variant="ghost" size="icon" onClick={() => setNodes((nds) => nds.filter((n) => n.id !== node.id))}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nodeName">Node Name</Label>
              <Input
                id="nodeName"
                value={node.data.label}
                onChange={(e) => {
                  setNodes((nds) =>
                    nds.map((n) => {
                      if (n.id === node.id) {
                        return {
                          ...n,
                          data: {
                            ...n.data,
                            label: e.target.value,
                          },
                        }
                      }
                      return n
                    }),
                  )
                }}
              />
            </div>
          </div>

          <Separator className="my-4" />

          {renderProperties()}

          <div className="mt-6">
            <Button onClick={updateNodeProperties} className="w-full">
              Apply Changes
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

