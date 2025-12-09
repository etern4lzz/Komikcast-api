const scrapeWebsite = require("../scrape/websiteScrape");
const BASE_URL = "https://komikcast03.com/komik";
const getSlug = require("../handlers/getSlug");

const mangaController = {
  getMangaInfo: async (req) => {
    try {
      const slug = getSlug(req);
      if (!slug) return { success: false, error: "No slug found" };

      const url = `${BASE_URL}/${slug}/`;
      const data = await scrapeWebsite(url, ($) => ({
        title: $("h1.komik_info-content-body-title").text().trim(),
        description: $(".komik_info-description p")
          .text()
          .replace(/\s+/g, " ")
          .trim()
      }));

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  getMangaGenre: async (req) => {
    try {
      const slug = getSlug(req);
      if (!slug) return { success: false, error: "No slug found" };

      const url = `${BASE_URL}/${slug}/`;
      const data = await scrapeWebsite(url, ($) => {
        const rawGenre = $("span.komik_info-content-genre").text();
        return {
          genres: rawGenre
            .replace(/\s+/g, " ")
            .trim()
            .split(",")
            .map((g) => g.trim())
            .filter(Boolean)
        };
      });

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  getMangaMeta: async (req) => {
    try {
      const slug = getSlug(req);
      if (!slug) return { success: false, error: "No slug found" };

      const url = `${BASE_URL}/${slug}/`;
      const data = await scrapeWebsite(url, ($) => {
        const rawMeta = $("div.komik_info-content-meta").text();
        return {
          meta: rawMeta
            .replace(/\s+/g, " ")
            .trim()
            .split(",")
            .map((g) => g.trim())
            .filter(Boolean)
        };
      });

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  getDetailManga: async (req) => {
    try {
      const slug = getSlug(req);
      if (!slug) return { success: false, error: "No slug found" };

      const url = `${BASE_URL}/${slug}/`;
      const data = await scrapeWebsite(url, ($) => {
        const title = $("h1.komik_info-content-body-title").text().trim();
        const description = $(".komik_info-description p")
          .text()
          .replace(/\s+/g, " ")
          .trim();
        const genre = $("span.komik_info-content-genre")
          .text()
          .replace(/\s+/g, " ")
          .trim()
          .split(",")
          .map((g) => g.trim())
          .filter(Boolean);
        const meta = $("div.komik_info-content-meta")
          .text()
          .replace(/\s+/g, " ")
          .trim()
          .split(",")
          .map((g) => g.trim())
          .filter(Boolean);

        return { title, description, genre, meta };
      });

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
};

module.exports = mangaController;