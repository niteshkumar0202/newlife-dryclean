declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, parameters);
}