// @ts-nocheck
"use client"

import React from 'react'
import { ShieldCheck, ShieldAlert, AlertTriangle } from 'lucide-react'

interface ManufacturerTrustCardProps {
  strikes: number
  isSuspended: boolean
  isVerified: boolean
}

/**
 * Visual "Account Health" component for manufacturers.
 * Displays strikes and verification status to deter platform leakage.
 */
export default function ManufacturerTrustCard({
  strikes = 0,
  isSuspended = false,
  isVerified = false,
}: ManufacturerTrustCardProps) {
  const maxStrikes = 5
  const strikeProgress = Math.min((strikes / maxStrikes) * 100, 100)
  
  // Health status logic
  let statusColor = 'bg-green-500'
  let statusText = 'Excellent Health'
  let StatusIcon = ShieldCheck

  if (isSuspended) {
    statusColor = 'bg-black'
    statusText = 'Account Suspended'
    StatusIcon = ShieldAlert
  } else if (strikes >= 4) {
    statusColor = 'bg-red-600'
    statusText = 'Critical Risk'
    StatusIcon = AlertTriangle
  } else if (strikes > 0) {
    statusColor = 'bg-orange-500'
    statusText = 'Under Observation'
    StatusIcon = AlertTriangle
  }

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${statusColor} text-white`}>
            <StatusIcon size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Platform Trust Status</h3>
            <p className="text-sm text-gray-500">{statusText}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            isVerified ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {isVerified ? 'LEEDWEY VERIFIED' : 'PENDING VERIFICATION'}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-sm font-medium text-gray-700">Strike Meter ({strikes}/{maxStrikes})</span>
          <span className="text-xs text-gray-400">Limit: 5 Strikes</span>
        </div>
        
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-700 ease-out ${
              strikes >= 4 ? 'bg-red-600' : strikes > 0 ? 'bg-orange-500' : 'bg-green-500'
            }`}
            style={{ width: `${strikeProgress}%` }}
          />
        </div>
      </div>

      {strikes > 0 && !isSuspended && (
        <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl">
          <p className="text-sm text-red-700">
            <strong>Warning:</strong> Detection of external contact info (phone/email/links) triggers automatic strikes. 
            Reaching 5 strikes will result in a permanent freeze of your milestone payouts.
          </p>
        </div>
      )}

      {isSuspended && (
        <div className="mt-6 p-4 bg-black text-white rounded-xl">
          <p className="text-sm font-medium">
            Your account is currently restricted. Please contact compliance@leedwey.com to initiate a manual review.
          </p>
        </div>
      )}
    </div>
  )
}
