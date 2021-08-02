// ELEMENTS SELECTED
const sectionCenter = document.querySelector('.section-center');
const buttonsContainer = document.querySelector('.btn-container');

// RUN ITEMS
window.addEventListener('DOMContentLoaded', () => {
  // CUSTOM MENU ITEMS
  displayMenuItems(menu);

  // CUSTOM MENU CATEGORIES
  displayMenuButtos();
});

// This function works with any menu as long as the prototype is the same.
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    // make custom article
    let article = `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
    return article;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

// This function works with any cateogory as long as the  prototype is the same
function displayMenuButtos() {
  const catogories = menu.reduce((values, item) => {
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ['all']);

  const catogoryButtons = catogories.map((category) => {
    let customButton = `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  return customButton; 
  }).join('');

  buttonsContainer.innerHTML = catogoryButtons;
  const filterButtons = buttonsContainer.querySelectorAll('.filter-btn');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if(menuItem.category === category){
                return menuItem;
            }
        });
            if(category === 'all'){ displayMenuItems(menu); }
            else{ displayMenuItems(menuCategory); }
    });
});
}
