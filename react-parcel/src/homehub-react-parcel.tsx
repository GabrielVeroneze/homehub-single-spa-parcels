import React from 'react'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'
import Parcel from './Parcel'

const lifecycles = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Parcel,
    errorBoundary(err, info, props) {
        return null
    },
})

export const { bootstrap, mount, unmount } = lifecycles
