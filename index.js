document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value || "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // This will generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1 class="certificate-heading">Certificate of Achievement</h1>
      <div class="certificate-content">
          <p>This is to certify that</p>
          <div><b> ${studentName}</b></div>
          <div>has completed the course<b> ${courseName}</b> with grit and tenacity</div>
          <img src="logo.png" alt="Logo" class="logo">
      <div><b>✨${personalMessage}✨</b></div>
  `;
     

      // To display the modal
      modal.style.display = 'block';

      // To clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';
  });

  // This is to close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
});
