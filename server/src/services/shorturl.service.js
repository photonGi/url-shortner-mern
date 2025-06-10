import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";

export const createShortUrlService = (url) => {
  const shortUrl = generateNanoid(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });

  newUrl.save();
  return shortUrl;
};

export const redirectShortUrlService = async (id) => {
  const url = await urlSchema.findOne({ short_url: id });
};
