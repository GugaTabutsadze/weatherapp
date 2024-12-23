"use client";
import { useEffect, useState } from "react";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Only update state after the component is mounted
  }, []);

  if (!isMounted) return null;
  return <>{children}</>;
}
