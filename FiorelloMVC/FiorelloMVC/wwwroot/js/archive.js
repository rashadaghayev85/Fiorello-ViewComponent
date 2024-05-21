let categoryArchiveBtns = document.querySelectorAll(".add-archive");


categoryArchiveBtns.forEach(item =>

    item.addEventListener("click", function () {

        
        let id = this.getAttribute("data-id");
        (async () => {
            await fetch(`category/settoarchive?id=${id}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            this.closest(".category-data").remove()
        })();
    })
)

let index = document.querySelectorAll(".index");


index.forEach(item =>

    item.addEventListener("click", function () {


        let id = this.getAttribute("data-id");
        (async () => {
            await fetch(`archive/setfromarchive?id=${id}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            this.closest(".category-data").remove()
        })();
    })
)

