// //This file 
// $(document).ready(function () {
//     //menuContainer variable to hold all our menu items
//     const menuContainer = $(".menu-item-card");
//     const getCategorySelect = $("#Category");

//     //Click events
//     $(document).on("click", "", handlePostRender);

//     // Variable to hold our items
//     const items;

//     // The code below handles the case where we want to get menu items for a specific category 
//     // Looks for a query param in the url for category_id
//     const url = window.location.search;
//     const itemId;
//     if (url.indexOf("?item_id=") !== -1) {
//         itemId = url.split("=")[1];
//         getCategory(itemId);
//     }

//     // If there's no itemId we just get all posts as usual
//     else {
//         getCategory();
//     }

//     // This function grabs posts from the database and updates the view
//     //GET REQUEST 
//     function getCategory(item) {
//         itemId = item || "";
//         if (itemId) {
//             itemId = "/?item_id=" + itemId;
//         }
//         $.get("/api/Category" + itemId, function (data) {
//             console.log("Testing GET", data);
//             posts = data;
//             if (!posts || !posts.length) {
//                 displayEmpty(author);
//             }
//             else {
//                 initializeData();
//             // 
//         });
//     }
//     // InitializeRows handles appending all of our constructed post HTML inside menuContainer

//     function initializeData() {
//         menuContainer.empty();
//         const postsToAdd = [];
//         for (const i = 0; i < posts.length; i++) {
//             items.push(createNewCard(posts[i]));
//         }
//         menuContainer.append(items);
//     }

//     // This function constructs a cards HTML

//     function createNewCard(item) {

//         const newItemCard = $("<div>");
//         newItemCard.addClass("card");
//         // var newItemCardHeading = $("<div>");
//         // newItemCardHeading.addClass("card-header");

//         const selectBtn = $("<button>");
//         selectBtn.text("x");
//         selectBtn.addClass("delete btn btn-danger");

//         // This function displays a message when there are no posts
// }

// });