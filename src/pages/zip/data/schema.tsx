import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const fileScheme = z.custom<File>(value => {
  const isBlob = value instanceof Blob;
  if (!isBlob) return isBlob;
  return "name" in value;
});

export type TargetFile = z.infer<typeof fileScheme>;
