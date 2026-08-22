import React, { useState, useEffect, useRef } from "react";
import "./Filters.css";

const Filters = ({ onFilterUpdate }) => {

const [selectedNames, setSelectedNames] = useState([]);
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(200000);    
const [isOpen, setIsOpen] = useState(false);
const panelRef = useRef(null);

const collections = [
{ name: "All" }, { name: "Chairs" }, { name: "Tables" },
{ name: "Sofas" }, { name: "Lighting" }, { name: "Storage" },
];

useEffect(() => {
if (onFilterUpdate) {
onFilterUpdate({ selectedNames, minPrice, maxPrice });
}
}, [selectedNames, minPrice, maxPrice, onFilterUpdate]);

const handleNameChange = (name) => {
if (name === "All") {
setSelectedNames(selectedNames.includes("All") ? [] : ["All"]);
return;
}
setSelectedNames((prev) => {
let newNames = prev.filter((n) => n !== "All");
if (newNames.includes(name)) {
newNames = newNames.filter((n) => n !== name);
} else {
newNames = [...newNames, name];
}
return newNames;
});
};

const handleMinPriceChange = (e) => {
const val = Number(e.target.value);
if (val <= maxPrice) setMinPrice(val);
};

const handleMaxPriceChange = (e) => {
const val = Number(e.target.value);
if (val >= minPrice) setMaxPrice(val);
};

const handleReset = () => {
setSelectedNames([]);
setMinPrice(0);
setMaxPrice(200000);     
};

const togglePanel = () => setIsOpen(!isOpen);
const closePanel = () => setIsOpen(false);

useEffect(() => {
const handleClickOutside = (e) => {
if (panelRef.current && !panelRef.current.contains(e.target)) {
if (window.innerWidth <= 768 && isOpen) closePanel();
}
};
document.addEventListener("mousedown", handleClickOutside);
return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpen]);

useEffect(() => {
const handleEscape = (e) => {
if (e.key === "Escape" && isOpen) closePanel();
};
document.addEventListener("keydown", handleEscape);
return () => document.removeEventListener("keydown", handleEscape);
}, [isOpen]);

const formatPrice = (val) => `₹${Number(val).toLocaleString("en-IN")}`;
const minPercent = (minPrice / 200000) * 100;   
const maxPercent = (maxPrice / 200000) * 100;

return (

<>
<button className="filter-toggle-btn" onClick={togglePanel}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<line x1="4" y1="21" x2="4" y2="14" />
<line x1="4" y1="10" x2="4" y2="3" />
<line x1="12" y1="21" x2="12" y2="12" />
<line x1="12" y1="8" x2="12" y2="3" />
<line x1="20" y1="21" x2="20" y2="16" />
<line x1="20" y1="12" x2="20" y2="3" />
<line x1="1" y1="14" x2="7" y2="14" />
<line x1="9" y1="8" x2="15" y2="8" />
<line x1="17" y1="16" x2="23" y2="16" />
</svg>
{selectedNames.length > 0 && !selectedNames.includes("All") && (
<span className="filter-badge">{selectedNames.length}</span>
)}
</button>

{isOpen && <div className="filter-overlay active" onClick={closePanel} />}

<aside ref={panelRef} className={`filter-panel ${isOpen ? "filter-panel--open" : ""}`}>
<div className="filter-header">
<div className="filter-header-left">
<h2>Refine</h2>
<span className="filter-subtitle">Find your perfect piece</span>
</div>
<button className="filter-close-btn" onClick={closePanel}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<line x1="18" y1="6" x2="6" y2="18" />
<line x1="6" y1="6" x2="18" y2="18" />
</svg>
</button>
</div>

<div className="filter-section">
<div className="filter-section-title">Price Range</div>
<div className="price-display">
<span className="price-value">{formatPrice(minPrice)}</span>
<span className="price-sep">—</span>
<span className="price-value">{formatPrice(maxPrice)}</span>
</div>
<div className="range-track-wrapper">
<div className="range-slider-group">
<div
className="range-progress"
style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
/>
<input
type="range"
className="range-input range-input--min"
min="0"
max="200000"         
step="1000"           
value={minPrice}
onChange={handleMinPriceChange}
/>
<input
type="range"
className="range-input range-input--max"
min="0"
max="200000"          
step="1000"           
value={maxPrice}
onChange={handleMaxPriceChange}
/>
</div>
<div className="range-labels">
<span>₹0</span>
<span>₹1,00,000</span>   
<span>₹2,00,000</span>   
</div>
</div>
</div>

<div className="filter-section">
<div className="filter-section-title">
Collections
<span className="title-line" />
</div>
<div className="collection-grid">
{collections.map((col) => {
const isAll = col.name === "All";
const checked = isAll
? selectedNames.includes("All")
: selectedNames.includes(col.name) && !selectedNames.includes("All");
return (
<button
key={col.name}
className={`collection-tile ${checked ? "collection-tile--active" : ""}`}
onClick={() => handleNameChange(col.name)}
>
<span className="collection-tile-name">{col.name}</span>
<span className="collection-tile-count">{col.count}</span>
</button>
);
})}
</div>
</div>

<div className="filter-actions">
<button className="filter-btn filter-btn--reset" onClick={handleReset}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M3 12a9 9 0 1 0 9-9m0 0v6m0-6h-6" />
</svg>
Reset
</button>
<button className="filter-btn filter-btn--apply" onClick={closePanel}>
Apply <span>→</span>
</button>
</div>
</aside>
</>

);
};

export default Filters;