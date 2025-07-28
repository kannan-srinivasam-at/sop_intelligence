import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import ErrorBoundary from "../src/components/ErrorBoundary";
// Add your imports here
import Homepage from "./pages/homepage";
import CustomerStories from "./pages/customer-stories";
import SolutionsByIndustry from "./pages/solutions-by-industry";
import GetStartedHub from "./pages/get-started-hub";
import SecurityCompliance from "./pages/security-compliance";
import ProductDemo from "./pages/product-demo";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/customer-stories" element={<CustomerStories />} />
        <Route path="/solutions-by-industry" element={<SolutionsByIndustry />} />
        <Route path="/get-started-hub" element={<GetStartedHub />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
        <Route path="/product-demo" element={<ProductDemo />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
