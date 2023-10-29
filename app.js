// Long Date Conversion Format Script
function formatAsLongDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

// start select owner element
let ownerNameEn = document.querySelector("#ownerNameEn");
let ownerNameBn = document.querySelector("#ownerNameBn");
let ownerAddress = document.querySelector("#ownerAddress");
let ownerMobile = document.querySelector("#ownerMobile");
let ownerEmail = document.querySelector("#ownerEmail");
let sarkarLogo = document.querySelector("#sarkarLogo");
sarkarLogo.style.display = "none";
let signature = document.querySelector("#signature");
signature.style.display = "none";
let removeTermsAndConditions = document.querySelector(
  ".removeTermsAndConditions"
);
let footerComapnyName = document.querySelector("#footerComapnyName");
let footerComapnyNumber = document.querySelector("#footerComapnyNumber");

// end select owner element

// start owner information
let ownerInformation = {
  samsulIslamLakriMill: {
    nameEn: "M/S. SAMSUL ISLAM LAKRI MILL",
    nameBn: "মেসার্স সামছুল ইসলাম লাকড়ী মিল",
    address: "Kamaura, Ashuganj, Brahmanbaria.",
    mobile: "+8801855 691 366",
    email: "samsulislamlakrimill@gmail.com",
  },
  sarkarLackryMill: {
    nameEn: "M/S. SARKAR LACKRY MILL",
    nameBn: "মেসার্স সরকার লাকড়ী মিল",
    address: "Bahadurpur, Dakhkinpara, Ashuganj, Brahmanbaria.",
    mobile: "+8801864 604 209",
    email: "dulal2012@yahoo.com",
  },
};
// end owner information

// start getting data from owner details form
let ownerDetailsForm = document.querySelector("#ownerDetailsForm");
ownerDetailsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let ownerProfile = document.querySelector("#ownerProfile").value;
  //start Assign Value
  if (ownerProfile == 1) {
    removeTermsAndConditions.remove();
    footerComapnyNumber.innerText = "";
    footerComapnyName.innerText =
      "For " + ownerInformation.samsulIslamLakriMill.nameEn;
    signature.style.display = "block";
    signature.src = "samsulSignature.jpg";
    sarkarLogo.style.display = "none";
    ownerNameEn.innerText = ownerInformation.samsulIslamLakriMill.nameEn;
    ownerNameEn.style.fontWeight = "bold";
    ownerNameEn.style.color = "green";
    ownerNameBn.innerText = ownerInformation.samsulIslamLakriMill.nameBn;
    ownerNameBn.style.color = "green";
    ownerAddress.innerText =
      "Factory Office : " + ownerInformation.samsulIslamLakriMill.address;
    ownerMobile.innerText =
      "Mobile : " + ownerInformation.samsulIslamLakriMill.mobile;
    ownerEmail.innerText =
      "Email : " + ownerInformation.samsulIslamLakriMill.email;
  } else if (ownerProfile == 2) {
    document.querySelector("ol").prepend(removeTermsAndConditions);
    footerComapnyName.innerText =
      "For " + ownerInformation.sarkarLackryMill.nameEn;
    footerComapnyNumber.innerText = "Cell No: 01734-060666";
    signature.style.display = "block";
    signature.src = "sarkarSignature.jpg";
    sarkarLogo.style.display = "block";
    ownerNameEn.innerText = ownerInformation.sarkarLackryMill.nameEn;
    ownerNameEn.style.fontWeight = "bold";
    ownerNameEn.style.color = "red";
    ownerNameBn.innerText = ownerInformation.sarkarLackryMill.nameBn;
    ownerNameBn.style.color = "green";
    ownerAddress.innerText =
      "Factory Office : " + ownerInformation.sarkarLackryMill.address;
    ownerMobile.innerText =
      "Mobile : " + ownerInformation.sarkarLackryMill.mobile;
    ownerEmail.innerText = "Email : " + ownerInformation.sarkarLackryMill.email;
  } else {
    ownerNameBn.innerText = "Tap here to load owner profile";
    ownerAddress.innerText = "factory address, mobile number & email address.";
  }
  //end Assign Value
});
// end getting data from owner details form

// start select Quotation element
let quotationDate = document.querySelector("#quotationDate");
let quotationName = document.querySelector("#quotationName");
let quotationAddress = document.querySelector("#quotationAddress");
let tableRate = document.querySelector("#tableRate");
// end select Quotation element

// start Quotation information
let quotationInformation = {
  aswadCompositeMillsLtd: {
    name: "<b> Aswad Composite Mills Ltd. </b>",
    address: "Baridarchalla, Sreepur, Gazipur.",
  },
  arkayKnitDyeingMillsLtd: {
    name: "<b> Arkay Knit Dyeing Mills Ltd </b>",
    address: "Ziranibazar, Kashimpur, Gazipur.",
  },
};
// end Quotation information

// start getting data from Quotation details form
let quotationDetailsForm = document.querySelector("#quotationDetailsForm");
quotationDetailsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let quotationProfile = document.querySelector("#quotationProfile").value;
  let formRate = document.querySelector("#formRate").value;
  let formQuotationDate = document.querySelector("#formQuotationDate").value;
  let formattedDate = formatAsLongDate(formQuotationDate);
  //start Assign Value
  if (quotationProfile == 1) {
    tableRate.innerHTML = "BDT " + formRate;
    quotationDate.innerText = "Date : " + formattedDate;
    quotationName.innerHTML = quotationInformation.aswadCompositeMillsLtd.name;
    quotationAddress.innerText =
      quotationInformation.aswadCompositeMillsLtd.address;
  } else if (quotationProfile == 2) {
    tableRate.innerHTML = "BDT " + formRate;
    quotationDate.innerText = "Date : " + formattedDate;
    quotationName.innerHTML = quotationInformation.arkayKnitDyeingMillsLtd.name;
    quotationAddress.innerText =
      quotationInformation.arkayKnitDyeingMillsLtd.address;
  } else {
    tableRate.innerText = "";
    quotationDate.innerText = "Date : ";
    quotationName.innerText = "(Tap to load name)";
    quotationAddress.innerText = "(Tap to load address)";
  }
  //end Assign Value
});
// end getting data from owner details form

function saveCanvas() {
  document.querySelector("#hideBtn").style.display = "none";
  html2canvas(document.querySelector("#capture"), {
    allowTaint: true,
  }).then((canvas) => {
    var image = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = image;
    a.download = "Bill.jpg"; // Set the desired file name and extension
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  document.querySelector("#hideBtn").style.display = "block";
}
