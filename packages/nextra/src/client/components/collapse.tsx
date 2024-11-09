'use client'

import cn from 'clsx'
import type { FC, ReactNode } from 'react'
import { Children, useEffect, useMemo, useRef } from 'react'

export const Collapse: FC<{
  children: ReactNode
  isOpen: boolean
  horizontal?: boolean
  openDuration?: number
  closeDuration?: number
}> = ({
  children,
  isOpen,
  horizontal = false,
  openDuration = 500,
  closeDuration = 300
}) => {
  const containerRef = useRef<HTMLDivElement>(null!)
  const initialOpen = useRef(isOpen)
  const animationRef = useRef(0)
  const initialRender = useRef(true)
  useEffect(() => {
    const animation = animationRef.current
    const container = containerRef.current
    if (animation) {
      clearTimeout(animation)
      animationRef.current = 0
    }

    if (initialRender.current) {
      return
    }
    const child = container.children[0] as HTMLDivElement

    if (horizontal) {
      // save initial width to avoid word wrapping when container width will be changed
      child.style.width = `${child.clientWidth}px`
      container.style.width = `${child.clientWidth}px`
    } else {
      container.style.height = `${child.clientHeight}px`
    }
    if (isOpen) {
      animationRef.current = window.setTimeout(() => {
        // should be style property in kebab-case, not CSS class name
        container.style.removeProperty('height')
      }, openDuration)
    } else {
      setTimeout(() => {
        if (horizontal) {
          container.style.width = '0'
        } else {
          container.style.height = '0'
        }
      })
    }
  }, [horizontal, isOpen, openDuration])

  useEffect(() => {
    initialRender.current = false
  }, [])
  // Add inner <div> only if children.length != 1
  const newChildren = useMemo(
    () =>
      Children.count(children) === 1 &&
      children &&
      typeof children === 'object' &&
      'type' in children ? (
        children
      ) : (
        <div>{children}</div>
      ),
    [children]
  )
  return (
    <div
      ref={containerRef}
      className={cn(
        '_transform-gpu _transition-all _ease-in-out motion-reduce:_transition-none',
        isOpen ? '_opacity-100' : ['_opacity-0', '_overflow-hidden']
      )}
      style={{
        ...(initialOpen.current || horizontal ? undefined : { height: 0 }),
        transitionDuration: (isOpen ? openDuration : closeDuration) + 'ms'
      }}
    >
      {newChildren}
    </div>
  )
}