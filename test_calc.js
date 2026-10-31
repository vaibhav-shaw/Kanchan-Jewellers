// Run: node test_calc.js  — checks the app matches Gold_price/app.py
const assert = require("assert");
const { calculateFinalCost } = require("./app/src/main/assets/calc.js");
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);

// Gold 22K, 10g @ 13300, 12% making, 25% off making, 3% GST
let r = calculateFinalCost(10, "Gold", 13300, 12, 25);
near(r.baseCost, 133000); near(r.making, 15960); near(r.discounted, 11970);
near(r.beforeGst, 144970); near(r.gst, 4349.1); near(r.finalCost, 149319.1);

// Silver 10g @ 181.6, ₹25/g making, 50% off making
r = calculateFinalCost(10, "Silver", 181.6, 12, 25);
near(r.baseCost, 1816); near(r.making, 250); near(r.discounted, 125);
near(r.finalCost, 1941 * 1.03);
console.log("ok");
