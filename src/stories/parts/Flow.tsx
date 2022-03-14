import React from "react";
import { Card } from "../Card";

export type Props = {
	cardATitle: JSX.Element;
	cardAImageUrl: string;
	cardADescription: JSX.Element;
	cardALabel: JSX.Element;

	cardBTitle: JSX.Element;
	cardBImageUrl: string;
	cardBDescription: JSX.Element;
	cardBLabel: JSX.Element;
};

const View: React.FC<Props> = (props) => {
	return (
		<>
			<div className="py-10 lg:px-10 w-full max-w-5xl mx-auto grid grid-cols-2 gap-4">
				<Card
					title={props.cardATitle}
					imageUrl={props.cardAImageUrl}
					description={props.cardADescription}
					bottomLabel={props.cardALabel}
				/>
				<Card
					title={props.cardBTitle}
					imageUrl={props.cardBImageUrl}
					description={props.cardBDescription}
					bottomLabel={props.cardBLabel}
				/>
			</div>
		</>
	);
};

export default View;
