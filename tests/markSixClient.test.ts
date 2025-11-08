import { markSixClient } from "../src"
import { describe, test, expect } from "bun:test"

describe("MarkSixClient", () => {
	test("getLatestDraw is defined", () => {
		expect(markSixClient.getLatestDraw).toBeDefined()
	})

	test("getLatestDraw can get data", async () => {
		const res = await markSixClient.getLatestDraw()
		expect(res).toEqual({
			timeOffset: expect.anything(),
			lotteryDraws: expect.anything(),
		})
	})
})
