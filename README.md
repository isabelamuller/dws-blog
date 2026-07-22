# DWS Blog

Frontend technical challenge developed for the DWS Front End Team.

The application is a responsive blog built with React and TypeScript, consuming the provided DWS Blog API.

## Features

- Blog post listing
- Individual blog post pages
- Filter posts by category and author
- Sort posts by newest or oldest
- Responsive layouts for mobile, tablet, and desktop
- Mobile search interface
- Reusable components
- Global filter state management with Zustand

## Technologies

- React
- TypeScript
- Vite
- React Router
- Zustand
- Axios
- CSS Modules

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Running the application

Start the development server:

```bash
npm start
```

The application will be available at the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Build

To create a production build:

```bash
npm run build
```

## Notes

The API currently returns identical `createdAt` and `updatedAt` values for all blog posts.

Because there is no reliable chronological data available, the API response order is treated as newest-first and reversed when sorting by oldest-first.
