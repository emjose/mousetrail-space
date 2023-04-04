const _0x4203ef = _0x4f40;
(function (_0x35e48f, _0x294c96) {
	const _0x2594ef = _0x4f40,
		_0x1427cb = _0x35e48f();
	while (!![]) {
		try {
			const _0x4a7709 =
				(-parseInt(_0x2594ef(0xbb)) / 0x1) * (-parseInt(_0x2594ef(0xde)) / 0x2) +
				(-parseInt(_0x2594ef(0xd2)) / 0x3) * (parseInt(_0x2594ef(0xf4)) / 0x4) +
				parseInt(_0x2594ef(0xc6)) / 0x5 +
				-parseInt(_0x2594ef(0xe8)) / 0x6 +
				parseInt(_0x2594ef(0xda)) / 0x7 +
				parseInt(_0x2594ef(0xbd)) / 0x8 +
				-parseInt(_0x2594ef(0xee)) / 0x9;
			if (_0x4a7709 === _0x294c96) break;
			else _0x1427cb["push"](_0x1427cb["shift"]());
		} catch (_0x8383b9) {
			_0x1427cb["push"](_0x1427cb["shift"]());
		}
	}
})(_0x24ef, 0x762ff);
const canvas = document[_0x4203ef(0xf6)](_0x4203ef(0xcd)),
	ctx = canvas["getContext"]("2d");
(canvas[_0x4203ef(0xf0)] = window[_0x4203ef(0xd0)]), (canvas[_0x4203ef(0xc8)] = window["innerHeight"]);
const particlesArray = [];
let hue = 0x0,
	frame = 0x0;
window[_0x4203ef(0xba)](_0x4203ef(0xb9), function () {
	const _0x4b6325 = _0x4203ef;
	(canvas[_0x4b6325(0xf0)] = window[_0x4b6325(0xd0)]), (canvas[_0x4b6325(0xc8)] = window[_0x4b6325(0xc4)]);
});
function _0x4f40(_0x2a9963, _0x418362) {
	const _0x24efef = _0x24ef();
	return (
		(_0x4f40 = function (_0x4f4070, _0x1c7599) {
			_0x4f4070 = _0x4f4070 - 0xb6;
			let _0x456dfa = _0x24efef[_0x4f4070];
			return _0x456dfa;
		}),
		_0x4f40(_0x2a9963, _0x418362)
	);
}
const _0x511e14 = {};
(_0x511e14["x"] = undefined), (_0x511e14["y"] = undefined);
const mouse = _0x511e14;
canvas[_0x4203ef(0xba)]("click", function (_0x49462c) {
	const _0x437e5d = _0x4203ef;
	(mouse["x"] = _0x49462c["x"]), (mouse["y"] = _0x49462c["y"]), (hue += 0x8);
	if (particlesArray[_0x437e5d(0xef)] < 0x64)
		for (let _0x448571 = 0x0; _0x448571 < 0x14; _0x448571++) {
			particlesArray[_0x437e5d(0xe7)](new Particle());
		}
}),
	canvas[_0x4203ef(0xba)](_0x4203ef(0xb6), function (_0x4edd3b) {
		const _0xf784e4 = _0x4203ef;
		(mouse["x"] = _0x4edd3b["x"]), (mouse["y"] = _0x4edd3b["y"]), (hue += 0x2);
		if (frame % 0x2 === 0x0)
			for (let _0x48a40b = 0x0; _0x48a40b < 0x7; _0x48a40b++) {
				particlesArray[_0xf784e4(0xe7)](new Particle());
			}
	});
