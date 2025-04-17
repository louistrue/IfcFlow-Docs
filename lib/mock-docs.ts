export type Doc = {
  _id: string
  _raw: {
    flattenedPath: string
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: string
    flattenedPath: string
  }
  type: string
  title: string
  description?: string
  order?: number
  body: {
    raw: string
    code: string
  }
}

export const allDocs: Doc[] = [
  {
    _id: "introduction",
    _raw: {
      flattenedPath: "introduction",
      sourceFilePath: "introduction.mdx",
      sourceFileName: "introduction.mdx",
      sourceFileDir: "",
      contentType: "mdx",
      flattenedPath: "introduction",
    },
    type: "Doc",
    title: "Introduction",
    description: "Overview of IFC Flow Map and its capabilities.",
    order: 1,
    body: {
      raw: `# Introduction

IFC Flow Map is an open‑source web application that lets you **view, filter, transform and analyse BIM data** through a drag‑and‑drop workflow editor.

The entire runtime executes in your browser — no servers, no data leaks.

## Why Another BIM Tool?

* **Rapid prototyping** of data pipelines.
* **Embodied on‑device**: WebAssembly version of IfcOpenShell
* **Zero setup** — works on any modern browser.

## Core Concepts

*Workflows*, *Nodes*, *Edges* — see the full reference.

---

> Next: [Quick Start](quick-start)`,
      code: `<h1>Introduction</h1>
<p>IFC Flow Map is an open‑source web application that lets you <strong>view, filter, transform and analyse BIM data</strong> through a drag‑and‑drop workflow editor.</p>
<p>The entire runtime executes in your browser — no servers, no data leaks.</p>
<h2>Why Another BIM Tool?</h2>
<ul>
<li><strong>Rapid prototyping</strong> of data pipelines.</li>
<li><strong>Embodied on‑device</strong>: WebAssembly version of IfcOpenShell</li>
<li><strong>Zero setup</strong> — works on any modern browser.</li>
</ul>
<h2>Core Concepts</h2>
<p><em>Workflows</em>, <em>Nodes</em>, <em>Edges</em> — see the full reference.</p>
<hr>
<blockquote>
<p>Next: <a href="quick-start">Quick Start</a></p>
</blockquote>`,
    },
  },
  {
    _id: "quick-start",
    _raw: {
      flattenedPath: "quick-start",
      sourceFilePath: "quick-start.mdx",
      sourceFileName: "quick-start.mdx",
      sourceFileDir: "",
      contentType: "mdx",
      flattenedPath: "quick-start",
    },
    type: "Doc",
    title: "Quick Start",
    description: "Get up and running with IFC Flow Map in minutes.",
    order: 2,
    body: {
      raw: `# Quick Start

This guide will help you install IFC Flow Map and create your first workflow in minutes.

## Installation

There are two ways to get started with IFC Flow Map:

### Option 1: Use the Online Version

The fastest way to try IFC Flow Map is to use the online version at [https://ifc-flow-map.vercel.app](https://ifc-flow-map.vercel.app).

### Option 2: Local Installation

For local development or offline use, clone the repository and install dependencies:

\`\`\`bash
# Clone the repository
git clone https://github.com/louistrue/ifc-flow-map.git

# Navigate to the project directory
cd ifc-flow-map

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

IFC Flow Map requires Node.js 16.0.0 or later. Make sure you have a compatible version installed.

## Your First Workflow

Let's create a simple workflow to visualize an IFC model:

1. **Launch IFC Flow Map** - Open the application in your browser
2. **Create a new workflow** - Click the "New Workflow" button in the top navigation
3. **Add an IFC File node** - Drag the "IFC File" node from the sidebar to the canvas
4. **Add a 3D Viewer node** - Drag the "3D Viewer" node to the canvas
5. **Connect the nodes** - Click and drag from the output port of the IFC File node to the input port of the 3D Viewer node
6. **Upload an IFC file** - Click on the IFC File node and use the file picker to upload your IFC file

---

> Previous: [Introduction](introduction) — Next: [Node Reference](node-reference)`,
      code: `<h1>Quick Start</h1>
<p>This guide will help you install IFC Flow Map and create your first workflow in minutes.</p>
<h2>Installation</h2>
<p>There are two ways to get started with IFC Flow Map:</p>
<h3>Option 1: Use the Online Version</h3>
<p>The fastest way to try IFC Flow Map is to use the online version at <a href="https://ifc-flow-map.vercel.app">https://ifc-flow-map.vercel.app</a>.</p>
<h3>Option 2: Local Installation</h3>
<p>For local development or offline use, clone the repository and install dependencies:</p>
<pre><code class="language-bash"># Clone the repository
git clone https://github.com/louistrue/ifc-flow-map.git

# Navigate to the project directory
cd ifc-flow-map

# Install dependencies
npm install

# Start the development server
npm run dev
</code></pre>
<p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>
<p>IFC Flow Map requires Node.js 16.0.0 or later. Make sure you have a compatible version installed.</p>
<h2>Your First Workflow</h2>
<p>Let's create a simple workflow to visualize an IFC model:</p>
<ol>
<li><strong>Launch IFC Flow Map</strong> - Open the application in your browser</li>
<li><strong>Create a new workflow</strong> - Click the "New Workflow" button in the top navigation</li>
<li><strong>Add an IFC File node</strong> - Drag the "IFC File" node from the sidebar to the canvas</li>
<li><strong>Add a 3D Viewer node</strong> - Drag the "3D Viewer" node to the canvas</li>
<li><strong>Connect the nodes</strong> - Click and drag from the output port of the IFC File node to the input port of the 3D Viewer node</li>
<li><strong>Upload an IFC file</strong> - Click on the IFC File node and use the file picker to upload your IFC file</li>
</ol>
<hr>
<blockquote>
<p>Previous: <a href="introduction">Introduction</a> — Next: <a href="node-reference">Node Reference</a></p>
</blockquote>`,
    },
  },
  {
    _id: "node-reference",
    _raw: {
      flattenedPath: "node-reference",
      sourceFilePath: "node-reference.mdx",
      sourceFileName: "node-reference.mdx",
      sourceFileDir: "",
      contentType: "mdx",
      flattenedPath: "node-reference",
    },
    type: "Doc",
    title: "Node Reference",
    description: "Complete reference of available nodes in IFC Flow Map.",
    order: 3,
    body: {
      raw: `# Node Reference

IFC Flow Map provides a variety of nodes for different operations:

## Input Nodes

- **IFC File** - Load an IFC file from your device
- **CSV Import** - Import tabular data
- **JSON Import** - Import structured data

## Transform Nodes

- **Filter** - Filter elements by property
- **Map** - Transform each element
- **Reduce** - Aggregate elements

## Output Nodes

- **3D Viewer** - Interactive 3D view of the model
- **Table View** - Display data in tabular format
- **Export** - Save results to file

---

> Previous: [Quick Start](quick-start) — Next: [User Guide](user-guide)`,
      code: `<h1>Node Reference</h1>
<p>IFC Flow Map provides a variety of nodes for different operations:</p>
<h2>Input Nodes</h2>
<ul>
<li><strong>IFC File</strong> - Load an IFC file from your device</li>
<li><strong>CSV Import</strong> - Import tabular data</li>
<li><strong>JSON Import</strong> - Import structured data</li>
</ul>
<h2>Transform Nodes</h2>
<ul>
<li><strong>Filter</strong> - Filter elements by property</li>
<li><strong>Map</strong> - Transform each element</li>
<li><strong>Reduce</strong> - Aggregate elements</li>
</ul>
<h2>Output Nodes</h2>
<ul>
<li><strong>3D Viewer</strong> - Interactive 3D view of the model</li>
<li><strong>Table View</strong> - Display data in tabular format</li>
<li><strong>Export</strong> - Save results to file</li>
</ul>
<hr>
<blockquote>
<p>Previous: <a href="quick-start">Quick Start</a> — Next: <a href="user-guide">User Guide</a></p>
</blockquote>`,
    },
  },
]
