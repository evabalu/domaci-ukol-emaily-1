console.log ('funguju!');

const displayEmail = emails => {
  const inboxElm = document.querySelector ('#inbox');
  inboxElm.innerHTML = emails
    .map (
      email =>
        `
          <div class="email">
            <div class="email__head">
              <div class="email__icon email__icon--closed"></div>
              <div class="email__info">
                <div class="email__sender">${email.sender.name}</div>
                <div class="email__subject">${email.subject}</div>
              </div>
              <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
        `
    )
    .join ('');
};

fetch ('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then (response => response.json ())
  .then (data => displayEmail (data.emails));
