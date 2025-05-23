import { inspect } from 'util';

export const objLog = (obj: any, opt?: { depth?: number; colors?: boolean; compact?: number | boolean }) =>
  inspect(obj, { depth: opt?.depth ?? null, colors: opt?.colors ?? true, compact: opt?.compact ?? 1 });
