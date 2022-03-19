<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/posts',
	BLOCKS_DIR_URL . '/build/blocks/posts/index.js',
	array('react', 'wp-api-fetch', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/posts/index.js' ),
);

wp_register_style(
	'ptm01-style/posts',
	BLOCKS_DIR_URL . '/build/blocks/posts/index.css',
	array(),
	NULL
);

function dynamic_render_callback( $block_attributes, $content ) {
    $posts_for_trainer = wp_get_recent_posts( array(
		'numberposts' => 3,
		'category' => 41,
        'post_status' => 'publish',
    ) );
	$posts_for_player_coach = wp_get_recent_posts( array(
		'numberposts' => 3,
		'category' => 42,
        'post_status' => 'publish',
    ) );
	if ( count( $posts_for_trainer ) != 3 || count( $posts_for_player_coach ) != 3 ) {
        return sprintf(
			'
			<div class="lg:px-10">
				<div class="underline text-xl text-[#1A2F60]">トレーナー向け</div>
				<div class="underline text-xl text-[#1A2F60] mt-10">選手・コーチ向け</div>
			</div>
			'
		);
    }

    return sprintf(
		'
		<div class="lg:px-10">
		<div class="underline text-xl text-[#1A2F60]">トレーナー向け</div>
			<div class="py-4 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
				<a href="%1$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%2$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%3$s
							</div>
						</div>
					</div>
				</a>
				<a href="%4$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%5$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%6$s
							</div>
						</div>
					</div>
				</a>
				<a href="%7$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%8$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%9$s
							</div>
						</div>
					</div>
				</a>
			</div>
			<a class="text-right underline block" href="https://ptm01.com/topics/for-trainer/">トレーナー向けブログをもっとみる</a>
			<div class="underline text-xl text-[#1A2F60] mt-10">選手・コーチ向け</div>
			<div class="py-4 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
				<a href="%10$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%11$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%12$s
							</div>
						</div>
					</div>
				</a>
				<a href="%13$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%14$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%15$s
							</div>
						</div>
					</div>
				</a>
				<a href="%16$s">
					<div class="shadow-xl rounded-xl border hover:shadow-2xl transition-all h-48">
						<div class="flex flex-col items-center">
							<img
								class="w-full object-cover h-36 rounded-t-xl"
								alt="cardimage"
								src="%17$s"
							/>
							<div class="text-xl font-bold leading-8 py-2">
								%18$s
							</div>
						</div>
					</div>
				</a>
			</div>
			<a class="text-right underline block" href="https://ptm01.com/topics/for-player-coach/">選手・コーチ向けブログをもっとみる</a>
		</div>
		',
        esc_url( get_permalink( $posts_for_trainer[ 0 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_trainer[ 0 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_trainer[ 0 ]['ID'] ) ),
        esc_url( get_permalink( $posts_for_trainer[ 1 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_trainer[ 1 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_trainer[ 1 ]['ID'] ) ),
        esc_url( get_permalink( $posts_for_trainer[ 2 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_trainer[ 2 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_trainer[ 2 ]['ID'] ) ),
        esc_url( get_permalink( $posts_for_player_coach[ 0 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_player_coach[ 0 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_player_coach[ 0 ]['ID'] ) ),
        esc_url( get_permalink( $posts_for_player_coach[ 1 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_player_coach[ 1 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_player_coach[ 1 ]['ID'] ) ),
        esc_url( get_permalink( $posts_for_player_coach[ 2 ]['ID'] ) ),
        esc_url( get_the_post_thumbnail( $posts_for_player_coach[ 2 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_player_coach[ 2 ]['ID'] ) )
    );
}

// register_block_type('ptm01/posts', array(
// 	'editor_script' => 'ptm01-block/posts',
// 	'style' => 'ptm01-style/posts',
// 	'render_callback' => 'dynamic_render_callback'
// ));
