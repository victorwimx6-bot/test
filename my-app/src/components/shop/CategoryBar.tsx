import Image from "next/image"

interface Category {
  key: string
  label: string
  image: string
}

interface Props {
  categories: Category[]
  selected: string
  onChange: (value: string) => void
}

export default function CategoryBar({
  categories,
  selected,
  onChange
}: Props) {
  return (
    <div className="hidden md:flex gap-8 flex-wrap justify-center py-8">

      <button
        onClick={() => onChange("all")}
        className={`
          cursor-pointer
          pb-2 transition
          ${selected === "all"
            ? "border-b-2 border-black"
            : "opacity-60"}
        `}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onChange(category.key)}
          className={`
            flex items-center gap-2 pb-2 transition cursor-pointer
            ${selected === category.key
              ? "border-b-2 border-black"
              : "opacity-60 hover:opacity-100"}
          `}
        >
          <Image
            src={category.image}
            alt={category.label}
            width={22}
            height={22}
            className="object-contain"
          />

          <span>
            {category.label}
          </span>
        </button>
      ))}

    </div>
  )
}