/**
 * Checks if a set contains each element in an array.
 * @returns True or False
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
