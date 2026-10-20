import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
const publisher=process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim()||'';
const site=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata:Metadata={title:{default:'NEON RUSH — Highway Legends | Free Racing Game',template:'%s | NEON RUSH'},description:'Play a free browser-based highway racing game: 20 levels, 8 racers, nitro boost, four unlockable cars and global rankings. No download required.',metadataBase:new URL(site),robots:{index:true,follow:true},...(publisher?{other:{'google-adsense-account':publisher}}:{})};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body>{publisher.startsWith('ca-pub-')&&<Script async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(publisher)}`} crossOrigin="anonymous"/>}</html>}
