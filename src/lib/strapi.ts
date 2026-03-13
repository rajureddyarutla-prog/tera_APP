const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path: string, params: string = "populate=*") {
    try {
        const queryPrefix = path.includes('?') ? '&' : '?';
        const url = `${STRAPI_URL}/api/${path}${params ? `${queryPrefix}${params}` : ""}`;
        const res = await fetch(url, {
            next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
        });
        const json = await res.json();
        return json.data;
    } catch (error) {
        // Silent failure - will use local defaults in components
        return null;
    }
}
