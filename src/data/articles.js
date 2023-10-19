import articleResponse from "./articles.json";

/**
 * Returns all articles
 */
export function getAllArticles() {
  return articleResponse.articles;
}

// Further down is a collection of function for getting a subset of the
// article list

/**
 * Returns articles which includes the filter string
 * @param {string} filter
 * @returns
 */
export function getArticlesFilter(filter) {
  return articleResponse.articles.filter((article) => {
    const { author, body, title, description, tagList } = article;

    const isMatch =
      author.username.toLowerCase().includes(filter) ||
      body.toLowerCase().includes(filter) ||
      title.toLowerCase().includes(filter) ||
      description.toLowerCase().includes(filter) ||
      tagList.find((tag) => tag.toLowerCase().includes(filter));

    return isMatch;
  });
}

/**
 * Returns an article with matcing Id or undefined
 *
 * @param {string} id
 * @returns
 */
export function getArticleById(id) {
  return articleResponse.articles.find((article) => article.slug === id);
}

/**
 * Returns articles by author
 *
 * @param {string} author
 * @returns
 */
export function getArticleByAuthor(author) {
  return articleResponse.articles.filter(
    (article) => article.author.username === author
  );
}

/**
 * Returns article for the provided tag, Exact match
 *
 * @param {string} tag
 * @returns
 */
export function getArticleByTag(tag) {
  return articleResponse.articles.filter((article) =>
    article.tagList.includes(tag)
  );
}

/**
 * Returns article for the provided tag, Fuzzy match
 *
 * @param {string} tag
 * @returns
 */
export function getArticleByTagFuzzy(tag) {
  return articleResponse.articles.filter((article) =>
    article.tagList.filter((tagName) => tagName.toLowerCase() === tag)
  );
}
