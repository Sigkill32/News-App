import React from "react";

const News = ({ articles, source }) => {
  const srcName = articles[0].source.name;
  console.log(articles);
  return (
    <div className="news">
      <h1>Top Head Lines from {srcName}</h1>
      <div className="articles">
        {articles.map(article => (
          <div className="article" key={article.id}>
            <h2>{article.title}</h2>
            <p className="author">
              By: {article.author === null ? "N/A" : article.author}
            </p>
            <img src={article.urlToImage} alt="" />
            <p className="story">{article.description}</p>
            <a href={article.url}>Read more..</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
