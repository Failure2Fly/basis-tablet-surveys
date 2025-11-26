const frontOfficeURL = "https://survey.alchemer.com/s3/8571952/BASIS-Front-Office-Visitor-Experience";
const schoolTourURL = "https://survey.alchemer.com/s3/8571930/BASIS-School-Tour-Experience";
const familyWithdrawalURL = "https://survey.alchemer.com/s3/8571961/BASIS-Family-Withdrawal-Transition";

function ToggleModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  }
}

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