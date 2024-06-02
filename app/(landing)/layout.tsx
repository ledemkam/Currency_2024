import BackgroundImage from "./_components/BackgroundImage"
import Navbar from "./_components/Navbar"

type LnadingLayoutProps = {
  children : React.ReactNode
}

export default function LandingLayout({children}: LnadingLayoutProps) {
  return (
    <>
     <BackgroundImage/>
     <Navbar/> 
      {children}
    </>
  )
}