import re

ignore = re.compile(
    (r"dol-with-ml/|"
     r"packager/|"
     r"\.zip$|"
     r"\.bat$|"
     r"^\.")
)

name = "ARedSecret"
version = "-"

additionFile = [ "assetsList.json" ]
additionDir = [ "assets" ]
scriptFileList_inject_early = [ "javascript/utils.js" ]
scriptFileList_earlyload = []
scriptFileList_preload = []
