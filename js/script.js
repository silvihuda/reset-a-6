const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}
const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
        .catch(err => console.log(err))
}
const loadPetsByCategories = (categoryName)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
     .then(res => res.json())
     .then(data=>displayAllPets(data.data))
     .catch(err=>console.log(err))
}
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    categories.forEach((item) => {
        console.log(item);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button onclick="loadPetsByCategories('${item.category}')" class="btn flex justify-center items-center gap-2 lg:px-20 px-6 text-black bg-white border border-slate-400">
          <div class="h-[30px]">
          <img class="h-full w-full object-cover" src="${item.category_icon}"/>
          </div>
          <span class="text-xl">${item.category}</span>
        </button>
        `
        categoryContainer.append(buttonContainer)
    })
}
const displayAllPets = (pets) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""
    
    pets.forEach((pet) => {
        console.log(pet);
        const card = document.createElement('div');
        card.classList = "card card-compact border rounded-lg p-3";
        card.innerHTML = `
<div>
    <figure class="rounded-lg h-[200px]">
             <img class="h-full w-full object-cover" src="${pet.image}" />
    </figure>
     <h2 class="text-xl font-bold mt-2">${pet.pet_name}</h2>
    <div class="space-y-2 my-2">
      <div class="flex gap-2">
      <img src="images/breed.png"/>
      ${!(pet.breed)?`<p>Breed: <span> ${"Not Available"}</span></p>`:`<p>Breed: <span> ${pet.breed}</span></p>`}
      </div>
      <div class="flex gap-2">
      <img src="images/birth.png"/>
      ${!(pet.date_of_birth)?`<p>Birth: <span> ${"Not Available"}</span></p>`:`<p>Birth: <span> ${pet.date_of_birth}</span></p>`}
      </div>
      <div class="flex gap-2">
      <img src="images/gender.png"/>
      ${!(pet.gender)?`<p>Gender: <span> ${"Not Available"}</span></p>`:`<p>Gender: <span> ${pet.gender}</span></p>`}
      </div>
      <div class="flex gap-2">
      <img src="images/price.png"/>
      ${!(pet.price)?`<p>Price: <span> ${"Not Available"}</span></p>`:`<p>Price: <span> ${pet.price}</span></p>`}
      </div>
    </div>
    <hr>
    <div class="mt-3 flex justify-between gap-1">
     
      <button class="btn btn-sm text-xl font-bold bg-white border border-[#0E7A8126] rounded-lg text-[#0E7A81]"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class="btn btn-sm text-xl font-bold bg-white border border-[#0E7A8126] text-[#0E7A81] rounded-lg">Adopt</button>
      <button class="btn btn-sm text-xl font-bold bg-white border border-[#0E7A8126] text-[#0E7A81] rounded-lg">Details</button>
      
    </div>
 </div>`

        cardContainer.append(card)

    })
}

loadCategories();
loadAllPets();
