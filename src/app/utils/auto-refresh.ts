/**
 * Starts an auto-refresh loop.
 *
 * @returns A subscription you can unsubscribe
 * @param getItems
 * @param refreshItem
 * @param interval
 */
export function startAutoRefresh(
    getItems: () => string[],
    refreshItem: (item: string) => void,
    interval: number
): any {
    return setInterval(() => {
        getItems().forEach(refreshItem);
    }, interval);
}
