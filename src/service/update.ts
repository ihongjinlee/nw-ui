import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Update = {
  version: string;
  date: Date;
  description: string[];
};

export const getUpdate = cache(async () => {
  const filePath = path.join(process.cwd(), 'src/data', 'update.json');
  return readFile(filePath, 'utf-8').then<Update[]>(JSON.parse);
});
