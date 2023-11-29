import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './SideBar1';
import { ReactNode } from 'react';

type BodyProps = {
    sidebar?: boolean;
    children: ReactNode;
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
  
    <Stack direction="horizontal" className="Body">
      {sidebar && <Sidebar />}
      <Container className="Content">
        {children}
      </Container>
    </Stack>
  
  )
}