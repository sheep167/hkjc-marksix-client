import { GraphQLClient } from "graphql-request"
import { HKJC_API_ENDPOINT } from "./constants/endpoints"
import { MARKSIX_DRAW } from "./api/queries"

class MarkSixClient {
	private client: GraphQLClient

	constructor() {
		this.client = new GraphQLClient(HKJC_API_ENDPOINT)
	}

	async getLatestDraw() {
		try {
			return await this.client.request(MARKSIX_DRAW)
		} catch (error) {
			throw new Error("Failed to fetch latest draw")
		}
	}
}

const client = new MarkSixClient()
export default client
