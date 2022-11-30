# 笔记

## utility type

### Omit

```ts
// 把别的类型删除掉返回一个新类型
interface IIdSelectProps extends Omit<ISelectProps, 'value' | 'onChange'> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}
```

### Pick

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3c705b58f0c4cd2a3d66db4fc142d4f~tplv-k3u1fbpfcp-watermark.image)

```ts
// 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
interface IProps {
  name: string;
  age: number;
  phone: number;
}

type TUser = Pick<IProps, 'name' | 'age'>;
```

### Partial

