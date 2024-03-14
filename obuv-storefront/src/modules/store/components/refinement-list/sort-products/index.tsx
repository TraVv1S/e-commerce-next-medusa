"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Новинки",
  },
  {
    value: "price_asc",
    label: "Дешевле",
  },
  {
    value: "price_desc",
    label: "Дороже",
  },
]

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <FilterRadioGroup
      title="Сортировать по"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
