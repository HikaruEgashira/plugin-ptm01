import React from "react";
import type { WP_REST_API_Post } from "wp-types";
import { PostCard } from "../PostCard";

export type Props = {
	title: string;
	posts: Pick<WP_REST_API_Post, "link" | "featured_media" | "title">[];
};

const View: React.FC<Props> = ({ title, posts }) => {
	return (
		<>
			<div className="container text-xl underline text-[#1A2F60]">{title}</div>
			<div className="py-4 lg:px-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
				{!posts ?? "Loading..."}
				{posts?.slice(2).map((post) => (
					<PostCard post={post}></PostCard>
				))}
			</div>
			<a className="text-right underline block" href="">
				トレーナー向けブログをもっとみる
			</a>
		</>
	);
};

export default View;
