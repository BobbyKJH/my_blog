/** Components */
import Header from '@/components/common/header/Header'
import SideBar from '@/components/common/sidebar/SideBar'
/** Style */
import './globals.css'
/** font */
import { Inter } from 'next/font/google'
/** Provider */
import Providers from "@/provider/Provider";
import QueryProviders from "@/provider/QueryProviders";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BOBBY TLI BLOG',
  description: 'Generated by create next app',
}

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <QueryProviders>
          <Providers>
            <Header/>
  
            <SideBar/>
  
            <main id="main">
              {props.children}
            </main>
          </Providers>
        </QueryProviders>
      </body>
    </html>
  )
};

export default RootLayout;