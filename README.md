# A Red Secret - 赤红的秘密：DoL密教mod

《赤红的秘密》是一款基于Weather Factory编写的“正午”世界观（包括游戏密教模拟器、司辰之书，TRPG桌游The Lady Afterwards及虫鸟解密等）的Degrees of Lewdity模组。

<br>

> *“年景的好坏，地球的转动，熔炉的转变——所有这些仅仅只是司辰的激情中较弱的那些成就的结果。”*——达马翁·阿谮那滕，《下层天域密盟之梦》

很少有人知道这座位于西北英格兰的小镇何以堕落至此。你不过是一名孤儿，无数可怜人中最可怜的那些人之一，但在某些机缘巧合之下，你窥见了一些*秘密*——世界表皮之下的秘密——

<br>

本mod依旧处于早期开发阶段，仅有部分机制实现，暂未包含剧情等内容。

<br>

## 前置需求

本模组基于[ModLoader](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader)开发，请使用带ModLoader的DoL版本游玩本mod。

此外，本模组使用了[简易框架](https://github.com/emicoto/DOLMods/)提供的功能，游玩时请一并加载简易框架，并将其顺序置于本mod**之前**（即先加载简易框架，再加载本mod）。

<br>

## 手动编译并运行

1. 将本仓库克隆至本地；

2. *（可选）* 
   - 将带有ModLoader的[预构建版DoL](https://github.com/Lyoko-Jeremie/DoLModLoaderBuild/releases)解压至本仓库根目录下`dol-with-ml`目录内；
   - 下载[简易框架](https://github.com/emicoto/DOLMods/releases/latest)，重命名为`Simple.Frameworks.zip`，将其置于`dol-with-ml/mods`目录内；

3. 在仓库根目录下运行`packager/main.py`；
   - 对于Windows用户，直接在根目录下运行`run.bat`；
   - 对于Linux用户，直接在根目录下运行`run.sh`；

   之后在根目录下即可得到打包后的`ARedSecret.mod.zip`。

   如果完成了第二步的操作，则可编辑`run.bat`/`run.sh`，在python命令最后加上参数`-s`，即可在每次打包后自动开启HTTP服务器供测试。

<br>

## 开发路线

*（待补充）*
