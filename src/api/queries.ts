import { gql } from "graphql-request"

export const MARKSIX_DRAW = gql`
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
