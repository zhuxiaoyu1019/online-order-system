M.updateTextFields();
$(document).on("click", "#edit-btn", editProduct);
$(".in-stock").on("change", switchStockState);
$("#product-size").on("change", selectedSize);
// $("#image-upload").on("change", imageUpload);
$("#submit-update").click(updateForm);

let id = "";

function editProduct() {
    id = $(this).data("id");
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
    $('option[name="size-option"]:checked').each(() => {
        sizes = [];
        sizes.push($(this).val());
    });
    sizeTabel(sizes[0]);
}

function sizeTabel(arr) {
    $("tbody").empty();
    arr.forEach(size => {
        const row = $(
            [
                "<tr>",
                "<td>",
                size,
                "</td>",
                "<td>",
                "<input type='text' class='price'>",
                "</td>",
                "</tr>"
            ].join("")
        );
        $("tbody").append(row);
    });
}

// function imageUpload(e) {
// const image = $("#image-upload").val();
// console.log(image);
// const formData = new FormData();
// console.log($("#image-upload")[0].files[0])
// formData.append("image", $("#image-upload")[0].files[0]);
// // formData.append("name", e.target.files[0].name)
// const obj = {
//     image: image,
//     name: e.target.files[0].name
// }
// $.ajax({
//     url: "/pizzacutter/dashboard/image",
//     type: "POST",
//     data: formData
// }).then(data => {
//     console.log(data);
// }).fail(err => {
//     console.log(err);
// })
// }

function updateForm(e) {
    e.preventDefault();
    const productName = $("#product-name").val();
    const description = $("#description").val();
    const inStock = switchStockState();
    const category = $('option[name="category-option"]:checked').val();
    // $('option[name="size-option"]:checked').each(() => {
    //     const sizePrice = {

    //     }
    //     sizes.push($(this).val());
    const editForm = {
        name: productName,
        description: description,
        in_stock: inStock,
        CategoryId: category,
        ImageId: 1,
        piccino: 1,
        small: 1,
        medium: 1,
        large: 1,
        x_large: 1,
        smallsquare: 1,
        largesqaure: 1,
        family: 1,
        full: 1,
        regular: 1,
        deluxe: 1
    }

    const id = $(this).data("id");
    console.log(id);

    $.ajax({
        url: "/pizzacutter/dashboard/product/" + id,
        type: 'PUT',
        data: editForm,
    }).then(data => {
        window.location.reload();
    })
}