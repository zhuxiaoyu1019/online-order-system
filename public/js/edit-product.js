$(document).ready(function () {
    let imageId = "";

    M.updateTextFields();
    $(document).on("click", "#edit-btn", editProduct);
    $(".in-stock").on("change", switchStockState);
    $("#product-size").on("change", selectedSize);
    $(document).on("input", ".price", priceUpdate);
    $(document).on("click", ".delete-button", deleteSize);
    $("#submit-update").click(updateForm);

    document.getElementById("upload_widget").addEventListener("click", function (e) {
        e.preventDefault();
        const uploadWidget = cloudinary.openUploadWidget({
            cloudName: "drdwcvbe8", //process.env.CLOUDINARY_CLOUND_NAME,
            uploadPreset: "sfdymlzn", //process.env.CLOUNDINARY_UPLOAD_PRESENT,
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

    function editProduct() {
        const id = $(this).data("id");
        window.location.href = "/pizzacutter/dashboard/product-edit/" + id;
    }

    function switchStockState() {
        if ($('.in-stock').is(':checked')) {
            return true;
        }
        return false;
    }

    function selectedSize() {
        let sizes = [];
        $('option[name="size-option"]:selected').each(() => {
            sizes = [];
            sizes.push($(this).val());
        });
        sizeTable(sizes[0]);
    }

    function sizeTable(arr) {
        $("tbody").empty();
        const id = $("tbody").data("id");
        $.ajax({
            url: "/pizzacutter/dashboard/size/" + id,
            type: 'GET'
        }).then(data => {
            const sizeArr = [];
            data.map(element => sizeArr.push(element.name));
            arr.map(element => {
                let row = ""
                if (sizeArr.includes(element)) {
                    const index = sizeArr.indexOf(element);
                    row = $(
                        [
                            "<tr>",
                            "<td>",
                            data[index].name,
                            "</td>",
                            "<td>",
                            `<input type='text' class="price" data-id=${data[index].id} value=${data[index].price / 100}>`,
                            "</td>",
                            `<td><a class="waves-effect waves-light btn delete-button" data-id=${data[index].id}><i class="material-icons">delete</i></a></td>`,
                            "</tr>"
                        ].join("")
                    );
                } else {
                    row = $(
                        [
                            "<tr>",
                            "<td>",
                            element,
                            "</td>",
                            "<td>",
                            "<input type='text' class='price'>",
                            "</td>",
                            `<td><a class="waves-effect waves-light btn delete-button"><i class="material-icons" id="delete-btn">delete</i></a></td>`,
                            "</tr>"
                        ].join("")
                    );
                }
                $("tbody").append(row);
            });
        });
    }

    function priceUpdate() {
        const id = $("tbody").data("id");
        const sizeId = $(this).data("id");
        const updatedPriceObj = {
            name: $(this).parent().prev('td').text(),
            price: $(this).val(),
            ProductId: id
        }
        if (sizeId === undefined) {
            //post
            $.ajax({
                url: "/pizzacutter/dashboard/size",
                type: 'POST',
                data: updatedPriceObj
            }).then(() => {
                window.location.reload();
            });
        } else {
            //put
            $.ajax({
                url: "/pizzacutter/dashboard/size/" + sizeId,
                type: 'PUT',
                data: updatedPriceObj
            }).then(() => {
                window.location.reload();
            });
        }
    }

    function deleteSize() {
        const id = $(this).data("id");
        $.ajax({
            url: "/pizzacutter/dashboard/size/" + id,
            type: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

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
        const id = $(this).data("id");
        $.ajax({
            url: "/pizzacutter/dashboard/product/" + id,
            type: 'PUT',
            data: editProduct,
        }).then(() => {
            window.location.reload();
        });
    }
})