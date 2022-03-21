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
			<div className="ptm-shadow-xl ptm-rounded-xl ptm-border hover:ptm-shadow-2xl ptm-transition-all ptm-h-48">
				<div className="flex flex-col items-center">
					<img
						className="ptm-w-full ptm-object-cover ptm-h-36 ptm-rounded-t-xl"
						alt="cardimage"
						src={idToUrl(post.featured_media ?? 0)}
					/>
					<div className="ptm-text-xl ptm-font-bold ptm-leading-8 ptm-py-2">
						{post.title.rendered}
					</div>
				</div>
			</div>
		</a>
	);
};
