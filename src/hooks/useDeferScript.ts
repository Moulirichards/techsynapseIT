import { useEffect } from 'react';

/**
 * useDeferScript - Defers loading a script until after LCP (idle time).
 * @param loadFn - Function that loads the script (e.g., inserts <script> or runs analytics init)
 */
export function useDeferScript(loadFn: () => void) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadFn);
    } else {
      setTimeout(loadFn, 2000);
    }
  }, [loadFn]);
} 