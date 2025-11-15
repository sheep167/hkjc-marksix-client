import { gql } from "graphql-request"

export const UPCOMING_MARKSIX_DRAW_QUERY = gql`
	fragment lotteryDrawsFragment on LotteryDraw {
		id
		year
		no
		openDate
		closeDate
		drawDate
		status
		snowballCode
		snowballName_en
		snowballName_ch
		lotteryPool {
			sell
			status
			totalInvestment
			jackpot
			unitBet
			estimatedPrize
			derivedFirstPrizeDiv
			lotteryPrizes {
				type
				winningUnit
				dividend
			}
		}
		drawResult {
			drawnNo
			xDrawnNo
		}
	}

	query marksixDraw {
		timeOffset {
			m6
			ts
		}
		lotteryDraws {
			...lotteryDrawsFragment
		}
	}
`

export const PAST_MARK_SIX_RESULT_QUERY = gql`
	fragment lotteryDrawsFragment on LotteryDraw {
		id
		year
		no
		openDate
		closeDate
		drawDate
		status
		snowballCode
		snowballName_en
		snowballName_ch
		lotteryPool {
			sell
			status
			totalInvestment
			jackpot
			unitBet
			estimatedPrize
			derivedFirstPrizeDiv
			lotteryPrizes {
				type
				winningUnit
				dividend
			}
		}
		drawResult {
			drawnNo
			xDrawnNo
		}
	}

	query marksixResult(
		$lastNDraw: Int
		$startDate: String
		$endDate: String
		$drawType: LotteryDrawType
	) {
		lotteryDraws(
			lastNDraw: $lastNDraw
			startDate: $startDate
			endDate: $endDate
			drawType: $drawType
		) {
			...lotteryDrawsFragment
		}
	}
`

export const MARK_SIX_STATISTICS_QUERY = gql`
	fragment lotteryStatFragment on LotteryStat {
		year
		no
		drawDate
		drawnNumbers {
			lastDrawnIn
			totalNumber
			drawnNo
		}
	}

	query marksixStat {
		lotteryStats {
			...lotteryStatFragment
		}
	}
`
