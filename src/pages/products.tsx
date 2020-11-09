import React, { useState }  from 'react';
import styles from './products.css';
import { useModel } from 'umi';
import ProductList from '@/components/ProductList';
import CalenderComp from '@/components/Calendar';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SyncOutlined,
  LinkedinOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Products = () => {
  const { dataSource, reload, deleteProducts } = useModel('useProductList');
  return (
    <div>
      <h1 className={styles.title}>Page products</h1>
      <SyncOutlined onClick={() => reload()} />
      <ProductList onDelete={deleteProducts} products={dataSource} />
    </div>
  );
};

const SiderDemo =() => {

  const [collapsed, setCollapsed] = useState(false);


    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={()=>{setCollapsed(!collapsed)}}>
          <img className={styles.logo} alt="ICON" src={require('@/static/icon.png')} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={()=>{window.location.href = 'http://juncheng.link'; return null;}}>
              About Me
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={()=>{window.location.href = 'http://juncheng.ink'; return null;}}>
              As an Engineer
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />} onClick={()=>{window.location.href = 'http://box.juncheng.ink'; return null;}}>
              Files Box
            </Menu.Item>
            <SubMenu key="sub0" icon={<LinkedinOutlined />} title="Working On">
              <Menu.Item key="10">Browser</Menu.Item>
              <Menu.Item key="11">.Net Core</Menu.Item>
              <Menu.Item key="12">Web Server</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Hacking On">
              <Menu.Item key="3">Blockchain</Menu.Item>
              <Menu.Item key="4">CV</Menu.Item>
              <Menu.Item key="5">Quant</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Teamwork">
              <Menu.Item key="6">School</Menu.Item>
              <Menu.Item key="8">Hackathon</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <CalenderComp />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Juncheng as an Engineer</Footer>
        </Layout>
      </Layout>
    );
}

export default SiderDemo;
