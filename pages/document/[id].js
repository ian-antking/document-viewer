import base64 from 'base-64';
import utf8 from 'utf8';
import ReactMarkdown from 'react-markdown';

const { API_URL } = process.env;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`${API_URL}/${id}`);
  if (response.ok) {
    const { document } = await response.json();

    const contentBytes = base64.decode(document.content);
    const content = utf8.decode(contentBytes);

    return { props: { content } };
  }

  return { props: { content: null }, notFound: true };
}

export default function Document({ content }) {
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
}
