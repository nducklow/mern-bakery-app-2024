import { useQuery } from '@apollo/client';
import { Button, DatePicker } from 'antd';


import { QUERY_ITEMS } from '../utils/queries.js';

const MenuList = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);

    const items = data?.items || [];
    console.log(loading, data)

    return(

  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
            
}
export default MenuList