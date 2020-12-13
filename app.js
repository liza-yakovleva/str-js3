// TODO Завдання.Написати функцію, яка буде перевіряти сайт на протокол HTTPS.Попросити користувача ввести посилання, і перевірити чи воно починається на протокол https, якщо так то вивести в консоль що сайт використовує https.


let linkSite = prompt("Введите ссылку", "https://www.google.com/");
function TestPath(link) {
link.substring(0, 8) === "https://" ?
  console.log("Сайт використовує https://") :
  console.log("Сайт не використовує https://");
  }
  TestPath(linkSite);