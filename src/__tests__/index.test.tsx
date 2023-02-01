import { renderApp } from '@modern-js/runtime/testing';
import Index from '@/pages/index';

describe('home page', () => {
  // test 别名 it
  // 第一个参数是测试名称
  // 第二个参数是包含测试期望的函数
  // 可选地传入第三个参数 timeout(毫秒)指定测试超时时间
  it('should have contents', () => {
    // render 方法返回一个包裹对象 对象中包括一些对 DOM 的查询/获取方法
    // getByText: 通过标签的 text 获取 DOM
    const { getByText } = renderApp(<Index />);
    // 判断 DOM 是否在 Document 中
    expect(getByText('Powered by Modern.js')).toBeInTheDocument();
  }, 1000);
});
