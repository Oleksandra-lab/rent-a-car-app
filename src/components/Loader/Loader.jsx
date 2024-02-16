
import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return(
  <Grid
    visible={true}
    height="80"
    width="80"
    color="#646cffaa"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{}}
    wrapperClass="grid-wrapper"
    />
    );
}

export default Loader