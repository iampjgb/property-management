import React from 'react'
import { usePage } from '@inertiajs/react'
import type { SharedData, PropertyData } from '@/types'

interface Props {
  value: PropertyData | null
  onChange: (property: PropertyData | null) => void
}

export function PropertySelector({ value, onChange }: Props) {
  const { properties } = usePage<{ properties: PropertyData[] } & SharedData>().props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value)
    const selected = properties.find(p => p.id === id) || null
    onChange(selected)
  }

  return (
    <div className="w-60">
      <label htmlFor="property-selector" className="sr-only">Select Property</label>
      <select
        id="property-selector"
        value={value?.id ?? ''}
        onChange={handleChange}
        className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
      >
        {properties.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
    </div>
  )
}
