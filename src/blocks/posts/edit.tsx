import React from "react";
import type { BlockEditProps } from "@wordpress/blocks";
import { useSelect } from "@wordpress/data";
import type { Attribute } from ".";
import { useBlockProps } from "@wordpress/block-editor";
import type { WP_REST_API_Posts } from "wp-types";
import Posts from "~/stories/parts/Posts";

const View: React.FC<BlockEditProps<Attribute>> = () => {
	const blockProps = useBlockProps();
	const postsForTrainer = useSelect<WP_REST_API_Posts>((select) => {
		return select("core").getEntityRecords("postType", "post", {
			category: [41],
		});
	}, []);
	const postsForPlayerCoach = useSelect<WP_REST_API_Posts>((select) => {
		return select("core").getEntityRecords("postType", "post", {
			category: [42],
		});
	}, []);

	return (
		<div {...blockProps} className="grid gap-4">
			<div>
				<Posts posts={postsForTrainer} title="トレーナー向け" />
			</div>
			<div>
				<Posts posts={postsForPlayerCoach} title="選手・コーチ向け" />
			</div>
		</div>
	);
};

export default View;
