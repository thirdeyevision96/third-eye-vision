import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RefreshRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];

    const isReload = navigation?.type === "reload";

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return null;
}