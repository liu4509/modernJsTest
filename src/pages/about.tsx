import { Helmet } from '@modern-js/runtime/head';
import styled from '@modern-js/runtime/styled';
// 配置 Favicon 等通用静态资源
import demoImg from '@config/public/modernjs-cover.png';

const DemoImg = styled.img`
  width: 300px;
  clear: both;
  display: block;
  margin: auto;
`;

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>
    {/* Utility Class  */}
    <div className="text-center">About page</div>
    <DemoImg src={demoImg} alt="" />
  </div>
);
export default About;
