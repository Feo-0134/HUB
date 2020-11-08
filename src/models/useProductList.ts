import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';

export default function useProductList(params: { pageSize: number; current: number }) {
  const msg = useRequest(() => queryUserList(params));

  const deleteProducts = async (id: string) => {
    try {
      // await removeProducts(id);
      // message.success('success');
      msg.run();
    } catch (error) {
      // message.error('fail');
    }
  };

  return {
    dataSource: [
                    { name: 'dva', id: 1 },
                    { name: 'antd', id: 2 },
                ], // mock data / should be replaced by mock.js
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}