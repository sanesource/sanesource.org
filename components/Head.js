import NextHead from "next/head";

function Head({ title, description }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Meta tags */}
      <meta name="theme-color" content="#667eea" />
    </NextHead>
  );
}

export default Head;
