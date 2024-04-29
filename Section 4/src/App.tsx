import Button from './Components/Button';
import Container from './Components/Container';
import Input from './Components/Input';

function App() {
  return (
    <main>
      <Input id='name' label='Your Name' type='text'></Input>
      <Input id='age' label='Your age' type='number'></Input>

      <p>
        <Button>A button</Button>
        <Button href='rosticoding.vercel.app'>A link</Button>
      </p>

      <Container as={Button}>Some button</Container>
    </main>
  );
}

export default App;
