const Description = ({ html }: { html: any }) => (
  <div className="prose mx-auto mb-6" dangerouslySetInnerHTML={{ __html: html }} />
);
export default Description;
