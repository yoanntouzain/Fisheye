class SorterForm {
    constructor() {
        this.$wrapper = document.createElement('div')
        this.$sorterFormWrapper = document.querySelector('.sorter-form-wrapper')
    }

    render() {
        const filterForm = 
            `<form action="#" method="get" class="sorter-form">
              <label for="sorter-select" class="label-sorter">Triez par: </label>
                <select name="sorter-select" id="sorter-select">
                  <option value="popularite" selected>Popularité</option>
                  <option class="test" value="date">Date</option>
                  <option value="title">Titre</option>
                </select>
            </form>`

        this.$wrapper.innerHTML = filterForm
        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}