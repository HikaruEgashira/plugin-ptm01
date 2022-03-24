import React from "react";
import { Card } from "../Card";

export type Props = {
	cardATitle: JSX.Element;
	cardAImageUrl: string;
	cardADescription: JSX.Element;
	cardAButton: JSX.Element;

	cardBTitle: JSX.Element;
	cardBImageUrl: string;
	cardBDescription: JSX.Element;
	cardBButton: JSX.Element;
};

const View: React.FC<Props> = (props) => {
	return (
		<div className="ptm-container ptm-grid ptm-gap-4 ptm-py-8 ptm-px-4 ptm-mx-auto ptm-max-w-5xl ptm-bg-white md:ptm-grid-cols-2">
			<Card
				title={props.cardATitle}
				imageUrl={props.cardAImageUrl}
				description={props.cardADescription}
				button={props.cardAButton}
			/>
			<Card
				title={props.cardBTitle}
				imageUrl={props.cardBImageUrl}
				description={props.cardBDescription}
				button={props.cardBButton}
			/>
		</div>
	);
};

export default View;
