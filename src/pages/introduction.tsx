import { Helmet } from '@modern-js/runtime/head';
import styled from '@modern-js/runtime/styled';
import { useState, useEffect } from 'react';
import getData from '@api/data';

// css in js
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Item = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: pink;
`;

const Introduction = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const load = async () => {
      // 可以像使用函数一样来调用 API
      const res = await getData();
      const _data = JSON.stringify(res);
      setData(_data);
    };
    load();
  }, []);
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Introduction</title>
      </Helmet>
      {/* Utility Class  */}
      <Title className="text-red-600">Introduction page</Title>
      {data && <Item>{data}</Item>}
    </div>
  );
};
export default Introduction;
