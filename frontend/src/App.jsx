import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import routes from "./routes/routes";
import ScrollToTop from "@/components/ScrollToTop";
import { ModeToggle } from "./components/mode-toggle";
import LoaderWrapper from "./components/LoaderWrapper"; // ✅ Loader component
import "./App.css";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RadixTheme>
        <Router>
          <ScrollToTop />
          <LoaderWrapper>
            <Suspense
              fallback={
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-emerald-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-emerald-950 z-50">
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 rounded-full border-[6px] border-dashed border-emerald-500 animate-spin"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 dark:from-emerald-600 dark:to-blue-800 blur-sm opacity-80"></div>
                  </div>
                      <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 text-center animate-pulse">
                          Welcome to <span className="text-blue-600 dark:text-blue-400">JEO Skill Academy</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 text-center">
                          Setting up your learning Environment...
                        </p>
                </div>
              }
            >
              <Routes>
                {routes.map(({ path, element }, index) => (
                  <Route key={index} path={path} element={element} />
                ))}
              </Routes>
            </Suspense>
          </LoaderWrapper>
          <Analytics />
          <div className="fixed bottom-6 left-4 z-40">
            <ModeToggle />
          </div>
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;
