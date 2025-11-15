export interface LotteryPrize {
	type: string
	winningUnit: number
	dividend: number
}

export interface LotteryPool {
	sell: string
	status: string
	totalInvestment: number
	jackpot: number
	unitBet: number
	estimatedPrize: number
	derivedFirstPrizeDiv: number
	lotteryPrizes: LotteryPrize[]
}

export interface DrawResult {
	drawnNo: number[]
	xDrawnNo: number[]
}

export interface LotteryDraw {
	id: string
	year: number
	no: number
	openDate: string
	closeDate: string
	drawDate: string
	status: string
	snowballCode: string
	snowballName_en: string
	snowballName_ch: string
	lotteryPool: LotteryPool
	drawResult: DrawResult
}

export interface DrawnNumbers {
	lastDrawnIn: number
	totalNumber: number
	drawnNo: number
}

export interface LotteryStat {
	year: number
	no: number
	drawDate: string
	drawnNumbers: DrawnNumbers[]
}

// Interface for TimeOffset
export interface TimeOffset {
	m6: number
	ts: number
}

// Interface for marksixDraw response
export interface MarkSixDrawResponse {
	timeOffset: TimeOffset
	lotteryDraws: LotteryDraw[]
}

export type MarkSixDrawVariables = Record<string, never>

export enum LotteryDrawType {
	ALL = "All",
	SNOWBALL = "Snowball",
}

export interface MarkSixResultVariables {
	lastNDraw?: number
	startDate?: Date
	endDate?: Date
	drawType?: LotteryDrawType
}

export interface MarkSixResultResponse {
	lotteryDraws: LotteryDraw[]
}

export interface MarkSixStatResponse {
	lotteryStats: LotteryStat[]
}

export type MarkSixStatVariables = Record<string, never>
