$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible();

    //category 
    $(document).on("submit", "#category-input", insertCategory);
    $(document).on("click", "#delete-btn", deleteCategory);
    const $newCategoryInput = $("#category-name");

    //product 
    // $(document).on("submit", "#product-search", searchProducts);
    $(document).on("click", "#delete-btn", deleteProduct);
    const $productSearch = $("#product-search");

    //new product
    $(document).on("click", "#save-button", createProduct);
    const $newProductName = $("#product-name");
    const $newProductDesc = $("#product-desc");
    const $inStock = $("#in-stock");
    const $newProductCategory = $("#product-category");
    const $newProductSize = $("#product-size");
    const $newProductPrice = $("#product-price");

    //size
    $(document).on("submit", "#size-input", insertSize);
    $(document).on("click", "#delete-btn", deleteSize);
    const $newSizeInput = $("#size-name");

    // new category
    function insertCategory(event) {
        event.preventDefault();
        const category = {
            name: $newCategoryInput.val().trim(),
        };
        $.ajax("/pizzacutter/dashboard/category", {
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
    function createProduct(event) {
        event.preventDefault();
        const product = {
            name: $newProductName.val().trim(),
            description: $newProductDesc.val().trim(),
            in_stock: $inStock
        };
        $.ajax("/pizzacutter/dashboard/product-new", {
            type: "POST",
            data: product
        }).then(() => {
            // Reload the page to get the updated list
            console.log("product created")
            location.reload();
        });
    }

    function searchProducts(event) {
        console.log("function tbd")
    }

    // delete product
    function deleteProduct(event) {
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

    // new size
    function insertSize(event) {
        event.preventDefault();
        const size = {
            size: $newSizeInput.val().trim(),
        };
        $.ajax("/pizzacutter/dashboard/size", {
            type: "POST",
            data: size
        }).then(() => {
            // Reload the page to get the updated list
            console.log("size name inserted")
            location.reload();
        });
    }

    // delete size
    function deleteSize(event) {
        // event.stopPropagation();
        var id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: "/pizzacutter/dashboard/size/" + id
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