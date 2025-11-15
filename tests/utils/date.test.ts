import { describe, expect, test } from "bun:test"
import { formatDateYYYYMMDD } from "../../src/utils/date"

describe("formatDateYYYYMMDD", () => {
	// Valid input tests
	describe("Valid inputs", () => {
		test("should format Date object in HKT", () => {
			const date = new Date("2025-11-15T00:00:00Z") // UTC: 2025-11-15 00:00
			expect(formatDateYYYYMMDD(date)).toBe("20251115") // HKT: 2025-11-15 08:00
		})

		test("should format ISO string with time in HKT", () => {
			const date = "2025-11-15T23:00:00Z" // UTC: 2025-11-15 23:00, HKT: 2025-11-16 07:00
			expect(formatDateYYYYMMDD(date)).toBe("20251116")
		})

		test("should format ISO string without time in HKT", () => {
			const date = "2025-11-15" // Treated as UTC: 2025-11-15 00:00
			expect(formatDateYYYYMMDD(date)).toBe("20251115") // HKT: 2025-11-15
		})

		test("should handle timezone boundary (end of day)", () => {
			const date = new Date("2025-12-31T23:00:00Z") // UTC: 2025-12-31 23:00, HKT: 2026-01-01 07:00
			expect(formatDateYYYYMMDD(date)).toBe("20260101")
		})

		test("should handle leap year date", () => {
			const date = new Date("2024-02-29T00:00:00Z") // UTC: 2024-02-29 00:00
			expect(formatDateYYYYMMDD(date)).toBe("20240229") // HKT: 2024-02-29
		})
	})

	// Invalid input tests
	describe("Invalid inputs", () => {
		test("should return undefined for invalid ISO string", () => {
			expect(formatDateYYYYMMDD("invalid-date")).toBeUndefined()
		})

		test("should return undefined for invalid Date object", () => {
			const invalidDate = new Date("invalid")
			expect(formatDateYYYYMMDD(invalidDate)).toBeUndefined()
		})

		test("should return undefined for non-date string", () => {
			expect(formatDateYYYYMMDD("abc")).toBeUndefined()
		})

		test("should return undefined for empty string", () => {
			expect(formatDateYYYYMMDD("")).toBeUndefined()
		})
	})

	// Edge case tests
	describe("Edge cases", () => {
		test("should return undefined for undefined input", () => {
			expect(formatDateYYYYMMDD(undefined)).toBeUndefined()
		})

		test("should handle early date (e.g., 1970-01-01)", () => {
			const date = new Date("1970-01-01T00:00:00Z")
			expect(formatDateYYYYMMDD(date)).toBe("19700101") // HKT: 1970-01-01
		})

		test("should handle future date (e.g., 2030-12-31)", () => {
			const date = "2030-12-31T00:00:00Z"
			expect(formatDateYYYYMMDD(date)).toBe("20301231") // HKT: 2030-12-31
		})
	})
})
