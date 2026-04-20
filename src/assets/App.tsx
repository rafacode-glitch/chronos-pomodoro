import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex
        ducimus quae, iusto provident mollitia ad rerum, id ut, at magnam
        doloremque quas. Velit accusamus beatae repellendus a perspiciatis hic!
      </p>
    </>
  );
}
