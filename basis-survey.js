const frontOfficeURL = "https://survey.alchemer.com/s3/8571952/BASIS-Front-Office-Visitor-Experience";
const schoolTourURL = "https://survey.alchemer.com/s3/8571930/BASIS-School-Tour-Experience";
const familyWithdrawalURL = "https://survey.alchemer.com/s3/8571961/BASIS-Family-Withdrawal-Transition";

function ToggleModal(modalID, iframeID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
    // setupIframeSubmitListener(modalID, iframeID);
  }
}

// function setupIframeSubmitListener(modalID, iframeID) {
//   const iframe = document.getElementById(iframeID);
//   console.log('Setting up listener for modal:', modalID, 'and iframe:', iframeID);
//   if (iframe) {
//     console.log('Setting up submit listener for iframe:', iframeID);
//     iframe.addEventListener('load', function() {
//       try {
//         const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//         const submitButton = iframeDocument.querySelector('.sg-submit-button');
//         console.log('Survey submitted button found:', submitButton);
//         if (submitButton) {
//           submitButton.addEventListener('click', function() {
//             setTimeout(() => ToggleModal(modalID), 500);
//             console.log('Survey submitted, closing modal.');
//           }); 
//         }
//       } catch (e) {
//         console.log('Cannot access iframe content due to CORS policy');
//       }
//     });
//   }
// }


// function OpenModal(modalID) {
//   const modal = document.getElementById(modalID);
//   if (modal) {
//     modal.style.display = "block";
//   }
// }
// function CloseModal(modalID) {
//   const modal = document.getElementById(modalID); 
//   if (modal) {
//     modal.style.display = "none";
//   }
// } 