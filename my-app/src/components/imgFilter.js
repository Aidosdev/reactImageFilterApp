import './imgFilter.css';

const ImgFilter = () => {
    function updateUrl() {
        let image = document.querySelector(".image");
        let inputUrl = document.querySelector(".inputUrl");
        image.src = inputUrl.value;
    }
    return (
        <div className="imgBlock">
            <img src="https://www.tubefilter.com/wp-content/uploads/2018/07/merrell-twins.jpg" className="image" />
            <div className="imgUrl">
                <label>Вставьте адрес картинки</label>
                <input type="text" defaultValue="https://www.tubefilter.com/wp-content/uploads/2018/07/merrell-twins.jpg" onChange={updateUrl} className="inputUrl" />
            </div>
        </div>
    )
}

export default ImgFilter;