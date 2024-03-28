// nicher sentence e "sumit" word koibar use hoiese? prothom "sumit" koto number position e powa gese?

const sentence = "Learn with Sumit is all about teaching web development skills and techiniques, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives sinto advanced topics using the latest best practices for you seasoned web developers.";
const matches = sentence.match(/sumit/gi);
const occurances = matches ? matches.length : 0;
// console.log(matches);
console.log(occurances); // 3

position = sentence.search(/sumits/i);
position = position >= 0 ? position : "not found!";
console.log(position);



// input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// output: 2 or "not found!"
// problem: linearSearch() function ti implement kore dekhan

function selflinearSearch(array, element) {
    let position = array.indexOf(element);
    position = position > -1 ? position : "not found!";
    return position
}

console.log(selflinearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));
console.log(selflinearSearch(['a', 'b', 'c', 'd', 'c'], 'e'));

function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return "not found!";
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));


// kono array theke kivabe shob theke boro string khuge ber korben and tar index number dekhaben?

function selflongestString(array) {
    let result = '';
    array.forEach(element => {
        // console.log(element);
        result = result.length < element.length ? element : result;
    });
    return [result, array.indexOf(result)];
}

console.log(selflongestString(['adsf', 'asd', 'adsfasdf']));
console.log(selflongestString(['Sumit Saha', "learn with sumit", 'akash', 'saad', 'daiyan']));

function longestString(names) {
    let longestWord = '';
    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }

    return [longestWord, names.indexOf(longestWord)]
}

console.log(longestString(['Sumit Saha', "learn with sumit", 'akash', 'saad', 'daiyan']));



// 1 - 100 porjonto kon number gulo 3, 5, 3 and 5 uvoi numbers dhara bivajjo ta ber koren.


function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(100);


// array theke flase value kivabe bad dite pari?

// flase, undefined, null, '', Nan, 0

const mixedArr = [
    "lws",
    undefined,
    "learn with Sumit",
    false,
    "",
    "apple",
    40,
    "K",
    true,
    "thanks all",
    NaN
];

/* const tureArray = mixedArr.filter(function (el) {
    if (el) {
        return true;
    } else {
        return false;
    }
}); */
const tureArray = mixedArr.filter(Boolean);

console.log(tureArray);


// object theke false value kivabe khuje ber kore bad dite pari?
const obj = {
    a: "lws",
    b: undefined,
    c: "learn with Sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "K",
    i: true,
    j: "thanks all",
    k: NaN
};

const truthyObject = function (obj) {
    for (let i in obj) {
        console.log(i);
        // Boolean(obj[i])
        if (!obj[i]) {
            delete obj[i];
        }
    }

    return obj;
}

console.log(truthyObject(obj));