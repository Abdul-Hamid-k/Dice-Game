import { NavLink } from "react-router-dom";

function App() {
	return (
		<>
			<div className="grid sm:grid-cols-2 my-auto h-screen items-center">
				<div>
					<img
						src="./images/hero_dice.png"
						alt="Hero Dice Images"
					/>
				</div>
				<div className="flex flex-col gap-2 items-end">
					<h1 className=" text-4xl  sm:text-[68px] lg:text-[96px] font-bold line leading-tight	">
						DICE GAME
					</h1>

					<NavLink to="/game">
						<button className="bg-black text-white hover:bg-white hover:text-black font-bold border-[1px] border-black rounded-lg  w-[220px] h-[44px]">
							Play Now{" "}
						</button>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default App;
