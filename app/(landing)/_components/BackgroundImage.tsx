import Image from "next/image"
import bgImage from "@/public/background.webp"

const BackgroundImage = () => {
  return (
    <Image src={bgImage} alt="background"fill placeholder="blur" sizes="100vw" className="object-cover z-[-1]" />
  )
}
export default BackgroundImage