import { models } from "./constants";

export function isWebview(): boolean {
  if (typeof window === undefined) {
    return false;
  }

  let navigator = window.navigator;

  const standalone = (navigator as any).standalone;
  const userAgent = navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad|macintosh/.test(userAgent);
  const ios_ipad_webview = ios && !safari;

  return ios ? (!standalone && !safari) || ios_ipad_webview : userAgent.includes("wv");
}

export function isBabylonInspectorShowing() {
  return (
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    document.getElementById("sceneExplorer")
  );
}

export const isModelValid = (model: string | null): boolean => {
  if (!model) {
    return false;
  }

  if (!Object.keys(models).includes(model)) {
    return false;
  }

  return true;
};
