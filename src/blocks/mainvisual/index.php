<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/mainvisual',
	BLOCKS_DIR_URL . '/build/blocks/mainvisual/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/mainvisual/index.js' ),
);

wp_register_style(
	'ptm01-style/mainvisual',
	BLOCKS_DIR_URL . '/build/blocks/mainvisual/index.css',
	array(),
	NULL
);

register_block_type('ptm01/mainvisual', array(
	'editor_script' => 'ptm01-block/mainvisual',
	'style' => 'ptm01-style/mainvisual'
));
