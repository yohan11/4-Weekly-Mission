import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {FolderProvider} from "@/contexts/FolderContext";

declare global {
    interface Window {
        Kakao: any;
    }
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <FolderProvider>
            <Component {...pageProps} />
        </FolderProvider>
    );
}
