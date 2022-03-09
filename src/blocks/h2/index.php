<?php
/**
 * Plugin Name:     hikaeptm
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'hikaeptm-block/h2',
	BLOCKS_DIR_URL . '/build/blocks/h2/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h2/index.js' ),
);

// wp_register_style(
// 	'hikaeptm-style/h2',
// 	BLOCKS_DIR_URL . '/build/blocks/h2/index.css',
// 	array(),
// 	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h2/index.css' ),
// );

register_block_type('hikaeptm/h2', array(
	'editor_script' => 'hikaeptm-block/h2',
	// 'style' => 'hikaeptm-style/h2',
));
