// Enum for lottery status (assuming a limited set of values)
enum LotteryStatus {
	OPEN = "OPEN",
	CLOSED = "CLOSED",
	DRAWN = "DRAWN",
	CANCELLED = "CANCELLED",
}

// Interface for individual lottery prizes
interface LotteryPrize {
	type: string
	winningUnit: number
	dividend: number
}

// Interface for lottery pool details
interface LotteryPool {
	sell: number
	status: LotteryStatus
	totalInvestment: number
	jackpot: number
	unitBet: number
	estimatedPrize: number
	derivedFirstPrizeDiv: number
	lotteryPrizes: LotteryPrize[]
}

// Interface for draw result
interface DrawResult {
	drawnNo: number[]
	xDrawnNo?: number // Optional as it may not always be present
}

// Interface for lottery draw (from lotteryDrawsFragment)
interface LotteryDraw {
	id: string
	year: number
	no: number
	openDate: string // Use string for DateTime, assuming ISO string format
	closeDate: string
	drawDate: string
	status: LotteryStatus
	snowballCode?: string // Optional as it may not always be present
	snowballName_en?: string
	snowballName_ch?: string
	lotteryPool: LotteryPool
	drawResult?: DrawResult // Optional as it may not always be present
}

// Interface for time offset
interface TimeOffset {
	m6: number
	ts: number
}

// Interface for the marksixDraw query response
interface MarkSixDraw {
	timeOffset: TimeOffset
	lotteryDraws: LotteryDraw[]
}
