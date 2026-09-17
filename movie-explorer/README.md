# 🎬 MovieExplorer

> A responsive Movie Explorer web application built with React that lets users browse TV shows and movies, search by title, and view detailed information in an interactive modal.


## 🌟 Overview

**MovieExplorer** is a modern, single-page React application that provides a clean and intuitive interface for discovering TV shows and movies. Powered by the free [TVMaze API](https://www.tvmaze.com/api), it delivers real-time data including posters, ratings, genres, and summaries.

The app focuses on **performance**, **accessibility**, and a **responsive user experience** across mobile, tablet, and desktop devices.

---

## 🚀 Live Demo

🔗 **Live URL:** [https://movie-explorer.vercel.app]
---

## ✨ Features

### 🏠 Home Page
- **Hero Banner** — Eye-catching gradient hero with a clear call-to-action
- **Sticky Navbar** — Brand logo + pill-style navigation with active page highlight
- **Footer** — Copyright info and quick links

### 🎞️ Movies Listing Page
- **Search Bar** — Real-time debounced search (400ms) using TVMaze `/search/shows` endpoint
- **Responsive Grid** — 2 / 3 / 4 / 5 column layout across breakpoints
- **Movie Cards** — Poster, title, rating, release year, and details button
- **Loading & Error States** — Skeleton spinner while fetching, user-friendly error messages

### 🎬 Movie Details Modal
- Large backdrop image with gradient overlay
- Title, rating, release date, language, status, and genres
- Full HTML-stripped summary
- **Closable via:** ✕ button, Close button, Escape key, or backdrop click
- Body scroll lock while open

### 📱 UX & Accessibility
- Fully responsive (mobile-first design)
- Keyboard support (`Escape` to close modal)
- Lazy-loaded images for faster rendering
- Semantic HTML and ARIA labels on interactive controls

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Component-based UI library |
| **Vite** | Lightning-fast build tool and dev server |
| **React Router v6** | Client-side routing |
| **Tailwind CSS v3** | Utility-first styling |
| **TVMaze API** | Free movie/show database |

### Prerequisites

Ensure you have the following installed:

- **Node.js** `>= 20.19` or `>= 22.12` ([Download](https://nodejs.org/))
- **npm** `>= 10.x` (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/USERNAME/movie-explorer.git
   cd movie-explorer