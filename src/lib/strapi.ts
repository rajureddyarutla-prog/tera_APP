const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path: string, params: string = "populate=*") {
    try {
        const queryPrefix = path.includes('?') ? '&' : '?';
        const url = `${STRAPI_URL}/api/${path}${params ? `${queryPrefix}${params}` : ""}`;
        console.log(`[fetchStrapi] Fetching: ${url}`);

        // Abort if Strapi takes more than 30 seconds — prevents build workers timing out
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const res = await fetch(url, {
            signal: controller.signal,
            next: { revalidate: 60 },
        });

        clearTimeout(timeoutId);
        const json = await res.json();
        return json.data;
    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.error(`[fetchStrapi] Timeout (10s) for: ${path}`);
        } else {
            console.error(`[fetchStrapi] Network error for ${path}:`, {
                message: error.message,
                code: error.code,
                name: error.name
            });
        }
        return null;
    }
}
