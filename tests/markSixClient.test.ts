import { markSixClient } from "../src"
import { describe, test, expect } from "bun:test"

describe("MarkSixClient", () => {
	describe("draw query", () => {
		test("getDrawRaw can get data", async () => {
			const res = await markSixClient.getDrawRaw()
			expect(res).toEqual({
				timeOffset: expect.anything(),
				lotteryDraws: expect.anything(),
			})
		})

		test("getLatestDraw", async () => {
			const res = await markSixClient.getLastDraw()
			// can't even check the shape of it lol
			// https://github.com/oven-sh/bun/issues/3521
			expect(res).toBeObject()
			expect(res.id).toBeString()
		})

		test("getUpcomingDraw", async () => {
			const res = await markSixClient.getUpcomingDraw()
			expect(res).toBeObject()
			expect(res.id).toBeString()
		})
	})

	describe("results query", () => {
		test("getPastResults can get data by lastNDraw", async () => {
			const res = await markSixClient.getPastResults({
				lastNDraw: 10,
			})
			expect(res).toBeDefined()
			expect(res).toBeArrayOfSize(10)
		})

		test("getPastResults can get data by date range", async () => {
			const res = await markSixClient.getPastResults({
				startDate: new Date("2025-11-02T16:00:00Z"),
				endDate: new Date("2025-11-16T16:00:00Z"),
			})
			expect(res).toBeDefined()
			expect(res).toBeArray()
		})

		test("getPastResults throws error when combining query", async () => {
			expect(
				markSixClient.getPastResults({
					lastNDraw: 10,
					startDate: new Date("2025-11-02T16:00:00Z"),
					endDate: new Date("2025-11-16T16:00:00Z"),
				}),
			).rejects.toThrow()
		})
	})

	describe("statistics query", () => {
		test("getStatistics can get data", async () => {
			const res = await markSixClient.getStatistics()
			expect(res).toBeDefined()
			expect(res.year).toBeNumber()
			expect(res.drawnNumbers).toBeArrayOfSize(49)
		})
	})
})
