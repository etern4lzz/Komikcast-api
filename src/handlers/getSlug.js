function getSlug(req) {
  const slug = req?.query.slug;
  
  if (!slug) {
    return null;
  }
  
  return slug;
}

module.exports = getSlug;