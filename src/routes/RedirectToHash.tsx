import { useEffect } from "react";

const RedirectToHash = () => {
  useEffect(() => {
    const { pathname, search, hash } = window.location;

    if (hash.startsWith("#/")) return;

    if (hash) {
      const newUrl = `${window.location.origin}/#${pathname}${search}${hash}`;
      window.location.replace(newUrl);
      return;
    }

    const newUrl = `${window.location.origin}/#${pathname}${search}`;
    window.location.replace(newUrl);
  }, []);

  return null;
};

export default RedirectToHash;
