import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Error: Non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-4">
      <SEO
        title="404: Page Not Found | Big Bull Investment Kolkata"
        description="The page you are looking for does not exist on Big Bull Investment."
        canonicalPath="/404"
      />
      <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-xl max-w-md w-full">
        <h1 className="mb-2 text-6xl font-bold text-accent">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Page Not Found</p>
        <p className="mb-8 text-sm text-muted-foreground">
          The requested page could not be located. You can navigate back to our homepage to explore mutual funds and health insurance solutions in Kolkata and Howrah.
        </p>
        <Link
          to="/"
          className="inline-block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-md hover:shadow-[var(--glow-gold)] transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
