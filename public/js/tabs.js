$(document).ready(function () {
    $('.tabs').tabs();

    $(document).on("click", ".tabs", renderProductsData);
    const newCard = $(".menu-item-card")

    function renderProductsData() {
        $.ajax("/pizzacutter/menu", {
            type: "POST",
            data: category
        }).then(() => {
            console.log("TEST")
            location.reload();
        });
    }

});