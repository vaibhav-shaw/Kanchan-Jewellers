// Same calculation as Gold_price/app.py calculate_final_cost
function calculateFinalCost(weight, metalType, ratePerGram, makingPercent, makingPerGram) {
  const baseCost = weight * ratePerGram;
  let making, discounted, discountPercent;
  if (metalType === "Gold") {
    making = baseCost * (makingPercent / 100);
    discounted = making * 0.75; // 25% off gold making charges
    discountPercent = "25%";
  } else {
    making = weight * makingPerGram;
    discounted = making * 0.50; // 50% off silver making charges
    discountPercent = "50%";
  }
  const beforeGst = baseCost + discounted;
  const gst = beforeGst * 0.03;
  return {
    baseCost, making, discounted, discount: making - discounted, discountPercent,
    beforeGst, gst, finalCost: beforeGst + gst,
  };
}

if (typeof module !== "undefined") module.exports = { calculateFinalCost };
