import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { ScoreContext } from "../context/ScoreContext";
import { Main } from "./Main";

export const Game = () => {
	const [diceNumber, setDiceNumber] = useState(1);
	const [score, setScore] = useState(0);
	const [showRules, setShowRules] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(0);

	return (
		<ScoreContext.Provider
			value={{
				score,
				setScore,
				diceNumber,
				setDiceNumber,
				showRules,
				setShowRules,
				selectedNumber,
				setSelectedNumber,
			}}
		>
			<div className="mt-[44px] ">
				<Navbar />
				<Main />
			</div>
		</ScoreContext.Provider>
	);
};
