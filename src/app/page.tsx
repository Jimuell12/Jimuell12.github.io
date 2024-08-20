"use client"
import { useEffect, useState } from "react";
import Navbar from "./header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import WordRotate from "@/components/magicui/word-rotate";
import Particles from "@/components/magicui/particles";
import IconCloud from "@/components/magicui/icon-cloud";
import { BorderBeam } from "@/components/magicui/border-beam";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "laravel",
  "react",
  "python",
  "nodejs",
  "tailwindcss",
  "antdesign",
  "fontawesome",
  "daisyui",
  "mysql",
  "flask",
  "nextdotjs",
  "android",
  "html5",
  "css3",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export default function Home() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: -5,
      delay: 200,
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    checkEmail(email);
    if (email === '') {
      alert('Please enter your email address');
      return;
    }

    const response = await fetch('https://jimflojera.pythonanywhere.com/send_email?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject: "You've Subscribed!",
        html_body: `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #121212; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #f5f5f5;">Subscription Successful!</h2>
                    <p style="color: #a6a6a6;">Thank you for subscribing to the newsletter of <strong>Jimuel Flojera</strong>, your future Full Stack Developer.</p>
                    <p style="color: #a6a6a6;">You'll now receive the latest updates and insights directly to your inbox.</p>
                    <p style="margin-top: 20px; font-size: 0.9em; color: #a6a6a6;">Visit my portfolio at <a href="https://www.jimuelflojera.me/" style="color: #f5f5f5; text-decoration: none;">Jimuel Flojera</a></p>
                </div>
            `,
      }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      alert('Thank you for subscribing!');
    } else {
      console.error('Failed to send email:', data.message);
    }
  };



  const checkEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
    }
  }

  return (
    <section className="mt-10 scroll-smooth min-h-screen lg:mt-20 w-screen lg:mx-auto lg:container overflow-y-scroll  no-scrollbar overflow-x-hidden">
      <Particles
        className="fixed inset-0 -z-10 w-full h-full"
        quantity={300}
        ease={80}
        color={'#f5f5f5'}
        refresh
        size={0.5}
      />
      <section className="px-4 lg:h-screen">
        <Navbar />
        <div className="grid md:grid-cols-6 lg:grid-cols-6 flex-1 lg:mt-10">
          <div className="p-2 md:p-6 md:col-span-4 lg:p-6 lg:col-span-4 flex flex-col justify-between">
            <div className="">
              <div data-aos="fade-right">

                <WordRotate
                  className="text-3xl cursor-default lg:text-6xl tracking-wide font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
                  words={["Website", "Native Mobile", "Desktop", "Full-stack"]}
                />
                <div className="text-left">
                  <h1 className="text-4xl cursor-default lg:text-8xl tracking-wide font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Developer</h1>
                </div>
              </div>
              <br />
              <div>
                <div className="text-left max-w-xs lg:max-w-lg">
                  <p data-aos="zoom-in" className="text-xs lg:text-base text-[#a6a6a6]" >I create mobile apps and websites that are <span className="text-[#f5f5f5]">easy to use and visually appealing</span>. My work focuses on making sure they function well and provide a great experience for users.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-2">
              <form data-aos="fade-right" onSubmit={handleSubmit} className="py-2 lg:p-6 self-start lg:self-center justify-self-end w-full lg:w-min">
                <div className="gap-2 rounded-full items-center justify-between border-black dark:border-white flex text-[#121212]">
                  <div className="bg-[#f5f5f5] font-sans px-4 py-2 border rounded-full justify-end w-full lg:w-[300px]">
                    <input name="email" onChange={(e) => setEmail(e.target.value)} className="bg-[#f5f5f5] italic w-full text-base lg:text-base outline-none dark:text-[#121212] placeholder:text-[#121212] dark:placeholder:text-[#121212]" type="text" placeholder="Subscribe" />
                  </div>
                  <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="size-10 text-black dark:stroke-[#121212] cursor-pointer bg-[#f5f5f5] py-2 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg></button>
                </div>
              </form>
              <a data-aos="fade-left" href="/files/FLOJERA-RESUME.pdf" download className="p-2 bg-[#f5f5f5] flex lg:hidden rounded-full text-[#121212]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
              
              <a data-aos="fade-left" href="/files/FLOJERA-RESUME.pdf" download className="p-2 px-4 text-base bg-transparent bg-gradient-to-r animate-bounce from-orange-500 to-violet-500 bg-clip-text text-transparent border border-[#a6a6a6] text-[#a6a6a6] hidden lg:flex rounded-full italic hover:bg-[#f5f5f5] hover:text-[#f5f5f5]">
                Download CV
                <BorderBeam size={500} borderWidth={4} className="w-full h-full" />
              </a>
            </div>
          </div>
          <div data-aos="zoom-out" className="relative p-2 md:p-6 md:col-span-2 lg:p-6 lg:col-span-2 overflow-hidden shadow-white drop-shadow-xl items-center">
            <div className="relative w-full h-full p-4">
              <img className="w-full h-full hover:grayscale-0 fancy-border drop-shadow-xl shadow-black dark:shadow-white" src="/images/profile.png" alt="" />
              <BorderBeam size={500} borderWidth={4} className="fancy-border w-full h-full absolute top-0 left-0" />
            </div>
          </div>

        </div>
        <div className="flex-col space-y-2 flex md:flex-row lg:flex-row justify-evenly text-xs lg:text-base mt-5 lg:mt-10">
          <div data-aos="fade-left" data-aos-delay="500" className="flex flex-row gap-2 lg:gap-5">
            <a href="https://github.com/Jimuell12" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <p className="italic font-sans">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/jimuel-flojera-ba9304321/" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <p className="italic font-sans">Linkedin</p>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="800" className="flex flex-row">
            <a href="https://x.com/jimflojera" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />              </svg>
              <p className="italic font-sans">Twitter</p>

            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="1000" className="flex flex-row gap-2 lg:gap-5">
            <a href="https://www.facebook.com/flojerajimuel" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
              <p className="italic font-sans">Facebook</p>

            </a>
            <a href="https://www.instagram.com/jimflojera/" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p className="italic font-sans">Instagram</p>

            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-4 lg:h-screen mt-10 md:mt-10 lg:mt-0">
        <h1 data-aos="fade-down" className="aos">... /About me ...</h1>
        <h1 data-aos="zoom-in" className="text-[#a6a6a6] text-center text-xs lg:text-base my-2">Hello! I'm Jimuel Flojera, I'm aspiring <span className="text-[#f5f5f5]">Full-stack Developer.</span></h1>
        <div className="grid lg:grid-cols-2 lg:mt-10 items-center">
          <div className="lg:col-span-1 space-y-2 lg:space-y-5">
            <div data-aos="fade-right" className="border border-[#a6a6a6] bg-[#f5f5f5] text-[#121212] font-sans rounded-3xl p-4 lg:p-6 lg:max-w-lg">
              <h1 className="text-sm lg:text-xl mb-2 lg:mb-5">Front-end</h1>
              <span className="text-xs lg:text-base tracking-widest leading-5">TypeScript / React / NextJs / React Native / Vue / HTML / CSS / JavaScript / Java</span>
            </div>
            <div data-aos="fade-left" className="border border-[#a6a6a6] text-[#a6a6a6] hover:bg-[#f5f5f5] hover:text-[#121212] font-sans rounded-3xl p-4 lg:p-6  max-w-xs">
              <h1 className="text-sm lg:text-xl mb-2 lg:mb-5">Styles</h1>
              <span className="text-xs lg:text-base tracking-widest leading-5">TailwindCSS / AntDesign / FontAwesome / DaisyUI</span>
            </div>
            <div data-aos="fade-right" className="border border-[#a6a6a6] text-[#a6a6a6] hover:bg-[#f5f5f5] hover:text-[#121212] font-sans rounded-3xl p-4 lg:p-6  lg:max-w-lg">
              <h1 className="text-sm lg:text-xl mb-2 lg:mb-5">Back-end</h1>
              <span className="text-xs lg:text-base tracking-widest leading-5">MySQL / Node / Laravel / PHP / FLASK / Azure</span>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="1000" className="lg:col-span-1 font-sans p-4">
            <div className="border-none backdrop-blur-10">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="px-4 py-4 mt-10 md:mt-10 lg:mt-0">
        <h1 data-aos="fade-down" className="text-center">... /My experiences ...</h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:mt-10 items-center justify-center gap-2">
          <div data-aos="fade-right" className="lg:col-span-1 relative items-center">
            <VelocityScroll
              text="Experiences"
              default_velocity={10}
              className="font-display text-center text-9xl lg:text-8xl font-bold tracking-[-0.02em] text-white drop-shadow-sm"
            />
          </div>
          <div className="lg:col-span-1 space-y-2 lg:space-y-3">
          <div data-aos="flip-right" data-aos-delay="400" className="border-[#a6a6a6] border-t px-4 py-2 lg:py-4 text-sm text-[#f5f5f5] hover:text-[#121212] hover:bg-[#f5f5f5] flex flex-row items-center justify-between">
              <div className="flex flex-col text-[#a6a6a6] text-xs lg:text-base">
                <h1>July - Present</h1>
                <p>1 Month</p>
              </div>
              <div className="flex flex-col items-end text-xs lg:text-base">
                <h1 className="font-semibold">Freelance Web Developer (Alarmnet Inc.)</h1>
                <span className="text-[#a6a6a6] font-semibold text-right">Web Developer | PHP, MySQL, Laravel</span>
              </div>
            </div>
            <div data-aos="flip-right" data-aos-delay="500" className="border-[#a6a6a6] border-t px-4 py-2 lg:py-4 text-sm text-[#f5f5f5] hover:text-[#121212] hover:bg-[#f5f5f5] flex flex-row items-center justify-between">
              <div className="flex flex-col text-[#a6a6a6] text-xs lg:text-base">
                <h1>2023 - 2024</h1>
                <p>1 year</p>
              </div>
              <div className="flex flex-col items-end text-xs lg:text-base">
                <h1 className="font-semibold">Freelancing</h1>
                <span className="text-[#a6a6a6] font-semibold text-right">Back-end Developer | PHP, MySQL, NodeJs</span>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="600" className="border-[#a6a6a6] border-t px-4 py-4 text-sm text-[#f5f5f5] hover:text-[#121212] hover:bg-[#f5f5f5] flex flex-row items-center justify-between">
              <div className="flex flex-col text-[#a6a6a6] text-xs lg:text-base">
                <h1>April 2024 - July 2024</h1>
                <p>3 Months</p>
              </div>
              <div className="flex flex-col items-end text-xs lg:text-base">
                <h1 className="font-semibold">OJT PROJECT</h1>
                <span className="text-[#a6a6a6] font-semibold text-right">Developer | Laravel, MySQL, Tailwindcss</span>
              </div>
            </div>
            <div data-aos="flip-right" data-aos-delay="700" className="border-[#a6a6a6] border-t px-4 py-4 text-sm text-[#121212] bg-[#f5f5f5] flex flex-row items-center justify-between">
              <div className="flex flex-col text-[#a6a6a6] text-xs lg:text-base">
                <h1>2023 - 2024</h1>
                <p>6 Months</p>
              </div>
              <div className="flex flex-col items-end text-xs lg:text-base">
                <h1 className="font-semibold">THESIS PROJECT</h1>
                <span className="font-semibold text-right text-[#a6a6a6]">Developer | Flask, AI MODEL, HTML</span>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="800" className="border-[#a6a6a6] border-y px-4 py-4 text-sm text-[#f5f5f5] hover:text-[#121212] hover:bg-[#f5f5f5] flex flex-row items-center justify-between">
              <div className="flex flex-col text-[#a6a6a6] text-xs lg:text-base">
                <h1>2020 - 2024</h1>
                <p>4 years</p>
              </div>
              <div className="flex flex-col items-end text-xs lg:text-base">
                <h1 className="font-semibold">SCHOOL PROJECTS</h1>
                <span className="text-[#a6a6a6] font-semibold text-right">Developer | Android, Web, Desktop</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="projects" className="px-4 py-4 lg:h-screen relative mt-10 md:mt-10 lg:mt-10">
        <div className="absolute z-0 lg:bottom-0 top-0 right-0  py rounded-full lg:w-[600px] lg:h-[600px] h-[400px] w-[400px] -mr-[50px] -mb-[100px] lg:-mr-[100px] lg:-mb-[200px]  border border-[#a6a6a6]">

        </div>
        <div className="relative z-10">
          <h1 data-aos="zoom-in" className="text-center">... /Projects ...</h1>
          <div className="grid grid-cols-6 lg:grid-cols-6 md:grid-rows-4 lg:grid-rows-4 grid-rows-7 gap-4 h-5/6 z-10">
            <div className="md:col-span-2 md:row-start-1 md:row-span-4 lg:col-span-2 lg:row-start-1 lg:row-span-4 col-span-6 row-start-1 row-span-4 p-6 font-sans">
              <h1 data-aos="zoom-in" className="font-semibold text-lg lg:text-3xl mb-2 lg:mb-5">Alarmnet IMS</h1>
              <div className="max-w-xs text-[#a6a6a6] text-xs lg:text-sm cursor-default">
                <div data-aos="fade-left" data-aos-delay="100" className="border my-2 mr-1 inline-block items-center hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>Laravel</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>NodeJs</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>MySQL</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="400" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>PHP</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="500" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>JavaScript</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="600" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>HTML</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="700" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                  <p>Tailwindcss</p>
                </div>
              </div>
              <br />
              <div data-aos="fade-left" data-aos-delay="600" className="text-[#a6a6a6]  italic text-xs lg:text-base">
                <span data-aos="fade-left" data-aos-delay="300" className="text-xs lg:text-base text-[#f5f5f5]">Alarment's IMS</span> - A web-based inventory management system that includes a <span className="text-[#f5f5f5]">purchase order feature for tracking</span> the movement of packages.
                <p data-aos="fade-left" data-aos-delay="600" className="text-xs lg:text-base text-[#a6a6a6] mt-5">
                  This system leverages <span className="text-[#f5f5f5]">Laravel, MySQL, and Tailwindcss</span> for its core functionality, while Flowbite enhances its design and user experience.
                </p>
              </div>


              <div data-aos="zoom-in" data-aos-delay="200" className="w-min mt-5 lg:mt-16 flex">
                <div className="rounded-full p-3 border border-[#f5f5f5]">
                  <svg className="size-4 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                </div>
                <a href="#" className="cursor-default">
                  <div className="rounded-full p-3 -ml-4 border bg-[#a6a6a6]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4 stroke-[#3d3d3d]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>
            <div data-aos="flip-right" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] md:col-span-1 md:row-start-2 md:row-span-3 lg:col-span-1 lg:row-start-2 lg:row-span-3 col-span-2 row-start-5 row-span-1 p-2 min-w-max min-h-mad rounded-tl-3xl rounded-b-3xl overflow-hidden bg-cover bg-left bg-[url('https://i.pinimg.com/736x/48/3b/cc/483bcc8a49b88f9369d3e5d26fdde331.jpg')]">
            </div>
            <div data-aos="fade-down" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] md:col-span-2 md:row-start-2 md:row-span-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 col-span-6 row-start-6 row-span-2 p-2 min-w-max min-h-mad rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-cover bg-center bg-[url('/images/alarmnet.png')]">

            </div>
            <div data-aos="flip-right" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] lg:col-span-1 hidden md:flex lg:flex row-span-3 rounded-t-3xl rounded-br-3xl overflow-hidden bg-cover bg-right bg-[url('https://i.pinimg.com/736x/48/3b/cc/483bcc8a49b88f9369d3e5d26fdde331.jpg')]">

            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 lg:h-screen relative">
        <div className="absolute z-0 lg:bottom-0 top-0 right-0  py rounded-full lg:w-[600px] lg:h-[600px] h-[400px] w-[400px] -mr-[50px] -mb-[100px] lg:-mr-[100px] lg:-mb-[200px]  border border-[#a6a6a6]">

        </div>
        <div className="grid grid-cols-6 md:grid-cols-6 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-4 grid-rows-7 gap-4 h-5/6 mt-10 relative z-10">
          <div className="md:col-span-2 md:row-start-1 md:row-span-4 lg:col-span-2 lg:row-start-1 lg:row-span-4 col-span-6 row-start-1 row-span-4 p-6 font-sans">
            <h1 data-aos="zoom-in" className="font-semibold text-3xl">HVSA</h1>
            <br />
            <div className="max-w-xs text-[#a6a6a6] text-sm cursor-default">
              <div data-aos="fade-left" data-aos-delay="100" className="border my-2 mr-1 inline-block items-center hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>Flask</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="200" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>HTML</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>CSS</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="400" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>JavaScript</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="500" className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>AI Model</p>
              </div>
            </div>
            <br />
            <div data-aos="fade-left" data-aos-delay="600" className="text-[#a6a6a6] italic text-xs lg:text-base">
              <span data-aos="fade-left" data-aos-delay="300" className="text-xs lg:text-base text-[#f5f5f5]">HVSA</span> - A web-based system designed for text classification that distinguishes between human and AI-generated text.
              <p data-aos="fade-left" data-aos-delay="600" className="text-xs lg:text-base text-[#a6a6a6] mt-5">
                This system utilizes <span className="text-[#f5f5f5]">Natural Language Processing (NLP) techniques</span> to accurately classify and analyze text sources. The backend is powered by <span className="text-[#f5f5f5]">Flask and MySQL</span>, while <span className="text-[#f5f5f5]">TailwindCSS</span> is used for a responsive and modern user interface.
              </p>
            </div>


            <div data-aos="zoom-in" data-aos-delay="200" className="w-min mt-16 flex cursor-pointer">
              <div className="rounded-full p-3 border border-[#f5f5f5]">
                <svg className="size-4 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </div>
              <a href="https://github.com/Jimuell12/HVSA" target="_blank">
                <div className="rounded-full p-3 -ml-4 border bg-[#f5f5f5] hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </div>

          </div>
          <div data-aos="flip-right" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] md:col-span-1 md:row-start-2 md:row-span-3 lg:col-span-1 lg:row-start-2 lg:row-span-3 col-span-2 row-start-5 row-span-1 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-cover bg-left bg-[url('https://c4.wallpaperflare.com/wallpaper/665/68/940/anime-room-interior-dark-wallpaper-preview.jpg')]">
          </div>
          <div data-aos="fade-down" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] md:col-span-2 md:row-start-2 md:row-span-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 col-span-6 row-start-6 row-span-2 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-contain bg-center bg-[url('/images/hvsa.png')]">

          </div>
          <div data-aos="flip-left" data-aos-delay="500" className="shadow-md shadow-[#f5f5f5] md:col-span-1 lg:col-span-1 hidden md:flex lg:flex row-span-3 rounded-3xl overflow-hidden bg-cover bg-right bg-[url('https://c4.wallpaperflare.com/wallpaper/665/68/940/anime-room-interior-dark-wallpaper-preview.jpg')]">

          </div>
        </div>
      </section>

      <section className="px-4 py-4 lg:h-screen relative">
        <div className="absolute z-0 lg:bottom-0 top-0 right-0  py rounded-full lg:w-[600px] lg:h-[600px] h-[400px] w-[400px] -mr-[50px] -mb-[100px] lg:-mr-[100px] lg:-mb-[200px]  border border-[#a6a6a6]">

        </div>
        <div className="relative z-10">
          <h1 data-aos="zoom-in" className="text-center my-2">... /Other Projects ...</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 font-sans">

            <div data-aos="fade-left" data-aos-delay="500" className="relative shadow-[#f5f5f5] shadow-md p-4 border border-[#3d3d3d] bg-[#f5f5f5] rounded-3xl flex flex-col h-full">
              <div className="h-60 rounded-3xl bg-cover bg-[url('https://img.freepik.com/premium-photo/ingredients-cooking-food-background-with-herbs-vegetables-top-view-white-background_1040174-1574.jpg')]">
                <img className="w-full h-full object-contain" src="/images/recifind.png" alt="" />
              </div>
              <div className="flex flex-col flex-1 mt-5">
                <div className="flex-1">
                  <h1 className="font-bold text-base lg:text-xl text-[#121212]">Recifind</h1>
                  <p className="text-xs lg:text-sm  text-[#a6a6a6] italic mt-5">Recifind is an innovative app that leverages <span className="text-[#121212]">object detection technology to classify ingredients in real-time.</span>  By analyzing what’s visible through your camera, it provides personalized recipe suggestions based on the ingredients detected.</p>
                </div>
                <p className="mt-5 mb-0 text-sm lg:text-base text-[#121212]">Native Android Development / Object Detection / Image Classification / Java / TensorFlow Lite / XML </p>
              </div>
              <BorderBeam className="rounded-3xl" size={300} borderWidth={5} duration={12} delay={9} />
            </div>

            <div data-aos="fade-left" data-aos-delay="700" className="relative shadow-[#f5f5f5] shadow-md p-4 border border-[#3d3d3d] rounded-3xl text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#121212] flex flex-col h-full">
              <div className="h-60 rounded-3xl bg-cover bg-[url('https://media.istockphoto.com/id/1279701336/vector/phone-with-app-alarm-clock-on-the-screen.jpg?s=612x612&w=0&k=20&c=2QwKQyXKVbZaMK6jjpaaQ5UUw62VcVw6VngFCIQDXmM=')]">
                <img className="w-full h-full object-contain" src="/images/remindme.png" alt="Image description" />
              </div>
              <div className="flex flex-col flex-1 mt-5">
                <div className="flex-1">
                  <h1 className="font-bold text-base lg:text-xl">RemindMe</h1>
                  <p className="text-xs lg:text-sm text-justify text-[#a6a6a6] italic mt-5">RemindMe is a Pomodoro timer app that enhances your productivity with </p>
                  <span className="text-xs lg:text-sm italic">integrated alarms to notify you precisely when it's time to switch tasks.</span>
                  <span className="text-xs lg:text-sm text-justify text-[#a6a6a6] italic"> Designed to help you stay focused and manage your time effectively, RemindMe ensures you maintain a productive rhythm throughout your day.</span>
                </div>
                <p className="mt-5 mb-0 text-sm lg:text-base">Native Android Development / Java / XML</p>
              </div>
              <BorderBeam className="rounded-3xl" size={300} borderWidth={5} duration={12} delay={9} />
            </div>

            <div data-aos="fade-left" data-aos-delay="900" className="relative shadow-[#f5f5f5] shadow-md p-4 border border-[#3d3d3d] rounded-3xl text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#121212]">
              <div className="h-60 rounded-3xl bg-[url('https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg')]">
                <img className="w-full h-full object-contain scale-x-[-1]" src="/images/tastebuds.png" alt="" />
              </div>
              <div className="flex flex-col flex-1 mt-5">
                <div className="flex-1">
                  <h1 className="font-bold text-base lg:text-xl">TasteBuds</h1>
                  <p className="text-xs lg:text-sm text-justify text-[#a6a6a6] italic mt-5">Tastebud is an innovative app that utilizes</p>
                  <span className="text-xs lg:text-sm italic">facial recognition technology to detect whether a person experiences a sour or sweet taste.</span>
                  <span className="text-xs lg:text-sm text-justify text-[#a6a6a6] italic"> By analyzing the user's facial expressions, Tastebud provides insights into their taste preferences. Whether you’re experimenting with new flavors or just curious about taste reactions, Tastebud offers a unique way to understand and enjoy your food experiences. </span>
                  <p className="mt-5 mb-0 text-sm lg:text-base">Native Android Development / Object Detection / Image Classification / Text Classification / Java / TensorFlow Lite / XML </p>
                </div>
              </div>
              <BorderBeam className="rounded-3xl" size={300} borderWidth={5} duration={12} delay={9} />

            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="px-4 py-4 h-screen mt-10 md:mt-10 lg:mt-0 relative overflow-hidden">
        <div className="absolute lg:bottom-0 top-0 left-0 py rounded-full lg:w-[800px] lg:h-[800px] h-[400px] w-[400px] -ml-[50px] -mb-[100px] lg:-ml-[100px] lg:-mb-[200px]  border border-[#a6a6a6]">

        </div>
        <div className="absolute bottom-0 left-0 py-6 w-full px-6">
          <h1 data-aos="zoom-in" className="text-end">... /Contacts ...</h1>
          <div className="grid lg:grid-cols-5 mt-20 gap-10">
            <div className="lg:col-span-3 mb-20">
              <h1 data-aos="fade-right" className="text-5xl lg:text-8xl font-bold">Jimuel</h1>
              <div className="flex flex-row items-center justify-between mt-5">
                <div data-aos="fade-right" className="text-[#a6a6a6] text-base">
                  <WordRotate
                    words={["Website", "Native Mobile", "Desktop", "Full-stack"]}
                  />
                  <p>Developer</p>
                </div>
                <h1 data-aos="fade-left" className="text-5xl lg:text-8xl font-bold">Flojera</h1>
              </div>
            </div>
            <div className="lg:col-span-2 mb-20 justify-self-end">
              <div data-aos="fade-right" className="flex justify-between">
                <a href="/#about">About</a>
                <a href="/#experiences">Experiences</a>
                <a href="/#projects">Projects</a>

              </div>
              <div data-aos="zoom-in" className="border border-[#a6a6a6] mt-5 text-[#a6a6a6] font-sans rounded-3xl p-6">
                <h1 className="text-xl">Site</h1>
                <br />
                <p className="text-base tracking-widest leading-5 text-[#f5f5f5]">Created by Jimuel Flojera /</p>
                <p className="text-base tracking-widest leading-5 text-[#f5f5f5] pt-2">Hosted with Github Pages /</p>
                <p className="text-base tracking-widest leading-5 text-[#f5f5f5] pt-2">Powered by NextJs /</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap space-y-2 justify-evenly mb-10">
            <a data-aos="fade-left" data-aos-delay="200" href="https://github.com/Jimuell12" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <p className="italic font-sans">Github</p>
            </a>
            <a data-aos="fade-left" data-aos-delay="400" href="https://www.linkedin.com/in/jimuel-flojera-ba9304321/" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <p className="italic font-sans">Linkedin</p>
            </a>
            <a data-aos="fade-left" data-aos-delay="600" href="mailto:flojera.j.bscs@gmail.com" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              <p className="italic font-sans">E-mail</p>
            </a>
            <a data-aos="fade-left" data-aos-delay="800" href="https://x.com/jimflojera" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />              </svg>
              <p className="italic font-sans">Twitter</p>

            </a>
            <a data-aos="fade-left" data-aos-delay="1000" href="https://www.facebook.com/flojerajimuel" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
              <p className="italic font-sans">Facebook</p>

            </a>
            <a data-aos="fade-left" data-aos-delay="1200" href="https://www.instagram.com/jimflojera/" className="border justify-center w-32 md:w-36 lg:w-40 text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] text-center hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p className="italic font-sans">Instagram</p>

            </a>
          </div>
        </div>
      </section>

    </section>

  );
}
