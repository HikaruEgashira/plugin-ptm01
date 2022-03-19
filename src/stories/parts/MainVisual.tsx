import React from "react";
import "./mainvisual.css";

export type Props = {
	title: JSX.Element;
	leftButton: JSX.Element;
	rightButton: JSX.Element;
};

const View: React.FC<Props> = ({ title, leftButton, rightButton }) => {
	return (
		<div className="container bg-[#F3F7F8] md:p-14 flex flex-col gap-14">
			<div className="mx-auto text-center font-bold text-3xl md:text-5xl max-w-4xl">
				{title}
			</div>
			<div className="flex flex-col gap-4 place-content-center items-center md:flex-row">
				{leftButton}
				{rightButton}
			</div>
			<div className="movie-wrap">
				<iframe
					className="lg:mx-auto"
					width={800}
					height={450}
					src="https://www.youtube.com/embed/q7s81feOwmM?controls=0"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default View;
