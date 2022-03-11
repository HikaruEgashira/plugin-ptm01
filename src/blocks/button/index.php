<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/button',
	BLOCKS_DIR_URL . '/build/blocks/button/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/button/index.js' ),
);

wp_register_style(
	'ptm01-style/button',
	BLOCKS_DIR_URL . '/build/blocks/button/index.css',
	array(),
	NULL
);

register_block_type('ptm01/button', array(
	'editor_script' => 'ptm01-block/button',
	'style' => 'ptm01-style/button'
));
