interface Props {
  sort: string
  setSort: (value: string) => void
}

export default function ShopFilters({ sort, setSort }: Props) {
  return (
    <div className="flex justify-end mb-6">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none"
      >
        <option value="default">Orden por defecto</option>
        <option value="price-low">Precio menor</option>
        <option value="price-high">Precio mayor</option>
        <option value="name">Nombre</option>
      </select>
    </div>
  )
}