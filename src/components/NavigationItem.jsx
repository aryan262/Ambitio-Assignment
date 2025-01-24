import React from 'react'

function NavigationItem({ label, iconSrc, isMobile, labelpro, iconpro }) {
  return (
    <div className={`flex text-sm md:text-base text-neutral-800 ${isMobile ? 'w-full' : ''}`}>
      <div className="flex gap-1 items-center">
        <div>{label}</div>
        {iconSrc && (
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        )}
      </div>
      <div className="flex gap-1 items-center">
        {iconpro && (
          <img
            loading="lazy"
            src={iconpro}
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        )}
        <div>{labelpro}</div>
      </div>
    </div>
  )
}

export default NavigationItem