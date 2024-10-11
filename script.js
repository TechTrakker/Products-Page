function showPage(page) {
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
    page1.style.display = 'block';
    page2.style.display = 'none';
  } else {
    page1.style.display = 'none';
    page2.style.display = 'block';
  }

  paginationButtons.forEach(button => {
    button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
//   MARTIAL ARTS AND WEARS
function showMartialArtsPage(page) {
  const martialArtsPage1 = document.getElementById('martialArtsPage1');
  const martialArtsPage2 = document.getElementById('martialArtsPage2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
    martialArtsPage1.style.display = 'block';
    martialArtsPage2.style.display = 'none';
  } else {
    martialArtsPage1.style.display = 'none';
    martialArtsPage2.style.display = 'block';
  }

  paginationButtons.forEach(button => {
    button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
// Next Products
function showTeamWearPage(page) {
  const teamWearPage1 = document.getElementById('teamWearPage1');
  const teamWearPage2 = document.getElementById('teamWearPage2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
    teamWearPage1.style.display = 'block';
    teamWearPage2.style.display = 'none';
  } else {
    teamWearPage1.style.display = 'none';
    teamWearPage2.style.display = 'block';
  }

  paginationButtons.forEach(button => {
    button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
//Next Product
function showSportsWearPage(page) {
  const sportsWearPage1 = document.getElementById('sportsWearPage1');
  const sportsWearPage2 = document.getElementById('sportsWearPage2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
    sportsWearPage1.style.display = 'block';
    sportsWearPage2.style.display = 'none';
  } else {
    sportsWearPage1.style.display = 'none';
    sportsWearPage2.style.display = 'block';
  }

  paginationButtons.forEach(button => {
    button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
// Next Product 5  //  
function showGymWearPage(page) {
  const gymWearPage1 = document.getElementById('gymWearPage1');
  const gymWearPage2 = document.getElementById('gymWearPage2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
      gymWearPage1.style.display = 'block';
      gymWearPage2.style.display = 'none';
  } else {
      gymWearPage1.style.display = 'none';
      gymWearPage2.style.display = 'block';
  }

  // Update active page button
  paginationButtons.forEach(button => {
      button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
// Next Product6
function showMmaWearPage(page) {
  const mmaWearPage1 = document.getElementById('mmaWearPage1');
  const mmaWearPage2 = document.getElementById('mmaWearPage2');
  const paginationButtons = document.querySelectorAll('.page-number');

  if (page === 1) {
      mmaWearPage1.style.display = 'block';
      mmaWearPage2.style.display = 'none';
  } else {
      mmaWearPage1.style.display = 'none';
      mmaWearPage2.style.display = 'block';
  }

  // Update active page button
  paginationButtons.forEach(button => {
      button.classList.remove('active');
  });
  paginationButtons[page - 1].classList.add('active');
}
