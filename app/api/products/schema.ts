import { z } from "zod";

const schema = z.object({
  id: z.number(),
  name: z.string().min(2),
  price: z.number().multipleOf(0.1).min(1).max(100),
});

export default schema;
