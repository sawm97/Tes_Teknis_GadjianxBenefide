// Soal 1
function reverse(character) {
    var str = character;
    var newStr = '';
    for (let i = character.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    
    return newStr;
}

// Soal 2
function fibonacci(n) {
    var a = ''
    var b = ''
    var c = ''
    var newFib = ''
    for (let i = 0; n >= i + 1; i++) {
        if (i === 0){
            a = i
            newFib += i
        } else if (i === 1) {
            b = i
            newFib += ' ' + i
        } else {
            c = a + b
            a = b
            b = c
            newFib += ' ' + c
        }
    }
    
    return newFib;
}

// Soal 3
function combination(n,r){
    if (n>r){
        function factorial(num) {
            var a = 0
            var b = 0
            var c = 0
            for (let i = 1; num >= i; i++) {
                if (i === 1){
                    a = i
                    c = a
                } else if (i === 2){
                    b = i
                    c = a*b
                } else {
                    c = c*i
                }
            }
            return c
        }

        var x = factorial(n)
        var y = factorial(r)
        var z = factorial(n-r)
        var yz = y*z

        var result = x/yz

        return result
    }
}

function nSet(n) {
    var set = ''
    for (let i = 1; n >= i; i++){
        set += i
    }
    // console.log(set)
	return set
}

function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	if (k > set.length || k <= 0) {
		return [];
	}
	
	if (k == set.length) {
		return [set];
	}
	
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push(set[i]);
		}
		return combs;
	}
	
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

module.exports = {reverse, fibonacci, nSet, k_combinations}