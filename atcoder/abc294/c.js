// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	const as = input[1].split(" ").map(Number);
	const bs = input[2].split(" ").map(Number);

	const c = as.concat(bs).sort((a, b) => a - b);
	let map = new Map();
	for (let i = 0; i < c.length; i++) {
		map.set(c[i], i+1);
	}

	const result = input.slice(1,3).map((line) => {
		return line.split(" ").map((x) => map.get(Number(x))).join(" ");
	});

	console.log(result.join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));