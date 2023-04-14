import { useBabelRc } from "customize-cra";
const { override } = require("customize-cra");
const path = require("path");

module.exports = override(
  useBabelRc()
);
