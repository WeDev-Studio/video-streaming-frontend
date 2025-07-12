interface FilterBarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const FilterBar = ({ categories, selected, onSelect }: FilterBarProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer ${
            selected === category
              ? "bg-white text-black font-semibold"
              : "bg-zinc-700 text-white hover:bg-zinc-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
