 const coding =["java", "cpp", "ruby", "js","swift"]

//  coding.forEach (function (val) {
//     console.log(val);
//  })

coding.forEach((item)=> {
    // console.log(item);
     
})
coding.forEach((item,index, arr)=> {
    // console.log(item, index, arr);
    
})
const mycoding = [
    {
        languagename: "javscript",
        languagefilename:"js"
    },
    {
        languagename: "java",
        languagefilename:"java"
    },
    {
        languagename: "cpp",
        languagefilename:"c++"
    }
]
mycoding.forEach ((item)=> {
    console.log(item.languagename);
    
})