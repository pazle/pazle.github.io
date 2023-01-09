let sides = document.getElementById('sides');
	page = document.getElementById('page');
	off = [true, true];



function syntaxlight(){
	let _head = document.getElementsByTagName('head')[0];
	_head.innerHTML += '<link rel="stylesheet" type="text/css" href="modules/flare/flare.css">'; 

	let codes = document.getElementsByClassName('code');
	let flare = new Flare();

	for(i = 0; i < codes.length; i++){
		flare.light(codes[i]);
	}
	
}

function relight(){
	let codes = document.getElementsByClassName('code');
	let flare = new Flare();

	for(i = 0; i < codes.length; i++){
		flare.light(codes[i]);
	}
}

syntaxlight();



function NavBar(){
	page.innerHTML += `
		<div id="more" class="flex-sm d-none justify-end more">
			<p>
				<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="#ffffff" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" class="w-6 h-6">
					 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
				</svg>
			</p>
		</div>
		<nav class="flex flex-wrap-md px-5 px-2-md py-2 py-1-md align-items-center justify-between">
			<div class="flex col-10-md align-items-center justify-between py-1 px-1-md">
				<a href="index.html"><p class="title flex align-items-center"><img class="t-img d-none" src="assets/img/pazle.png"> &nbsp;Pazle</p></a>
				<p class="px-2 nav-toggle d-none d-block-md text-xl-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					  	<path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
					</svg>
				</p>
			</div>
			<div class="flex d-none-md toggled flex-wrap-md col-10-md align-items-center justify-center">
				<a class="col-10-md" href="getstarted.html"><p class="px-3 px-2-md py-1 py-3-md">Documentation</p></a>
				<a class="col-10-md" href="download.html"><p class="px-3 px-2-md py-1 py-3-md">Install</p></a>
				<a class="col-10-md" href="blog.html"><p class="px-3 px-2-md py-1 py-3-md">Blog</p></a>
				<a class="col-10-md" href="examples.html"><p class="px-3 px-2-md py-1 py-3-md">Examples</p></a>
				<a class="col-10-md" href="forum.html"><p class="px-3 px-2-md py-1 py-3-md">Forum</p></a>
			</div>
		</nav>
	`;

	let togz = document.getElementsByClassName('nav-toggle')[0];
	let toz = document.getElementsByClassName('toggled')[0];
	let sd = document.getElementsByClassName('bar')[0];

	let more = document.getElementById('more');

	togz.addEventListener('click', () => {
		if (off[0]) {
			toz.classList.remove('d-none-md');
			off[0] = false;
		} else {
			toz.classList.add('d-none-md');
			off[0] = true;
		}
	});

	more.addEventListener('click', () => {
		if (off[1]) {
			sd.classList.add('ft');
			sd.classList.remove('d-none-sm');
			off[1] = false;
		} else {
			sd.classList.add('d-none-sm');
			off[1] = true;
		}
	});
}


function lazy(){

	mod = ['arrays', 'base64', 'console', 'dicts', 'file', 'json', 'math', 'parallel', 'path', 'process', 'random', 'socket', 'strings', 'time'];
	mod.sort();
	links = ''

	for(i = 0; i < mod.length; i++){
		links += `<a href="${mod[i]}.html"><li class="n nt py-2 px-3">${mod[i]}</li></a>`
	}

	sides.innerHTML = `
			<div class="py-2 px-1">
					<p class="pt-2"></p>
					<a href="getstarted.html"><p class="collapse py-2 pl-3 n nn">Get started</p></a>
					<a href="basics.html"><li class="n px-3 collapse py-2">Syntax basics</li></a>
					
					<a href="datatypes.html"><li class="n px-3 collapse py-2">Pazle datatypes</li></a>
					<ul>
						<ul class="list-none sect">
							<a href="strings.html"><li class="n nt px-3">Strings</li></a>
							<a href="numbers.html"><li class="n nt px-3">Numbers</li></a>
							<a href="arrays.html"><li class="n nt px-3">Arrays</li></a>
							<a href="functions.html"><li class="n nt px-3">functions</li></a>
							<a href="dicts.html"><li class="n nt px-3">Dictionaries</li></a>
							<a href="objects.html"><li class="n nt px-3">Objects</li></a>
						</ul>
					</ul>

					<a href="modules.html"><li class="n px-3 collapse py-2">Standard library</li></a>					
					<ul class="list-none sect">${links}</ul>

					<p class="mb-15"></p>
				</div>
				`
}

