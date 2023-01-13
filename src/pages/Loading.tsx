const Loading = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center bg-lightGreen">
      <div className="mx-1 flex justify-center items-center lg:mx-4">
        <img src="assets/logo.png" alt="logo" />
        <div className="ml-3">
          <h3 className="font-bold text-xl uppercase leading-6">React Sneakers</h3>
          <div className="text-xs lg:text-sm leading-4 text-grayApp">
            Магазин найкращих кросівок
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
