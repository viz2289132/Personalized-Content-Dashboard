
# 📰 NewsPulse - Personalized Content Dashboard

A modern, responsive content aggregation dashboard built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. This app fetches real-time **news**, **movie recommendations**, and **trending content**, allowing users to personalize their feed, save favorites, and log in with GitHub.

---

## 🔗 Live Demo

> 🚀 [Visit Live Site](https://personalized-content-dashboard-coral.vercel.app/)

> 📽️ Watch the [Demo Video](#) (optional)

---

## 🚀 Features

- 🧠 **Personalized Content Feed** (based on selected categories)
- 🔍 **Search bar** with real-time filtering
- 📰 **News** from [NewsAPI](https://newsapi.org/)
- 🎬 **Movie Recommendations** via [OMDb API](https://www.omdbapi.com/)
- 📈 **Trending** section (mock API)
- 💖 Add/remove **Favorites**
- ☁️ Favorites and Preferences stored with **localStorage**
- 🔐 **Authentication with GitHub** (via NextAuth.js)
- 🌗 **Dark / Light theme toggle**
- 📱 Fully **responsive UI** (mobile-first with Tailwind CSS)
- 🎯 Category preferences (Technology, Sports, Finance, Movies)
- 🧩 Built with modular structure using App Router (e.g. `/app/news`, `/app/recommendations`)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Auth:** NextAuth.js (GitHub OAuth)
- **State Management:** React Context API, localStorage
- **APIs:** NewsAPI, OMDb API
- **UX Libraries:** Lucide Icons, Framer Motion

---

## 🧪 Environment Variables

Create `.env.local` in the root directory:

```env
NEWS_API_KEY=your_newsapi_key
OMDB_API_KEY=your_omdb_api_key

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## 📦 Getting Started (Local Setup)

Clone the repository:

```bash
git clone https://github.com/your-username/personalized-dashboard.git
cd personalized-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## ⚙️ Folder Structure

```
/src
  /app
    /api
    /favourites
    /trending
    /recommendations
  /components
  /context
  /hooks
```

---

## 📤 Deployment

Deployed on **[Vercel](https://vercel.com)** with all environment variables added in the dashboard.

1. Connect the GitHub repo
2. Add environment variables
3. Deploy!

---

## 📄 License

MIT © 2025 [Vishal](https://github.com/your-username)

---
