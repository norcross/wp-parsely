<?php
/**
 * Recommended Widget file
 *
 * This provides a widget to put on a page, will have parsely recommended articles
 *
 * @category   Components
 * @package    WordPress
 * @subpackage Parse.ly
 */

/**
 * This is the class for the recommended widget
 *
 * @category   Class
 * @package    Parsely_Recommended_Widget
 */
class Parsely_Recommended_Widget extends WP_Widget {
	/**
	 * This is the constructor function
	 *
	 * @category   Function
	 * @package    WordPress
	 * @subpackage Parse.ly
	 */
	public function __construct() {
		parent::__construct(
			'Parsely_Recommended_Widget',
			__( 'Parse.ly Recommended Widget', 'wp-parsely' ),
			array(
				'classname'   => 'Parsely_Recommended_Widget',
				'description' => __( 'Display a list of post recommendations, personalized for a visitor or the current post.', 'wp-parsely' ),
			)
		);
	}

	/**
	 * Get the URL for the Recommendation API (GET /related).
	 *
	 * @see https://www.parse.ly/help/api/recommendations#get-related
	 *
	 * @internal While this is a public method now, this should be moved to a new class.
	 *
	 * @since 2.5.0
	 *
	 * @param string $api_key          Publisher Site ID (API key).
	 * @param int    $published_within Publication filter start date; see https://www.parse.ly/help/api/time for
	 *                                 formatting details. No restriction by default.
	 * @param string $sort             What to sort the results by. There are currently 2 valid options: `score`, which
	 *                                 will sort articles by overall relevance and `pub_date` which will sort results by
	 *                                 their publication date. The default is `score`.
	 * @param string $boost            Available for sort=score only. Sub-sort value to re-rank relevant posts that
	 *                                 received high e.g. views; default is undefined.
	 * @param int    $return_limit     Number of records to retrieve; defaults to "10".
	 * @return string API URL.
	 */
	public function get_api_url( $api_key, $published_within, $sort, $boost, $return_limit ) {
		$related_api_endpoint = 'https://api.parsely.com/v2/related';

		$query_args = array(
			'apikey' => $api_key,
			'sort'   => $sort,
			'boost'  => $boost,
			'limit'  => $return_limit,
		);

		if ( 0 !== (int) $published_within ) {
			$query_args['pub_date_start'] = $published_within . 'd';
		}

		return add_query_arg( $query_args, $related_api_endpoint );
	}

