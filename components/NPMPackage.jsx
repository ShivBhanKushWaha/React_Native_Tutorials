import React from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

const NPMPackage = () => {
  return (
        <WebView source={{uri:"https://reactnative.dev/"}}/>
  )
}

export default NPMPackage