import { useEffect, useState } from "react";

export const Size = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536, // large screens
} as const;

export type SizeKey = keyof typeof Size;

export function useMediaQuery(query: SizeKey) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`screen and (max-width: ${Size[query]}px)`);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        console.info(
          `This is a narrow screen — less than ${Size[query]}px wide.`,
        );
      } else {
        console.info(
          `This is a wide screen — more than ${Size[query]}px wide.`,
        );
      }
      setMatches(e.matches);
    };

    // media.onchange = listener;
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
