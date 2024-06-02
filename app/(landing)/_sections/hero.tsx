import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center h-[calc(100%-60px)]w-full max-w-[1200px] ">
      <div className="flex  justify-between w-full pt-16">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-6 select-none">
            <h1 className="font-bold text-[65px] leading-[81px]">
              Welcome to
              <br /> Cryptocurrency
              <br />
              <span className="text-[#6841Da]">Social Media</span>
            </h1>
            <p className="text-xl font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, porro soluta,
              <br /> saepe hic placeat ipsam recusandae corporis debitis error
              dolor, vero voluptate a et libero velit cum quas numquam impedit?
            </p>
            <div className="flex gap-6">
              <Button variant="secondary" size="lg">
                Get startet now
              </Button>
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={"/star.svg"} alt="Star" width={20} height={20} />
              <p className="text-xs text-[#979797] font-bold">
                PAY ONE-TIME SMALL FEE, USE LIFETIME
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={"/appstore-badge.svg"}
                  alt="AppStore Bage"
                  width={120}
                  height={50}
                />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image
                  src={"/googleplay-badge.svg"}
                  alt="AppStore Bage"
                  width={120}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/hero-image.png"}
          alt="mockup"
          priority
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};
export default Hero;
