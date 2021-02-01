$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();

    //category 
    $(document).on("submit", "#category-input", insertCategory);
    $(document).on("click", "#delete-btn", deleteCategory);
    const $newCategoryInput = $("#category-name");

    //product 
    $(document).on("submit", "#product-search", insertProduct);
    $(document).on("click", "#delete-btn", deleteProductMain);
    const $productSearch = $("#product-search");

    //product new
    $(document).on("submit", "#product-input", insertProduct);
    $(document).on("click", "#delete-btn", deleteProductFromUpdatePage);
    const $newProductInput = $("#product-name");


    // new category
    function insertCategory(event) {
        event.preventDefault();
        const category = {
            name: $newCategoryInput.val().trim(),
        };
        $.ajax("/category", {
            type: "POST",
            data: category
        }).then(() => {
            // Reload the page to get the updated list
            console.log("category name inserted")
            location.reload();
        });
    }

    // delete category
    function deleteCategory(event) {
        // event.stopPropagation();
        var id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: "/pizzacutter/dashboard/category/" + id
        }).then(() => {
            location.reload();
        });
    }

    // new product
    function insertProduct(event) {
        event.preventDefault();
        const product = {
            name: $newProductInput.val().trim(),
        };
        $.ajax("/product", {
            type: "POST",
            data: product
        }).then(() => {
            // Reload the page to get the updated list
            console.log("product name inserted")
            location.reload();
        });
    }

    // delete product
    function deleteProductMain(event) {
        // event.stopPropagation();
        var id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: "/pizzacutter/dashboard/product/" + id
        }).then(() => {
            location.reload();
        });
    }

    // delete product
    function deleteProductFromUpdatePage(event) {
        // event.stopPropagation();
        var id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: "/pizzacutter/dashboard/product-update/" + id
        }).then(() => {
            location.reload();
        });
    }

    //extra 
    $(document).on("submit", "#extra-input", insertExtra);

    const $newExtraInput = $("#extra-name");

    function insertExtra(event) {
        event.preventDefault();
        const extra = {
            name: $newExtraInput.val().trim(),
        };

        $.ajax("/extra", {
            type: "POST",
            data: extra

        }).then(() => {
            // Reload the page to get the updated list
            console.log("extra name inserted")
            location.reload();
        });

    }
});