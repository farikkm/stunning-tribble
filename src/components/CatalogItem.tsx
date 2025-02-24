const CatalogItem = ({ img, catalog, name }: { img: string, catalog: string, name: string }) => {
  return (
    <div className="p-5 bg-gradient-to-br from-[#CECFEE] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl">
      <img className="rounded-4xl" src={img} alt="shop-img" />
      <span className="block mt-1 text-xs">{catalog}</span>
      <h4 className="text-lg font-bold">{catalog}</h4>
    </div>
  );
};

export default CatalogItem;
