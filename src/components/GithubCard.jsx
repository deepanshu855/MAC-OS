import React from "react";

const GithubCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1 className="title">{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>RepoLink</a>
        {data.demoLink && <a href={data.demoLink}>DemoLink</a>}
      </div>
    </div>
  );
};

export default GithubCard;
