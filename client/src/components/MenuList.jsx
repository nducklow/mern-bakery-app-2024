import { useQuery } from '@apollo/client';
import { EditOutlined, SettingOutlined, CloseCircleOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import './MenuList.css'


import { QUERY_ITEMS } from '../utils/queries.js';

const MenuList = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);

  const items = data?.items || [];
  console.log(loading, data)

  const itemList = items.map(item => {
    return (
      <Card
      key={item.id}
      style={{
        width: 300,
      }}
      cover={
        <img
          alt={item.name}
          src={item.img}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <CloseCircleOutlined key="close"/>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={item.name}
        description={`calories: ${item.calories} | cost $${item.cost/100}`}
      />
    </Card>
    )

  })

  return (

    <div class='container'>{itemList}</div>
  );

}
export default MenuList