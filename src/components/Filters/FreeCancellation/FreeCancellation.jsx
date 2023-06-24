import "./FreeCancellation.css";

export const FreeCancellation = () => {
    return(
        <div className="filter-container">
            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancellation</span>
                <label className="slide">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}