import React from "react";


const FirstProjectFeature = () => {
  return (
    <div>
      <ol style={{ listStyleType: "none" }}>
        <li>
          <h4 style={{ color: "black" }}>User Authentication:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>Users can register and log in to the website.</li>
            <li> Passwords should be securely hashed and stored.</li>
            <li>
              Sessions or JWTs (JSON Web Tokens) can be used for user
              authentication.
            </li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}>User Profiles:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li> Registered users have individual profiles.</li>
            <li>
              Users can view their own and other users profiles and see
              information like their username, profile picture, and a list of
              their blog posts.
            </li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}> Blog Management:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>Authenticated users can create new blog posts.</li>
            <li>Users can edit their own blog posts.</li>
            <li>Only the owner of a blog post can delete or edit it.</li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}> Blog Display:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>All blog posts are displayed on the home page.</li>
            <li>
              Each blog post should show the title, content, author, date of
              creation, likes, shares, and
            </li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}> Like, Share, and Comment:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>Users can like blog posts.</li>
            <li>Users can share blog posts on social media platforms.</li>
            <li>Users can leave comments on blog posts.</li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}> Ownership Management:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>Only the owner of a blog post can edit or delete it. </li>
            <li>
              Ownership information is stored in the database and checked before
              allowing edits or deletions.
            </li>
          </ul>
        </li>
        <br />
        <li>
          <h4 style={{ color: "black" }}>Security:</h4>
          <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
            <li>
              Implement proper validation and error handling for user inputs.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default FirstProjectFeature;
