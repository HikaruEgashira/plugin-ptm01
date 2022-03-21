import React from "react";
import "./mainvisual.css";

export type Props = {
	title: JSX.Element;
	leftButton: JSX.Element;
	rightButton: JSX.Element;
};

const View: React.FC<Props> = ({ title, leftButton, rightButton }) => {
	return (
		<div className="ptm-container ptm-bg-[#F3F7F8] ptm-px-4 ptm-py-10 ptm-flex ptm-flex-col ptm-gap-10">
			<div className="ptm-mx-auto ptm-text-center ptm-font-bold ptm-text-5xl ptm-max-w-5xl">
				{title}
			</div>
			<div className="ptm-flex ptm-flex-col ptm-gap-4 ptm-place-content-center ptm-items-center md:ptm-flex-row">
				{leftButton}
				{rightButton}
			</div>
			<div className="ptm-movie-wrap">
				<iframe
					className="lg:ptm-mx-auto"
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
