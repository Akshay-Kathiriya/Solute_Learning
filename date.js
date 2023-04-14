console.log("***** Date *****");

let now = new Date(2023,11,0);
// console.log(now)

// console.log( new Date().getTimezoneOffset() );


// console.log(Object.prototype.toString.call(now)=='[object Date]')

let is_date = (date)=>{
    return (Object.prototype.toString.call(date)=='[object Date]')
}

// console.log(is_date("October 13, 2014 11:13:00"))
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));

// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getDay())

let add_minutes = (temp,min)=>{
    
    return new Date(temp.getTime()+30*60000);
    // return (new Date(str).getMinutes()+30).toString()
}

// console.log(add_minutes(new Date(2014,10,2), 30).toString());

let is_weekend = (date)=>{
    let temp = new Date(date);
    let days = ['s','m','t','w','t','f','s'];
    let day =days[temp.getDay()];
    if(day==='s') return true;
    else return false;
}

// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));

console.log( JSON.stringify([1, 2, 3]) );