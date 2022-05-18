/**
 * External dependencies
 */
import { Panel, PanelBody, PanelHeader } from '@wordpress/components';
import { PluginSidebar } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { ReactComponent as LeafIcon } from '../../../images/parsely-logo-green.svg';
import PostCard from './components/PostCard.jsx';

const BLOCK_PLUGIN_ID = 'wp-parsely-block-editor-sidebar';

// TODO: Remove hardcoded card titles
const titles = [ 'Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5' ];

const renderSidebar = () => {
	return (
		<PluginSidebar name="wp-parsely-sidebar" title="Parse.ly">
			<Panel>
				<PanelHeader>Parse.ly Content Helper</PanelHeader>
				<PanelBody>
					<p>Related posts that performed well in the past:</p>
					{ titles.map( ( t ) => <PostCard key={ t } title={ t } /> ) }
				</PanelBody>
			</Panel>
		</PluginSidebar> );
};

// Registering Plugin to WordPress Block Editor.
registerPlugin( BLOCK_PLUGIN_ID, {
	icon: LeafIcon,
	render: renderSidebar,
} );
