import csv from 'csv-parser'
import fs from 'fs'

export async function readCSVFile(filename: string) {
  const results: Record<string, any>[] = []
  return new Promise<Record<string, any>[]>((resolve) => {
    fs.createReadStream(`public/${filename}`)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
  })
}

export async function readDirectory(directory: string) {
  return await fs.promises.readdir(directory)
}

export function formatNumber(n: number) {
  return Intl.NumberFormat('ko-KR').format(n)
}
