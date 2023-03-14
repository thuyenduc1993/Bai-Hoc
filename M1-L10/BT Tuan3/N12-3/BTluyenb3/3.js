function result() {
    let number = document.getElementById('numbera').value;
      if (number >= 0) {
        document.write(number+'số nguyên dương ');
    }else  {
          document.write(number+'số nguyên âm');
    }
}