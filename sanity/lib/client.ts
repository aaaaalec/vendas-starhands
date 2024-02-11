import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skp0kxyMChjNyeaa0dm6mQ6E77lhTgjdY36EP2ceM1iMN4Jgj6te5sHNbNoIWgEZAWXHwybLLwBPKSkuUQDu8gBPHd3BJJfvAwbXi2DrJX8XcdOmuXnbZtXkMoCbLQSvaIsuEIX2HqOV9oDc0frYP8Z6JEDIo1PSskKL9PqNNI8a2JDzabOq",
});