lazy();
NavBar();

let butJs = document.getElementsByClassName('butjs');

if (butJs.length){


	let foc = document.getElementById('code-change');
	bn1 = document.getElementById('bn1');
	bn2 = document.getElementById('bn2');
	bn3 = document.getElementById('bn3');
	bn4 = document.getElementById('bn4');


function fn1(){
foc.innerHTML = `
<p class="text-xl mt-2 text-blue bold-6">Functions usage</p>
<p class="txt mt-1 txt2 mb-2">Just like any other language, functions take arguments and should return some data when executed.</p>
<div class="code">import math
// finabocci sequence
def finabocci(limit) {
    nums = [0, 1]
    left = 0; right = 1; sum = 0 + 1;

    while sum < limit {
    	nums.append(sum)
    	left = right;  right = sum
    	sum = left + right
    }
    return nums;
}

print(finabocci(1000))
// >>> [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]</div>
`
	relight();
}



function fn2(){
foc.innerHTML = `
<p class="text-xl mt-2 text-blue bold-6">Object Oriented</p>
<p class="txt mt-1 txt2 mb-2">Pazle is Object Oriented, This makes it refer all data in its runtime to be an object which also has attributes.</p>
<div class="code">import strings as str
// making a custom type/object
defobject Animal {
    def this(name, kind){
    	self.name = name
        self.kind = kind;
        termLook()
    }

    def termLook(){
        self.__repr__ = self.name
    }
}
fauna = [Animal('goat', 'domestic', Animal('lion', 'wild')]
print(fauna)
// >>> [goat, lion]</div>
`
	relight();
}


function fn3(){
foc.innerHTML = `
<p class="text-xl mt-2 text-blue bold-6">No Strange Datatypes</p>
<p class="txt mt-1 txt2 mb-2">Pazle has just 7 datatypes which are strings, numbers, arrays, dictionaries, functions, objects and maybe custom types.</p>
<div class="code">import strings as str, arrays as arr

letters = 'abcdefghijk'
num = 12_345

mix = [1,2,'a','b',(5,6)]

settings = {
    'font-size': 14
    'theme': dark
}

def foo(a) { }

// making a custom type using an object
defobject Type { }
`	
	relight();
}


function fn4(){
foc.innerHTML = `
<p class="text-xl mt-2 text-blue bold-6">Rock, Paper, Scissor game</p>
<p class="txt mt-1 txt2 mb-2">If we combine what we have we can then build a simple game backend which we can then bind with GUI like the web.</p>
<div class="code">import strings as str
import random

PS = '\\nScissors cut paper.'
RP = '\\nPaper covers rock.'
SR = '\\nRock breaks scissors.'

award = { 'sp': f'You win {PS}', 'ps': f'You lose {PS}',
          'rp': f'You lose {RP}', 'pr': f'You win {RP}',
          'rs': f'You win {SR}', 'sr': f'You lose {SR}' }

print('Please only enter either letter r, p or s.')
player = readline('choose one r-p-s: ')

cpu = random.pick('rps'); ans = str.concate(player, cpu)
print(ans, '\t', award[ans])
`
	relight();

}


intervals = []
rousel = [fn1, fn2, fn3,  fn4]
incre = [1]


function timeout(){
	t = setInterval(() => {
		if (incre[0] == 3){
			incre[0] = 0;
		} else{
			incre[0] = incre[0] + 1
		}

		rousel[incre[0]]();
	}, 7000)

	intervals.push(t);
}

timeout();


function reInterval(){
	if (intervals.length > 0){
		clearInterval(intervals[0])
		intervals.pop();
	}

	timeout();
}

bn1.addEventListener('click', () => {
	reInterval();
	fn1();
});

bn2.addEventListener('click', () => {
	reInterval();
	fn2();
});

bn3.addEventListener('click', () => {
	reInterval();
	fn3();
});

bn4.addEventListener('click', () => {
	reInterval();
	fn4();
});



}

