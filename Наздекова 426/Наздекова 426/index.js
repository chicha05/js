// 1
// function one(){
//     let num1 = prompt('введите первое число')
//     let num2 = prompt('введите второе число')
//     let result = num1*num2
//     alert('произведение чисел = ' + result)

// }
// one()


// 2
// function two(){
//     let fam = prompt('введите имя')
//     let nam = prompt('введите фамилию')
//     let age = prompt('введите возраст')
//     alert('Привет' + " " + fam + " " + nam + " " + 'с возрастом '+age)

// }
// two()


// 3
// function three(){
//     let gen = prompt('Введите ваш пол')
//     if (gen == 'М' || gen == 'м'){
//         alert('Ваш пол мужской')
//     } else if (gen == 'Ж'|| gen == 'ж'){
//          alert('Ваш пол женский')
//     } else{
//         alert('Ваш пол не огпределен')
        
//     }

// }
// three()


// 4
// function four(week){
    
//     switch(week){
//         case 1:
//             return 'понедельник'
//         case 2:
//             return'вторник'
//         case 3:
//             return'среда'
//         case 4:
//             return 'четверг'
//         case 5:
//             return'пятница'
//         case 6:
//             return'суббота'
//         case 7:
//             return'восскресенье'
        
//     }
   
// }
// let week = Number(prompt('введите номер дня'))
// alert(four(week))



// 5
// let i;
// function five(){
// for (i = 1; i <= 100; i++) {
    
//     let age;
//     if (i <= 17) {
//       age = "ребенок";
//     } else if (i <= 30) {
//       age = "молодой";
//     } else if (i <= 55) {
//       age = "зрелый";
//     } else {
//       age = "старый";
//     }
//    document.write(i + ' - ' + age + '<br>');
    
//   }

// }
// five()


// 6 
// function six(){
//     let nam = prompt('введите имя')
//     let age = prompt('введите возраст')

//     if (age <= 17) {
//               ages = "ребенок";
//             } else if (age <= 30) {
//               ages = "молодой";
//             } else if (age <= 55) {
//               ages = "зрелый";
//             } else {
//               ages = "старый";
//             }
//     alert (nam + ' имеет возраст ' + age + ' и он ' + ages)
// }
// six()


// 7
// const button = document.getElementById('button')


// 8
// const button = document.getElementById('button').addEventListener('click', function (){
//     const input = document.getElementById('input').value = 'test@email.ru'
// } )



// 9
// const button = document.getElementById("Button")
//   const input = document.getElementById("Input")

//   button.addEventListener("click", function() {
//     const inputText = input.value

//     if (inputText !== "") { 
//       alert('Вы ввели ' + inputText) 
//     } else {
//       alert("Вы ничего не ввели в поле")
//     }
//   })



// 10
// const button1 = document.getElementById("button1")
//   const button2 = document.getElementById("button2")
//   const input = document.getElementById("Input")

//   button1.addEventListener("click", function() {
//     input.disabled = true 
//   })

//   button2.addEventListener("click", function() {
//     input.disabled = false
//   })


// 11
// const kvadrat = document.getElementById('kvadrat');
// const button = document.getElementById('button');
// button.addEventListener('click', function() {
//     if (kvadrat.style.display === 'none') {
//         kvadrat.style.display = 'block';
//         button.textContent = 'Скрыть '
//     } else {
//         kvadrat.style.display = 'none'
//         button.textContent = 'Показать '
//     }
// });



// 12
// const kvadrat = document.getElementById("kvadrat")
// kvadrat.addEventListener("mouseover", function() {
//     kvadrat.style.backgroundColor = "green"
//   })
//   kvadrat.addEventListener("mouseout", function() {
//     kvadrat.style.backgroundColor = "red"
//   })