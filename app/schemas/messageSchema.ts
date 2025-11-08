import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, "Message must be atleast 10 characters long")
        .max(200, "Message must not be more than 200 characters")
})