const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://admin.matteralifesystems.com';

export async function fetchStrapi(path: string, params: string = "populate=*") {
    const isBrowser = typeof window !== 'undefined';
    try {
        const queryPrefix = path.includes('?') ? '&' : '?';
        const url = `${STRAPI_URL}/api/${path}${params ? `${queryPrefix}${params}` : ""}`;
        console.log(`[fetchStrapi] Fetching: ${url}`);

        // Abort if Strapi takes too long — prevents long loading screens
        const timeoutMs = isBrowser ? 10000 : 30000; // 10s for browser, 30s for build
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        const res = await fetch(url, {
            signal: controller.signal,
            // Disable default caching ONLY on client for live updates
            cache: isBrowser ? 'no-store' : 'default',
            // If on server (build time), allow static generation
            next: isBrowser ? undefined : { revalidate: 3600 }
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            // Log as warning instead of error to reduce terminal noise for 404s
            if (res.status === 404) {
                console.warn(`[fetchStrapi] 404 - Endpoint not found: ${path}`);
            } else {
                console.warn(`[fetchStrapi] HTTP ${res.status} for ${path}`);
            }
            return null;
        }

        const json = await res.json();
        return json.data;
    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.warn(`[fetchStrapi] Timeout (${isBrowser ? '10s' : '30s'}) for: ${path}`);
        } else {
            console.warn(`[fetchStrapi] Network error for ${path}:`, error.message);
        }
        return null;
    }
}
