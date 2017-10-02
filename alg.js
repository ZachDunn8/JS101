// var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday');
// var monthsOfYear = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July',
// 	'August', 'September',' October', 'November', 'December')
// var startDate = new Date(1701,0,1)
// var month = startDate.getMonth();
// var day = startDate.getDay();
// var date = startDate.getDate();
// console.log(month, day)
// var endDate = new Date(1800,0,1)
// console.log(endDate.getDay())
// GROUP ATTEMPT
// var count = 0
// for(let i = 1701; i <= 1800;i++){
// 	for(j = 0; j <= 11; j++){
// 	var nd = new Date(i,j,1)
// 		if(j.getDay() == 6){
// 			count++
// 		}
// 	}
// }
// ANSWER
// 1.
// var firstSat = [];
// for (let year = 1701; year <= 1800; year++){
// 	for(let month = 0; month <= 11; month++){
// 		var dateObject = new Date(year, month, 1);
// 		var dayOfWeek = dateObject.getDay();
// 		if(dayOfWeek == 6){
// 			firstSat.push(dateObject);
// 		}
// 	}
// }
// console.log(firstSat.length);
// 2.
