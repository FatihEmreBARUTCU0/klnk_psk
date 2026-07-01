import { createClient } from "next-sanity";
import { isSanityConfigured, sanityConfig } from "../env";

export const client = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: true,
    })
  : null;
