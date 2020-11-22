import './Filter.css';
import ImgFilter from './imgFilter';
import SidebarFilter from './SidebarFilter';

const Filter = () => {
    return (
        <div className="filter">
            <ImgFilter />
            <SidebarFilter />
        </div>
    )
}

export default Filter;