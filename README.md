# Frontend Development Assessment

A clean and scalable React.js implementation of an industrial engineering report with proper A4 print support and multi-page rendering.

## Live Demo

https://frontend-development-assessment-three.vercel.app

## GitHub Repository

Add your GitHub repository link here.

---

# Tech Stack

- React.js
- Vite
- Plain CSS
- Responsive Layout
- Print Optimized Styling

---

# Features

- Multi-page report rendering
- A4 print support
- Chrome print optimization
- Reusable components
- Dynamic table rendering
- Structured report data using JavaScript objects
- Clean folder structure
- Maintainable codebase
- Page break handling for print layouts

---

# Folder Structure

```txt
src/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Table/
│   └── ReportSection/
│
├── data/
│   └── reportData.js
│
├── pages/
│   └── ReportPage.jsx
│
├── styles/
│   ├── global.css
│   └── print.css
│
├── App.jsx
└── main.jsx
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Harsh266/Frontend-Development-Assessment
```

Navigate to the project folder:

```bash
cd frontend-development-assessment
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Print Support

The application includes dedicated print styles using:

```css
@media print
```

Features:

- A4 page sizing
- Page breaks
- Print-safe spacing
- Border consistency
- Layout preservation in Chrome print preview

---

# Implementation Highlights

## Reusable Components

The UI is divided into reusable sections:

- Header
- Footer
- Report Section
- Dynamic Table

---

## Dynamic Data Structure

Report content is separated from UI logic using structured JavaScript objects.

This improves:

- scalability
- maintainability
- readability
- reusability

---

## Multi-page Rendering

The report supports proper multi-page rendering using:

```css
page-break-before
page-break-after
page-break-inside
```

---

# Deployment

The project is deployed on Vercel.

Live URL:

https://frontend-development-assessment-three.vercel.app

---

# Browser Compatibility

Tested on:

- Google Chrome

---

# Notes

The focus of this implementation was:

- clean engineering structure
- maintainable frontend architecture
- print layout handling
- reusable UI patterns
- separation of concerns

rather than pixel-perfect visual replication.

---

# Author

Harsh Vekariya

Portfolio:
https://harshvekariya.in

GitHub:
https://github.com/Harsh266