	/**
	 * This is the widget function
	 *
	 * @category   Function
	 * @package    WordPress
	 * @subpackage Parse.ly
	 * @param array $args Widget Arguments.
	 * @param array $instance Values saved to the db.
	 */
	public function widget( $args, $instance ) {
		/** This filter is documented in wp-includes/widgets/class-wp-widget-pages.php */
		$title = apply_filters( 'widget_title', $instance['title'] );

		$allowed_tags = wp_kses_allowed_html( 'post' );
		$title_html   = $args['before_widget'] . $args['before_title'] . $title . $args['after_title'];
		echo wp_kses( $title_html, $allowed_tags );

		// Set up the variables.
		$options = get_option( 'parsely' );
		if ( is_array( $options ) && array_key_exists( 'apikey', $options ) && array_key_exists( 'api_secret', $options ) && ! empty( $options['api_secret'] ) ) {
			$full_url = $this->get_api_url(
					$options['apikey'],
					$instance['published_within'],
					$instance['sort'],
					$instance['boost'],
					$instance['return_limit']
			);
			?>
			<script data-cfasync="false">
				// adapted from https://stackoverflow.com/questions/7486309/how-to-make-script-execution-wait-until-jquery-is-loaded

				function defer(method) {
					if (window.jQuery) {
						method();
					} else {
						setTimeout(function() { defer(method); }, 50);
					}
				}

				function widgetLoad() {
					var parsely_results = [];

					uuid = false;
					// regex stolen from Mozilla's docs
					var cookieVal = document.cookie.replace(/(?:(?:^|.*;\s*)_parsely_visitor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
					if ( cookieVal ) {
						var uuid = JSON.parse(unescape(cookieVal))['id'];
					}

					var full_url = '<?php echo esc_js( esc_url_raw( $full_url ) ); ?>';

					var img_src = "<?php echo ( isset( $instance['img_src'] ) ? esc_js( $instance['img_src'] ) : null ); ?>";

					var display_author = "<?php echo ( isset( $instance['display_author'] ) ? wp_json_encode( boolval( $instance['display_author'] ) ) : false ); ?>";

					var display_direction = "<?php echo ( isset( $instance['display_direction'] ) ? esc_js( $instance['display_direction'] ) : null ); ?>";

					var itm_medium = "site_widget";
					var itm_source = "parsely_recommended_widget";

					var personalized = "<?php echo wp_json_encode( boolval( $instance['personalize_results'] ) ); ?>";
					if ( personalized && uuid ) {
						full_url += '&uuid=';
						full_url += uuid;

					}
					else {
						full_url += '&url=';
						full_url += '<?php echo wp_json_encode( esc_url_raw( get_permalink() ) ); ?>';

					}
					var parentDiv = jQuery.find('#<?php echo esc_attr( $this->id ); ?>');
					if (parentDiv.length === 0) {
						parentDiv = jQuery.find('.Parsely_Recommended_Widget');
					}
					// make sure page is not attempting to load widget twice in the same spot
					if (jQuery(parentDiv).find("div.parsely-recommendation-widget").length != 0) {
						return;
					}

					var outerDiv = jQuery('<div>').addClass('parsely-recommendation-widget').appendTo(parentDiv);
					if (img_src !== 'none') {
						outerDiv.addClass('display-thumbnail');
					}
					if (display_direction) {
						outerDiv.addClass('list-' + display_direction);
					}

					var outerList = jQuery('<ul>').addClass('parsely-recommended-widget').appendTo(outerDiv);
					jQuery.getJSON( full_url, function (data) {
						jQuery.each(data.data, function(key, value) {
							var widgetEntry = jQuery('<li>')
								.addClass('parsely-recommended-widget-entry')
								.attr('id', 'parsely-recommended-widget-item' + key);

							var textDiv = jQuery('<div>').addClass('parsely-text-wrapper');

							if (img_src === 'parsely_thumb') {
								jQuery('<img>').attr('src', value['thumb_url_medium']).appendTo(widgetEntry);
							}
							else if (img_src === 'original') {
								jQuery('<img>').attr('src', value['image_url']).appendTo(widgetEntry);
							}

							var cmp_cmp = '?itm_campaign=<?php echo esc_attr( $this->id ); ?>';
							var cmp_med = '&itm_medium=' + itm_medium;
							var cmp_src = '&itm_source=' + itm_source;
							var cmp_con = '&itm_content=widget_item-' + key;
							var itm_link = value['url'] + cmp_cmp + cmp_med + cmp_src + cmp_con;

							var postTitle = jQuery('<div>').attr('class', 'parsely-recommended-widget-title');
							var postLink = jQuery('<a>').attr('href', itm_link).text(value['title']);
							postTitle.append(postLink);
							textDiv.append(postTitle);

							if ( display_author ) {
								var authorLink = jQuery('<div>').attr('class', 'parsely-recommended-widget-author').text(value['author']);
								textDiv.append(authorLink);
							}

							widgetEntry.append(textDiv);



							// set up the rest of entry
							outerList.append(widgetEntry);
						});
						outerDiv.append(outerList);
					});

				}
				defer(widgetLoad);


			</script>
			<?php
		} else {
			?>
			<p>
			you must set the Parsely API Secret for this widget to work!
			</p>
			<?php
		}

		?>


		<?php
		echo wp_kses( $args['after_widget'], $allowed_tags );
	}

	/**
	 * Migrates previous display_options settings
	 *
	 * @category   Function
	 * @package    WordPress
	 * @subpackage Parse.ly
	 * @param array $instance Values saved to the db.
	 */
	private function migrate_old_fields( $instance ) {
		if ( ! empty( $instance['display_options'] ) && is_array( $instance['display_options'] ) ) {
			if ( empty( $instance['img_src'] ) ) {
				$instance['img_src'] = in_array( 'display_thumbnail', $instance['display_options'], true ) ? 'parsely_thumb' : 'none';
			}

			if ( empty( $instance['display_author'] ) ) {
				$instance['display_author'] = in_array( 'display_author', $instance['display_options'], true );
			}
		}
	}


	/**
	 * This is the form function
	 *
	 * @category   Function
	 * @package    WordPress
	 * @subpackage Parse.ly
	 * @param array $instance Values saved to the db.
	 */
	public function form( $instance ) {
		$this->migrate_old_fields( $instance );

		// editable fields: title.
		$title               = ! empty( $instance['title'] ) ? $instance['title'] : '';
		$return_limit        = ! empty( $instance['return_limit'] ) ? $instance['return_limit'] : 5;
		$display_direction   = ! empty( $instance['display_direction'] ) ? $instance['display_direction'] : 'vertical';
		$published_within    = ! empty( $instance['published_within'] ) ? $instance['published_within'] : 0;
		$sort                = ! empty( $instance['sort'] ) ? $instance['sort'] : 'score';
		$boost               = ! empty( $instance['boost'] ) ? $instance['boost'] : 'views';
		$personalize_results = ! empty( $instance['personalize_results'] ) ? $instance['personalize_results'] : false;
		$img_src             = ! empty( $instance['img_src'] ) ? $instance['img_src'] : 'parsely_thumb';
		$display_author      = ! empty( $instance['display_author'] ) ? $instance['display_author'] : false;

		$instance['return_limit']        = $return_limit;
		$instance['display_direction']   = $display_direction;
		$instance['published_within']    = $published_within;
		$instance['sort']                = $sort;
		$instance['boost']               = $boost;
		$instance['personalize_results'] = $personalize_results;
		$instance['img_src']             = $img_src;
		$instance['display_author']      = $display_author;

		$boost_params = $this->get_boost_params();
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>">Title:</label>
			<br>
			<input type="text" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" value="<?php echo esc_attr( $title ); ?>" class="widefat" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'published_within' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'published_within_label' ) ); ?>">Published within</label>
			<input type="number" id="<?php echo esc_attr( $this->get_field_id( 'published_within' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'published_within' ) ); ?>" value="<?php echo esc_attr( (string) $instance['published_within'] ); ?>" min="0" max="30"
			       class="tiny-text" aria-labelledby="<?php echo esc_attr( $this->get_field_id( 'published_within_label' ) ); ?> <?php echo esc_attr( $this->get_field_id( 'published_within' ) ); ?> <?php echo esc_attr( $this->get_field_id( 'published_within_unit' ) ); ?>" />
			<span id="<?php echo esc_attr( $this->get_field_id( 'published_within_unit' ) ); ?>"> days (0 for no limit).</span>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'return_limit' ) ); ?>">Number of posts to show (max 20): </label>
			<input type="number" id="<?php echo esc_attr( $this->get_field_id( 'return_limit' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'return_limit' ) ); ?>" value="<?php echo esc_attr( (string) $instance['return_limit'] ); ?>" min="1" max="20" class="tiny-text" />
		</p>
		<p>
			<fieldset>
				<legend>Display entries: </legend>
				<p>
					<input type="radio" id="<?php echo esc_attr( $this->get_field_id( 'display_direction_horizontal' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'display_direction' ) ); ?>"<?php checked( $instance['display_direction'], 'horizontal' ); ?> value="horizontal" />
					<label for="<?php echo esc_attr( $this->get_field_id( 'display_direction_horizontal' ) ); ?>">Horizontally</label>
					<br />
					<input type="radio" id="<?php echo esc_attr( $this->get_field_id( 'display_direction_vertical' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'display_direction' ) ); ?>"<?php checked( $instance['display_direction'], 'vertical' ); ?> value="vertical" />
					<label for="<?php echo esc_attr( $this->get_field_id( 'display_direction_vertical' ) ); ?>">Vertically</label>
				</p>
			</fieldset>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'sort' ) ); ?>">Sort by:</label>
			<br>
			<select id="<?php echo esc_attr( $this->get_field_id( 'sort' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'sort' ) ); ?>" class="widefat">
				<option<?php selected( $instance['sort'], 'score' ); ?> value="score">Score (relevancy, boostable)</option>
				<option<?php selected( $instance['sort'], 'pub_date' ); ?> value="pub_date">Publish date (not boostable)</option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'boost' ) ); ?>">Boost by:</label>
			<br>
			<select id="<?php echo esc_attr( $this->get_field_id( 'boost' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'boost' ) ); ?>" class="widefat">
				<?php foreach ( $boost_params as $boost_param => $description ) { ?>
				<option<?php selected( $instance['boost'], $boost_param ); ?> value="<?php echo esc_attr( $boost_param ); ?>"><?php echo esc_html( $description ); ?></option>
			<?php } ?>
			</select>

		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'img_src' ) ); ?>">Image source:</label>
			<br>
			<select id="<?php echo esc_attr( $this->get_field_id( 'img_src' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'img_src' ) ); ?>" class="widefat">
				<option<?php selected( $instance['img_src'], 'parsely_thumb' ); ?> value="parsely_thumb">Parse.ly generated thumbnail (85x85px)</option>
				<option<?php selected( $instance['img_src'], 'original' ); ?> value="original">Original image</option>
				<option<?php selected( $instance['img_src'], 'none' ); ?> value="none">No image</option>
			</select>
		</p>
		<p>
			<input type="checkbox" id="<?php echo esc_attr( $this->get_field_id( 'display_author' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'display_author' ) ); ?>" value="display_author"<?php checked( $instance['display_author'], 'display_author' ); ?> />
			<label for="<?php echo esc_attr( $this->get_field_id( 'display_author' ) ); ?>">Display author</label>
			<br />
			<input type="checkbox" id="<?php echo esc_attr( $this->get_field_id( 'personalize_results' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'personalize_results' ) ); ?>" value="personalize_results"<?php checked( $instance['personalize_results'], 'personalize_results' ); ?> />
			<label for="<?php echo esc_attr( $this->get_field_id( 'personalize_results' ) ); ?>">Personalize recommended results</label>
		</p>



		<?php
	}

	/**
	 * This is the update function
	 *
	 * @category   Function
	 * @package    WordPress
	 * @subpackage Parse.ly
	 * @param array $new_instance The new values for the db.
	 * @param array $old_instance Values saved to the db.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance                        = $old_instance;
		$instance['title']               = trim( wp_strip_all_tags( $new_instance['title'] ) );
		$instance['published_within']    = (int) trim( $new_instance['published_within'] );
		$instance['return_limit']        = (int) $new_instance['return_limit'] <= 20 ? $new_instance['return_limit'] : '20';
		$instance['display_direction']   = trim( $new_instance['display_direction'] );
		$instance['sort']                = trim( $new_instance['sort'] );
		$instance['boost']               = trim( $new_instance['boost'] );
		$instance['display_author']      = $new_instance['display_author'];
		$instance['personalize_results'] = $new_instance['personalize_results'];
		$instance['img_src']             = trim( $new_instance['img_src'] );
		return $instance;
	}

	private function get_boost_params() {
		return array(
			'views'                 => __( 'Page views', 'wp-parsely' ),
			'mobile_views'          => __( 'Page views on mobile devices', 'wp-parsely' ),
			'tablet_views'          => __( 'Page views on tablet devices', 'wp-parsely' ),
			'desktop_views'         => __( 'Page views on desktop devices', 'wp-parsely' ),
			'visitors'              => __( 'Unique page visitors, total', 'wp-parsely' ),
			'visitors_new'          => __( 'New visitors', 'wp-parsely' ),
			'visitors_returning'    => __( 'Returning visitors', 'wp-parsely' ),
			'engaged_minutes'       => __( 'Total engagement time in minutes', 'wp-parsely' ),
			'avg_engaged'           => __( 'Engaged minutes spent by total visitors', 'wp-parsely' ),
			'avg_engaged_new'       => __( 'Average engaged minutes spent by new visitors', 'wp-parsely' ),
			'avg_engaged_returning' => __( 'Average engaged minutes spent by returning visitors', 'wp-parsely' ),
			'social_interactions'   => __( 'Total for Facebook, Twitter, LinkedIn, and Pinterest', 'wp-parsely' ),
			'fb_interactions'       => __( 'Count of Facebook shares, likes, and comments', 'wp-parsely' ),
			'tw_interactions'       => __( 'Count of Twitter tweets and retweets', 'wp-parsely' ),
			'li_interactions'       => __( 'Count of LinkedIn social interactions', 'wp-parsely' ),
			'pi_interactions'       => __( 'Count of Pinterest pins', 'wp-parsely' ),
			'social_referrals'      => __( 'Page views where the referrer was any social network', 'wp-parsely' ),
			'fb_referrals'          => __( 'Page views where the referrer was facebook.com', 'wp-parsely' ),
			'tw_referrals'          => __( 'Page views where the referrer was twitter.com', 'wp-parsely' ),
			'li_referrals'          => __( 'Page views where the referrer was linkedin.com', 'wp-parsely' ),
			'pi_referrals'          => __( 'Page views where the referrer was pinterest.com', 'wp-parsely' ),
		);
	}
}
