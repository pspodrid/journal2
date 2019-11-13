import { Entries } from './journal';



$(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();

    const inputTitle = $('.inputTitle').val();
    const inputBody = $('.inputBody').val();


    const newEntry = new Entries(inputBody, inputTitle);
    newEntry.addCounter();
    newEntry.vowels();
    newEntry.getTeaser();
    // console.log(newEntry.addCounter());
    // console.log(newEntry.vowels());
    // console.log(newEntry.getTeaser());


  });
});
