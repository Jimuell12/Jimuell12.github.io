"use client"
import { useState } from "react";
import Navbar from "./header";


export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('subject', "You've Subscribed!");
    formData.append('html', `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #121212; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #f5f5f5;">Subscription Successful!</h2>
        <p style="color: #a6a6a6;">Thank you for subscribing to the newsletter of <strong>Jimuel Flojera</strong>, your future Full Stack Developer.</p>
        <p style="color: #a6a6a6;">You'll now receive the latest updates and insights directly to your inbox.</p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #a6a6a6;">Visit my portfolio at <a href="https://yourportfolio.url" style="color: #f5f5f5; text-decoration: none;">Jimuel Flojera</a></p>
      </div>
    `);


    const res = await fetch('/api/send-email', {
      method: 'post',
      body: formData,
    });

    const data = await res.json();

    if (data.message) {
      console.log('Email sent successfully!');
    } else {
      console.error('Failed to send email:', data.error);
    }
  };

  return (
    <section className="snap-y snap-mandatory h-screen w-screen mx-auto container overflow-y-scroll scroll-smooth no-scrollbar overflow-x-hidden">
      <section className="px-4 snap-start h-screen">
        <Navbar />
        <div className="grid lg:grid-cols-6 flex-1 lg:mt-10">
          <div className="p-2 lg:p-6 lg:col-span-4 flex flex-col justify-between">
            <div className="">
              <div className="text-4xl cursor-default lg:text-7xl tracking-wide font-bold slide-down-fade hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent">Web/Mobile <br /><p className="text-right">Developer</p></div>
              <br />
              <div className="slide-right-fade">
                <div className="text-left max-w-xs lg:max-w-lg">
                  <p className="text-xs lg:text-base text-[#a6a6a6]">I create mobile apps and websites that are <span className="text-[#f5f5f5]">easy to use and visually appealing</span>. My work focuses on making sure they function well and provide a great experience for users.</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="py-2 lg:p-6 self-start lg:self-center justify-self-end w-full lg:w-min">
              <div className="gap-2 rounded-full justify-between slide-right-fade border-black dark:border-white flex text-[#121212]">
                <div className="bg-[#f5f5f5] font-sans px-4 py-2 border rounded-full justify-end w-full lg:w-[300px]">
                  <input name="email" onChange={(e) => setEmail(e.target.value)} className="bg-[#f5f5f5] italic w-full text-base lg:text-base outline-none dark:text-[#121212] placeholder:text-[#121212] dark:placeholder:text-[#121212]" type="text" placeholder="Subscribe" />
                </div>
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="size-10 text-black dark:stroke-[#121212] cursor-pointer bg-[#f5f5f5] py-2 rounded-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg></button>
              </div>
            </form>
          </div>
          <div className="p-2 lg:p-6 lg:col-span-2 overflow-hidden slide-right-fade ">
            <img className="w-80 h-80 grayscale hover:grayscale-0 fancy-border drop-shadow-xl shadow-black dark:shadow-white" src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/251632721_3167651810149522_1738373366806811130_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH1JIgndUQ7kivJBWM5faWTfXbJ_lMMWap9dsn-UwxZqvUmXiqYMzsTPsAdGwkEOgKtbCiJKhdEBCaE-zOEfTHm&_nc_ohc=O-jMg-CmZw4Q7kNvgEqVM4j&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYDEGbHMM51VUH92eB5TVNvpWZIOjetQBB3fPvuXbNPNCQ&oe=66B0DF07" alt="" />
          </div>
        </div>
        <div className="flex-col space-y-2 flex lg:flex-row justify-evenly slide-down-fade text-xs lg:text-base mt-5 lg:mt-10">
          <div className="flex flex-row gap-2 lg:gap-5">
            <a href="https://github.com/Jimuell12" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <p className="italic font-sans">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/jimuel-flojera-ba9304321/" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <p className="italic font-sans">Linkedin</p>
            </a>
          </div>
          <div className="flex flex-row">
            <a href="https://x.com/jimflojera" className="border text-[#a6a6a6] border-[#a6a6a6] hover:border-[#f5f5f5] hover:text-[#f5f5f5] py-2 px-4 rounded-full flex items-center gap-2" target="_blank">
              <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />              </svg>
              <p className="italic font-sans">Twitter</p>

            </a>
          </div>
          <div className="flex flex-row gap-2 lg:gap-5">
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

      <section id="about" className="px-4 py-4 snap-start h-screen scroll-smooth">
        <h1>... /About me ...</h1>
        <h1 className="text-[#a6a6a6] text-center">Hello! I'm Jimuel Flojera, I'm aspiring <span className="text-[#f5f5f5]">Full-stack Developer.</span></h1>
        <div className="grid lg:grid-cols-2 lg:mt-10">
          <div className="lg:col-span-1 space-y-5">
            <div className="border border-[#a6a6a6] text-[#a6a6a6] font-sans rounded-3xl p-6 max-w-lg">
              <h1 className="text-xl">Front-end</h1>
              <br />
              <span className="text-base tracking-widest leading-5">TypeScript / React / NextJs / React Native / Vue / Vue / HTML / CSS / JavaScript / Java</span>
            </div>
            <div className="border border-[#a6a6a6] text-[#a6a6a6] font-sans rounded-3xl p-6 max-w-xs">
              <h1 className="text-xl">Styles</h1>
              <br />
              <span className="text-base tracking-widest leading-5">TailwindCSS / AntDesign / FontAwesome / DaisyUI</span>
            </div>
            <div className="border border-[#a6a6a6] text-[#a6a6a6] font-sans rounded-3xl p-6 max-w-lg">
              <h1 className="text-xl">Back-end</h1>
              <br />
              <span className="text-base tracking-widest leading-5">MySQL / Node / Laravel / PHP / FLASK / Azure</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-4 snap-start h-screen scroll-smooth">
        <h1 className="text-center">... /Projects ...</h1>
        <div className="grid lg:grid-cols-6 grid-rows-4 gap-4 h-5/6">
          <div className="lg:col-span-2 row-start-1 row-span-4 p-6 font-sans">
            <h1 className="font-semibold font-lg">Alarmnet IMS</h1>
            <br />
            <div className="max-w-xs text-[#a6a6a6] text-sm cursor-default">
              <div className="border my-2 mr-1 inline-block items-center hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>Laravel</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>NodeJs</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>MySQL</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>PHP</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>JavaScript</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>HTML</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>Tailwindcss</p>
              </div>
            </div>
            <br />
            <div className="text-[#a6a6a6] italic">
              <span className="text-xs lg:text-base text-[#f5f5f5]">Alarment's IMS</span> - A web-based inventory management system that includes a <span className="text-[#f5f5f5]">purchase order feature for tracking</span> the movement of packages.
              <p className="text-xs lg:text-base text-[#a6a6a6] mt-5">
                This system leverages <span className="text-[#f5f5f5]">Laravel, MySQL, and Tailwindcss</span> for its core functionality, while Flowbite enhances its design and user experience.
              </p>
            </div>


            <div className="w-min mt-16 flex">
              <div className="rounded-full p-3 border border-[#f5f5f5]">
                <svg className="size-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </div>
              <div className="rounded-full p-3 -ml-4 border bg-[#a6a6a6]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4 stroke-[#3d3d3d]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

          </div>
          <div className="lg:col-span-1 hover:grayscale-0 row-start-2 row-span-3 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-cover bg-left bg-[url('https://i.pinimg.com/736x/48/3b/cc/483bcc8a49b88f9369d3e5d26fdde331.jpg')]">
          </div>
          <div className="lg:col-span-2 hover:grayscale-0  row-start-2 row-span-2 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-contain bg-center bg-[url('https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/453456077_954375150036736_5737758718517499147_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG5EE4_PN3z7bB-fW88sTeWXJ_I1GaUoiZcn8jUZpSiJiQAoNhdIYeMfUbzZF02cneaC09j9PEHGWGGoBXib4Cr&_nc_ohc=CP3VEEtP2PUQ7kNvgF00vwj&_nc_ht=scontent.fmnl17-3.fna&oh=03_Q7cD1QEvwG9hLmrylA7A5NGoYqXklpNVKl-68RUeEXroLc7Vcw&oe=66D6161F')]">

          </div>
          <div className="lg:col-span-1 hover:grayscale-0 row-span-3 rounded-3xl overflow-hidden bg-cover bg-right bg-[url('https://i.pinimg.com/736x/48/3b/cc/483bcc8a49b88f9369d3e5d26fdde331.jpg')]">
            {/* This column will be hidden */}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 snap-start h-screen scroll-smooth">
        <div className="grid lg:grid-cols-6 grid-rows-4 gap-4 h-5/6 mt-10">
          <div className="lg:col-span-1 hover:grayscale-0 row-start-2 row-span-3 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-cover bg-left bg-[url('https://img.freepik.com/premium-photo/sunrise-view-from-bedroom-house-window-with-curtains-anime-background-clovers-style_137717-284.jpg')]">
          </div>
          <div className="lg:col-span-2 hover:grayscale-0  row-start-2 row-span-2 p-2 min-w-max min-h-mad rounded-3xl overflow-hidden bg-contain bg-center bg-no-repeat bg-[#3d3d3d] bg-[url('https://scontent.xx.fbcdn.net/v/t1.15752-9/453704514_802289732114480_9141762149386848360_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFjPe7Jbec8cw7jkqtdYhNe16oCKwsbZ_LXqgIrCxtn8m4LO-x6SqZqOBxNEOeCTQta-x7UTgz6gfddhOeBjOox&_nc_ohc=41ZL40UMtyMQ7kNvgGStxq4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFPbXXB3U0z9UhOV_XJcvFCnNcNLc4Uf2v9aNAF9wgL2Q&oe=66D5FFAD')]">

          </div>
          <div className="lg:col-span-1 hover:grayscale-0 row-span-3 rounded-3xl overflow-hidden bg-cover bg-right bg-[url('https://img.freepik.com/premium-photo/sunrise-view-from-bedroom-house-window-with-curtains-anime-background-clovers-style_137717-284.jpg')]">
            {/* This column will be hidden */}
          </div>
          <div className="lg:col-span-2  row-span-4 p-6 font-sans">
            <h1 className="font-semibold font-lg">Antonio's Curtain and Upholstery Ltd.</h1>
            <br />
            <div className="max-w-xs text-[#a6a6a6] text-sm cursor-default">
              <div className="border my-2 mr-1 inline-block items-center hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>HTML</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>JavaScript</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>NodeJS</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>CSS</p>
              </div>
              <div className="border m-1 inline-block hover:text-[#f5f5f5] hover:border-[#f5f5f5] border-[#a6a6a6] py-2 px-4 rounded-full">
                <p>Firebase</p>
              </div>
            </div>
            <br />
            <div className="text-[#a6a6a6] italic">
              <span className="text-xs lg:text-base text-[#f5f5f5]">Antonio's Curtain and Upholstery</span> - A website that showcases the company's<span className="text-[#f5f5f5]"> products and services </span>, as well as a contact form for inquiries.
              <p className="text-xs lg:text-base text-[#a6a6a6] mt-5">
                This system leverages <span className="text-[#f5f5f5]">Vanilla HTML, CSS, and JavaScript</span> for its core functionality, while Flowbite enhances its design and user experience.
              </p>
            </div>


            <div className="w-min mt-16 flex cursor-pointer">
              <div className="rounded-full p-3 border border-[#f5f5f5]">
                <svg className="size-4 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </div>
              <a href="https://github.com/Jimuell12/AntonioCurtains/tree/master" target="_blank">
                <div className="rounded-full p-3 -ml-4 border bg-[#f5f5f5] hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-4 snap-start h-screen scroll-smooth">
        <h1 className="text-end">... /Contact ...</h1>
      </section>

    </section>

  );
}
