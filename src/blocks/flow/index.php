<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/flow',
	BLOCKS_DIR_URL . '/build/blocks/flow/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/flow/index.js' ),
);

wp_register_style(
	'ptm01-style/flow',
	BLOCKS_DIR_URL . '/build/blocks/flow/index.css',
	array(),
	NULL
);

register_block_type('ptm01/flow', array(
	'editor_script' => 'ptm01-block/flow',
	'style' => 'ptm01-style/flow'
));
