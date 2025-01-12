// All your imports required for the config here BEFORE this line
import '@plone/volto/config';
import customBlocks from './components/Blocks/customBlocks';

const applyConfig = (config) => {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks = {
    ...config.blocks,
    initialBlocks: {
      ...config.blocks.initialBlocks,
      'News Item': ['title', 'description', 'byline', 'leadimage', 'slate'],
    },
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks,
    },
  };

  return config;
};

export default applyConfig;
