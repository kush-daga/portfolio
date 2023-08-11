import { motion } from "framer-motion";
import React, { ReactNode } from "react";
//@ts-ignore
import useSound from "use-sound";

interface AnimatedLetterHeroProps {
	directionToRotate: "left" | "right";
	children: ReactNode;
	playSound?: boolean;
}

const AnimatedLetterHero: React.FC<AnimatedLetterHeroProps> = ({
	children,
	directionToRotate,
	playSound = true,
}) => {
	const [play, { stop }] = useSound("/gate-squeek-final.mp3", { volume: 0.75 });

	return (
		<motion.div
			initial={{
				rotateZ: 0,
				// x: -5,
			}}
			whileHover={{
				rotateZ: (directionToRotate === "left" ? 1 : -1) * 8,
				// x: 5,
			}}
			onMouseEnter={() => {
				if (playSound) play();
			}}
			onMouseLeave={() => {
				if (playSound) play();
			}}
			transition={{
				duration: 0.1,
				type: "spring",
				// bounce: 0.25,
				damping: 15,
				stiffness: 500,
			}}
			style={{
				transformOrigin: "top center",
			}}
			className="drop-shadow-lg z-0 hover:z-10 hover:drop-shadow-2xl"
		>
			{children}
		</motion.div>
	);
};

export default AnimatedLetterHero;
