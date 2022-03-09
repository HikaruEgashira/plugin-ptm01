<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/h1',
	BLOCKS_DIR_URL . '/build/blocks/h1/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h1/index.js' ),
);

register_block_type('ptm01/h1', array(
	'editor_script' => 'ptm01-block/h1',
));
