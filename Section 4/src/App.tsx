import { useRef } from 'react';
import Button from './Components/Button';
// import Container from './Components/Container';
import Input from './Components/Input';
import Form from './Components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form>
        <Input id='name' label='Your Name' type='text'></Input>
        <Input id='age' label='Your age' type='number' ref={input}></Input>

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
