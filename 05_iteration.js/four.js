const myobject = {
    js : 'javascript',
    cpp: 'c++',
    rbb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myobject) {
    console.log(`${key} is the shortcut of ${myobject[key]}`);
     
}
const programming = ["js", "cpp", "java", "python", "rb"]

for(const key in programming)
{
    console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States")
map.set('FR',"FRANCE")

for(const key in map){
    console.log(key);
    
}