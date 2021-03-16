import React from "react";
import { Helmet } from "react-helmet";

function Head(MetaData) {
  const { title, image, url, description } = MetaData
  return (
    <Helmet>
      {/* Placez ici vos méta données */}
      <title> Le titre de la page </title>
      <meta name="nom de propriété" content="information détenue de la propriété" />

      {/* Protocole OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="fr_FRANCE" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

    </Helmet>
  )
};

export default Head;
