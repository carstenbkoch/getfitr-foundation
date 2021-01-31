import { Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import { loadAsync } from 'expo-font'

export const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
                preventAutoHideAsync()
                await loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
                })
            } catch (e) {
                // provide error information to error reporting service
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                hideAsync()
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}
