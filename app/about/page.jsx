import Image from "next/image"
import Layout from "@/components/Layout/page"
import Link from "next/link";

const About = () => {
  return (
    <Layout>
    <section className="flex items-center justify-center pt-[100px] flex-col pb-[100px]"> 

        <div className="w-full flex justify-center items-center  box-shadow-borderr">
            <div className="flex items-center border-b w-[72%] lg:flex-col lg:gap-20">
                <div data-aos="fade-right" className="flex flex-col gap-5 w-full">
                    <h1 className="font-bold text-8xl pm:text-6xl">about</h1>
                    <h3 className="text-2xl w-[97%] text-gray-400">I'm a fullstack sofware engineer based in Baku,Azerbaijan.</h3>
                    <p className="w-[90%]">Since 15, I've enjoyed turning complex problems into simple, beautiful and intuitive code. When I'm not coding, you'll find me reading, sleeping or watching movies.</p>
                </div>
                <Image data-aos="fade-left" className="relative lg:w-[800px] top-[0px] lg:right-0 right-5" src={'/me.png'} width={1150} height={100}/>
            </div>
        </div>
        <div className="w-full flex justify-center items-center h-[600px] border lg:h-auto lg:pt-20 lg:pb-20 box-shadow-borderr">
          <div className="flex justify-between items-center w-[72%] lg:flex-col lg:gap-20">
            <div className="w-[23%] lg:w-full lg:text-center flex items-center justify-center">
              <div className="flex flex-col gap-3" data-aos="fade-up">
                <h1 className="text-3xl">Part Python Coder</h1>
                <span>Django</span>
                <span>Data Science</span>
                <span>AI</span>
                <span>Eating pizza</span>
                <span>TG bots</span>
              </div>
            </div>
            <div data-aos="fade-up" className="w-[500px] flex justify-center text-center items-center sm:w-[95%]">
              <Image src={'/diagram.png'} width={400} height={100} className="mr-20 lg:mr-0"/>            
            </div>
            <div data-aos="fade-up" className="w-[23%] lg:w-full lg:text-center flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl">Part Web-dev Coder</h1>
                <span >Full Stack development</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>"Making it pop"</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border box-shadow-borderr pt-20">
          <div className="flex items-center w-[72%] lg:flex-col-reverse lg:gap-3 pt-20 gap-[50px]">
            <Image data-aos='zoom-out-up' src={'/jeday.png'} width={570} height={200}/>
            <div data-aos='zoom-out-up' className="flex flex-col gap-3 relative -top-20 lg:text-center">
              <h1 className="text-4xl">Random facts</h1>
              <p>I drink a lot of tea</p>
              <p>I'm into Web Development</p>
              <p>I love to cook (and eat)</p>
              <p>Watching movies is my zen time</p>
              <p>I'm a bit of a clean freak</p>
              <p>I want to live on Pandora</p>
              <p>I'm slightly addicted to Cinema</p>
              <p>Box is my mentor</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border box-shadow-borderr">
          <div className="flex flex-col items-center w-[72%] md:w-4/5 sm:w-[90%] pt-20 gap-[50px]">
            <h1 data-aos="fade-left" className="relative top-10  text-3xl lg:text-[4vw]">My skills</h1>
            <Image data-aos="flip-down" src={'/2.png'} width={1020} height={500}/>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex lg:flex-col items-center w-[72%] pt-40 pb-10 gap-[50px]">
            <div data-aos="fade-right" className="w-[40%] lg:w-full gap-5 flex flex-col">
              <h1 className="text-4xl">My story</h1>
              <p className="text-gray-600">Learn a little bit more about me, how I got into coding, and how I'm bulding my career. I’ve included key things I've learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
              <Link href={'/becoming'}><span>Read my story</span></Link>
            </div>
            <Image data-aos="fade-left" src={'/view.png'} width={500} height={100}/>
          </div>
        </div>

    </section>
    </Layout>
  )
}

export default About