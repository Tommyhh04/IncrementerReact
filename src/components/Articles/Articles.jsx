import { useState } from "react";
import { getAllArticles } from "../../data/articles";

export default function Articles() {
  const [filter, setFilter] = useState("");

  const articles = getAllArticles();

  const filteredArticles = articles.filter((article) =>
    article.title.includes(filter)
  );

  function updateFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <h1>Articles</h1>

      <input type="text" onChange={updateFilter} />

      <ul>
        {filteredArticles.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ArticleCard(props) {
  const { article } = props;

  return (
    <article>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </article>
  );
}
