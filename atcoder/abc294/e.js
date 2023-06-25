// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");

	const col_num = Number(input[0].split(' ')[0])
	const a_data_num = Number(input[0].split(' ')[1])
	const b_data_num = Number(input[0].split(' ')[2])

	const a_data = input.slice(1,a_data_num+1).map((l)=>{return l.split(' ').map((num)=>parseInt(num,10))});
	const b_data =input.slice(a_data_num+1, a_data_num+b_data_num+1).map((l)=>{return l.split(' ').map((num)=>parseInt(num,10))});

	let a_v = 0;
	let a_n = 0;
	let b_v = 0;
	let b_n = 0;

	let a_i = 0;
	let b_i = 0;

	let res = 0;

	[a_v,a_n] = a_data[a_i];
	[b_v,b_n] = b_data[b_i];

	a_i +=1;
	b_i +=1;

	let col_count = 0;
	while(col_count < col_num) {
		const m = Math.min(a_n, b_n);

		if (a_v===b_v) {res+=m};
		col_count += m;

		[a_n,b_n] = [a_n-m, b_n-m];

		if (a_n === 0) {
			if (a_i < a_data.length) {
				[a_v,a_n] = a_data[a_i];
				a_i += 1;
			} else {
				[a_v,a_n] = [0,0];
			}
		}
		if (b_n === 0) {
			if (b_i < b_data.length) {
				[b_v,b_n] = b_data[b_i];
				b_i += 1;
			} else {
				[b_v,b_n] = [0,0];
			}
		}
	}

	console.log(res)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));