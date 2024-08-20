'use client'
import React, { useState } from 'react'
import Navbar from '../header'
import WordRotate from '@/components/magicui/word-rotate'
import { BorderBeam } from '@/components/magicui/border-beam'

export const Landing = () => {

    const [email, setEmail] = useState('');

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
    )
}