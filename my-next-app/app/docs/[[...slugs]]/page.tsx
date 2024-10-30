import React from 'react';

type ParamsProps = {
  params: {
    slugs: string[];
  };
};

export default function DocsPage({ params }: ParamsProps) {
  console.log(params);
  return <div>DocsPage</div>;
}
