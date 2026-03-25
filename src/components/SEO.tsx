import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO = React.forwardRef<HTMLDivElement, SEOProps>(({ title, description, keywords }, ref) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Типография ПринтПРО" />
    </Helmet>
  );
});

SEO.displayName = 'SEO';

export default SEO;
