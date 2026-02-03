'use client'

import { ReactNode, useEffect } from 'react'
import Smartlook from 'smartlook-client'

interface SmartlookProviderProps {
    children: ReactNode
    projectKey: string
}

export default function SmartlookProvider({
    children,
    projectKey
}: SmartlookProviderProps) {
    useEffect(() => {
        if (!projectKey) {
            console.warn('Smartlook: Project key is required')
            return
        }

        try {
            Smartlook.init(projectKey)
            console.log('Smartlook initialized successfully')
        } catch (error) {
            console.error('Failed to initialize Smartlook:', error)
        }
    }, [projectKey])

    return <>{children}</>
}

// Hook for accessing Smartlook methods
export const useSmartlook = () => {
    return {
        // Identify user
        identify: (userId: string | number, properties?: { [key: string]: string | number | boolean }) => {
            try {
                Smartlook.identify(userId, properties || {})
            } catch (error) {
                console.error('Smartlook identify error:', error)
            }
        },

        // Track custom events
        track: (eventName: string, properties?: { [key: string]: string | number | boolean }) => {
            try {
                Smartlook.track(eventName, properties || {})
            } catch (error) {
                console.error('Smartlook track error:', error)
            }
        },

        // Pause recording
        pause: () => {
            try {
                Smartlook.pause()
            } catch (error) {
                console.error('Smartlook pause error:', error)
            }
        },

        // Resume recording
        resume: () => {
            try {
                Smartlook.resume()
            } catch (error) {
                console.error('Smartlook resume error:', error)
            }
        },
    }
}
