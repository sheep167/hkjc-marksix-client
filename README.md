# HKJC MarkSix Client

A TypeScript SDK for interacting with the Hong Kong Jockey Club (HKJC) GraphQL API for MarkSix. This package provides a convenient abstraction for querying HKJC's public API endpoints, designed for educational purposes.

## Purpose

This SDK is built to demonstrate how to interact with the HKJC GraphQL API using TypeScript. It is intended for **educational and learning purposes only** and should not be used for commercial applications or any activities that violate the HKJC's terms of service.

## Disclaimer

This SDK interacts with the **publicly accessible HKJC GraphQL API**. The API schema and queries included in this package are not officially endorsed or supported by the Hong Kong Jockey Club. Use of this SDK is **at your own risk**.

-   **No official affiliation**: This project is not affiliated with, endorsed by, or sponsored by the Hong Kong Jockey Club.
-   **Compliance**: Ensure your usage complies with HKJC's terms of service and applicable laws.
-   **No warranty**: This SDK is provided "as is" without any guarantees of functionality, reliability, or availability of the HKJC API.

## Installation

Install the SDK using Bun (or any npm-compatible package manager):

```bash
bun install hkjc-marksix-client
```

## Features

Type-safe GraphQL queries in TypeScript.
Lightweight and modular design.
Built with Bun for fast development and testing.

## Prerequisites

Node.js >= 18.x or Bun.
Basic understanding of GraphQL and TypeScript.

## Usage

```typescript
import { markSixClient } from "hkjc-marksix-client"

const res = await markSixClient.getUpcomingDraw()
```

## Features

-   Type-safe GraphQL queries in TypeScript.
-   Lightweight and modular design.
-   Built with Bun for fast development and testing.

## Prerequisites

-   Node.js >= 18.x or Bun.
-   Basic understanding of GraphQL and TypeScript.

## Development

To contribute or modify the SDK:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/hkjc-marksix-client.git
    ```
2. Install dependencies:
    ```bash
    bun install
    ```
3. Build the project:
    ```bash
    bun run build
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/your-username/hkjc-marksix-client). Ensure all contributions respect the educational purpose and disclaimer of this project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions or feedback, open an issue on the [GitHub repository](https://github.com/sheep167/hkjc-marksix-client).
