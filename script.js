


const products = [
    { name: "Samsung", Model:"galaxy", Memory:64, price: "180000" },
    { name: "Nokia", Model:"S730", Memory:128, price: "22000" },
    { name: "Xioami", Model:"Note", Memory:32, price: "12000" },
    { name: "Motoroala", Model:"G10", Memory:32, price: "15000" },
];
  
  const sortByDropdown = document.querySelector(".sort-by");
  const sortOrderDropdown = document.querySelector(".sort-order");
  const container = document.querySelector(".products");
  
  const displayProducts = (products) => {
    let result = "";
  
    products.forEach(({ name,Model,Memory,price}) => {
      result += `
     <div class="product">
      <div><strong>Name:</strong><span>${name}</span></div>
      <div><strong>Model:</strong><span>${Model} GB</div>
      <div><strong>Memory:</strong><span>${Memory} GB</div>
      <div><strong>Price:</strong><span>${price}</div>
     
    
     </div>
    `;
    });
  
    container.innerHTML = result;
  };
  
  const ascendingSort = (sortByValue) => {
    return products.sort((a, b) => {
      if (a[sortByValue] < b[sortByValue]) return -1;
      if (a[sortByValue] > b[sortByValue]) return 1;
      return 0;
    });
  };
  
  const descendingSort = (sortByValue) => {
    return products.sort((a, b) => {
      if (a[sortByValue] < b[sortByValue]) return 1;
      if (a[sortByValue] > b[sortByValue]) return -1;
      return 0;
    });
  };
  
  sortByDropdown.addEventListener("change", () => {
    const sortByValue = sortByDropdown.value; // price or memory value
    const sortOrderValue = sortOrderDropdown.value; // asc or desc value
  
    const sorted =
      sortOrderValue === "desc"
        ? descendingSort(sortByValue)
        : ascendingSort(sortByValue);
  
    displayProducts(sorted);
  });
  
  sortOrderDropdown.addEventListener("change", () => {
    const event = new Event("change");
    const sortByValue = sortByDropdown.value;
  
    if (sortByValue) {
      sortByDropdown.dispatchEvent(event);
    }
  });
  
  displayProducts(products);
  





