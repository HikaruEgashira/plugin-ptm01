import React from "react";
import cn from "classnames";
import type { WP_REST_API_Post } from "wp-types";

export type PostCardProps = {
	post: Pick<WP_REST_API_Post, "link" | "featured_media" | "title">;
	className?: string;
};

const idToUrl = (id: number) => `https://picsum.photos/id/${id}/200/100`;

export const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
	return (
		<a key={post.link} className={cn(className)}>
			<div className="ptm-h-48 ptm-rounded-xl ptm-border ptm-shadow-xl hover:ptm-shadow-2xl ptm-transition-all">
				<div className="ptm-flex ptm-flex-col ptm-items-center">
					<img
						className="ptm-object-cover ptm-w-full ptm-h-36 ptm-rounded-t-xl"
						alt="cardimage"
						src={idToUrl(post.featured_media ?? 0)}
					/>
					<div className="ptm-py-2 ptm-text-xl ptm-font-bold ptm-leading-8">
						{post.title.rendered}
					</div>
				</div>
			</div>
		</a>
	);
};
