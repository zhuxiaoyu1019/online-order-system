//This file 
$(document).ready(function () {
    //menuContainer variable to hold all our menu items
    const menuContainer = $(".menu-item-card");
    const getCategorySelect = $("#Category");

    //Click events
    $(document).on("click", "button.delete", handlePostRender);
    
    // Variable to hold our items
    const items;

    // The code below handles the case where we want to get menu items for a specific category 
    // Looks for a query param in the url for category_id
    var url = window.location.search;
    var itemId;
    if (url.indexOf("?item_id=") !== -1) {
        itemId = url.split("=")[1];
        getCategory(itemId);
    }

    // If there's no itemId we just get all posts as usual
    else {
        getCategory();
    }

    // This function grabs posts from the database and updates the view
    //GET REQUEST 
    function getCategory(item) {
        authorId = item || "";
        if (authorId) {
            authorId = "/?author_id=" + authorId;
        }
        $.get("/api/posts" + authorId, function (data) {
            console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmpty(author);
            }
            else {
                initializeRows();
            }
        });
    }
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer

    // This function constructs a post's HTML

    // This function displays a message when there are no posts
});