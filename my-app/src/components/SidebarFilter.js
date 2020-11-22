import './SidebarFilter.css';

const SidebarFilter = () => {
    return (
        <div className="filterParams">
            <div className="filterInputs">
                <div className="inputs">
                    <label>Оттенки серого</label>
                    <input type="range" min="0" max="100" defaultValue="0" className="input-grayscale" />
                </div>
                <div className="inputs">
                    <label>Контраст</label>
                    <input type="range" min="0" max="200" defaultValue="100" className="input-contrast" />
                </div>
                <div className="inputs">
                    <label>Яркость</label>
                    <input type="range" min="0" max="200" defaultValue="100" className="input-brightness" />
                </div>
                <div className="inputs">
                    <label>Сепия</label>
                    <input type="range" min="0" max="100" defaultValue="0" className="input-sepia" />
                </div>
                <div className="inputs">
                    <label>Насыщенность</label>
                    <input type="range" min="0" max="200" defaultValue="100" className="input-saturate" />
                </div>
            </div>
            <button className="btn" disabled>Сбросить</button>
        </div>
    )
}

export default SidebarFilter;