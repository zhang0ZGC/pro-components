import React from 'react';
import {
  LightFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormSwitch,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormTimePicker,
  ProFormSlider,
} from '@ant-design/pro-form';
import { Radio } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
        }}
        size={size}
        onFinish={async (values) => console.log(values)}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" secondary />
        <ProFormText name="name2" label="地址" secondary />
        <ProFormDatePicker name="name3" label="日期" />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormTimePicker name="time" label="时间" />
      </LightFilter>
    </div>
  );
};
