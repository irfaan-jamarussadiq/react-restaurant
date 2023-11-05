import menuSections from "../data/menu.json";
import MenuSection from "./MenuSection";
import MenuItem from "./MenuItem";
import Page from "../Page";

function Menu() {
  return (
    <Page title="Menu">
      <div className="menu-sections">
        {menuSections.map(({ sectionName, sectionItems }, sectionIndex) => (
          <MenuSection key={sectionIndex} title={sectionName}>
            {sectionItems.map((menuItem, itemIndex) => (
              <MenuItem key={sectionIndex + itemIndex} {...menuItem} />
            ))}
          </MenuSection>
        ))}
      </div>
    </Page>
  )
}

export default Menu