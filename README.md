# IFCflow

A visual node-based tool for exploring & automating BIM data workflows directly in your browser.

![IFC Flow Map Screenshot](https://placeholder.svg?height=400&width=800&text=IFC+Flow+Map+Screenshot)

## Overview

IFCflow is an open-source web application that lets you **view, filter, transform and analyze BIM data** through an intuitive drag-and-drop workflow editor. The entire runtime executes in your browser — no servers, no data leaks.

### Why Another BIM Tool?

* **Rapid prototyping** of data pipelines
* **Embodied on-device**: WebAssembly version of IfcOpenShell
* **Zero setup** — works on any modern browser
* **Privacy-focused** — your models never leave your device

## Getting Started

### Online Version

The fastest way to try IFC Flow Map is to use the online version at [https://ifcflow.com](https://ifcflow.com).

## Core Concepts

IFCflow is built around three main concepts:

1. **Workflows** - A complete data processing pipeline
2. **Nodes** - Individual processing units (e.g., IFC loader, filter, viewer)
3. **Edges** - Connections between nodes that define data flow  

with ❤️ by [LT+](https://www.lt.plus) — Digital Planning. Sustainable Construction.

# IFCflow Documentation

A modern documentation site for the IFC Flow Map project, built with Next.js and Tailwind CSS.

![IFC Flow Map Documentation](https://placeholder.svg?height=300&width=600&text=IFC+Flow+Map+Documentation)

## About

This repository contains **only the documentation website** for [IFCflow](https://github.com/louistrue/ifc-flow) - a visual node-based tool for exploring and automating BIM data workflows. The main project repository is separate.

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

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
