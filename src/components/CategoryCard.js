const CategoryCard = ({ title, image, vendor }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{vendor}</p>
    </div>
  </div>
);

export default CategoryCard;
