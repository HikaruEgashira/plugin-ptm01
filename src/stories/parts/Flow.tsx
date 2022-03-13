import React from "react";
import { Card } from "../Card";

export type Attribute = {};

const View: React.FC<Attribute> = () => {
	return (
		<>
			<div className="py-10 lg:px-10 w-full max-w-5xl mx-auto grid grid-cols-2 gap-4">
				<Card
					imageUrl="./undraw_secure_files_re_6vdh.svg"
					title="PTM Community"
					description={
						<>
							<div>K-Map購入者限定の</div>
							<div>Facebookコミュニティ</div>
						</>
					}
					bottomLabel="無料"
				/>
				<Card
					imageUrl="./undraw_team_collaboration_re_ow29.svg"
					title="PTM Lab"
					description={
						<>
							<div>みんなで最高のMapをつくる</div>
							<div>コミュニティ</div>
						</>
					}
					bottomLabel="月額 990円"
				/>
			</div>
		</>
	);
};

export default View;
