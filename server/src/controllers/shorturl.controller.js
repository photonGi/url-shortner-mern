import {
  createShortUrlService,
  redirectShortUrlService,
} from "../services/shorturl.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlService(url);
  res.send(process.env.APP_URL + shortUrl);
};

export const redirectUrl = async (req, res) => {
  const { id } = req.params;
  const url = await redirectShortUrlService(id);
  if (url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("Not Found.");
  }
};
