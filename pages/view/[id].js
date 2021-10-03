import base64 from 'base-64';
import ReactMarkdown from 'react-markdown';
import DocumentCard from '../../components/document-card';
import SubTitle from '../../components/subtitle';
import Row from '../../components/row';
import NavLink from '../../components/navlink';

const { API_URL } = process.env;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`${API_URL}/${id}`);
  if (response.ok) {
    const { document, name } = await response.json();

    const content = base64.decode(document.content);

    return { props: { content, name, id } };
  }

  return { props: { content: null, name: null, id }, notFound: true };
}

export default function DocumentPage({ content, name, id }) {
  return (
    <>
      <SubTitle>{name}</SubTitle>
      <DocumentCard>
        <ReactMarkdown>{content}</ReactMarkdown>
      </DocumentCard>
      <Row>
        <NavLink path={`/edit/${id}`} text="edit" />
      </Row>
    </>
  );
}
