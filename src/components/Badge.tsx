import React from 'react'
import { twMerge } from 'tailwind-merge'

export type BadgeVariant =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'indigo'
  | 'pink'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: BadgeVariant
  size: 'xs' | 'sm'
  withDot?: boolean
  children: React.ReactNode
}

const badgeStyles = {
  gray: 'bg-gray-200 text-gray-800',
  red: 'bg-red-200 text-red-800',
  orange: 'bg-orange-200 text-orange-800',
  yellow: 'bg-yellow-200 text-yellow-800',
  green: 'bg-green-200 text-green-800',
  teal: 'bg-teal-200 text-teal-800',
  blue: 'bg-blue-200 text-blue-800',
  purple: 'bg-purple-200 text-purple-800',
  indigo: 'bg-indigo-200 text-indigo-800',
  pink: 'bg-pink-200 text-pink-800'
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  withDot,
  ...props
}) => {
  const baseStyles = `px-3 rounded-full ${badgeStyles[variant]}`
  const textSize = size === 'xs' ? 'text-xs' : 'text-sm'
  const paddingTopBottom = size === 'xs' ? 'pt-0.1 pb-0.1' : 'pt-0.1 pb-0.1'
  const combinedStyles = `${baseStyles} ${textSize} ${paddingTopBottom}`

  return (
    <div
      {...props}
      className={twMerge(
        `inline-flex ${combinedStyles}`,
        `${withDot ? 'flex items-center space-x-1 px-2' : ''}`,
        props.className
      )}>
      {withDot && (
        <div
          style={{ width: '0.4rem', height: '0.4rem' }}
          className='bg-gray-500 rounded-full'></div>
      )}
      <div>{props.children}</div>
    </div>
  )
}
