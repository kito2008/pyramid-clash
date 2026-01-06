// --- إعداد شريط الدعم ---
let currentSupport = localStorage.getItem("currentSupport");
currentSupport = currentSupport ? parseInt(currentSupport) : 0;

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
updateProgress();

function updateProgress(){
  let percentage = (currentSupport / 500000) * 100;
  if(percentage>100) percentage=100;

  progressBar.style.width = percentage + "%";
  progressText.textContent = `${currentSupport.toLocaleString()} من 500,000 جنيه`;

  if(percentage >= 100) createConfetti();
}

// --- Vodafone Cash ---
const vodafoneBtn = document.getElementById('vodafoneBtn');
const vodafoneForm = document.getElementById('vodafoneForm');
const submitVodafone = document.getElementById('submitVodafone');
const vodafoneNumber = document.getElementById('vodafoneNumber');
const vodafoneAmount = document.getElementById('vodafoneAmount');
const receipt = document.getElementById('receipt');
const userPhone = document.getElementById('userPhone');

vodafoneBtn.addEventListener('click', function(e){
  e.preventDefault();
  vodafoneForm.classList.remove('hidden');
});

submitVodafone.addEventListener('click', function(){
  if(!vodafoneNumber.value){ alert('اختر الرقم'); return; }
  if(!vodafoneAmount.value || vodafoneAmount.value <=0){ alert('ادخل المبلغ صحيح'); return; }
  if(!userPhone.value){ alert('أدخل رقم هاتفك'); return; }
  if(!receipt.files.length){ alert('ارفق صورة الإيصال'); return; }

  alert(`تم تسجيل بيانات الدفع ✅\nسيتم تحديث شريط الدعم بعد التأكد الفعلي من الدفع.`);

  vodafoneForm.classList.add('hidden');
});

function confirmVodafonePayment(amountEGP){
  currentSupport += parseInt(amountEGP);
  localStorage.setItem("currentSupport", currentSupport);
  updateProgress();
}

// --- Confetti عند الدعم الكامل ---
function createConfetti(){
  for(let i=0;i<30;i++){
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random()*100 + "%";
    confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(),3000);
  }
}