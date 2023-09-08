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
