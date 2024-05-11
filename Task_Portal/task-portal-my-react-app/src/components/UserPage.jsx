import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Tasks']);

  const items2 = [
    {
      key: 'sub1',
      icon: <UserOutlined />,
      label: 'Tasks',
    },
    {
      key: 'sub2',
      icon: <LaptopOutlined />,
      label: 'Overdue Tasks',
    },
    {
      key: 'sub3',
      icon: <NotificationOutlined />,
      label: 'Logout',
    },
  ];

  const handleMenuSelect = ({ key }) => {
    setSelectedMenuItem(key);
    switch (key) {
      case 'sub1':
        setBreadcrumbItems(['Tasks']);
        break;
      case 'sub2':
        setBreadcrumbItems(['Overdue Tasks']);
        break;
      case 'sub3':
        setBreadcrumbItems(['Logout']);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <style>
        {`
          body {
            overflow: hidden;
            margin: 0;
            font-family: cursive;
          }
          .welcome-message {
            text-align: center;
            padding: 20px;
            background-color: lightblue;
            color: black;
          }
          .breadcrumb-container {
            margin: 0;
            padding: 16px;
            fontFamily: 'cursive'
          }
          .menu-item-text, .sider-content {
            font-family: cursive;
          }
        `}
      </style>
      <div className="welcome-message">
        <h1>WELCOME TO USER PORTAL</h1>
      </div>
      <Layout style={{ height: 'calc(100vh - 64px)', margin: '0',fontFamily: 'cursive' }}>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            fontFamily: 'cursive'
          }}
        >
          <div className="sider-content">
            <Menu
              mode="inline"
              defaultSelectedKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
                fontFamily: 'cursive'
              }}
              items={items2}
              onSelect={handleMenuSelect}
            >
              {items2.map((item) => (
                <Menu.Item key={item.key} icon={item.icon} className="menu-item-text">
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Breadcrumb className="breadcrumb-container">
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              fontFamily: 'cursive'
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminPage;
