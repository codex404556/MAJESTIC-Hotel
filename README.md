<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=0A66C2" alt="react" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-React_Router-black?style=for-the-badge&logoColor=white&logo=reactrouter&color=CA4245" alt="react-router" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  <h3 align="center">QuickStay Hotel Booking UI</h3>

  <p align="center">
    Polished, responsive hotel booking interface with hero search, featured destinations, room listings, and bookings.
  </p>
</div>

## <a name="introduction">🤖 Introduction</a>

QuickStay is a modern hotel booking UI built with React, Vite, and Tailwind CSS. It demonstrates clean component architecture, responsive layouts, and real-world booking flows using local mock data. The project focuses on a premium hospitality feel with clear hierarchy, rich visuals, and conversion-friendly layout patterns.

## <p>⚙️ Engineering Stack</p>

- React 19
- Vite 6
- React Router 7
- Tailwind CSS 4

## <a name="features">🔋 Features</a>

👉 **Hero Search**: Destination, date, and guest inputs with a focused CTA.

👉 **Featured Destinations**: Curated highlights to drive exploration.

👉 **Exclusive Offers**: Promotional cards with rich imagery.

👉 **Rooms & Details**: Listings with pricing, amenities, and a details view.

👉 **Bookings**: Status, pricing, and booking history layout.

👉 **Responsive UI**: Mobile-first layouts across all pages.

and more, including reusable components and structured data.

**Installation**

Install dependencies:

```bash
cd clinte
npm install
```

**Running the Project**

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the project.

## <h1>🕸️ Snippets</h1>

<details>
<summary><code>src/assets/assets.js</code></summary>

```js
export const cities = ["Dubai", "Singapore", "New York", "London"];

export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
];
```

</details>

<details>
<summary><code>src/App.jsx</code></summary>

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/rooms" element={<Rooms />} />
  <Route path="/rooms/:id" element={<RoomsDetailes />} />
  <Route path="/my-bookings" element={<Booking />} />
</Routes>
```

</details>

**About This Project**

This project was built to showcase a production-style frontend for a hospitality brand with a focus on layout quality, UI clarity, and component reuse. It is easy to connect to a real backend by replacing the mock data in `src/assets/assets.js`.

Author  
Ali Hussein  
Frontend Web Developer  
Specialized in React and modern UI engineering  
GitHub: https://github.com/codex404556  
Portfolio: https://alihussein-dev.vercel.app/  
LinkedIn: https://linkedin.com/in/error-best-381303331
