import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./PriceRange.css";

function valuetext(value) {
  return `${value}`;
}

const value = 10;

export const PriceRange = () => {
  return (
    <div className="filter-container">
        <span className='filter-label'>Price Range</span>
        <Box>
        <Slider
            sx= {{ color: "#fc924c"}}
            className="price-range"
            getAriaLabel={() => "Minimum Difference"}
            value={value}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            min={100}
            max={25000}
            disableSwap
        />
        </Box>
    </div>
  );
}
