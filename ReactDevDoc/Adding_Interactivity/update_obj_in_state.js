// replace the obj in state instead of mutating it
const [position, setPosition] = useState({
    x: 0,
    y: 0
});
let onPointerMove = (e)=> {
    setPosition({       // 传入一个新对象，替代旧的state值
      x: e.clientX,
      y: e.clientY
    });
}


// shallow copy an obj
const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
});

let onFirstNameChange = (e)=>{ 
    setPerson({
        ...person,  // 复制上一个 person 中的所有字段
        firstName: e.target.value   // 但是覆盖 firstName 字段 
    });
}
// or:
function handleChange(e) {
    setPerson({
      ...person,    // 复制上一个 person 中的所有字段
      [e.target.name]: e.target.value   // 但是覆盖 目标 字段 
    });
}
