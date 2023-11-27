import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './SideBar';
import { ReactNode } from 'react';

type BodyProps = {
    sidebar?: boolean;
    children: ReactNode;
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
    <Container>
    <Stack direction="horizontal" className="Body">
      {sidebar && <Sidebar />}
      <Container className="Content">
        {children}
      </Container>
    </Stack>
  </Container>
  )
}