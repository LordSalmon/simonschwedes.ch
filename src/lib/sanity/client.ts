import {api} from "../../../studio/sanity.json";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
    projectId: api.projectId,
    dataset: api.dataset,
    apiVersion: "2021-10-21",
    useCdn: true
});

export const imageBuilder = imageUrlBuilder(client);

export function getURLForSource(source: SanityImageSource) {
    return imageBuilder.image(source);
}