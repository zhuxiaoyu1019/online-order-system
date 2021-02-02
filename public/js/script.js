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
    $(document).on("click", "#edit-btn", editProduct);
    $(document).on("submit", ".search-form", searchProducts);
    const $tableContent = $("#product-list")


    //new product
    $(document).on("click", "#save-button", createProduct);
    const $newProductName = $("#product-name");
    const $newProductDesc = $("#product-desc");
    const $inStock = $("#in-stock");

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
        event.preventDefault();

        const $productSearch = $(".search-term").val().trim();

        $.ajax({
            method: "GET",
            url: "/pizzacutter/dashboard/product/" + $productSearch
        }).then((data) => {
            console.log(data)
            $tableContent.empty()
            $tableContent.html(` <tr>
            <td> ${data.name}</td>
            <td> ${data.description}</td>
            <td> ${data.in_stock}</td>
            <td> ${data.Category.name || "No Category"}</td>
            <td> <img src="${data.Image || "https://via.placeholder.com/100"}"></td>
            <td> <a href='/pizzacutter/dashboard/product-edit' class="waves-effect waves-light btn delete-button"><i
                        class="material-icons" id="edit-btn" data-id="${data.id}">edit</i></a></td>
            <td> <a class="waves-effect waves-light btn delete-button"><i class="material-icons" id="delete-btn"
                        data-id="${data.id}">delete</i></a></td>
        </tr>`)
        });
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

    // edit product
    function editProduct(event) {
        event.preventDefault();
        const product = {
            name: $newProductName.val().trim(),
            description: $newProductDesc.val().trim(),
            in_stock: $inStock
        };
        $.ajax("/pizzacutter/dashboard/product-edit", {
            type: "PUT",
            data: product
        }).then(() => {
            // Reload the page to get the updated list
            console.log("product created")
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