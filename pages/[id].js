import SubTitle from '../components/subtitle';

const { API_URL } = process.env;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`${API_URL}/${id}`);
  if (response.ok) {
    const { document } = await response.json();

    return { props: { document } };
  }

  return { props: { document: null }, notFound: true };
}

export default function Document({ document }) {
  return (
    <>
      <SubTitle>{document.title}</SubTitle>
      <span>{JSON.stringify(document)}</span>
    </>
  );
}
