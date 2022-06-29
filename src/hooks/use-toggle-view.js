import { useCallback } from "react";
import { useState } from "react";

export const useToggleView = (initialView = "list") => {
  const [view, setView] = useState(initialView);

  const onToggle = useCallback(() => {
    setView((v) => (v === "list" ? "grid" : "list"));
  }, []);

  return { view, onToggle };
};
