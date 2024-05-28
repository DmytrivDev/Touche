import { handleSubmitBtn } from './button-next';
import { sendSMS } from './send-sms';

const form = document.getElementById('submitForm');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = {};

  formData.forEach((value, key) => {
    if (!formValues[key]) {
      formValues[key] = [];
    }
    formValues[key].push(value);
  });

  handleSubmitBtn();

  console.log('Form Data:', formValues);

  const phoneNumber = formValues['submit-number'][0];
  const phoneName = formValues['submit-name'][0];

  const message = `Bonjour ${phoneName} :)
Pour vous - 70% de réduction
pour votre première séance d'épilation laser chez Touche Laser Clinique!
Si vous ne souhaitez pas poursuivre la conversation, écrivez STOP

Notre salon est le plus honnête à Montréal! Nous ne vous vendons pas de séances supplémentaires et ne réduisons pas la puissance de l'appareil ! Nos mots-clés sont honnêteté, transparence, qualité et efficacité.

Vous verrez des résultats après la première séance. Pouvez-vous nous donner une chance de vous le prouver ? Veuillez écrire quels domaines spécifiques souhaiteriez-vous influencer ? Écrivez-moi s'il vous plaît.`;

  await sendSMS(phoneNumber, message);

  form.reset();
});
