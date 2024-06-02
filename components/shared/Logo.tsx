import Image from "next/image"

const Logo = () => {
  return (
    <Image src={"/logo.png"} alt="mediacy" width={36} height={36} priority className="cursor-pointer w-auto h-auto" />
  )
}
export default Logo