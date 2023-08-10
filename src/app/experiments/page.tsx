import Link from "next/link";
import React from "react";

export default function Experiments() {
	return (
		<div>
			This is the experiments page
			<ul>
				<li>
					<Link href={"experiments/tremor"}>React Charts with Tremor</Link>
				</li>
			</ul>
		</div>
	);
}
