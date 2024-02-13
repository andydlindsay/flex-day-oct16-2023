const List = () => {
  const myArr = [
    <h1 key="a">Hello world</h1>,
    <p key="b">This is a paragraph</p>,
    <button key="c">register</button>,
  ];

  return (
    <div>
      <h2>List component</h2>
      { myArr }
    </div>
  );
};

export default List;
