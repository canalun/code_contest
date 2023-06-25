// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");

	let called_min_nim = 0;
	let away_map = new Map();
	let recalled_arr = [];

	let cache = 1;

	const refresh_cache = (an) => {
		for (let j = an+1; j < Number.MAX_SAFE_INTEGER; j++) {
			if (away_map.get(j) === undefined) {
				cache = j;
				return;
			}
		}
	}

	const away = (n) => {
		away_map.set(n, true)
	}

	for (let i = 1; i < input.length; i++) {
		const q = input[i];
		switch (q[0]) {
			case "1":
				called_min_nim += 1;
				break;
			case "2":
				const away_num = Number(q.split(" ")[1]);
				away(away_num);
				if (away_num === cache) {
					refresh_cache(away_num);
				}
				break;
			case "3":
				recalled_arr.push(cache);
				break;
			default:
				break;
		}
	}

	console.log(recalled_arr.join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));