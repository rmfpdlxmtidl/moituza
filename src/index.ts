import {
  CASH_RESERVE_RATIO,
  COMMISION,
  COMMISION_RATIO,
  INITIAL_BALANCE,
  INITIAL_CASH_RESERVES,
  SEED_MONEY,
  STOCK_COUNT,
} from './constants'
import { formatNumber, readCSVFile, readDirectory } from './utils'

console.log(`
투자 금액: ${formatNumber(SEED_MONEY)} 원
지급준비율: ${CASH_RESERVE_RATIO}%
이익 대비 수수료 비율: ${COMMISION_RATIO.toFixed(2)}%
`)

async function start() {
  const fileNames = await readDirectory('public')

  const stockHistories = fileNames
    .filter((fileName) => /.*.csv/.test(fileName))
    .slice(0, STOCK_COUNT - 1)
    .map((fileName) => readCSVFile(fileName))

  const a = (await stockHistories[0])[0]
  console.log(a)

  // console.log(await readCSVFile('000080.csv'))

  // stockHistories[0].then((a) => console.log(a[0]))

  const stocks = [...new Array(STOCK_COUNT).keys()]

  let cashReserves = INITIAL_CASH_RESERVES
  let balance = INITIAL_BALANCE

  cashReserves = cashReserves + 1
  balance = balance + 1

  // console.log((await stockHistories[0])[0])
}

start()
