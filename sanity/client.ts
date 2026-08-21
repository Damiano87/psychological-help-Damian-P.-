import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "88o7wg6h",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
