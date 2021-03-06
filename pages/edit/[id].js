import base64 from 'base-64';
import { useRouter } from 'next/router';
import DocumentCard from '../../components/document-card';
import SubTitle from '../../components/subtitle';
import Row from '../../components/row';
import DocumentEditor from '../../components/document-editor';
import TextInput from '../../components/text-input';
import TextLabel from '../../components/text-label';
import Button from '../../components/button';

const { API_URL } = process.env;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiUrl = `${API_URL}/${id}`;
  const response = await fetch(apiUrl);
  if (response.ok) {
    const { document, name } = await response.json();

    const content = base64.decode(document.content);

    return {
      props: {
        content,
        id,
        name,
        apiUrl,
      },
    };
  }

  return {
    props: {
      content: null,
      id: null,
      name: null,
      apiUrl,
    },
    notFound: true,
  };
}

export default function EditPage({ content, name, apiUrl }) {
  const router = useRouter();
  const submitDocument = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    const password = window.prompt('password:');

    const newContent = base64.encode(event.target.documentInput.value);
    const newName = event.target.nameInput.value;

    const data = {
      name: newName,
      document: {
        content: newContent,
      },
    };

    const response = await fetch(apiUrl, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: password,
      },
    });

    const responseBody = await response.json();

    if (response.ok) {
      const id = apiUrl.split('/').reverse()[0];
      router.push(`/view/${id}`);
    } else {
      // eslint-disable-next-line no-alert
      window.alert(responseBody.message);
    }
  };

  return (
    <>
      <SubTitle>Edit</SubTitle>
      <DocumentCard>
        <form onSubmit={submitDocument}>
          <Row>
            <TextLabel for="nameInput">name:</TextLabel>
            <TextInput name="nameInput" type="text" defaultValue={name} />
          </Row>
          <DocumentEditor name="documentInput" defaultValue={content} />
          <Row>
            <Button>Delete</Button>
            <Button type="submit">Save</Button>
          </Row>
        </form>
      </DocumentCard>
    </>
  );
}
