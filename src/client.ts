import { GraphQLClient } from "graphql-request"
import first from "lodash/first"

import { HKJC_API_ENDPOINT } from "./constants/endpoints"
import {
	UPCOMING_MARKSIX_DRAW_QUERY,
	PAST_MARK_SIX_RESULT_QUERY,
	MARK_SIX_STATISTICS_QUERY,
} from "./api/queries"
import { formatDateYYYYMMDD } from "./utils/date"

import type {
	LotteryDraw,
	LotteryStat,
	MarkSixDrawResponse,
	MarkSixDrawVariables,
	MarkSixResultVariables,
	MarkSixStatResponse,
	MarkSixStatVariables,
} from "./api/types"
import { last } from "lodash"

class MarkSixClient {
	private client: GraphQLClient

	constructor() {
		this.client = new GraphQLClient(HKJC_API_ENDPOINT)
	}

	async getDrawRaw(
		args?: MarkSixDrawVariables,
	): Promise<MarkSixDrawResponse> {
		try {
			const res = (await this.client.request(
				UPCOMING_MARKSIX_DRAW_QUERY,
				args,
			)) as MarkSixDrawResponse
			return res
		} catch (error) {
			throw new Error("Failed to get marksix draw")
		}
	}

	// solely trust the response is an array of two items only
	async getLastDraw(): Promise<LotteryDraw> {
		const { lotteryDraws } = await this.getDrawRaw()
		return first(lotteryDraws) as LotteryDraw
	}

	async getUpcomingDraw(): Promise<LotteryDraw> {
		const { lotteryDraws } = await this.getDrawRaw()
		return last(lotteryDraws) as LotteryDraw
	}

	async getPastResults(
		args?: MarkSixResultVariables,
	): Promise<LotteryDraw[]> {
		const { lastNDraw, startDate, endDate, drawType } = args ?? {}

		if (lastNDraw && (startDate || endDate)) {
			throw new Error("Cannot query lastNDraw and date range together")
		}

		try {
			const res = (await this.client.request(PAST_MARK_SIX_RESULT_QUERY, {
				lastNDraw,
				startDate: formatDateYYYYMMDD(startDate),
				endDate: formatDateYYYYMMDD(endDate),
				drawType,
			})) as MarkSixDrawResponse
			return res.lotteryDraws
		} catch (error) {
			throw new Error("Failed to fetch past results")
		}
	}

	async getStatistics(args?: MarkSixStatVariables): Promise<LotteryStat> {
		try {
			const res = (await this.client.request(
				MARK_SIX_STATISTICS_QUERY,
				args,
			)) as MarkSixStatResponse

			const statItem = first(res.lotteryStats)
			if (!statItem) throw new Error("Empty stat item")

			return statItem
		} catch (error) {
			throw new Error("Failed to get statistics")
		}
	}
}

const client = new MarkSixClient()
export default client
