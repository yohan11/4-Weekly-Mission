import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FolderProvider } from "@/contexts/FolderContext";
import { MyInfoProvider } from "@/contexts/MyInfoContext";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyInfoProvider>
      <FolderProvider>
        <Component {...pageProps} />
      </FolderProvider>
    </MyInfoProvider>
  );
}
