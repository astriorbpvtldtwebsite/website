import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  schema,
}) => {
  const siteTitle = title
    ? (title.includes('AstriOrb') ? title : `${title} | AstriOrb`)
    : 'AstriOrb — Multi-Product Software & Smart Hardware House';
  const siteDescription =
    description ||
    'AstriOrb is an independent product technology company from Kerala, India. We engineer software and smart hardware platforms across finance, food tech, healthcare, productivity, and smart hardware.';
  const siteImage = image || 'https://astriorb.com/logo.png';
  const siteUrl = url ? `https://astriorb.com${url.startsWith('/') ? url : `/${url}`}` : 'https://astriorb.com';

  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AstriOrb" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />

      {/* Article specific Open Graph */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AstriOrb" />
      <meta name="twitter:creator" content="@AstriOrb" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={siteTitle} />

      {/* JSON-LD Schemas for AIO, GEO & Search Engine Rich Results */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
