//This file 
$(document).ready(function () {
    //menuContainer variable to hold all our menu items
    const menuContainer = $(".menu-item-card");
    const getCategoryItems = $("#category");

    //Click events
    $(document).on("click", "tab", renderCard);

    // Variable to hold our items
    const items;

    // The code below handles the case where we want to get menu items for a specific category 
    // Looks for a query param in the url for category_id

    const url = window.location.search;
    const categoryId;
    if (url.indexOf("?category_id=") !== -1) {
        categoryId = url.split("=")[1];
        getItems(categoryId);
    }

    // This function grabs from the database and updates the view
    //GET REQUEST 
    function getItems(event) {
        categoryId = item || "";
        if (categoryId) {
            categoryId = "/?category_id=" + categoryId;
        }
        $.get("/api/product" + itemId, function (data) {
            console.log("Testing GET", data);
            posts = data;
            if (!item || !posts.length) {
                displayEmpty(author);
            }
            else {
                initializeData();
                // 
            }});
    }
    // InitializeRows handles appending all of our constructed post HTML inside menuContainer

    function initializeData() {
        menuContainer.empty();
        const postsToAdd = [];
        for (const i = 0; i < posts.length; i++) {
            items.push(createNewCard(posts[i]));
        }
        menuContainer.append(items);
    }

    // This function constructs a cards HTML

    function createNewCard(item) {

        const newItemCard = $("<div>");
        newItemCard.addClass("card");
        // var newItemCardHeading = $("<div>");
        // newItemCardHeading.addClass("card-header");

        const selectBtn = $("<button>");
        selectBtn.text("x");
        selectBtn.addClass("delete btn btn-danger");
    }

});