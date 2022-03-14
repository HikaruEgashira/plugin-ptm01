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
    if ( count( $posts_for_trainer ) === 0 ) {
        return 'No posts';
    }
    return sprintf(
        '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
        esc_url( get_permalink( $posts_for_trainer[ 0 ]['ID'] ) ),
        esc_html( get_the_title( $posts_for_trainer[ 0 ]['ID'] ) )
    );
}

// register_block_type('ptm01/posts', array(
// 	'editor_script' => 'ptm01-block/posts',
// 	'style' => 'ptm01-style/posts',
// 	'render_callback' => 'dynamic_render_callback'
// ));
