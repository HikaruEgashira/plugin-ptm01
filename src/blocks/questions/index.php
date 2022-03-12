<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/questions',
	BLOCKS_DIR_URL . '/build/blocks/questions/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/questions/index.js' ),
);

wp_register_style(
	'ptm01-style/questions',
	BLOCKS_DIR_URL . '/build/blocks/questions/index.css',
	array(),
	NULL
);

register_block_type('ptm01/questions', array(
	'editor_script' => 'ptm01-block/questions',
	'style' => 'ptm01-style/questions'
));
