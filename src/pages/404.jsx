import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Page not found</h3>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

// THIS PAGE WILL BE DISPLAYED WHEN THERE IS NO MATCHING ROUTES
