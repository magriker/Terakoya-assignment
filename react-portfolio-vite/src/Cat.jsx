const Cat = ({ catData, isLoading }) => {
  return (
    <div>
      {isLoading && <p>...loading</p>}
      {!isLoading && console.log(catData)}
    </div>
  );
};

export default Cat;
