<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/feature',
	BLOCKS_DIR_URL . '/build/blocks/feature/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/feature/index.js' ),
);

wp_register_style(
	'ptm01-style/feature',
	BLOCKS_DIR_URL . '/build/blocks/feature/index.css',
	array(),
	NULL
);

register_block_type('ptm01/feature', array(
	'editor_script' => 'ptm01-block/feature',
	'style' => 'ptm01-style/feature'
));
