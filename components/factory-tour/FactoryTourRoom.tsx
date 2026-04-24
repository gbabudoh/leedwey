// @ts-nocheck
/// <reference types="react" />
"use client"

import React, { useEffect, useState } from 'react'
// @ts-ignore
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
  ControlBar,
} from '@livekit/components-react'
import '@livekit/components-styles'
import { X } from 'lucide-react'

interface FactoryTourRoomProps {
  room: string
  identity: string
  onLeave: () => void
}

/**
 * Live Factory Tour component powered by LiveKit.
 * Features: 1-to-1 WebRTC, No storage, Mobile camera flip.
 */
export default function FactoryTourRoom({ room, identity, onLeave }: FactoryTourRoomProps) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    async function fetchToken() {
      try {
        const resp = await fetch(`/api/live-tour/token?room=${room}&identity=${identity}`)
        const data = await resp.json()
        if (data.token) {
          setToken(data.token)
        }
      } catch (e) {
        console.error('Failed to fetch LiveKit token', e)
      }
    }
    fetchToken()
  }, [room, identity])

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-500 font-medium">Securing encrypted connection...</p>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[600px] w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/60 to-transparent flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-white text-sm font-bold tracking-wider">LIVE FACTORY TOUR</span>
        </div>
        <button 
          onClick={onLeave}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        onDisconnected={onLeave}
        className="h-full lk-video-conference"
      >
        <VideoConference />
        <RoomAudioRenderer />
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-50">
          <ControlBar variation="minimal" controls={{ leave: true, camera: true, microphone: true, screenShare: false }} />
        </div>
      </LiveKitRoom>

      {/* Trust Reminder */}
      <div className="absolute bottom-20 left-4 right-4 z-40">
        <div className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] py-1 px-3 rounded-full w-fit mx-auto border border-blue-400/30">
          LEEDWEY SECURE NODE • NO RECORDING PERMITTED
        </div>
      </div>
    </div>
  )
}
