import re

ignore = re.compile(
    (r"dol-with-ml/|"
     r"packager/|"
     r"wiki/|"
     r"\.zip$|"
     r"\.bat$|"
     r"\.sh$|"
     r"^\.")
)

name = "ARedSecret"
version = "0.0.1-alpha"

additionFile = [ "assetsList.json" ]
additionDir = [ "assets" ]
scriptFileList_inject_early = [ "javascript/inject-early/utils.js", "javascript/inject-early/sfw.js" ]
scriptFileList_earlyload = []
scriptFileList_preload = []
