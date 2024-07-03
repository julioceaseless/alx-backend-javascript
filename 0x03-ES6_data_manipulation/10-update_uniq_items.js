/**
 * Replaces the initial quantity of 1 with 100.
 * @returns updated map for all items with initial quantity at 1
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
