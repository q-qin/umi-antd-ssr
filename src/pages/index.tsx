import { Table, Popconfirm, Button, message } from 'antd';
import styles from './index.less';

export default () => {
  const onDelete = (id: Number) => {
    message.info(`删除成功，id=${id}`);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      render: (text: string, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  const products = [{ name: '张三', id: 1, key: '1' }];
  return (
    <Table className={styles.title} dataSource={products} columns={columns} />
  );
};
