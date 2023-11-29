
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
// import Navbar from 'cdbreact/dist/components/Navbar';
// import Nav from 'react-bootstrap/Nav'
const Sidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#f573ca">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            ShredShare
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/skis" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Skis</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createski" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Ski</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/surf" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Surfboards</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createsurf" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Add Surfboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/explore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Explore</CDBSidebarMenuItem>
            </NavLink>            
            <NavLink exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Login</CDBSidebarMenuItem>
            </NavLink>            
            <NavLink exact to="/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Register</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            William Reeder
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;