import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import routes from "./routes/routes";
import ScrollToTop from "@/components/ScrollToTop"; 
import "./App.css";
import "@radix-ui/themes/styles.css";
import  { ModeToggle } from "./components/mode-toggle"; 

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RadixTheme>
        <Router>
          <ScrollToTop /> {/* scroll resets on route change */}
          <Suspense
            fallback={
              <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-emerald-50 to-white dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 z-50">
                {/* Spinner */}
                <div className="mb-6">
                  <svg className="animate-spin h-12 w-12 text-emerald-500" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                  Loading JEO Skill Academy...
                </div>
                <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Preparing your learning experience
                </div>
              </div>
            }
          >
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Analytics />
          {/* Mode toggle fixed at bottom right */}
          <div className="fixed bottom-6 right-6 z-50">
            <ModeToggle />
          </div>
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;
// This is the main entry point for the React application.