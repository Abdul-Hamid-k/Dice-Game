import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

export const Number = ({ number, isClicked = false }) => {
	const { setSelectedNumber } = useContext(ScoreContext);

	return (
		<button
			onClick={() => setSelectedNumber(number)}
			className={` ${
				isClicked ? "text-white bg-black " : "bg-white text-black"
			} ' border-2 border-black w-[52px] h-[52px] flex justify-center items-center text-[24px] font-bold cursor-pointer'`}
		>
			{number}
		</button>
	);
};
