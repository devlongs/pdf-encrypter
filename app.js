const HummusRecipe = require("hummus-recipe");
const pdfDoc = new HummusRecipe("unencrypted.pdf", "encrypted.pdf");

pdfDoc
  .encrypt({
    userPassword: "pass",
    ownerPassword: "pass",
    userProtectionFlag: 4,
  })
  .endPDF();
