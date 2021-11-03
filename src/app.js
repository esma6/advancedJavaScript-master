let sayi1=10
sayi1="Engin demiroğ"
let student={id:1,name:"Engin"}
//console.log(student);

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " +puan)
    
}
//save(undefined,student);

let students=["Engin ","Halit","Toprak","Busra"]

//console.log(students)

let students2=[student,{id:2,name:"Halit"},"Ankara",{city:"istanbul"}]
//console.log(students2)

let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//rest
console.log(typeof showProducts)
showProducts(10,["elma","armut","karpuz"])

//spread
let points=[1,2,3,4,50,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations =[1000,2000,3000,[4000,5000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small],number) {
    console.log(small)
}
someFunction(populations)

let category={id:1,name:"icecek"}
console.log(category.id)
console.log(category["name"])

//objeler için destructure 
let{id,name}=category
console.log(id)
console.log(name)
