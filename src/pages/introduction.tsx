import { Helmet } from '@modern-js/runtime/head';
import styled from '@modern-js/runtime/styled';

// css in js
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Introduction = () => (
  <div>
    <Helmet>
      <title>Introduction</title>
    </Helmet>
    {/* Utility Class  */}
    <Title className="text-red-600">Introduction page</Title>
  </div>
);
export default Introduction;
