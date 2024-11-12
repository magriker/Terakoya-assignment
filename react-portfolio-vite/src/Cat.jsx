const Cat = ({ catdata, isLoading }) => {
  return (
    <div>
      {isLoading && <p>...loading</p>}
      {!isLoading && <img src={catdata?.url}></img>}
    </div>
  );
};

export default Cat;
