import React from 'react'

function StatItem({ value, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-red-700">
        {value}
      </div>
      <div className="mt-1 text-lg md:text-2xl font-medium leading-none text-stone-500">
        {description}
      </div>
    </div>
  )
}

export default StatItem