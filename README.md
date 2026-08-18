# Calculator React

A basic calculator web app built with React, TypeScript, and Vite. Supports the four standard arithmetic operations, sign toggle (+/-), percentage conversion, and clearing the display.

## Features

- Number pad (0–9) and decimal point input
- Addition, subtraction, multiplication, and division
- `+/-` to toggle the sign of the current value
- `%` to convert the current value to a percentage
- `C` to clear the calculator

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes bundled with Node.js)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser to use the app.

3. **Build for production**

   ```bash
   npm run build
   ```

   The optimized static files are output to the `dist/` folder.

4. **Preview the production build locally**

   ```bash
   npm run preview
   ```

## Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Starts the Vite dev server with hot reload |
| `npm run build`    | Type-checks and builds the app for production |
| `npm run preview`  | Serves the production build locally       |
| `npm run lint`     | Runs ESLint over the project              |

## Tech Stack

- React 19 + TypeScript
- Vite (build tool / dev server)
