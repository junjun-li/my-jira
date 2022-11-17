import React from 'react';
import styled from 'styled-components';
import ProjectList from '@/pages/ProjectList';
import Project from '@/pages/Project';
import { useAuthContext } from '@/context/AuthContext';
import { Row } from '@/components/lib';
import { Dropdown } from 'antd';
import { ReactComponent as SoftwareLogo } from '@/assets/software-logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';

/**
 * grid 和 flex 各自的应用场景
 * 1. 要考虑，是一维布局 还是 二维布局
 * 一般来说，一维布局用flex，二维布局用grid
 * 2. 是从内容出发还是从布局出发？
 * 从内容出发：你先有一组内容(数量一般不固定),然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格(数量一般比较固定)，然后再把元素往里填充
 * 从内容出发，用flex
 * 从布局出发，用grid
 *
 */

const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:projectId" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuthContext();

  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width="18rem" color="rgb(38, 132, 255)" />
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          menu={{
            items: [
              {
                key: 0,
                label: (<a onClick={logout}>登出</a>),
              },
            ],
          }}
        >
          <a onClick={(e) => e.preventDefault()}>Hi, {user?.name}</a>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;

export default AuthenticatedApp;