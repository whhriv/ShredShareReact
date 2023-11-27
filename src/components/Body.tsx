import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './SideBar';

type Props = {}

export default function Body({ sidebar, children }: Props) {
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