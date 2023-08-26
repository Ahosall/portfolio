export function removeDuplicates(duplicate: string[]) {
  return duplicate.filter((v, i, s) => s.indexOf(v) === i && v);
}
