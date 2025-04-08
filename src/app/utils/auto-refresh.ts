import { interval, Subscription } from 'rxjs';

/**
 * Starts an auto-refresh loop.
 *
 * @param getKeysFn - A function that returns an array of keys to refresh (e.g., zip codes)
 * @param refreshFn - A function to call for each key (e.g., API fetch logic)
 * @param delayMs - Interval in milliseconds
 * @returns A subscription you can unsubscribe from if needed
 */
export function startAutoRefresh<T>(
    getKeysFn: () => T[],
    refreshFn: (key: T) => void,
    delayMs: number = 10000
): Subscription {
    return interval(delayMs).subscribe(() => {
        const keys = getKeysFn();
        keys.forEach(key => refreshFn(key));
    });
}
