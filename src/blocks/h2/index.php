<?php
/**
 * Plugin Name:     ptm01
 * Author:          hikae
 * License:         GPL-2.0-or-later
 */
wp_register_script(
	'ptm01-block/h2',
	BLOCKS_DIR_URL . '/build/blocks/h2/index.js',
	array('react', 'wp-block-editor', 'wp-blocks', 'wp-element'),
	filemtime( BLOCKS_DIR_PATH . '/build/blocks/h2/index.js' ),
);

register_block_type('ptm01/h2', array(
	'editor_script' => 'ptm01-block/h2',
));
