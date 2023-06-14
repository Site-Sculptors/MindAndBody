import { Stack } from 'react-bootstrap';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
    <Stack direction="horizontal" className="justifyContent-center alignItems-center">
        <InfinitySpin color="grey" />
    </Stack>
);

export default Loader;