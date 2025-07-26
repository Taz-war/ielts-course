const Description = ({ html }) => (
  <div className="prose mx-auto mb-6" dangerouslySetInnerHTML={{ __html: html }} />
);
export default Description;
