import React, { useState } from 'react'
import Menucomponent from '../../components/Menucomponent'
import Categories from '../../components/Categories'
import items from '../../components/DataComida'

const allCategories = ["Todo", ...new Set(items.map((item) => item.category)),]

 export function Menu() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'Todo') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>PARA COMER</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menucomponent items={menuItems} />
      </section>
    </main>
  )
}

