const useState = (초기값) => {
  let 상태 = 초기값

  function 읽기() {
    return 상태
  }

function 쓰기(새값){
  상태 = 새값
}

return [읽기,쓰기]
}
const [읽기, 쓰기] = useState(0)
a[0] // 읽기
a[1] // 쓰기
