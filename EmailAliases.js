/*
 *	Solution to the problem http://codeforces.com/problemset/problem/589/A
 */
n = parseInt(readline().split(" "));
sk = 0;
B = new Array();

for (var i = 0; i < n; i++){
	email = readline();
	nem = email.toLowerCase();
	nem = nem.split("@");
	if (nem[1] == "bmail.com"){
		nem[0] = nem[0].replace(".", "");
		login = nem[0].split("+");
		nem = login[0] + "@" + nem[1];
	} else {
		nem = nem[0] + "@" + nem[1]; 
	}
	if (B[nem] == undefined){
		A = new Array();
		A.push(email);
		B[nem] = A;
		sk++;
	} else {
		B[nem].push(email);
	}
}
write(sk + "\n");

var key;
for (key in B){
	A = B[key];
	write(A.length)
	for (var i = 0; i < A.length; i++){
		write(" " + A[i]);
	}
	write("\n");
}
