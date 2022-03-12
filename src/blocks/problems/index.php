<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/problems',
	BLOCKS_DIR_URL . '/build/blocks/problems/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/problems/index.js' ),
);

wp_register_style(
	'ptm01-style/problems',
	BLOCKS_DIR_URL . '/build/blocks/problems/index.css',
	array(),
	NULL
);

register_block_type('ptm01/problems', array(
	'editor_script' => 'ptm01-block/problems',
	'style' => 'ptm01-style/problems'
));
