import { markSixClient } from "../src"

const main = async () => {
	const res = await markSixClient.getUpcomingDraw()
	console.log("Upcoming Draw:", res)
}

main()
