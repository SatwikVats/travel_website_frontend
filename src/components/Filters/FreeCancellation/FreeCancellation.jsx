import "./FreeCancellation.css";
import { useFilter } from "../../../context";

export const FreeCancellation = () => {
    
    const {filterDispatch, isCancellable} = useFilter();
    const handleCancelChange = (event) => {
        filterDispatch({
            type: "CANCELLABLE",
            payload: event.target.checked,
        });
    }

    console.log(isCancellable);

    return(
        <div className="filter-container">
            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancellation</span>
                <label className="slide">
                    <input type="checkbox" onChange={handleCancelChange} value={isCancellable} checked={isCancellable}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}