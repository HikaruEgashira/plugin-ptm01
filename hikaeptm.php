<?php
/**
 * Plugin Name:     hikaeptm
 * Description:     create by hikae
 * Version:         0.1.0
 * Author:          hikae
 * Author URI:      https://egahika.dev/
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 */
use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class Bootstrap {

	/**
	 * constructor
	 */
	public function __construct() {
		add_action( 'plugins_loaded', [ $this, '_bootstrap' ] );
	}

	/**
	 * bootstrap
	 */
	public function _bootstrap() {
		add_action( 'init', [ $this, '_register_blocks' ] );
	}

	/**
	 * Register blocks.
	 */
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
}

define( 'BLOCKS_DIR_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'BLOCKS_DIR_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

new Bootstrap();
