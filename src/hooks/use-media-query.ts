import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Initial check
    setMatches(media.matches);

    // Update matches when the media query changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Add event listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