class Particle {
	constructor() {
		const _0x43131e = _0x4203ef;
		(this["x"] = mouse["x"]),
			(this["y"] = mouse["y"]),
			(this[_0x43131e(0xbf)] = Math[_0x43131e(0xf1)]() * 0x14 + 0x1),
			(this[_0x43131e(0xd5)] = Math[_0x43131e(0xf1)]() * 0x3 - 1.5),
			(this["speedY"] = Math[_0x43131e(0xf1)]() * 0x3 - 1.5),
			(this["color"] = _0x43131e(0xd6) + hue + _0x43131e(0xe2));
	}
	[_0x4203ef(0xe9)]() {
		const _0x1e2804 = _0x4203ef;
		(this["x"] += this["speedX"]), (this["y"] += this[_0x1e2804(0xb7)]);
		if (this[_0x1e2804(0xbf)] > 0.2) this[_0x1e2804(0xbf)] -= 0.1;
	}
	[_0x4203ef(0xc1)]() {
		const _0x2a6700 = _0x4203ef;
		(ctx[_0x2a6700(0xe1)] = this["color"]),
			ctx[_0x2a6700(0xc7)](),
			ctx["arc"](this["x"], this["y"], this[_0x2a6700(0xbf)], 0x0, Math["PI"] * 0x2),
			ctx[_0x2a6700(0xdb)]();
	}
}
function handleParticles() {
	const _0x2b71b3 = _0x4203ef;
	for (let _0x43ce64 = 0x0; _0x43ce64 < particlesArray[_0x2b71b3(0xef)]; _0x43ce64++) {
		for (let _0x2ccb06 = _0x43ce64; _0x2ccb06 < particlesArray[_0x2b71b3(0xef)]; _0x2ccb06++) {
			const _0x34c43e = particlesArray[_0x43ce64]["x"] - particlesArray[_0x2ccb06]["x"],
				_0x5d77a4 = particlesArray[_0x43ce64]["y"] - particlesArray[_0x2ccb06]["y"],
				_0x4c3023 = Math[_0x2b71b3(0xcb)](_0x34c43e * _0x34c43e + _0x5d77a4 * _0x5d77a4);
			_0x4c3023 < 0x64 &&
				(ctx[_0x2b71b3(0xc7)](),
				(ctx[_0x2b71b3(0xe5)] = particlesArray[_0x43ce64][_0x2b71b3(0xdc)]),
				(ctx[_0x2b71b3(0xea)] = 0.2),
				ctx[_0x2b71b3(0xd8)](particlesArray[_0x43ce64]["x"], particlesArray[_0x43ce64]["y"]),
				ctx[_0x2b71b3(0xeb)](particlesArray[_0x2ccb06]["x"], particlesArray[_0x2ccb06]["y"]),
				ctx[_0x2b71b3(0xf2)](),
				ctx["closePath"]());
		}
		particlesArray[_0x43ce64][_0x2b71b3(0xe9)](),
			particlesArray[_0x43ce64][_0x2b71b3(0xc1)](),
			particlesArray[_0x43ce64][_0x2b71b3(0xbf)] <= 0.3 &&
				(particlesArray[_0x2b71b3(0xe6)](_0x43ce64, 0x1), _0x43ce64--);
	}
}
function animate() {
	const _0x42b05b = _0x4203ef;
	ctx[_0x42b05b(0xc5)](0x0, 0x0, canvas[_0x42b05b(0xf0)], canvas[_0x42b05b(0xc8)]),
		handleParticles(),
		frame++,
		requestAnimationFrame(animate);
}
animate();
function swRegistration() {
	const _0x235863 = _0x4203ef,
		_0x3399f8 = [_0x235863(0xcc), _0x235863(0xe0), _0x235863(0xd9), "color:\x20rgba(238,58,136,1)"][_0x235863(0xca)](
			";"
		);
	if (_0x235863(0xec) in navigator) {
		const _0x45a15f = {};
		(_0x45a15f[_0x235863(0xd1)] = _0x235863(0xd7)),
			navigator[_0x235863(0xec)]
				[_0x235863(0xf5)](_0x235863(0xe3), _0x45a15f)
				["then"](function (_0x168e89) {
					const _0x454287 = _0x235863;
					console[_0x454287(0xcf)](_0x454287(0xd4), _0x3399f8);
				})
				[_0x235863(0xb8)](function (_0x24c9f2) {
					const _0x294d1a = _0x235863;
					console[_0x294d1a(0xcf)](_0x24c9f2);
				});
	}
}
function consoleText() {
	const _0x4a0e3d = _0x4203ef;
	console["clear"]();
	const _0x48bac9 = [_0x4a0e3d(0xbc), _0x4a0e3d(0xed), _0x4a0e3d(0xd3), _0x4a0e3d(0xe0), _0x4a0e3d(0xc9)][
			_0x4a0e3d(0xca)
		](";"),
		_0x49f5fd = ["font-size:\x2014px", _0x4a0e3d(0xbe), _0x4a0e3d(0xf3), "color:\x20rgba(238,58,136,1)"][
			_0x4a0e3d(0xca)
		](";");
	console["log"](_0x4a0e3d(0xc3), _0x48bac9), console[_0x4a0e3d(0xcf)](_0x4a0e3d(0xdd), _0x49f5fd);
	const _0x171d3b = [
		"font-size:\x2014px",
		"color:\x20#fff",
		"width:\x20200px",
		_0x4a0e3d(0xc2),
		_0x4a0e3d(0xc9),
		"border-radius:\x204px",
		_0x4a0e3d(0xed),
		_0x4a0e3d(0xc0),
	]["join"](";");
	console[_0x4a0e3d(0xcf)]("%cPortfolio%chttps://bit.ly/3QQr1Ux", _0x171d3b, _0x49f5fd),
		console[_0x4a0e3d(0xcf)](_0x4a0e3d(0xdf), _0x171d3b, _0x49f5fd),
		console[_0x4a0e3d(0xcf)]("%cGithub\x20\x20\x20%chttps://bit.ly/3iwQC6U", _0x171d3b, _0x49f5fd),
		console[_0x4a0e3d(0xcf)](_0x4a0e3d(0xce), _0x171d3b, _0x49f5fd),
		console[_0x4a0e3d(0xcf)](_0x4a0e3d(0xe4), _0x49f5fd);
}
function _0x24ef() {
	const _0x50193b = [
		"update",
		"lineWidth",
		"lineTo",
		"serviceWorker",
		"background:\x20rgba(238,58,136,1)",
		"515583oqdQPz",
		"length",
		"width",
		"random",
		"stroke",
		"margin:\x206px\x200\x206px\x200",
		"55140edlHbB",
		"register",
		"getElementById",
		"mousemove",
		"speedY",
		"catch",
		"resize",
		"addEventListener",
		"1VoYCEX",
		"color:\x20white",
		"4182864pGsbxX",
		"padding:\x2016px",
		"size",
		"background:\x20linear-gradient(\x20109.6deg,\x20rgba(238,58,136,1)\x2011.2%,\x20rgba(128,162,245,1)\x2091.1%\x20)",
		"draw",
		"padding:\x208px",
		"%cHello\x20World!\x20I\x27m\x20Emmanuel.",
		"innerHeight",
		"clearRect",
		"1071025vdsTAz",
		"beginPath",
		"height",
		"margin:\x206px\x200\x206px\x2014px",
		"join",
		"sqrt",
		"font-size:\x2020px",
		"canvas1",
		"%cThe\x20README\x20\x20\x20%chttps://bit.ly/3S9AQgS",
		"log",
		"innerWidth",
		"scope",
		"141wdAhAz",
		"font-size:\x2018px",
		"%c❤️",
		"speedX",
		"hsl(",
		"/mousetrail-space/",
		"moveTo",
		"margin:\x204px\x200\x204px\x204px",
		"5888057ffOTJG",
		"fill",
		"color",
		"%cThank\x20you\x20for\x20checking\x20out\x20my\x20work!",
		"874226IXTqpA",
		"%cLinkedin\x20%chttps://bit.ly/3cygAD4",
		"padding:\x2012px",
		"fillStyle",
		",\x20100%,\x2050%)",
		"/mousetrail-space/sw.js",
		"%cHave\x20a\x20wonderful\x20day!",
		"strokeStyle",
		"splice",
		"push",
		"4956300hapKHu",
	];
	_0x24ef = function () {
		return _0x50193b;
	};
	return _0x24ef();
}
swRegistration(), consoleText();
