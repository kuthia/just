// Definitions by: kuthia <https://github.com/kuthia>
type Operation = "add" | "replace" | "remove";

export function diffApply<T>(
  oldValue: T,
  diffs: { op: Operation; path: any[]; value: any }[],
): T

export function jsonPatchPathConverter(path: string): string[]
