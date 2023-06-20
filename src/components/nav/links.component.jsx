import React from "react";

const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 1, href: "#about", text: "About" },
  { id: 1, href: "#services", text: "Services" },
  { id: 1, href: "#tours", text: "Tours" },
];

const Links = () => {
  return (
    <div className="links">
      <ul>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
