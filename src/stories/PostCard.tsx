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
			<div className="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
				<div className="flex flex-col items-center">
					<img
						className="w-full object-cover h-36 rounded-t-xl"
						alt="cardimage"
						src={idToUrl(post.featured_media ?? 0)}
					/>
					<div className="text-xl font-bold leading-8 py-2">
						{post.title.rendered}
					</div>
				</div>
			</div>
		</a>
	);
};
