import React, { useContext, useEffect } from "react";
import { Number } from "./Number";
import { ScoreContext } from "../context/ScoreContext";

export const Navbar = () => {
	const { score, selectedNumber, setSelectedNumber } = useContext(ScoreContext);
	const numbers = [1, 2, 3, 4, 5, 6]
	useEffect(() => {
		const showAlert = () => {
			const alertText = document.querySelector("#alert").classList;
			// console.log(alertText);
			if (selectedNumber == 0) {
				alertText.remove("invisible");
				// console.log("Please select a number");
			} else {
				alertText.add("invisible");
			}
		};
		showAlert();
	});

	return (
		<nav>
			<div className=" flex flex-col items-center sm:flex-row sm:justify-between">
				<div className="flex flex-col  items-center w-[120px]">
					<h2 className="font-medium text-[60px] sm:text-[100px] leading-none">
						{score}
					</h2>
					<p className="text-[24px] ">Total Score</p>
				</div>

				<div>
					<p
						id="alert"
						className="font-bold text-base text-[#FF0C0C] sm:text-[16px] text-center sm:text-end mb-0.5 sm:mb-[20px]"
					>
						You have not selected any number
					</p>
					<div id="numbers" className="flex flex-wrap mt-3 sm:mt-0 justify-center sm:flex-nowrap gap-1 md:gap-[24px]  ">
						{numbers.map((num) => {
							return (
                                <Number
                                    key={num}
                                    number={num}
                                    isClicked={num === selectedNumber}
                                    setSelectedNumber={setSelectedNumber}
                                />
                            );
						})}
						
						
					</div>
					<p className="font-bold text-lg sm:text-[24px] text-center sm:text-end mt-2 sm:mt-[30px]">
						Select Number
					</p>
				</div>
			</div>
		</nav>
	);
};
