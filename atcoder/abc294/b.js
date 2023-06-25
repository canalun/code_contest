// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	const res = input.splice(1).map((line) => {
    	return line.split(" ")
          .map((num) => num === '0' ? '.' : Math.abs(parseInt(num, 10)+9).toString(36).toUpperCase())
          .join("")
    })
	console.log(res.slice(0,res.length-1).join("\n"))
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));