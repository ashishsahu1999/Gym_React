import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FaUserTie, FaUserFriends, FaProjectDiagram, FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import Dashboard from './Dashboard';
import ViewEnquiry from './ViewEnquiry';
import AddEnquiryForm from './AddEnquiryForm';
import AddPlan from "./AddPlan";
import ViewPlan from "./ViewPlan";
import AddEquipment from './AddEquipment';
import AddMembers from './AddMembers'

const { Sider, Content } = Layout;
const { SubMenu } = Menu; // Import SubMenu from Menu

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');
  const navigate = useNavigate();

  const handleMenuClick = (menuKey) => {
    if (menuKey === 'logout') {
      handleLogout();
    } else {
      setSelectedMenuItem(menuKey);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'sub1':
        return <ViewEnquiry />;
      case 'sub2':
        return <AddEnquiryForm/>;
      case 'sub3':
        return <ViewPlan/>;
      case 'sub4':
        return <AddPlan/>;
      case 'sub5':
        return <h2>SubCategory Content</h2>;
      case 'sub6':
        return <AddEquipment/>;
      case 'sub7':
        return <h2>Education Content</h2>;
      case 'sub8':
        return <AddMembers/>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ color: 'white', padding: '16px', textAlign: 'center' }}>
          {/* Optional Logo */}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard']}
          mode="inline"
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item key="dashboard" icon={<FaHome />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="enquiry" icon={<FaUserTie />} title="Enquiry">
            <Menu.Item key="sub1">View Enquiry</Menu.Item>
            <Menu.Item key="sub2">Add Enquiry</Menu.Item>
          </SubMenu>
          <SubMenu key="plan" icon={<FaUserFriends />} title="Plan">
            <Menu.Item key="sub3">View Plan</Menu.Item>
            <Menu.Item key="sub4">Add Plan</Menu.Item>
          </SubMenu>
          <SubMenu key="equipment" icon={<FaUserFriends />} title="Equipment">
            <Menu.Item key="sub5">View Equipment</Menu.Item>
            <Menu.Item key="sub6">Add Equipment</Menu.Item>
          </SubMenu>
          <SubMenu key="members" icon={<FaProjectDiagram />} title="Members">
            <Menu.Item key="sub7">View Members</Menu.Item>
            <Menu.Item key="sub8">Add Members</Menu.Item>
          </SubMenu>
          <Menu.Item key="logout" icon={<FaUserFriends />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '16px' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
