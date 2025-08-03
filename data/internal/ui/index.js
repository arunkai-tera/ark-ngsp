document.addEventListener("DOMContentLoaded", () => {
    const W1 = require("./smoothie");
    const {
        Renderer: W2
    } = require("tera-mod-ui");
    const {
        showItemInFolder: W3
    } = require("electron").shell;
    let W4 = new W2();
    let W5 = {};
    let W6 = {};
    let W7 = {};
    let W8 = {};
    let W9 = "";
    let WW = {};
    let Wz = {};
    let WY = {};
    let Wq = undefined;
    let Wo = new W1.TimeSeries();
    let Wk = document.createElement("div");
    Wk.className = "setting-text";
    let Wf = document.createElement("input");
    Wf.className = "setting-control";
    const WI = document.getElementById("chart");
    const WQ = document.getElementsByClassName("settings-container")[0];
    const Wc = document.getElementsByClassName("settings-combat-container")[0];
    const WF = document.getElementById("control-close");
    const WG = document.getElementById("btn-openNgspFolder");
    const Wb = document.getElementById("btn-openLogsFolder");
    const Wg = document.getElementById("btn-openSettingsFolder");
    const WC = document.getElementById("btn-openEmulationFolder");
    const Wy = document.getElementById("btn-cleanupCache");
    const WE = document.getElementById("btn-cleanupLogs");
    const WX = document.getElementById("ngsp-ver");
    const Wu = document.getElementById("soft-runtime");
    const Wx = document.getElementById("soft-modulever");
    const WB = document.getElementById("soft-platform");
    const WM = document.getElementById("game-admin");
    const Wt = document.getElementById("game-patch");
    const Wv = document.getElementById("game-proto");
    const WA = document.getElementById("ping-min");
    const WH = document.getElementById("ping-avg");
    const WN = document.getElementById("ping-max");
    const Ww = document.getElementById("ping-eff");
    const WV = document.getElementById("ping-spread");
    const WJ = document.getElementById("ping-median");
    const WO = document.getElementById("jitter-avg");
    const We = document.getElementById("jitter-max");
    const Wa = document.getElementById("templ");
    const Wh = document.getElementById("templ-class");
    const WP = document.getElementById("templ-race");
    const WU = {
        sharpLines: true,
        verticalSections: 5,
        borderVisible: false
    };
    const WL = {
        responsive: true,
        grid: WU
    };
    Wq = new W1.SmoothieChart(WL);
    const Ws = {
        strokeStyle: "hsl(247, 44%, 31%)",
        fillStyle: "hsla(247, 44%, 31%, 0.65)",
        lineWidth: 2
    };
    Wq.addTimeSeries(Wo, Ws);
    Wq.streamTo(WI, 500);

    function Wr() {
        const WT = document.querySelectorAll("input[name=\"tabs\"]");
		for (const WK of WT) {
			WK.addEventListener("change", Wi);
		}
    }

    function Wi(WT) {
        const Wj = WT.target.dataset.tab;
		const Wd = document.querySelectorAll(".tab--active");
		for (const WR of Wd) {
			WR.classList.remove("tab--active");
		}
		const Wn = document.querySelector(".tab[data-tab=\"" + Wj + "\"]");
		Wn.classList.add("tab--active");
    }
    Wr();
    WF.addEventListener("click", () => {
        W4.send("close");
    });
    WC.addEventListener("click", () => {
        W3(W9.presetPath + "emulation-tera.js");
    });
    Wg.addEventListener("click", () => {
        W3(W9.configPath);
    });
    Wb.addEventListener("click", () => {
        W3(W9.logPath);
    });
    WG.addEventListener("click", () => {
        W3(W9.configPath.replace("settings.json", ""));
    });
    Wy.addEventListener("click", () => {
        W3(W9.cachePath + "!Delete cache.bat");
    });
    WE.addEventListener("click", () => {
        W3(W9.logPath + "!Delete logs.bat");
    });

    function WD(WT) {
        W6 = WT;
		Object.keys(W6).forEach(WK => {
			let Wd = W5[WK];
			if (Wd) {
				let Wn = document.getElementById(WK);
				switch (Wd.type) {
					case "bool":
						Wn.checked = W6[WK];
						break;
					case "number":
						Wn.value = W6[WK];
						break;
					case "select":
						Wn.value = W6[WK];
						break;
				}
			}
		});
    }

    function Wp(WT) {
        W8 = WT;
		Object.keys(W8).forEach(WK => {
			let Wj = W7[WK];
			if (Wj) {
				let Wd = document.getElementById(WK);
				switch (Wj.type) {
					case "bool":
						Wd.checked = W8[WK];
						break;
					case "number":
						Wd.value = W8[WK];
						break;
					case "select":
						Wd.value = W8[WK];
						break;
				}
			}
		});
    }

    function Wl(WT) {
        switch (W5[WT.target.id].type) {
			case "bool":
				W6[WT.target.id] = WT.target.checked;
				break;
			case "number":
				W6[WT.target.id] = Number(WT.target.value);
				break;
			case "select":
				W6[WT.target.id] = WT.target.value;
				break;
		}
		const WK = {
			...W6
		};
		W4.send("uisettings", WK);
    }

    function Wm(WT) {
        switch (W7[WT.target.id].type) {
			case "bool":
				W8[WT.target.id] = WT.target.checked;
				break;
			case "number":
				W8[WT.target.id] = Number(WT.target.value);
				break;
			case "select":
				W8[WT.target.id] = WT.target.value;
				break;
		}
		const Wj = {
			...W8
		};
		W4.send("combatsettings", Wj);
    }

    function WS() {
        let WT = document.getElementsByTagName("style")[0];
        WT.innerHTML += ".settings-container {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 70px;\n\t\t\tgrid-template-rows: repeat(" + Object.keys(W5).length + ", 1fr);\n\t\t\tgrid-column-gap: 0px;\\n\t\t\tgrid-row-gap: 3px;\n\t\t}";
        WT.innerHTML += ".settings-combat-container {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 70px;\n\t\t\tgrid-template-rows: repeat(" + Object.keys(W7).length + ", 1fr);\n\t\t\tgrid-column-gap: 0px;\\n\t\t\tgrid-row-gap: 3px;\n\t\t}";
        document.head.appendChild(WT);
        let WK = 1;
        for (let Wj of Object.keys(W5)) {
            WT.innerHTML += "\n\t\t\t\t#" + Wj + "-text {\n\t\t\t\t\tgrid-area: " + WK + " / 1 / " + (WK + 1) + " / 2;\n\t\t\t\t}\n\t\t\t";
            document.head.appendChild(WT);
            WK++;
            let Wd = Wk.cloneNode(false);
            Wd.id = Wj + "-text";
            Wd.innerText = W5[Wj].name;
            WQ.appendChild(Wd);
        }
        WK = 1;
        for (let Wn of Object.keys(W7)) {
            WT.innerHTML += "\n\t\t\t\t#" + Wn + "-text {\n\t\t\t\t\tgrid-area: " + WK + " / 1 / " + (WK + 1) + " / 2;\n\t\t\t\t}\n\t\t\t";
            document.head.appendChild(WT);
            WK++;
            let WR = Wk.cloneNode(false);
            WR.id = Wn + "-text";
            WR.innerText = W7[Wn].name;
            Wc.appendChild(WR);
        }
        WK = 1;
        for (let WZ of Object.keys(W5)) {
            WT.innerHTML += "\n\t\t\t\t#" + WZ + "-div {\n\t\t\t\t\tgrid-area: " + WK + " / 2 / " + (WK + 1) + " / 3;\n\t\t\t\t}\n\t\t\t";
            document.head.appendChild(WT);
            WK++;
            let z0 = W5[WZ];
            let z1 = z0.type;
            let z2 = null;
            let z3 = Wk.cloneNode(false);
            z3.id = WZ + "-div";
            z3.classList.add("setting-value");
            switch (z1) {
                case "bool":
                    z2 = Wf.cloneNode(false);
                    z2.id = WZ;
                    z2.type = "checkbox";
                    z2.classList.add("setting-control");
                    WQ.appendChild(z3);
                    z3.appendChild(z2);
                    z2.addEventListener("change", Wl);
                    break;
                case "number":
                    z2 = Wf.cloneNode(false);
                    z2.id = WZ;
                    z2.min = z0.min;
                    z2.max = z0.max;
                    z2.step = z0.step;
                    z2.type = "number";
                    z2.classList.add("setting-control");
                    WQ.appendChild(z3);
                    z3.appendChild(z2);
                    z2.addEventListener("change", Wl);
                    break;
                case "select":
                    z2 = document.createElement("select");
                    z2.id = WZ;
                    z2.classList.add("setting-control");
                    z0.options.forEach(z4 => {
                        let z5 = document.createElement("option");
                        z5.text = z4.name;
                        z5.value = z4.key;
                        z2.appendChild(z5);
                    });
                    WQ.appendChild(z3);
                    z3.appendChild(z2);
                    z2.addEventListener("change", Wl);
                    break;
            }
        }
        WK = 1;
        for (let z4 of Object.keys(W7)) {
            WT.innerHTML += "\n\t\t\t\t\t\t#" + z4 + "-div {\n\t\t\t\t\t\t\tgrid-area: " + WK + " / 2 / " + (WK + 1) + " / 3;\n\t\t\t\t\t\t}\n\t\t\t\t\t";
            document.head.appendChild(WT);
            WK++;
            let z5 = W7[z4];
            let z6 = z5.type;
            let z7 = null;
            let z8 = Wk.cloneNode(false);
            z8.id = z4 + "-div";
            z8.classList.add("setting-value");
            switch (z6) {
                case "bool":
                    z7 = Wf.cloneNode(false);
                    z7.id = z4;
                    z7.type = "checkbox";
                    z7.classList.add("setting-control");
                    Wc.appendChild(z8);
                    z8.appendChild(z7);
                    z7.addEventListener("change", Wm);
                    break;
                case "number":
                    z7 = Wf.cloneNode(false);
                    z7.id = z4;
                    z7.min = z5.min;
                    z7.max = z5.max;
                    z7.step = z5.step;
                    z7.type = "number";
                    z7.classList.add("setting-control");
                    Wc.appendChild(z8);
                    z8.appendChild(z7);
                    z7.addEventListener("change", Wm);
                    break;
                case "select":
                    z7 = document.createElement("select");
                    z7.id = z4;
                    z7.classList.add("setting-control");
                    z5.options.forEach(z9 => {
                        let zW = document.createElement("option");
                        zW.text = z9.name;
                        zW.value = z9.key;
                        z7.appendChild(zW);
                    });
                    Wc.appendChild(z8);
                    z8.appendChild(z7);
                    z7.addEventListener("change", Wm);
                    break;
            }
        }
    }
    W4.on("ping", WT => {
        WA.innerText = "Min: " + WT.ping.minValue;
        WH.innerText = "Avg: " + WT.ping.avgValue;
        WN.innerText = "Max: " + WT.ping.maxValue;
        Ww.innerText = "EffSpread: " + (WT.ping.avgValue - WT.ping.minValue);
        WV.innerText = "Spread: " + (WT.ping.maxValue - WT.ping.minValue);
        WJ.innerText = "Median: " + WT.ping.avgValue;
        WO.innerText = "Avg: " + WT.jitter.avgValue;
        We.innerText = "Max: " + WT.jitter.maxValue;
        Wo.append(new Date().getTime(), WT.ping.raw);
    });
    W4.on("static", WT => {
        W5 = WT.map;
        W6 = WT.config;
        W7 = WT.mapCombat;
        W8 = WT.configCombat;
        W9 = WT.modInfo;
        WW = WT.runtime;
        Wz = WT.soft;
        WY = WT.ngsp;
        WX.innerHTML = "Version: " + WY.ver;
        WM.innerText = "Admin: " + WW.isAdmin;
        Wt.innerText = "Client: " + WW.patch;
        Wv.innerText = "Proto: " + WW.proto;
        Wu.innerText = "Runtime: " + (WW.clientInterface ? "TB" : "Other");
        Wx.innerText = "ModVer: " + Wz.modVer;
        WB.innerText = "Platform: " + Wz.platform;
        Wh.innerText = "Class: " + WT.player.job;
        WP.innerText = " Race: " + WT.player.race;
        Wa.innerText = "Template: " + WT.player.template;
        WS();
        WD(W6);
        Wp(W8);
    });
    W4.on("extsettings", WT => {
        WD(WT);
    });
    W4.on("extcombatsettings", WT => {
        Wp(WT);
    });
    W4.send("ready");
});