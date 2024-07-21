const categories = document.querySelectorAll('.item');

console.log("Number of categories: ", categories.length);

categories.forEach((item) =>
    console.log("Category: ", item.childNodes[1].textContent, "\nElements: ", item.childNodes[3].childElementCount));
