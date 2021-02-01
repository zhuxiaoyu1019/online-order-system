$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();

    //category form
    $(document).on("submit", "#category-input", insertCategory);

    const $newCategoryInput = $("#category-name");

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

    //extra form
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