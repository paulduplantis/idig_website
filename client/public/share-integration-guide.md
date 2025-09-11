# iDIG Share URL Integration Guide

## Problem
The breadcrumb sharing feature is currently generating gist URLs like:
```
https://gist.githack.com/paulduplantis/77f4ea8750d99707f34368e09e83634b/raw/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589
```

## Solution
Convert these to branded iDIG URLs like:
```
https://www.i-dig.io/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589
```

## Implementation Options

### Option 1: Client-Side JavaScript (Recommended)
Use the utility function in `share-utils.js`:

```javascript
// Include this script in your breadcrumb sharing code
function convertGistToShareUrl(gistUrl) {
    const gistPattern = /https:\/\/gist\.githack\.com\/paulduplantis\/[^\/]+\/raw\/([^?]+)(\?.*)?$/;
    const match = gistUrl.match(gistPattern);
    
    if (match) {
        const filename = match[1];
        const queryParams = match[2] || '';
        return `https://www.i-dig.io/share/${filename}${queryParams}`;
    }
    
    return gistUrl; // Fallback to original
}

// Usage in your breadcrumb sharing code:
const originalGistUrl = 'https://gist.githack.com/paulduplantis/77f4ea8750d99707f34368e09e83634b/raw/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589';
const shareUrl = convertGistToShareUrl(originalGistUrl);
// Result: https://www.i-dig.io/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589
```

### Option 2: Server-Side API
Use the new API endpoint:

```javascript
// POST to https://idig-website.vercel.app/api/convert-share-url
const response = await fetch('https://idig-website.vercel.app/api/convert-share-url', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        gistUrl: 'https://gist.githack.com/paulduplantis/77f4ea8750d99707f34368e09e83634b/raw/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589'
    })
});

const data = await response.json();
console.log(data.shareUrl); // https://www.i-dig.io/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589
```

## How It Works

1. **URL Structure**: `https://www.i-dig.io/share/{filename}?{queryParams}`
2. **Redirect Logic**: The `/share/` directory contains an `index.html` that:
   - Extracts the filename from the URL path
   - Constructs the corresponding gist URL
   - Redirects the user to the actual gist content
3. **SEO Benefits**: Search engines see the branded URL, not the gist URL

## Files Created

- `client/public/share/index.html` - Main redirect handler
- `client/public/share-utils.js` - JavaScript utility functions
- `client/public/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html` - Specific redirect for Trump article
- `server/routes.ts` - Added `/api/convert-share-url` endpoint

## Next Steps

1. **Update your breadcrumb sharing code** to use `convertGistToShareUrl()` function
2. **Test the URLs** to ensure they redirect properly
3. **Deploy the changes** to make the new URLs live

## Testing

Test these URLs:
- `https://www.i-dig.io/share/` (should redirect to default)
- `https://www.i-dig.io/share/idig-share-Trump_Breaks_Silence_After_Poland_Shoots_Down_Russ-2025-09-11.html?highlight=6aa0c7e0-a9ac-48a0-8401-27d9a7769589` (should redirect to gist)
