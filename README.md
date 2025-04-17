# IFC Flow Map

A visual node-based tool for exploring & automating BIM data workflows directly in your browser.

![IFC Flow Map Screenshot](https://placeholder.svg?height=400&width=800&text=IFC+Flow+Map+Screenshot)

## Overview

IFC Flow Map is an open-source web application that lets you **view, filter, transform and analyze BIM data** through an intuitive drag-and-drop workflow editor. The entire runtime executes in your browser — no servers, no data leaks.

### Why Another BIM Tool?

* **Rapid prototyping** of data pipelines
* **Embodied on-device**: WebAssembly version of IfcOpenShell
* **Zero setup** — works on any modern browser
* **Privacy-focused** — your models never leave your device

## Getting Started

### Online Version

The fastest way to try IFC Flow Map is to use the online version at [https://ifc-flow-map.vercel.app](https://ifc-flow-map.vercel.app).

### Local Installation

For local development or offline use:

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

## Core Concepts

IFC Flow Map is built around three main concepts:

1. **Workflows** - A complete data processing pipeline
2. **Nodes** - Individual processing units (e.g., IFC loader, filter, viewer)
3. **Edges** - Connections between nodes that define data flow

## Available Nodes

### Input Nodes

- **IFC File** - Load an IFC file from your device
- **CSV Import** - Import tabular data
- **JSON Import** - Import structured data

### Transform Nodes

- **Filter** - Filter elements by property
- **Map** - Transform each element
- **Reduce** - Aggregate elements
- **Geometry** - Extract meshes, bounding boxes or volumes from IFC elements

### Output Nodes

- **3D Viewer** - Interactive 3D view of the model
- **Table View** - Display data in tabular format
- **Export** - Save results to file

## Project Structure

\`\`\`
src/
├── app/                # Next.js App Router
│   ├── page.tsx        # Landing page
│   ├── play/           # Interactive editor
│   └── docs/           # Documentation
├── components/         # React components
│   ├── nodes/          # Node implementations
│   ├── ui/             # UI components
│   └── viewer/         # 3D viewer components
├── lib/                # Core utilities
│   ├── ifc/            # IFC parsing and utilities
│   └── workflow/       # Workflow engine
└── public/             # Static assets
\`\`\`

## Roadmap

- [ ] Support for IFC 4.3 schemas
- [ ] Custom node creation UI
- [ ] Workflow templates and sharing
- [ ] Headless execution via CLI
- [ ] GitHub Action for automated IFC processing
- [ ] Performance optimizations for large models

## Sustainability

IFC Flow Map aligns with sustainable construction practices by enabling:

- Early-stage analysis of embodied carbon
- Material optimization through data-driven design
- Reduction of waste through better BIM data understanding
- Local processing that reduces cloud computing energy usage

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure your code follows our coding standards and includes appropriate tests.

## Development

### Prerequisites

- Node.js 16.0.0 or later
- Modern browser with WebAssembly support

### Building for Production

\`\`\`bash
npm run build
\`\`\`

### Running Tests

\`\`\`bash
npm test
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [IfcOpenShell](https://ifcopenshell.org/) for the WebAssembly IFC parser
- [React Flow](https://reactflow.dev/) for the workflow editor
- [Three.js](https://threejs.org/) for 3D visualization
- [LT+](https://www.lt.plus) for project sponsorship and guidance

---

Built with ❤️ by [LT+](https://www.lt.plus) — Digital Planning. Sustainable Construction.

# IFC Flow Map Documentation

A modern documentation site for the IFC Flow Map project, built with Next.js and Tailwind CSS.

![IFC Flow Map Documentation](https://placeholder.svg?height=300&width=600&text=IFC+Flow+Map+Documentation)

## About

This repository contains **only the documentation website** for [IFC Flow Map](https://github.com/louistrue/ifc-flow-map) - a visual node-based tool for exploring and automating BIM data workflows. The main project repository is separate.

## Features

- **Dark Mode**: Elegant dark/light theme switching
- **Responsive Design**: Mobile-friendly layout
- **Interactive Examples**: Code snippets with syntax highlighting
- **Search**: Fast documentation search
- **Accessibility**: WCAG compliant design

## Development

### Prerequisites

- Node.js 16.0.0 or later

### Setup

\`\`\`bash
# Clone the documentation repository
git clone https://github.com/louistrue/ifc-flow-map-docs.git
cd ifc-flow-map-docs

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                # Next.js App Router
│   ├── page.tsx        # Landing page
│   └── docs/           # Documentation pages
├── components/         # React components
├── lib/                # Utilities and data
├── public/             # Static assets
└── styles/             # Global CSS
\`\`\`

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improve-docs`
3. Make your changes
4. Submit a pull request

Please follow our documentation style guide and test any changes locally before submitting.

## Related Projects

- [IFC Flow Map](https://github.com/louistrue/ifc-flow-map) - The main project repository

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Sponsored by [LT+](https://www.lt.plus) — Digital Planning. Sustainable Construction.
