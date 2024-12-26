import React from "react";

// Interface for individual product item
interface ProductItem {
  id: number;
  content: React.ReactNode; // JSX content of the grid item
  col: number; // Column number (1-based index)
  rowSpan?: string; // Row span as a percentage (e.g., '20%')
  height?: string; // Height of the item as a percentage (e.g., '60%')
}

// Interface for the grid component
interface ProductsGridProps {
  items: ProductItem[]; // Array of items to display in the grid
}

// Helper function to calculate height as percentage of the column's total height
const getHeightPercentage = (height?: string) => {
  if (height) {
    return parseFloat(height); // Convert height to a percentage value (e.g., "60%" -> 60)
  }
  return 0;
};

// ProductsGrid component
const ProductsGrid: React.FC<ProductsGridProps> = ({ items }) => {
  // Step 1: Group items by column number (1, 2, or 3)
  const groupedItems: ProductItem[][] = [[], [], []]; // Three columns (0, 1, 2 => col 1, 2, 3)
  items.forEach((item) => {
    groupedItems[item.col - 1].push(item); // Group by col number (col 1 -> index 0, etc.)
  });

  // Step 2: Sort items within each column based on their height (ascending order)
  //   groupedItems.forEach((columnItems) => {
  //     columnItems.sort((a, b) => {
  //       const aHeight = getHeightPercentage(a.height);
  //       const bHeight = getHeightPercentage(b.height);
  //       return aHeight - bHeight; // Sort by height (ascending)
  //     });
  //   });

  // Step 3: Render the grid with flex column for each column
  return (
    <div
      className="grid gap-4 h-full"
      style={{
        gridTemplateColumns: `repeat(${groupedItems?.length || 3}, 1fr)`,
        gridAutoRows: "auto",
      }}
    >
      {groupedItems.map((columnItems, index) => (
        <div key={index} className="flex flex-col gap-4 max-h-full">
          {columnItems.map((item) => (
            <div
              key={item.id}
              className="h-full"
              style={{
                height: item.height, // Set height based on the percentage
                flex: `0 0 ${item.height}`, // Fix the height based on the item
                gridRow: item.rowSpan
                  ? `span ${getHeightPercentage(item.rowSpan)}%`
                  : undefined,
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
