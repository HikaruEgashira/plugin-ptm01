import React from "react";

export type TextProps = {
	label: string;
};

export const Text: React.FC<TextProps> = ({ label }) => {
	return <div className="text-base-content">{label}</div>;
};
