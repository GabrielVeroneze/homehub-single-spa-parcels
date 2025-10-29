const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: 'homehub',
        projectName: 'react-navbar',
        webpackConfigEnv,
        argv,
        outputSystemJS: false,
    })

    return merge(defaultConfig, {
        externals: ['@homehub/react-utils'],
    })
}
