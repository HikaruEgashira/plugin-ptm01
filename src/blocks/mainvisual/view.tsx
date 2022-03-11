import React from "react";
import { Button } from "~/stories/Button";
import "./mainvisual.css";

const View: React.FC = () => {
	return (
		<div className="bg-[#F3F4F8] p-14 py-28 grid gap-14">
			<div className="font-bold text-5xl max-w-4xl mx-auto">
				パフォーマンスに関する混沌とした情報を管理し「言語化・可視化」した新時代の教科書
			</div>
			<div className="flex gap-4 place-content-center">
				<Button>Performance Treasure Map とは??</Button>
				<Button outline>オンラインストア</Button>
			</div>
			<div>
				<iframe
					className="px-10 mx-auto"
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
