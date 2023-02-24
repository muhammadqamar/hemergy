import { createClient, Entry } from "contentful";

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});
export async function fetchEntries(
  { contentType, locale, limit = 1000 },
  query
) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      locale,
      limit,
      ...query,
    });

    if (entries) {
      return JSON.parse(entries.stringifySafe()).items;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function fetchHomePage(locale, query) {
  const entries = await fetchEntries(
    {
      contentType: "homepage",
      locale,
    },
    { ...query, include: 2 }
  );
  const docs =
    entries?.map((entry) => ({
      ...entry.fields,
      locale: entry.sys.locale,
      id: entry.sys.id,
    })) || [];

  return docs[0];
}
// export async function fetchContribute(locale, query) {
//   const entries = await fetchEntries(
//     {
//       contentType: "contribute",
//       locale,
//     },
//     { ...query }
//   );
//   const docs =
//     entries?.map((entry) => ({
//       ...entry.fields,
//       locale: entry.sys.locale,
//       id: entry.sys.id,
//     })) || [];

//   return docs[0];
// }
// export async function fetchContributeCards(locale, query) {
//   const entries = await fetchEntries(
//     {
//       contentType: "contributeCards",
//       locale,
//     },
//     { ...query }
//   );
//   const docs =
//     entries?.map((entry) => ({
//       ...entry.fields,
//       locale: entry.sys.locale,
//       id: entry.sys.id,
//     })) || [];

//   return docs[0];
// }
export async function fetchfaqPage(locale, query) {
  const entries = await fetchEntries(
    {
      contentType: "allFaqs",
      locale,
    },
    { ...query }
  );

  const docs =
    entries?.map((entry) => ({
      ...entry.fields,
      locale: entry.sys.locale,
      id: entry.sys.id,
    })) || [];

  return docs[0];
}
