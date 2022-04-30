import React from "react";
import "./mainvisual.css";

export type Props = {
	title: JSX.Element;
	leftButton: JSX.Element;
	rightButton: JSX.Element;
	movieUrl: string;
};

// "https://www.youtube.com/embed/q7s81feOwmM?controls=0"
const View: React.FC<Props> = ({
	title,
	leftButton,
	rightButton,
	movieUrl,
}) => {
	return (
		<div className="ptm-container ptm-flex ptm-flex-col ptm-gap-10 ptm-py-10 ptm-px-4 ptm-tracking-wide ptm-leading-relaxed ptm-bg-[#F3F7F8]">
			<div className="ptm-mx-auto ptm-max-w-5xl ptm-text-3xl ptm-font-bold ptm-text-center md:ptm-text-4xl md:ptm-leading-relaxed">
				{title}
			</div>
			<div className="ptm-flex ptm-flex-col ptm-gap-4 ptm-items-center ptm-place-content-center md:ptm-flex-row">
				{leftButton}
				{rightButton}
			</div>
			<div className="movie-wrap">
				<iframe
					width={800}
					height={450}
					src={movieUrl}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default View;
