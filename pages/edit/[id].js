import base64 from 'base-64';
import utf8 from 'utf8';
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
  console.log(id);
  const response = await fetch(`${API_URL}/${id}`);
  if (response.ok) {
    const { document } = await response.json();

    const contentBytes = base64.decode(document.content);
    const content = utf8.decode(contentBytes);

    return { props: { content, id } };
  }

  return { props: { content: null, id: null }, notFound: true };
}

export default function EditPage({ content, id }) {
  return (
    <>
    <SubTitle>Edit</SubTitle>
    <DocumentCard>
      <DocumentEditor id="document-input" name="document-input" >
        {content}
      </DocumentEditor>
      <Row>
        <TextLabel for="password-input">password:</TextLabel>
        <TextInput id="password-input" name="password-input" type="password" />
      </Row>
      <Row>
        <Button>Delete</Button>
        <Button>Save</Button>
      </Row>
    </DocumentCard>
    </>
  );
}
