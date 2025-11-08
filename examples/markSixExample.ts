import { markSixClient } from "../src"

const main = async () => {
	const res = await markSixClient.getLatestDraw()
	console.log("LatestDraw:", res)
}

main()
