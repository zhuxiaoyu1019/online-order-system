$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();


    //category 
    $(document).on("submit", "#category-input", insertCategory);
    $(document).on("click", "#delete-btn", deleteCategory);

    const $newCategoryInput = $("#category-name");
    // new input
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
        $.ajax({
            method: "DELETE",
            url: "/category/" + id
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