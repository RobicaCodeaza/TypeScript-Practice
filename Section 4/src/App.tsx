import { useRef } from 'react';
import Button from './Components/Button';
// import Container from './Components/Container';
import Input from './Components/Input';
import Form, { type FormHandle } from './Components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id='name' label='Your Name' type='text'></Input>
        <Input
          id='age'
          label='Your age'
          type='number'
          ref={input}
          name='age'
        ></Input>

        <p>
          <Button>Save</Button>
          {/* <Button href='rosticoding.vercel.app'>A link</Button> */}
        </p>
      </Form>

      {/* <Container as={Button}>Some button</Container> */}
    </main>
  );
}

export default App;
