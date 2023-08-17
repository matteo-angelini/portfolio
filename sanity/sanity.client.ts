import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "us47tn43",
  dataset: "production",
  apiVersion: "2023-08-17",
  useCdn: false,
};

const client = createClient(config);

export default client;
