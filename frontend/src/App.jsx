import React, { useState, useEffect , Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import routes from "./routes/routes";
import ScrollToTop from "@/components/ScrollToTop";
import { ModeToggle } from "./components/mode-toggle";
import RecaptchaModal from "./components/RecaptchaModal";
import LoaderWrapper from "./components/LoaderWrapper"; // ✅ Loader component
import "./App.css";
import "@radix-ui/themes/styles.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("recaptcha-verified") === "true";
    setVerified(isVerified);
    setLoading(false);
  }, []);

  const handleVerified = () => {
    setVerified(true);
    localStorage.setItem("recaptcha-verified", "true");
  };

  if (loading) {
    // Show the "Checking your browser..." screen
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center"
      }}>
        <h2 style={{ marginBottom: "1rem" }}>
          Checking your browser before accessing.<br />Just a moment...
        </h2>
        <div style={{
          width: 64, height: 64, border: "8px solid #e0f2f1",
          borderTop: "8px solid #26a69a", borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />
        <style>
          {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
        </style>
      </div>
    );
  }

  if (!verified) {
    return <RecaptchaModal onVerified={handleVerified} />;
  }
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
          <ScrollToTopButton />
          <div className="fixed bottom-4 right-5 z-50">
            <ModeToggle />
          </div>
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;