import React, { useState } from 'react'
import Menucomponent from '../../components/Menucomponent'
import Categories from '../../components/Categories'
import items from '../../components/DataBrunch'

const allCategories = [...new Set(items.map((item) => item.category)),]

 export function Brunch() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    // if (category === 'Todo') {
    //   setMenuItems(items)
    //   return
    // }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menucomponent items={menuItems} />
      </section>
    </main>
  )
}

