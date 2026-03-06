const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path: string, params: string = "populate=*") {
    try {
        const url = `${STRAPI_URL}/api/${path}${params ? `?${params}` : ""}`;
        const res = await fetch(url, {
            next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
        });
        const { data } = await res.json();
        return data;
    } catch (error) {
        console.error(`Error fetching Strapi path ${path}:`, error);
        return null;
    }
}
