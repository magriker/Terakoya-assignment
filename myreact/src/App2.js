function App2({ title, type }) {
  //

  const current = () => {
    const d = new Date();

    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <>
      <button onClick={current}>{title}</button>;
    </>
  );
}

export default App2;
