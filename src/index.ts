import csv from 'csv-parser'
import fs from 'fs'

async function readFile(filename: string) {
  const results: any[] = []
  return new Promise((resolve) => {
    fs.createReadStream(`public/${filename}`)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
  })
}

async function a() {
  const r = await readFile('000080.csv')
  console.log(r)
}

a()
