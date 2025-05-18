/**
 * Extracts the YouTube video ID from various YouTube URL formats
 * @param url YouTube URL
 * @returns YouTube video ID or null if not a valid YouTube URL
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null

  // Regular expressions for different YouTube URL formats
  const regexps = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*&v=)([^&?/]+)/,
    /youtube\.com\/watch\?.*&v=([^&]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ]

  for (const regex of regexps) {
    const match = url.match(regex)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}
