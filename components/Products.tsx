const Products = () => {
  return (
    <div className="bg-gray-50 w-full p-10">
      <header className="flex justify-between items-center h-10 mb-5">
        <h1 className="text-3xl font-bold">Products</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:text-gray-300">
          Create new
        </button>
      </header>
      <section className="bg-white shadow-sm h-screen rounded-md p-3">
        <div className="flex justify-between items-center border-b-2 pb-3">
          <form>
            <input
              className="input-text"
              type="text"
              placeholder="Search..."
            />
          </form>
          <div>filters</div>
        </div>
        <div>products</div>
      </section>
    </div>
  );
};

export default Products;
