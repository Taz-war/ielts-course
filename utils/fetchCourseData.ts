// import { Data } from '../types';

// export async function fetchCourseData(lang: "en" | "bn" = "en"): Promise<Data> {
//   const res = await fetch(
//     `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
//     {
//       headers: { "X-TENMS-SOURCE-PLATFORM": "web" },
//       next: { revalidate: 300 },
//     }
//   );
//   console.log(res.json())
//   if (!res.ok) throw new Error("Failed to fetch data");
//   return res.json();
// }

// utils/fetchCourseData.ts
export async function fetchCourseData(slug: string, lang: "en" | "bn" = "en") {
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`;
  const headers = {
    "X-TENMS-SOURCE-PLATFORM": "web",
  };
  const resp = await fetch(url, { headers });
  if (!resp.ok) throw new Error("Failed to fetch data");
  const json = await resp.json();
  return json.data;
}

