import z from "zod";

export const ArticleSchemas = z.object({
  title: z.string().trim().min(3, "بایستی حداقل 3  حرف داشته باشد"),
  desc: z
    .string()
    .trim()
    .min(10, "کمتراز 10 حرف مورد قبول نمی باشد")
    .max(500, "بیش  از 500 حرف نمیتوانید تایپ کنید"),
  category: z.string().trim().min(3, "کمتر از 3 حرف نمی تواند باشد"),
  views: z.number({ error: "بایستی عدد باشد" }),
});
