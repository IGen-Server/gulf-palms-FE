import React from "react";

interface ProductItem {
  id: number;
  content: React.ReactNode;
  columnSpan: number; // Number of columns this item spans
  rowSpan: number; // Number of rows this item spans
}

interface ProductsGridProps {
  items: ProductItem[];
  maxColumns: number; // Maximum number of columns
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ items, maxColumns }) => {
  return (
    <div
      className={`grid gap-4`}
      style={{
        gridTemplateColumns: `repeat(${maxColumns}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`bg-gray-100 border border-gray-200 rounded-lg p-4 shadow`}
          style={{
            gridColumn: `span ${item.columnSpan} / span ${item.columnSpan}`,
            gridRow: `span ${item.rowSpan} / span ${item.rowSpan}`,
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
