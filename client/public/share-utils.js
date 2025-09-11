/**
 * iDIG Share URL Utility
 * Converts gist URLs to i-dig.io/share/ format
 */

function convertGistToShareUrl(gistUrl) {
    // Extract the filename from the gist URL
    const gistPattern = /https:\/\/gist\.githack\.com\/paulduplantis\/[^\/]+\/raw\/([^?]+)(\?.*)?$/;
    const match = gistUrl.match(gistPattern);
    
    if (match) {
        const filename = match[1];
        const queryParams = match[2] || '';
        
        // Convert to i-dig.io/share/ format
        return `https://www.i-dig.io/share/${filename}${queryParams}`;
    }
    
    // If it doesn't match the expected pattern, return the original URL
    return gistUrl;
}

function generateShareUrl(articleTitle, highlightId = null) {
    // Generate a clean filename from the article title
    const cleanTitle = articleTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .substring(0, 100); // Limit length
    
    const filename = `idig-share-${cleanTitle}.html`;
    const baseUrl = `https://www.i-dig.io/share/${filename}`;
    
    return highlightId ? `${baseUrl}?highlight=${highlightId}` : baseUrl;
}

// Example usage:
// const gistUrl = 'https://gist.githack.com/paulduplantis/77f4ea8750d99707f34368e09e83634b/raw/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589';
// const shareUrl = convertGistToShareUrl(gistUrl);
// console.log(shareUrl); // https://www.i-dig.io/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertGistToShareUrl, generateShareUrl };
}
