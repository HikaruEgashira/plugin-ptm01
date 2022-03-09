<?php
/**
 * Plugin Name:     hikaeptm
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'hikaeptm-block/h1',
	BLOCKS_DIR_URL . '/build/blocks/h1/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h1/index.js' ),
);

// wp_register_style(
// 	'hikaeptm-style/h1',
// 	BLOCKS_DIR_URL . '/build/blocks/h1/index.css',
// 	array(),
// 	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h1/index.css' ),
// );

register_block_type('hikaeptm/h1', array(
	'editor_script' => 'hikaeptm-block/h1',
	// 'style' => 'hikaeptm-style/h1',
));
