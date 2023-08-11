"use client";

import { Luckiest_Guy, Indie_Flower } from "next/font/google";
import SquigglyLine from "../../public/squiggly_1.svg";
//@ts-ignore

import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	easeInOut,
	circInOut,
	easeOut,
} from "framer-motion";

import Image from "next/image";

import { useRef } from "react";
import { type } from "os";
import AnimatedLetterHero from "~/components/AnimatedLetterHero";

const luckiestGuy = Luckiest_Guy({
	weight: ["400"],
	subsets: ["latin"],
});

const indieFlower = Indie_Flower({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Home() {
	const scrollRef = useRef(null);
	const containerRef = useRef(null);

	const { scrollYProgress, scrollY } = useScroll({
		target: scrollRef,
		offset: ["start end", "start start"],
	});
	const scrollYInverse = useTransform(scrollYProgress, (v) => {
		console.log(v);
		return v;
	});

	const paddingVal = useTransform(scrollYProgress, [0, 0.4, 1], [24, 48, 64], {
		ease: easeInOut,
	});
	const yVal = useTransform(scrollYProgress, [0, 0.4, 1], [0, 24, -48], {
		ease: easeInOut,
	});

	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 0.6, 1],
		["rgba(255,255,255, 0)", "rgba(101,151,133,0)", "rgba(101,151,133,1)"],
		{
			ease: easeInOut,
		}
	);

	const overlayBg = useTransform(
		scrollYProgress,
		[0, 0.5, 0.6, 1],
		[
			"rgba(0,0,0,0)",
			"rgba(0, 0, 0, 0.4)",
			"rgba(0, 0, 0, 0.75)",
			"rgba(0, 0, 0, 0.9)",
		]
	);
	// const scale = useSpring(scrollYInverse);

	const margin2 = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 24], {
		ease: easeOut,
	});
	return (
		<div className="h-[600vh] p-0 m-0 bg-white flex flex-col">
			<motion.div className="w-full h-[300vh] text-white top-0 z-0">
				<div
					style={{
						position: "sticky",
						top: 24,
						height: "110vh",
					}}
				>
					<motion.div
						className="h-screen w-screen fixed inset-0  top-0 !m-0 z-10 select-none pointer-events-none"
						style={{ background: overlayBg }}
					></motion.div>
					<motion.div
						className="w-[auto] h-[100vh] rounded-3xl"
						style={{
							background:
								"radial-gradient(200.07% 135.17% at 81.15% -0.00%, #659785 0%, #40836C 60.66%, #949646 100%)",
							y: yVal,
							height: "calc(100vh - 48px)",
							margin: paddingVal,
							zIndex: 10,
						}}
					>
						<div className="font-semibold flex flex-col gap-0 justify-center items-center w-full h-full">
							<div
								className={indieFlower.className}
								style={{ fontSize: "128px", userSelect: "none" }}
							>
								Kush
							</div>
							<div
								className={luckiestGuy.className}
								style={{
									fontSize: "96px",
									marginTop: "-48px",
									display: "flex",
									cursor: "pointer",
									// userSelect: "none",
								}}
							>
								<AnimatedLetterHero directionToRotate="left">
									D
								</AnimatedLetterHero>
								<AnimatedLetterHero directionToRotate="right">
									A
								</AnimatedLetterHero>
								<AnimatedLetterHero directionToRotate="left">
									G
								</AnimatedLetterHero>
								<AnimatedLetterHero directionToRotate="right">
									A
								</AnimatedLetterHero>
							</div>
							<div className="text-[24px] text-center max-w-[418px] uppercase">
								A Super fun Dev with a serious interest in designing delightful
								experiences.
								<br /> I have the memory of a goldfish 🐟
							</div>
						</div>
					</motion.div>
				</div>
				<motion.section
					ref={scrollRef}
					className="flex flex-col sticky top-0 h-[100vh] z-0 bg-yellow-50  w-full min-h-screen"
					style={{
						background: backgroundColor,
						// "radial-gradient(200.07% 135.17% at 81.15% -0.00%, #659785 0%, #40836C 60.66%, #949646 100%)",
					}}
				>
					<motion.div
						className="bg-white p-6 text-black"
						style={{
							margin: margin2,
							height: "calc(100vh  - 48px)",
							borderRadius: margin2,
						}}
					>
						<motion.h2
							className="text-[#2b4038] text-[48px] font-black text-center flex flex-col justify-center items-center"
							style={{
								opacity: scrollYProgress,
							}}
						>
							Work Voyage
							<div>
								<Image alt="helo" src={SquigglyLine}></Image>
							</div>
						</motion.h2>
					</motion.div>
				</motion.section>
			</motion.div>
		</div>
	);
}
