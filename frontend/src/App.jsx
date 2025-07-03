import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import routes from "./routes/routes";
import ScrollToTop from "@/components/ScrollToTop"; 
import "./App.css";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RadixTheme>
        <Router>
          <ScrollToTop /> {/* scroll resets on route change */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Analytics />
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;
// This is the main entry point for the React application.