<?php
/**
 * Class for Related API (`/related`).
 *
 * @package Parsely
 * @since   3.2.0
 */

declare(strict_types=1);

namespace Parsely\RemoteAPI;

use Parsely\Parsely;

/**
 * Class for Related API (`/related`).
 *
 * @since 3.2.0
 */
class Related_API extends Remote_API_Base {
	protected const ENDPOINT     = '/related';
	protected const QUERY_FILTER = 'wp_parsely_related_endpoint_args';

	/**
	 * Indicates whether the endpoint is public or protected behind permissions.
	 *
	 * @since 3.7.0
	 * @var bool
	 */
	protected $is_public_endpoint = true;
}
