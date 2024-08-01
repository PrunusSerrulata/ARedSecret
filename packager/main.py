from functools import partial
import http.server
import json
import os
import presets
import re
import shutil
import sys
import urllib.parse
import zipfile

PORT = 8000
BIND = "127.0.0.1"

def read_json(file):
    with open(file, "r") as f:
        return json.load(f)

def get_file_list(dir, pattern=None):
    files = []
    paths = os.walk(dir)
    for p, ds, fs in paths:
        for f in fs:
            file = os.path.join(p, f).replace("\\", "/")[2:]
            if not presets.ignore.search(file) and (not pattern or re.search(pattern, file)):
                files.append(file)
    return files

def build_assets_list():
    with open("./assetsList.json", "w") as f:
        json.dump(get_file_list("./assets", r"\.png$"), f)

def get_boot_config():
    boot = {
        "name": presets.name,
        "version": presets.version,
        "scriptFileList_inject_early": presets.scriptFileList_inject_early,
        "scriptFileList_earlyload": presets.scriptFileList_earlyload,
        "scriptFileList_preload": presets.scriptFileList_preload,
        "styleFileList": get_file_list("./", r"\.css$"),
        "scriptFileList": [f for f in get_file_list("./", r"\.js$") if not re.search(r"inject-early", f)],
        "tweeFileList": get_file_list("./", r"\.twee$"),
        "imgFileList": [],
        "additionFile": get_file_list("./localisation") + presets.additionFile,
        "additionDir": presets.additionDir,
        "addonPlugin": [],
        "dependenceInfo": []
    }
    
    boot["addonPlugin"].append({
        "modName": "BeautySelectorAddon",
        "addonName": "BeautySelectorAddon",
        "modVersion": "^2.0.0",
        "params": {
            "types": [
                {
                    "type": "ARedSecret",
                    "imgFileListFile": "assetsList.json"
                }
            ]
        },
    })
    boot["addonPlugin"].append({
        "modName": "TweeReplacer",
        "addonName": "TweeReplacerAddon",
        "modVersion": "^1.2.0",
        "params": read_json("./packager/tweeReplacements.json")
    })
    
    boot["dependenceInfo"].append({
            "modName": "BeautySelectorAddon",
            "version": "^2.0.0"
    })
    boot["dependenceInfo"].append({
            "modName": "TweeReplacer",
            "version": "^1.2.0"
    })
    boot["dependenceInfo"].append({
            "modName": "Simple Frameworks",
            "version": ">=1.0.0"
    })
    
    return boot

def pack():
    with zipfile.ZipFile(f"{presets.name}.mod.zip", mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
        paths = os.walk("./")
        for p, ds, fs in paths:
            for f in fs:
                file = os.path.join(p, f).replace("\\", "/")[2:]
                if not presets.ignore.search(file):
                    print("Packing " + file)
                    zf.write(file)
    
def run(port=8000, bind="127.0.0.1", directory=os.getcwd()):
    with http.server.ThreadingHTTPServer((bind, port), partial(http.server.SimpleHTTPRequestHandler, directory=directory)) as httpd:
        print(f"Serving HTTP on {bind} port {port}")
        print(f"Click to open: http://{bind}:{port}/" + urllib.parse.quote("Degrees of Lewdity VERSION.html.mod.html"))
        print()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            sys.exit(0)

if __name__ == "__main__":
    
    if "--no-build" not in sys.argv:
        build_assets_list()
        with open("./boot.json", "w") as f:
            json.dump(get_boot_config(), f)
        pack()
        shutil.copyfile(f"{presets.name}.mod.zip", f"./dol-with-ml/mods/{presets.name}.mod.zip")
        with open("./dol-with-ml/modList.json", "w") as f:
            json.dump(["mods/ModI18N.mod.zip", "mods/Simple.Frameworks.zip", f"mods/{presets.name}.mod.zip"][0 if os.path.exists("./dol-with-ml/mods/ModI18N.mod.zip") else 1:], f)
        print()

    if "--run-server" in sys.argv and os.path.exists("./dol-with-ml/"):
        run(port=PORT, bind=BIND, directory="./dol-with-ml/")
        # webbrowser.get("firefox").open_new_tab(f"http://{BIND}:{PORT}/Degrees of Lewdity VERSION.html.mod.html")