import Header from "@components/Header";
import Entry from "@components/Entry";
import localFont from 'next/font/local'
 import Feed from "@components/Feed";
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../public/fonts/Bebas-Regular.ttf',
  variable: '--font-bebas',
})
const secFont = localFont({
  src: '../public/fonts/TASAOrbiter.otf',
  variable: '--font-tasa',
  
})
 

export default function Home() {
  return (
    <div className={`home w-11/12 mx-auto my-3 ${secFont.variable} font-tasa`}>
      <Header />
      <Entry />
      <Feed />
    </div>
  )
}
