import React from "react";
import { Button } from "~/stories/Button";
import "./mainvisual.css";

export type Attribute = {
	title: JSX.Element;
	leftButton: JSX.Element;
	rightButton: JSX.Element;
};

export const StyledButton: React.FC<{
	label: JSX.Element;
	url: string;
	outline?: boolean;
}> = ({ label, url, outline = false }) => (
	<a href={url}>
		<Button outline={outline} className="hover:shadow-2xl transition-all">
			{label}
		</Button>
	</a>
);

const View: React.FC<Attribute> = ({ title, leftButton, rightButton }) => {
	return (
		<div className="bg-[#F3F4F8] p-4 md:p-14 flex flex-col gap-14">
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
