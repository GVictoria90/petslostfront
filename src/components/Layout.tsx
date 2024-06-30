import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { isTokenValid } from '../utils/utils'

interface LayoutProps {
  className?: string
  children?: React.ReactElement
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  useEffect(() => {
    isTokenValid()
  }, [])

  return (
    <div
      className={twMerge(
        'flex flex-col justify-center w-full max-w-[1240px] mx-auto p-4',
        className
      )}>
      <div className='w-full p-6'>{children}</div>
    </div>
  )
}
