<?php
/**
 * Plugin Name:     ptm01
 * Description:     create by hikae
 * Version:         0.1.0
 * Author:          hikae
 * Author URI:      https://egahika.dev/
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 */

class Bootstrap {
	public function __construct() {
		add_action( 'plugins_loaded', [ $this, '_bootstrap' ] );
	}

	public function _bootstrap() {
		add_action( 'init', [ $this, '_register_blocks' ] );
		add_action( 'wp_enqueue_scripts', [ $this, '_import_cdn'] );
		// add_action( 'wp_enqueue_scripts', [ $this, '_register_style' ] );
	}

	public function _import_cdn() {
		wp_enqueue_style('swiper', 'https://unpkg.com/swiper@8/swiper-bundle.min.css');
		wp_enqueue_script( 'swiper', 'https://unpkg.com/swiper@8/swiper-bundle.min.js', array(), '8', true);
	}

	public function _register_blocks() {
		$iterator = new RecursiveDirectoryIterator( BLOCKS_DIR_PATH . '/build/blocks', FilesystemIterator::SKIP_DOTS );
		$iterator = new RecursiveIteratorIterator( $iterator );
		foreach ( $iterator as $file ) {
			if ( ! $file->isFile() ) {
				continue;
			}

			if ( 'index.php' !== $file->getBasename() ) {
				continue;
			}

			include_once( realpath( $file->getPathname() ) );
		}
	}

	public function _register_style() {
		wp_register_style(
			'tailwind',
			BLOCKS_DIR_URL . '/build/tailwind.css',
			array(),
			NULL
		);
		wp_enqueue_style('tailwind');
	}
}

define( 'BLOCKS_DIR_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'BLOCKS_DIR_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

new Bootstrap();
