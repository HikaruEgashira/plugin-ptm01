import React from "react";
import { Card } from "../Card";

export type Props = {
	cardATitle: JSX.Element;
	cardAImageUrl: string;
	cardADescription: JSX.Element;
	cardALabel: JSX.Element;
	cardAUrl: string;

	cardBTitle: JSX.Element;
	cardBImageUrl: string;
	cardBDescription: JSX.Element;
	cardBLabel: JSX.Element;
	cardBUrl: string;
};

const View: React.FC<Props> = (props) => {
	return (
		<div className="ptm-container ptm-grid ptm-gap-4 ptm-py-8 ptm-px-4 ptm-mx-auto ptm-max-w-5xl ptm-bg-white md:ptm-grid-cols-2">
			<Card
				title={props.cardATitle}
				imageUrl={props.cardAImageUrl}
				description={props.cardADescription}
				bottomLabel={props.cardALabel}
				bottomUrl={props.cardAUrl}
			/>
			<Card
				title={props.cardBTitle}
				imageUrl={props.cardBImageUrl}
				description={props.cardBDescription}
				bottomLabel={props.cardBLabel}
				bottomUrl={props.cardBUrl}
			/>
		</div>
	);
};

export default View;
