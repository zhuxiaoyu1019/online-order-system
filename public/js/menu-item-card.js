// // This file 
// $(document).ready(function () {

//     M.AutoInit();
//     //menuContainer variable to hold all our menu items
//     const menuContainer = $(".menu-item-card");
//     const categoryItems = $(".products");

//     //Click events


//     // The code below handles the case where we want to get menu items for a specific category 
//     const cards = [];
//     // This function grabs from the database and updates the view
//     //GET REQUEST 
//     function renderCard(event) {
//         event.preventDefault();
//         categoryId = item || "";
//         if (categoryId) {
//             categoryId = "/?category_id=" + categoryId;
//         }
//         $.get("/api/product", function (data) {
//             console.log(data);
//             cards = data;
//             menuContainer.append;
//         });
//     }
//     renderCards();
//     $(document).on("click", "#tab", renderCard);


// });