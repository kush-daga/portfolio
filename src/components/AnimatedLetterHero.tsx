import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedLetterHeroProps {
	directionToRotate: "left" | "right";
	children: ReactNode;
}

const AnimatedLetterHero: React.FC<AnimatedLetterHeroProps> = ({
	children,
	directionToRotate,
}) => {
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
