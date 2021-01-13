import { useEffect } from 'react'

// Hook
export function useClickOutside(ref: any, handler: any): any {
  useEffect(() => {
    const listener: any = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
