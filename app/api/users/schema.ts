import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(10),
});

export default schema;
