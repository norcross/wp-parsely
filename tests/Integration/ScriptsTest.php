<?php
/**
 * Parsely Scripts tests.
 *
 * @package Parsely\Tests
 */

declare(strict_types=1);

namespace Parsely\Tests\Integration;

use Parsely\Parsely;
use Parsely\Scripts;
use WP_Scripts;

/**
 * Parsely Scripts tests.
 */
final class ScriptsTest extends TestCase {
	/**
	 * Internal variable.
	 *
	 * @var Scripts $scripts Holds the Scripts object
	 */
	private static $scripts;

	/**
	 * The setUp run before each test
	 */
	public function set_up(): void {
		global $wp_scripts;

		parent::set_up();

		// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$wp_scripts    = new WP_Scripts();
		self::$scripts = new Scripts( new Parsely() );

		// Set the default options prior to each test.
		TestCase::set_options();
	}

	/**
	 * Test JavaScript registrations.
	 *
	 * @covers \Parsely\Scripts::register_scripts
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @group enqueue-js
	 */
	public function test_parsely_register_scripts(): void {
		self::$scripts->register_scripts();

		// Confirm that API script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-api',
			array( 'registered' ),
			array( 'enqueued' )
		);

		// Confirm that tracker script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'registered' ),
			array( 'enqueued' )
		);
	}

	/**
	 * Test the tracker script enqueue.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_tracker
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::post_has_trackable_status
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @uses \Parsely\Scripts::register_scripts
	 * @uses \Parsely\Scripts::script_loader_tag
	 * @group enqueue-js
	 */
	public function test_enqueue_js_tracker(): void {
		$this->go_to_new_post();
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		// Confirm that JS tracker script is registered and enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'registered', 'enqueued' )
		);
	}

	/**
	 * Test the tracker script enqueue.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_tracker
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::post_has_trackable_status
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @uses \Parsely\Scripts::register_scripts
	 * @uses \Parsely\Scripts::script_loader_tag
	 * @group enqueue-js
	 * @group insert-js
	 */
	public function test_enqueue_js_tracker_with_cloudflare(): void {
		add_filter( 'wp_parsely_enable_cfasync_attribute', '__return_true' );

		ob_start();
		$this->go_to_new_post();
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		wp_print_scripts();
		$output = ob_get_clean();

		self::assertSame(
			// phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
			"<script data-cfasync=\"false\" type='text/javascript' data-parsely-site=\"blog.parsely.com\" src='https://cdn.parsely.com/keys/blog.parsely.com/p.js?ver=" . Parsely::VERSION . "' id=\"parsely-cfg\"></script>\n",
			$output,
			'Tracker script tag was not printed correctly'
		);
	}

	/**
	 * Test the wp_parsely_load_js_tracker filter
	 * When it returns false, the tracking script should not be enqueued.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_tracker
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::post_has_trackable_status
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 */
	public function test_wp_parsely_load_js_tracker_filter(): void {
		add_filter( 'wp_parsely_load_js_tracker', '__return_false' );

		$this->go_to_new_post();
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		// Since wp_parsely_load_js_tracker is set to false, enqueue should fail.
		// Confirm that tracker script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'registered' ),
			array( 'enqueued' )
		);
	}

	/**
	 * Test the API init script enqueue.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_api
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @uses \Parsely\Scripts::register_scripts
	 * @group enqueue-js
	 */
	public function test_enqueue_js_api_no_secret(): void {
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_api();

		// Since no secret is provided, enqueue should fail.
		// Confirm that API script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-api',
			array( 'registered' ),
			array( 'enqueued' )
		);
	}

	/**
	 * Test the API init script enqueue.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_api
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @uses \Parsely\Scripts::register_scripts
	 * @uses \Parsely\Scripts::script_loader_tag
	 * @group enqueue-js
	 */
	public function test_enqueue_js_api_with_secret(): void {
		self::$scripts->register_scripts();
		self::set_options( array( 'api_secret' => 'hunter2' ) );
		self::$scripts->enqueue_js_api();

		// Confirm that API script is registered and enqueued.
		$this->assert_script_statuses(
			'wp-parsely-api',
			array( 'registered', 'enqueued' )
		);
	}

	/**
	 * Make sure that disabling authenticated user tracking works.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_tracker
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::parsely_is_user_logged_in
	 * @group enqueue-js
	 * @group settings
	 */
	public function test_do_not_track_logged_in_users(): void {
		TestCase::set_options( array( 'track_authenticated_users' => false ) );
		$new_user = $this->create_test_user( 'bill_brasky' );
		wp_set_current_user( $new_user );

		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		// As track_authenticated_users options is false, enqueue should fail.
		// Confirm that tracker script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'registered' ),
			array( 'enqueued' )
		);
	}

	/**
	 * Make sure that disabling authenticated user tracking works in a multisite
	 * environment. The test simulates authenticated and unauthenticated user
	 * activity.
	 *
	 * @covers \Parsely\Scripts::enqueue_js_tracker
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_asset_cache_buster
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\Parsely::parsely_is_user_logged_in
	 * @uses \Parsely\Parsely::post_has_trackable_status
	 * @uses \Parsely\Parsely::update_metadata_endpoint
	 * @uses \Parsely\Scripts::register_scripts
	 * @uses \Parsely\Scripts::script_loader_tag
	 * @group enqueue-js
	 * @group settings
	 */
	public function test_do_not_track_logged_in_users_multisite(): void {
		if ( ! is_multisite() ) {
			self::markTestSkipped( "this test can't run without multisite" );
		}

		// Set up users and blogs.
		$first_blog_admin  = $this->create_test_user( 'optimus_prime' );
		$second_blog_admin = $this->create_test_user( 'megatron' );
		$first_blog        = $this->create_test_blog( 'autobots', $first_blog_admin );
		$second_blog       = $this->create_test_blog( 'decepticons', $second_blog_admin );

		// These custom options will be used for both blogs.
		$custom_options = array(
			'track_authenticated_users' => false, // Don't track logged-in users.
			'apikey'                    => 'blog.parsely.com',
		);

		// Only first admin is logged-in throughout the test.
		wp_set_current_user( $first_blog_admin );

		// -- Test first blog.
		// phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.switch_to_blog_switch_to_blog
		switch_to_blog( $first_blog );
		TestCase::set_options( $custom_options );
		$this->go_to_new_post();

		// Check that we're on the first blog and that first user is a member.
		self::assertEquals( get_current_blog_id(), $first_blog );
		self::assertTrue( is_user_member_of_blog( $first_blog_admin, $first_blog ) );

		// Enqueue JS tracker.
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		// Current user is logged-in and track_authenticated_users is false so enqueue
		// should fail. Confirm that tracker script is registered but not enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'registered' ),
			array( 'enqueued' )
		);

		// -- Test second blog.
		// phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.switch_to_blog_switch_to_blog
		switch_to_blog( $second_blog );
		TestCase::set_options( $custom_options );
		$this->go_to_new_post();

		// Check that we're on the second blog and that first user is not a member.
		self::assertEquals( get_current_blog_id(), $second_blog );
		self::assertFalse( is_user_member_of_blog( $first_blog_admin, get_current_blog_id() ) );

		// Enqueue JS tracker.
		self::$scripts->register_scripts();
		self::$scripts->enqueue_js_tracker();

		// First user is not logged-in to the second blog, so track_authenticated_users value
		// is irrelevant. Confirm that tracker script is registered and enqueued.
		$this->assert_script_statuses(
			'wp-parsely-tracker',
			array( 'enqueued', 'registered' )
		);
	}

	/**
	 * Assert multiple enqueueing statuses for a script.
	 *
	 * @param string $handle Script handle to test.
	 * @param array  $assert_true Statuses that should assert to true.
	 * @param array  $assert_false Statuses that should assert to false.
	 * @return void
	 */
	public function assert_script_statuses( string $handle, array $assert_true = array(), array $assert_false = array() ): void {
		foreach ( $assert_true as $status ) {
			self::assertTrue(
				wp_script_is( $handle, $status ),
				"Unexpected script status: $handle status should be '$status'"
			);
		}

		foreach ( $assert_false as $status ) {
			self::assertFalse(
				wp_script_is( $handle, $status ),
				"Unexpected script status: $handle status should NOT be '$status'"
			);
		}
	}
}
