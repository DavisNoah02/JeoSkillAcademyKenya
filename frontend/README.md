# E-verse Academy Kenya LMS Frontend

E-verse Academy Kenya is a modern Learning Management System (LMS) designed to empower learners across Africa with accessible, high-quality online education. This repository contains the frontend codebase, built with React, Vite, and a modern UI/UX stack.

---

## 🚀 Project Overview

- **Purpose:** Deliver a robust, scalable, and user-friendly LMS for African learners, educators, and organizations.
- **Features:**  
  - Project-based courses  
  - Gamified progress tracking  
  - AI-powered learning suggestions  
  - Mobile-first and offline-ready  
  - Community and mentorship  
  - Secure authentication and user management

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) (with [Vite](https://vitejs.dev/) for fast development)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), custom CSS, [framer-motion](https://www.framer.com/motion/) for animations
- **UI Components:** Custom, inspired by [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React hooks, context (for theme, etc.)
- **Utilities:**  
  - Class merging (`cn` utility)  
  - [class-variance-authority](https://cva.style/) for variant-based styling
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) (optional)
- **Testing:** (Add your testing framework here if used)
- **Linting:** ESLint (see `eslint.config.js`)
- **Type Checking:** TypeScript support (see `tsconfig.json`), though most files are JS/JSX

---

## 📁 Project Structure

```
frontend/
├── public/                     # Static assets (images, icons, etc.)
├── src/
│   ├── assets/                 # Logos, SVGs, etc.
│   ├── components/             # Reusable UI and layout components
│   │   ├── layout/             # Footer, Navbar, etc.
│   │   ├── sections/           # Page sections (Hero, FAQs, etc.)
│   │   ├── shared/             # Shared utilities (CountdownTimer, etc.)
│   │   ├── ui/                 # Low-level UI (Button, Card, Input, etc.)
│   ├── data/                   # Static data (courses, faqs, etc.)
│   ├── lib/                    # Utility functions (e.g., cn)
│   ├── pages/                  # Page components (AboutUs, Privacy, Terms, etc.)
│   ├── routes/                 # Route definitions
│   ├── services/               # API and service logic
│   ├── App.jsx                 # Main app entry
│   ├── main.jsx                # React DOM entry
│   ├── index.css, App.css      # Global styles
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tsconfig.json               # TypeScript config
├── README.md                   # Project documentation
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-org/everse-academy-frontend.git
   cd everse-academy-frontend/frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📝 Key Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## 🌍 Main Features

- **Responsive Design:** Works on all devices, including mobile.
- **Modern UI:** Clean, accessible, and animated interfaces.
- **Dynamic Routing:** All main pages (About, Contact, Privacy, Terms, Cookies, 404).
- **Reusable Components:** Button, Card, Input, etc. for consistent UI.
- **SEO Ready:** Meta tags and accessibility best practices.
- **404 Handling:** Custom Not Found page for invalid routes.

---

## 📄 Main Pages

- `/` — Home (Hero, Beta, Why Us, Courses, FAQs)
- `/AboutUs` — About E-verse Academy Kenya
- `/ContactUs` — Contact form and info
- `/PrivacyPolicy` — Privacy policy
- `/TermsOfService` — Terms of service
- `/CookiesPolicy` — Cookies policy
- `*` — 404 Not Found

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📬 Contact

- **Email:** info@everseacademykenya.com
- **Phone:** +254 700 000 000
- **Location:** Nairobi, Kenya

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)
- All contributors and the E-verse Academy Kenya community!

---

> _Empowering Africa’s next generation of digital innovators through world-class, accessible online education._