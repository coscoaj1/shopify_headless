import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export async function storefront(query, variables = {}) {
  const result = await fetch(
    "https://gourmetcatfood.myshopify.com/api/2021-10/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return false;
  }

  return result.json();
}
