import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  price: z.number().min(10),
});

export default schema;
