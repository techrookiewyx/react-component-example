import './index.less';
export default function ComponentExample(props: any) {
  const { title } = props;
  return (
    <div>
      {title && <h3 className="wyx-title">{title}</h3>}
      It is just process test for publish npm
    </div>
  );
}
