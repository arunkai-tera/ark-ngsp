const {
    existsSync: exists,
    unlinkSync: unlink
} = require("fs");
const path = require("path");
module.exports = function t(mod) {
    try {
        const meter = path.join(mod.clientInterface.info.path, "DamageMeter", "Tera.DamageMeter.API.exe");
        if (!exists(meter)) {
            return;
        }
        unlink(path.join(mod.clientInterface.info.path, "DamageMeter", "Tera.DamageMeter.API.exe"));
        mod.log("Inbuild damage meter was removed to prevent possible invalid data upload");
    } catch (error) {
        mod.log("Can't remove ingame DPS meter.", error);
    }
};