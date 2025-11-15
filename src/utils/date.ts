export const formatDateYYYYMMDD = (
	date?: Date | string,
): string | undefined => {
	if (!date) return undefined

	// Convert string to Date if input is a string
	const dateObj = typeof date === "string" ? new Date(date) : date

	// Check if the date is valid
	if (isNaN(dateObj.getTime())) return undefined

	// Get date components in Hong Kong Timezone (GMT+8)
	const options: Intl.DateTimeFormatOptions = {
		timeZone: "Asia/Hong_Kong",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}
	const formatter = new Intl.DateTimeFormat("en-CA", options)
	const parts = formatter.formatToParts(dateObj)

	// Extract year, month, day
	const year = parts.find((part) => part.type === "year")?.value
	const month = parts.find((part) => part.type === "month")?.value
	const day = parts.find((part) => part.type === "day")?.value

	// Return formatted date
	return `${year}${month}${day}`
}
