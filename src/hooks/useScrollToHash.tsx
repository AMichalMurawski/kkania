import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useScrollToHash() {
  const { hash, pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // stały offset 120px
        const targetY = rect.top + scrollTop - 110;

        window.scrollTo({ top: targetY, behavior: "smooth" });
      }

      // usuń hash z URL
      navigate(pathname + search, { replace: true });
    }
  }, [hash, pathname, search, navigate]);
}
