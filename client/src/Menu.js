import MenuItem from "./MenuItem"
import Page from "./Page"

function Menu() {
  return (
    <Page title="Menu">
      <div className="menu-sections">
        <MenuSection title="Breakfast">
          <MenuItem
            name="Mysore Dosa"
            image={{ path: "images/mysore dosa.jpg", alt: "Mysore Dosa" }}
            description="South Indian crepe like dish served with masala and chutney"
          />
          <MenuItem
            name="Idli Vada"
            image={{ path: "images/idli_vada.jfif", alt: "Idli Vada" }}
            description="Round rice cakes made from a batter of steamed rice and fermented black lentil served along with a popular fried snack and chutney"
          />
        </MenuSection>
        <MenuSection title="Lunch">
          <MenuItem
            name="Vegetable Biryani"
            image={{ path: "images/veg-biryani.jpg", alt: "Vegetable Biryani" }}
            description="Vegetable Biryani"
          />
          <MenuItem
            name="Egg Idiyappam"
            image={{ path: "images/egg_idiyappam.jpg", alt: "Egg Idiyappam" }}
            description="Rice noodles served alongside egg curry"
          />
          <MenuItem
            name="Egg Biryani"
            image={{ path: "images/eggBiryani.jfif", alt: "Egg Biryani" }}
            description="Egg Biryani"
          />
        </MenuSection>
        <MenuSection title="Dinner">
          <MenuItem
            name="Daal and Rice"
            image={{ path: "images/daal-and-rice.jpg", alt: "Daal and Rice" }}
            description="Basmati rice served with a lentil curry"
          />
          <MenuItem
            name="Egg Porotha"
            image={{ path: "images/egg_porotha.jpg", alt: "Egg Porotha" }}
            description="Egg curry served with a bread-like pancake"
          />
        </MenuSection>
        <MenuSection title="Appetizers">
          <MenuItem
            name="Pakora"
            image={{ path: "images/pakora.jpg", alt: "Pakora" }}
            description="Indian fritters served with a spicy green chutney"
          />
          <MenuItem
            name="Gulab Jamun"
            image={{ path: "images/gulab jamun.jpg", alt: "Gulab Jamun" }}
            description="Famous Indian fried dough balls dipped in a sweet sugar syrup"
          />
        </MenuSection>
      </div>
    </Page>
  )
}

function MenuSection({ title, children }) {
  return (
    <section className="menu-section">
      <h2>{title}</h2>
      <div className="menu-section-items">
        {children}
      </div>
    </section>
  )
}

export default Menu