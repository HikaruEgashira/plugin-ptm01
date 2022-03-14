import React from "react";
import type { BlockEditProps } from "@wordpress/blocks";
import { useSelect } from "@wordpress/data";
import type { Attribute } from ".";
import { useBlockProps } from "@wordpress/block-editor";
import type { WP_REST_API_Posts } from "wp-types";

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
				<h2>トレーナー</h2>
				<div className="flex gap-4">
					{!postsForTrainer && "Loading"}
					{postsForTrainer?.map((post) => (
						<a key={post.link} href={post.link} className="w-1/3">
							<div className="py-8 shadow-xl rounded-xl border hover:shadow-2xl transition-all h-64">
								<div className="mx-auto max-w-xs flex flex-col items-center gap-4">
									<img
										className="w-full grow"
										alt="cardimage"
										src={post.featured_media?.toString()}
									/>
									<div className="text-2xl font-bold">
										{post.title.rendered}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
			<div>
				<h2>選手・コーチ</h2>
				<div className="flex gap-4">
					{!postsForPlayerCoach && "Loading"}
					{postsForPlayerCoach?.map((post) => (
						<a key={post.link} href={post.link} className="w-1/3">
							<div className="py-8 shadow-xl rounded-xl border hover:shadow-2xl transition-all h-64">
								<div className="mx-auto max-w-xs flex flex-col items-center gap-4">
									<img
										className="h-36 w-full"
										alt="cardimage"
										src={post.featured_media?.toString()}
									/>
									<div className="text-2xl font-bold">
										{post.title.rendered}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default View;
