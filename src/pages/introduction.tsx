import { Helmet } from '@modern-js/runtime/head';
import styled from '@modern-js/runtime/styled';
import { useState, useEffect } from 'react';
import getData from '@api/data';
// import { useLoader } from '@modern-js/runtime/dist/types';
import { useLoader } from '@modern-js/runtime';
import { NoSSR } from '@modern-js/runtime/ssr';

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
  const [time, setTime] = useState<string>(new Date().toString());

  // useEffect(() => {
  //   const load = async () => {
  //     // 可以像使用函数一样来调用 API
  //     const res = await getData();
  //     const _data = JSON.stringify(res);
  //     setData(_data);
  //   };
  //   load();
  // }, []);

  // 当 SSR 的时候，服务端使用 useLoader 预加载数据
  const { data: newData } = useLoader(async () => {
    // 可以像使用函数一样来调用 API
    const res = await getData();
    return res;
  });

  useEffect(() => {
    setData(JSON.stringify(newData));
  }, [newData]);

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date().toString());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Introduction</title>
      </Helmet>
      {/* Utility Class  */}
      <Title className="text-red-600">Introduction page</Title>
      {data && <Item>{data}</Item>}
      {/* 通过 NoSSR 组件实现页面局部的 CSR */}
      <NoSSR>
        <div className="text-center">time: {time}</div>
      </NoSSR>
    </div>
  );
};
export default Introduction;
