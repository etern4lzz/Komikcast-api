const axios = require('axios');
const { load } = require('cheerio');

async function scrapeWebsite(url, extractor) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });
    
    const $ = await load(data);
    
    return {
      success: true,
      ...extractor($) // hasil dari scrapping
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
}

module.exports = scrapeWebsite;