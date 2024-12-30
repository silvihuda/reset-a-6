const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
     .then(res => res.json())
     .then(data => displayCategories(data.categories))
     .catch(err => console.log(err))
}
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById('category-container')
    categories.forEach((item)=>{
        console.log(item);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button class="btn flex justify-center items-center gap-2 lg:px-20 px-6 text-black bg-white border border-slate-400">
          <div class="h-[30px]">
          <img class="h-full w-full object-cover" src="${item.category_icon}"/>
          </div>
          <span class="text-xl">${item.category}</span>
        </button>
        `
        categoryContainer.append(buttonContainer)
    })
}
loadCategories()