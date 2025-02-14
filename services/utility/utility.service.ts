export function getNameInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function getTotalQuantity(lineItems: any[] | null | undefined): number {
  // Return 0 if lineItems is null, undefined, or an empty array
  if (!lineItems || lineItems.length === 0) {
      return 0;
  }

  // Sum up the quantities if lineItems is valid
  return lineItems.reduce((total, item) => total + (item.quantity || 0), 0);
}
