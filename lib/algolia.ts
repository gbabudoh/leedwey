import algoliasearch from "algoliasearch";

if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || !process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY) {
  console.warn("Algolia credentials not found. Search functionality will be limited.");
}

export const searchClient = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID &&
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
  ? algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
    )
  : null;

export const productsIndex = searchClient?.initIndex("products");
export const manufacturersIndex = searchClient?.initIndex("manufacturers");

