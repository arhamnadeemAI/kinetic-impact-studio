import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center px-4">
        <h1 className="font-display font-bold text-8xl md:text-9xl mb-4 gradient-accent bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gradient-hero">
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
