import "./article.scss";
import React from "react";

function Article({
  image,
  alt,
  title,
  intro,
  listItems,
  children,
  reverse = false,
}) {
  const layoutClass = reverse ? "reverse" : "normal";

  return (
    <section className={`article ${layoutClass}`}>
      <img src={image} alt={alt} className="image" />
      <div className="text">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
        {listItems && (
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                {typeof item === "string" ? (
                  item
                ) : (
                  <>
                    <strong>{item.label}</strong> : {item.text}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </section>
  );
}

export default Article;
