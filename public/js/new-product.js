$(document).ready(function () {
    let imageId = "";

    // $(document).on("click", ".edit-button", editProduct);
    $("#in-stock").on("change", switchStockState);
    // $("#product-size").on("change", selectedSize);
    // $(document).on("submit", "#sizePriceTbl", priceUpdate);
    // $(document).on("click", ".delete-button", deleteSize);
    $("#submit-update").click(updateForm);

    document.getElementById("upload_widget").addEventListener("click", function (e) {
        e.preventDefault();
        const uploadWidget = cloudinary.openUploadWidget({
            cloudName: "drdwcvbe8",
            uploadPreset: "sfdymlzn",
            sources: [
                "facebook",
                "dropbox",
                "instagram",
                "local",
                "url",
                "camera"
            ],
        }, function (error, result) {
            if (result.event === "success") {
                imageId = result.info.secure_url;
                uploadWidget.close();
            }
        });
    }, false);

    function switchStockState() {
        if ($('#in-stock').is(':checked')) {
            return true;
        }
        return false;
    }

    // function selectedSize() {
    //     let sizes = [];
    //     $('option[name="size-option"]:selected').each(() => {
    //         sizes = [];
    //         sizes.push($(this).val());
    //     });
    //     sizeTable(sizes[0]);
    // }

    // function sizeTable(arr) {
    //     $("tbody").empty();
    //     arr.map(element => {
    //         const row = $(
    //             [
    //                 "<tr>",
    //                 "<td>",
    //                 element,
    //                 "</td>",
    //                 "<td>",
    //                 "<input type='text' class='price'>",
    //                 "</td>",
    //                 `<td><a class="waves-effect waves-light btn delete-button"><i class="material-icons" id="delete-btn">delete</i></a></td>`,
    //                 "</tr>"
    //             ].join("")
    //         );
    //         $("tbody").append(row);
    //     });
    // }

    // function priceUpdate(e) {
    //     e.preventDefault();
    //     const id = $("tbody").data("id");
    //     const updatedPriceObj = {
    //         name: $(this).parent().prev('td').text(),
    //         price: $(this).children("input").val(),
    //     }
    //     $.ajax({
    //         url: "/pizzacutter/dashboard/size",
    //         type: 'POST',
    //         data: updatedPriceObj
    //     }).then(() => {
    //         // window.location.reload();
    //     }).fail(err => {
    //         console.log(err);
    //     });
    // }

    // function deleteSize() {
    //     const id = $(this).data("id");
    //     $.ajax({
    //         url: "/pizzacutter/dashboard/size/" + id,
    //         type: 'DELETE'
    //     }).then(() => {
    //         window.location.reload();
    //     })
    // }

    function updateForm(e) {
        e.preventDefault();
        const productName = $("#product-name").val();
        const description = $("#description").val();
        const inStock = switchStockState();
        const category = $('option[name="category-option"]:checked').val();
        const editProduct = {
            name: productName,
            description: description,
            in_stock: inStock,
            CategoryId: category,
            image_id: imageId,
        }
        $.ajax({
            url: "/pizzacutter/dashboard/product",
            type: 'POST',
            data: editProduct,
        }).then(data => {
            $("tbody").data("id", data.id);
        });
    }
})