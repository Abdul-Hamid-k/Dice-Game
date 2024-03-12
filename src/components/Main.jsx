import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../context/ScoreContext";

export const Main = () => {
	const {
		diceNumber,
		setDiceNumber,
		score,
		setScore,
		showRules,
		setShowRules,
		selectedNumber,
		setSelectedNumber,
	} = useContext(ScoreContext);

	const rollDice = () => {
		if (selectedNumber !== 0) setDiceNumber(Math.floor(Math.random() * 6) + 1);
	};

	useEffect(() => {
		playGame();
		setSelectedNumber(0);
	}, [diceNumber]);

	const manageRules = () => {
		const showRulesBtn = document.getElementById("showRules").classList;
		if (showRules) {
			showRulesBtn.add("hidden");
			showRulesBtn.remove("flex", "flex-col", "gap-[24px]");
		} else {
			showRulesBtn.remove("hidden");
			showRulesBtn.add("flex", "flex-col", "gap-[24px]");
		}
		setShowRules(!showRules);
		// console.log(showRules);
	};

	const playGame = () => {
		if (selectedNumber !== 0) {
			// console.log(diceNumber, selectedNumber);
			if (diceNumber === selectedNumber) {
				setScore((score) => score + selectedNumber);
				// console.log("winning");
			} else {
				setScore((score) => score - 2);
				// console.log("losing");
			}
		}
	};

	return (
		<main className="flex flex-col md:flex-row justify-evenly items-center my-[48px] text-center gap-[36px] ">
			<div className="flex flex-col gap-[15px] p-1">
				<img
					className="cursor-pointer"
					onClick={rollDice}
					src={`./images/dice_${diceNumber}.png`}
					alt="Dice Image"
				/>

				<p className="text-[24px] font-medium">Click on Dice to roll</p>
			</div>

			<div className="flex flex-col gap-6 items-center">
				<button
					className="font-medium w-[220px] border-black border-[1px] h-[44px] rounded-[5px]"
					onClick={() => setScore(0)}
				>
					Restore Score
				</button>
				<button
					className="font-medium w-[220px] bg-black text-white border-[1px] h-[44px] rounded-[5px]"
					onClick={manageRules}
				>
					Show Rules
				</button>

				<div
					id="showRules"
					className="text-start w-[280px] md:w-[450px] hidden bg-[#FBF1F1] p-[20px] "
				>
					<h2 className="text-[24px] font-bold">How to play dice game</h2>
					<div className="flex flex-col gap-[4px]">
						<p>Select any number</p>
						<p>Click on dice image</p>
						<p>
							After click on dice if selected number is equal to dice number you
							will get same point as dice if you get wrong guess then 2 point
							will be dedcuted
						</p>
					</div>
				</div>

				{/* <p>Selected Number: {selectedNumber}</p>
				<p>Dice Number: {diceNumber}</p>
				<p>score: {score}</p> */}
			</div>
		</main>
	);
};
