new Module("BaritoneAddon")
.setAuthor("Numericly")
.setDescription("This module integrates baritone without using chat")
.addAction("BARITONE(<anycommand>)","Runs any baritone command BARITONE(GOTO ~ ~ ~10)")
.addAction("GOTO(<x>,<y>,<z>)","Pathfinds to specified coordinates")
.addAction("SETTING(<settingname>,<value>)","Changes baritone setting to provided value to see all settings look under varibles after BUILDING")
.addAction("CANCEL()","Cancels current process")
.addAction("PAUSE()","Pauses current process")
.addAction("RESUME()","Resumes current process")
.addAction("MINE(<blockname>)","Searchs and mines provied block")
.addAction("FARM()","Farms near by crops toggle replant with SETTING(replantcrops,<true/false>)")
.addAction("SELSTART(<x>,<y>,<z>)","Sets pos1 of selection")
.addAction("SELEND(<x>,<y>,<z>)","Sets pos2 of selection")
.addAction("SELCLEAR()","Clears selections")
.addAction("SELREPLACE(<blocktoreplace>,<replacementblock>)","Attempts to replace specified block with replacement block")
.addVariable("MODULEBARITONE","True if baritone module is installed")
.addVariable("BARITONE", "True if baritone is running any process")
.addVariable("PATHFINDING", "True if baritone is pathfinding to position")
.addVariable("FARMING", "True if baritone is running the process #farm")
.addVariable("MINING", "True if baritone is running the process #mine")
.addVariable("FOLLOWING", "True if baritone is running the process #follow")
.addVariable("BUILDING", "True if baritone is running a build process")
.addVariable("ALLOWBREAK","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("ALLOWPLACE","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("ALLOWSPRINT", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("ALLOWPARKOUR","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]") 
.addVariable("ALLOWINVENTORY","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]") 
.addVariable("ALLOWWALKONBOTTOMSLAB", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("ALLOWWATERBUCKETFALL", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("BLOCKBREAKADDITIONALMENTPENALTY", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("BLOCKPLACEMENTPENALTY", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("BLOCKREACHDISTANCE", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("MAXFALLHEIGHTNOWATER","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("FREELOOK", "[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]")
.addVariable("REPLANTCROPS","[a]https://baritone.leijurv.com/baritone/api/Settings.html#[/a]") 
.addChangelog(26,"12/oct/20")
    .addLine("Initial release")
    .build()
.addDownload(26,"https://github.com/NumericlyGithub/baritoneModule/releases/tag/v1.1");

new Module("Utils")
.setAuthor("Gorlem, updated by spthiel")
.setDescription("This module adds a lot of random things which don't deserve their own module.")
.addAction("&result = TRIM(%&string%)","Removes whitespace from the beginning and the end")
.addAction("SHUFFLE(array[])","Shuffles an array")
.addEvent("onDeath","Triggers when the player dies")
.addEvent("onRespawn","Triggers when the user respawns")
.addEvent("onPotionEffect","Triggers when a potioneffect is applied. Possible variables: %NEWEFFECTID% %NEWEFFECT% %NEWEFFECTNAME% %NEWEFFECTPOWER% %NEWEFFECTTIME%")
.addIterator("actions","Iterates over a list of all actions. Possible variables: %ACTIONNAME% %ACTIONUSAGE% %ACTIONRETURN% %ACTIONDESCRIPTION%")
.addIterator("events","Iterates over a list of all events. Possible variables: %EVENTNAME% %EVENTID% %EVENTHELP[]%")
.addIterator("iterators","Iterates over a list of all iterators. Possible variables: %ITERATORNAME%")
.addChangelog(26,"15/nov/19")
    .addLine("Updated to API 26")
    .build()
.addChangelog(17,null)
    .addLine("Initial release")
    .build()
.addDownload(17,"http://modules.gorlem.ml/download/0BxhkVZpaJtV3QjBZMWQ0X2NnWUE")
.addDownload(26,"https://www.dropbox.com/s/42de5v4sq2alpdg/module_utils-1.0-26.1-0.15.4-mc1.12.1.jar?dl=0");

new Module("Utilities")
.setAuthor("spthiel")
.setDescription("Adds useful functionaility to macromod.")
.addAction("[&result =] EVAL([&result],<expression string>)","Evaluates a mathematical expression")
.addAction("CHAR(<&char>,<decimal unicode value>)","Puts the character of set unicode value into &char")
.addAction("MOD(<#result>,<num1>,<num2>)","Evaluates num1 modulo num2")
.addAction("OLDNAME(<&names[]>,<username>)","Gets the past names of a user")
.addAction("READFILE(<&content[]>,<filename>)","Gets the content of a file")
.addAction("[#seconds =] UNIX([#seconds],[#milliseconds])","Gets the seconds and optional milliseconds of current timestamp")
.addChangelog(26)
    .addLine("Initial publish")
    .build()
.addDownload(26,"./modules/utilities/module_Utilities-1.12.1-26.1-0.15.4-mc1.12.1.jar");

new Module("Documentor")
.setAuthor("spthiel")
.setDescription("Let's you create custom or replace existing documentation entries for macromod")
.addAction("ADDDOCS(<name of entry>,[usage],[description],[return type])","Adds documentation to an action")
.addAction("&docs[] = LISTDOCS([name])","Returns the documentation of the action")
.addChangelog(26,"02/nov/18")
    .addLine("Initial release")
    .build()
.addDownload(26,"https://cdn.discordapp.com/attachments/505815454468800517/507896476681371658/module_documentorAPI-0.1-26.1-0.15.4-mc1.12.1.jar");

new Module("Klacaiba")
.setAuthor("spthiel")
.setDescription("Adds useful functionality to existing functions, fileio, http requests, json parsing and a few fixes for macromod")
.addAction("calcyawto(<xpos>,<ypos|zpos>,<zpos[|#yaw]>,[#yaw|#dist],[#dist],[#pitch])","Added optional Y argument for pitch calculations")
.addAction("for(#i,<start>,<end>,<step>)","Fixed - step now working")
.addAction("getslotitem(<slotid>,<&itemid>,[#stacksize],[#datavar],[&nbt])","Added optional nbt argument")
.addAction("gui(<gui>)","Fixed - now supports variables")
.addAction("showgui(<gui>)","Fixed - now supports variables")
.addAction("logto(<file>,<str>)","Altered - now supports relative and absolute paths")
.addAction("look/looks","Fixed - now supports spaces")
.addAction("placesign([line1],[line2],[line3],[line4])","Altered - removed last argument")
.addAction("&response = http([GET|POST|PUT|DELETE],<url>,[output stream],[headers])","Creates a http request")
.addAction("iffileexists(<path>,[expression if file should be created if missing])","checks if a file exists, files can start with ~ to be relative to minecraft directory")
.addAction("mkdir(<path>)","creates directory, files can start with ~ to be relative to minecraft directory")
.addAction("<&content[]> = readfile([&content[]],<path>)","Reads file into array, files can start with ~ to be relative to minecraft directory")
.addAction("writefile(<path>,<&writefile[]>,[append])","Writes array to file, files can start with ~ to be relative to minecraft directory")
.addAction("&array[] = getjsonasarray(<json>,[format])","Returns json as key:value array or optionally using a custom format $key being replaced by the key, $value by the value")
.addAction("&keys[] = getjsonkeys(<json>)","Retuns a list of the keys of the json")
.addAction("&object = jsonget(<json>,<key>)","Retuns the object of the key of the specified json")
.addAction("sort([ASC,DSC],<array[]>,[array[]],...)","Sorts the arrays synchronously")
.addAction("<&members[]|&teams[]> = teammembers([team])","Lists all the members of a scoreboard team or a list of all the teamnames")
.addAction("<&score|&scores[]|&obectives[]> = score([Objectivename],[playername])","Returns score of player in objective or score of all players in objective or list of objectivenames")
.addAction("exec(<file.txt>,[taskname],[params],...)","Fixed multiple issues with arguments")
.addAction("countdownto(<until>)","Creates a countdown to the specified datetime. Time has to be in format hh:mm:ss and Date has to be in format yyyy-MM-dd only one of both is required")
.addAction("countdownfrom(<start>)","Creates a countdown from the specified time. Time has to be in format hh:mm:ss")
.addAction("countup()","Creates a countup from the current time")
.addAction("counter(<id>)","Gives the current value of the countdown or countup with the id (value returned from the functions)")
.addAction("&time = secToTime(<seconds>,[format])","Formats the amount of seconds to time")
.addAction("&name = getchestname","Returns the name of the open chest")
.addAction("#slots = getemptyslots([include non full slots])","Returns the amount of empty (or optionally non full slots) of the player inventory")
.addAction("[&id] = getmouseitem([&idvar],[#stacksizevar],[#datavar],[&nbt])","Gets info about the held item")
.addAction("[&id] = getslotiteminv(<slotid>,<&idvar>,[#stacksizevar],[#datavar],[&nbt])","Gets information about the item in the specified slot")
.addAction("[#slot] = getslotinv(<item[:damage],<#idvar>,[startfromslotid])","Gets the id of the slot containing an item matching the specified item id from your inventory (at all time), returns -1 if item not found")
.addAction("ifinvisfull([item])","Checks whether the inventory does not contain a slot with air or a slot that could take an item of the specified kind.")
.addAction("ifenchanted(<slot>,[&item],[#stacksize],[#datavar],[&nbt])","Checks if the item is enchanted")
.addAction("setslotitem(<item[:damage]>,<slot>,[amount],[nbt])","Creative mode only, set the contents of a hotbar slot")
.addAction("[#ytotal =] getfishhook([#x],[#xprecision],[#y],[#yprecision],[#z],[#zprecision])","Get the x, y and z and the first 3 decimal digits of the bobber or -1 for all of them if there is no fishhook")
.addAction("#count = countitem(<item[:damage]>)","Gets the amount of items of the specified type in your current inventory")
.addAction("#count = countiteminv(<item[:damage]>)","Gets the amount of items of the specified type in your survival inventory")
.addAction("#result = map(<x>,<minfrom>,<maxfrom>,<minto>,<maxto>)","Maps the value x from minfrom-maxfrom to minto-maxto")
.addAction("[&errors[] =] particle(<particlename>, <x>, <y>, <z>, <dx>, <dy>, <dz>, [count], [mode])","Spawns particles similar to the vanilla command (consult minecraft wiki or youtube) mode can be set to true to divide dx, dy and dz by 255 for easier colored particles")
.addAction("getid(<x>,<y>,<z>,[&idvar],[#datavar],[&variants])","Gets the ID and optionally the data value and variants of the block at the specified coordinates in the world.")
.addAction("getidrel(<dx>,<dy>,<dz>,[&idvar],[#datavar],[&variants])","Gets the ID and optionally the data value and variants of the block at the specified coordinates relative to the player.")
.addAction("[&name =] getiteminfo(<item[:damage]>,[&namevar],[#maxstacksize],[&type],[&dropid],[#maxdurability])","Gets the name and other info for the specified item id and returns the itemname.")
.addAction("[&controlname =] createcontrol(<screenname|\"layouts\"|\"types\">,[element type],[row],[column])","Creates a control on the specified screen at row and column position. Use createcontrol(\"layouts\") to get all layout names and createcontrol(\"types\") to get all control types as array.")
.addAction("deletecontrol(<Controlname>)","Deletes a control by name from any gui.")
.addAction("&date = timestamptodate(<timestamp>,[in milliseconds|date format],[in milliseconds])","Format a timestamp in seconds or optionally in milliseconds. See https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html for possible date formats.")
.addAction("STOP([array|regex])","Stops the current macro, or macros matching the regex or values of the array")
.addAction("PUSH(<array>,<...values>)","Appends value[s] to the end of array. Values may be constants, array[*] to copy an entire array or array[a:b:step] to copy a <= indexes < b to new array. Negative values wrap around.")
.addAction("PUT(<array>,<...values>)","Inserts value[s] at the first empty point in array. Values may be constants, array[*] to copy an entire array or array[a:b:step] to copy a <= indexes < b to new array. Negative values wrap around.")
.addAction("ifinvisfull([mode],<...items>)","Checks whether a set amount of itemtypes is contained in the inventory. Type is 'any' by default and can be 'any', 'all', a number or a percentage")
.addIterator("foreach(\"players\")","[a]https://spthiel.github.io/Klacaiba/[/a]")
.addIterator("foreach(\"teams\")","[a]https://spthiel.github.io/Klacaiba/[/a]")
.addIterator("foreach(\"objectives\")","[a]https://spthiel.github.io/Klacaiba/[/a]")
.addIterator("foreach(\"scores\")","[a]https://spthiel.github.io/Klacaiba/[/a]")
.addIterator("foreach(\"trades\")","All variables prefixed with TRADE: BUYITEM, BUYITEMAMOUNT, BUYITEM2, BUYITEM2AMOUNT, SELLITEM, SELLITEMAMOUNT, USES, MAXUSES")
.addIterator("foreach(\"inventory\")","Supplies SLOTINDEX, SLOTID, SLOTSTACKSIZE, SLOTDATAVAR, SLOTTAG")
.addVariable("LATENCY", "Ping of the player to the server")
.addVariable("HACKED", "Whether all the functions of the module have been applied to the client")
.addVariable("MODULENEI", "True when the module is installed")
.addVariable("MINECRAFTDIR", "Filepath of the current minecraft directory")
.addVariable("MACROSCONFIGDIR", "%MINECRAFTDIR%/.liteconfig/common/macros")
.addVariable("FILESEPERATOR", "Default path seperator used by the system")
.addVariable("EHITX", "X value of entity your're looking at or 0 if not looking at an entity")
.addVariable("EHITY", "Y value of entity your're looking at or 0 if not looking at an entity")
.addVariable("EHITZ", "Z value of entity your're looking at or 0 if not looking at an entity")
.addVariable("KLACAIBAVERSION", "Returns the version of klacaiba (major * 100000 + minor * 1000 + patch")
.addEvent("onBetterChat", "Allows grabbing of chat json")
.addDownload(26, "./modules/nei/module_NotEnoughInformation-1.1.0-26.1-0.15.4-mc1.12.1.jar", "1.1.0")
.addDownload(26, "./modules/nei/module_NotEnoughInformation-1.1.1-26.1-0.15.4-mc1.12.1.jar", "1.1.1")
.addDownload(26, "./modules/nei/module_NotEnoughInformation-1.1.1-withOnSound-26.1-0.15.4-mc1.12.1.jar", "1.1.1 withOnSound")
.addDownload(26, "./modules/nei/module_NotEnoughInformation-1.1.2-26.1-0.15.4-mc1.12.1.jar", "1.1.2")
.addDownload(26, "./modules/nei/module_NotEnoughInformation-1.2.0-26.1-0.15.4-mc1.12.1.jar", "1.2.0")
.addDownload(26, "./modules/nei/module_Klacaiba-1.3.0-26.1-0.15.4-mc1.12.1.jar", "1.3.0")
.addDownload(26, "./modules/nei/module_Klacaiba-1.4.1-26.1-0.15.4-mc1.12.1.jar", "1.4.1")
.addDownload(26, "./modules/nei/module_Klacaiba-1.4.2-26.1-0.15.4-mc1.12.1.jar", "1.4.2")
.addDownload(26, "./modules/nei/module_Klacaiba-1.5.1-26.1-0.15.4-mc1.12.1.jar", "1.5.1")
.addDownload(26, "./modules/nei/module_Klacaiba-1.7.0-26.1-0.15.4-mc1.12.1.jar", "1.7.0")
.addDownload(26, "./modules/nei/module_Klacaiba-1.9.0-26.1-0.15.4-mc1.12.1.jar", "1.9.0")
.addDownload(26, "./modules/nei/module_Klacaiba-1.9.1-26.1-0.15.4-mc1.12.1.jar", "1.9.1")
.addDownload(26, "./modules/nei/module_Klacaiba-1.9.2-26.1-0.15.4-mc1.12.1.jar", "1.9.2")
.addDownload(26, "./modules/nei/module_Klacaiba-2.0.0-26.1-0.15.4-mc1.12.1.jar", "2.0.0")
.addChangelog(26,"28/jan/21", "2.0.0")
    .addLine("Internal restructuring of packages")
    .addLine("Automatically adds elseif, until and while for any if action")
    .addLine("Added ifininv to check whether you have specific types of items in your inventory")
    .build()
.addChangelog(26,"21/jan/21", "1.9.2")
    .addLine("Fixed Z argument of calcyawto only taking floats")
    .addLine("X, Y and Z arguments not allow for simple additions e.g. \"%XPOS%+0.75\"")
    .addLine("Fixed index out of range exception of getid when no variant is present (again)")
    .build()
.addChangelog(26,"21/jan/21", "1.9.2")
    .addLine("Fixed Z argument of calcyawto not taking floats")
    .build()
.addChangelog(26,"21/jan/21", "1.9.0")
    .addLine("Added EHITX")
    .addLine("Added EHITY")
    .addLine("Added EHITZ")
    .addLine("Calcyaw now takes floats as values if desired (only in x,y,z mode)")
    .build()
.addChangelog(26,"06/jan/21", "1.7.0")
    .addLine("Added elseifcontains as counterpart to ifcontains for else chains")
    .addLine("Added elseifbeginswith as counterpart to ifbeginswith for else chains")
    .addLine("Added elseifstartswith as counterpart to ifstartswith for else chains")
    .addLine("Modified push better syntax, now uses <start>:[end]:[step] and allows for negative values which wrap around")
    .addLine("Modified put better syntax, now uses <start>:[end]:[step] and allows for negative values which wrap around")
    .addLine("Added inventory iterator")
    .build()
.addChangelog(26,"06/jan/21", "1.6.0")
    .addLine("Added elseifmatches as counterpart to ifmatches for else chains")
    .addLine("Modified push to allow multiple values and ranges from other arrays")
    .addLine("Modified put to allow multiple values and ranges from other arrays")
    .build()
.addChangelog(26,"30/dec/20", "1.5.1")
    .addLine("Fixed pitch of calcyawto being 3 blocks off")
    .build()
.addChangelog(26,"17/dec/20", "1.5.0")
    .addLine("Added regex and array option to stop")
    .build()
.addChangelog(26,"03/dec/20", "1.4.2")
    .addLine("Fixed getid 6th parameter")
    .build()
.addChangelog(26,"03/dec/20", "1.4.1")
    .addLine("Fixed getidrel to properly work in loops")
    .addLine("Fixed createcontrol giving incorrect error messages")
    .build()
.addChangelog(26,"03/dec/20", "1.4.0")
    .addLine("Added timestamptodate")
    .build()
.addChangelog(26,"14/oct/20", "1.3.0")
    .addLine("Added 6th argument to getiteminfo")
    .addLine("Added createcontrol")
    .addLine("Added deletecontrol")
    .addLine("Renamed module to Klacaiba")
    .build()
.addChangelog(26,"10/sep/20", "1.2.0")
    .addLine("Fixed issue with logto - now allows other filetypes than .txt")
    .addLine("Fixed issue with getjsonasarray - jsonarrays displays incorrectly")
    .addLine("Fixed issue with getslotinv - typo in usage")
    .addLine("Added countitem and countiteminv")
    .addLine("Added map")
    .addLine("Added particle")
    .addLine("Modified getid and getidrel to include blockstate")
    .build()
.addChangelog(26,"16/jun/20", "1.1.2")
    .addLine("Fixed issue with iffileexists - didn't expand variables")
    .addLine("Fixed issue with writefile - wouldn't write if the folder was created but not the file")
    .addLine("Fixed issue with calcyawto - pitch was off")
    .build()
.addChangelog(26,"16/jun/20", "1.1.1")
    .addLine("Fixed issue with getjsonasarray")
    .build()
.addChangelog(26,"23/apr/20", "1.1.0")
    .addLine("Added nbt argument to setslotitem")
    .addLine("Fixed error when too many args present for getslotitem and similar")
    .addLine("Added ifenchanted")
    .build()
.addChangelog(26,"23/apr/20", "1.0.0")
    .addLine("Added onSound")
    .addLine("Added license")
    .build()
.addChangelog(26,"10/apr/20", "0.9.8.2")
    .addLine("Fixed JSONException in jsonget")
    .build()
.addChangelog(26,"30/mar/20", "0.9.8.1")
    .addLine("Fixed NPE in GetFishHook")
    .build()
.addChangelog(26,"19/mar/20", "0.9.8")
    .addLine("Added GetFishHook")
    .build()
.addChangelog(26,"18/mar/20", "0.9.7.1")
    .addLine("Birthday update")
    .addLine("Fixed GetMouseItem")
    .build()
.addChangelog(26,"14/mar/20", "0.9.7")
    .addLine("Added GetChestName")
    .addLine("Added GetEmptySlots")
    .addLine("Added GetMouseItem")
    .addLine("Added GetSlotInv")
    .addLine("Added GetSlotItemInv")
    .addLine("Added IfInvIsFull")
    .addLine("Added IteratorTrades")
    .build()
.addChangelog(26,"27/feb/20", "0.9.6")
    .addLine("Switched the writefile args around to match fileio modules syntax. Still works with old syntax")
    .addLine("Fixed writefile")
    .addLine("Added warn to install documentor")
    .build()
.addChangelog(26,"02/feb/20", "0.9.5")
    .addLine("https://youtu.be/4fE_sXZjxng")
    .addLine("Fixed #yaw & #pitch of calcyawto")
    .addLine("Switched the jsonget args around to match json modules syntax. Still works with old syntax")
    .build()
.addChangelog(26,"10/dec/19", "0.9.4")
    .addLine("Fixed iffileexists")
    .addLine("Fixed readfile")
    .build()
.addChangelog(26,"03/dec/19","0.9.3")
    .addLine("Fixed jsonget")
    .addLine("Added optional argument to getjsonasarray for the format")
    .addLine("Added LATENCY")
    .build()
.addChangelog(26,"30/nov/19", "0.9.2")
    .addLine("Renamed countdown to countdownto")
    .addLine("Added countdownfrom")
    .addLine("Added secToTime and timeToSec")
    .build()
.addChangelog(26,"24/nov/19", "0.9.1")
    .addLine("Added countdown, countup and counter")
    .addLine("Added leftpad")
    .build()
.addChangelog(26,"24/nov/19", "0.9")
    .addLine("Added fix for exec")
    .build()
.addChangelog(26,"15/nov/19", "0.9")
    .addLine("Updated")
    .build()
.addChangelog(17)
    .addLine("Initial release")
    .build();

new Module("FileIO")
.setAuthor("Astrorious")
.setDescription("FileIO is a simple Module designed to make reading and writing files easier/possible.")
.addAction("FILEEXISTS(<&path>)","Returns whether the file exists")
.addAction("MKDIR(<&path>)","Creates the directory for the path")
.addAction("WRITEFILE(<&path>,<&towrite[],[append])","Writes data to the file")
.addVariable("MINECRAFTDIR","Path of the current minecraft directory")
.addVariable("MACROSCONFIGDIR","Path of the current macros config directory")
.addVariable("FILESEPERATOR","Character used to split directories in paths")
.addDownload(26,"https://www.dropbox.com/s/480crujdd1qzb63/module_fileio_macrokeybind_API_26.jar?dl=1")
.addChangelog(26,"01/aug/18")
    .addLine("Initial release")
    .addLine("Added FILEEXISTS script action")
    .addLine("Added MKDIR script action")
    .addLine("Added READFILE script action")
    .addLine("Added WRITEFILE script action")
    .addLine("Added MINECRAFTDIR global variable")
    .addLine("Added MACROSCONFIGDIR global variable")
    .addLine("Added FILESEPARATOR global variable")
    .build();

new Module("WindowsNotifications")
.setAuthor("spthiel")
.setDescription("Display windows system notifications with a simple command.")
.addAction("NOTIFY([title],[message])","Creates a system tray")
.addDownload(26,"./modules/windowsnotifications/module_notifications-1.0-26.1-0.15.4-mc1.12.1.jar")
.addChangelog(26)
    .addLine("Initial release")
    .build();

new Module("GetSlotItemExtended")
.setAuthor("Seferan")
.setDescription("This module provides extended versions of GetSlotItem")
.addAction("[&itemid =] getslotitemext(<#slotid>,[itemid],[stackSize],[damage],[itemname])","Adds argument for the itemname of the item in specified slot")
.addAction("[&itemid =] getslotitemnbt(<#slotid>,[itemid],[stackSize],[damage],[nbt])","Adds argument for the nbt of the item in specified slot")
.addAction("[&itemid =] getslotitemenchants(<#slotid>,[itemid],[stackSize],[damage],[enchants])","Adds argument for the enchantments of the item in specified slot")
.addDownload(26,"./modules/getslotitemext/module_GetSlotItemExtended-0.4-26.1-0.15.4-mc1.12.1.jar")
.addChangelog(26)
    .addLine("Initial release")
    .build();

new Module("JSON")
.setAuthor("xaero_")
.setDescription("This module parses and allows you to walk JSON-encoded strings without a prior knowledge of its structure.")
.addAction("[bool] = IsBoolean(<string>,[bool])","Checks if the value is a boolean")
.addAction("[bool] = IsFloat(<string>,[bool])","Checks if the value is a float")
.addAction("[bool] = IsInteger(<string>,[bool])","Checks if the value is a integer")
.addAction("[bool] = IsJsonArray(<string>,[bool])","Checks if the value is a JSON array")
.addAction("[bool] = IsJsonObject(<string>,[bool])","Checks if the value is a JSON object")
.addAction("[bool] = IsJsonPrimitive(<string>,[bool])","Checks if the value is a JSON primitive")
.addAction("[bool] = IsNumber(<string>,[bool])","Checks if the value is a number")
.addAction("[bool] = IsString(<string>,[bool])","Checks if the value is a string")
.addAction("[&output] = jsonadd(<json>,<key>,<value>,[&output])","Adds key and value to the json")
.addAction("[&output] = jsonget(<json>,<key>,[&output])","Gets value of a key")
.addAction("[bool] = jsonhas(<json>,<key>,[bool])","Returns if the json contains the key")
.addAction("[&output] = jsonremove(<json>,<key>,[&output])","Removes a key-value-pair from the json")
.addAction("[&keys] = getjsonkeys(<json>,[&keys[]])","Returns a list of all the keys of the json")
.addAction("[&array] = getjsonasarray(<json>,[&array[]]))","Returns json as key:value array")
.addAction("[&jsonarray] = jsonarrayadd(<jsonarray>,<element>,[&jsonarray])","Adds an element to the json array")
.addAction("[&output] = jsonarrayget(<jsonarray>,<index>,[&output])","Returns the element of the jsonarray")
.addAction("[#size] = jsonarraysize(<jsonarray>,[#size])","Returns the size of the jsonarray")
.addVariable("MODULEJSON","Returns true if the module is installed")
.addDownload(17,"./modules/json/module_json_api17_v0.1.jar")
.addDownload(24,"./modules/json/module_json_api24_v0.1.jar")
.addDownload(26,"./modules/json/module_json_api26_v0.1.jar")
.addChangelog(26, "25/aug/17")
    .addLine("Removed beta label")
    .build()
.addChangelog(15, "28/feb/14")
    .addLine("Initial release")
    .build();

new Module("Clipboard")
.setAuthor("xaero_")
.setDescription("This module adds clipboard functions to read and write from the system clipboard.")
.addAction("GETCLIPBOARD([&text])","Returns content of clipboard")
.addAction("SETCLIPBOARD(<text>)","Sets the clipboard text")
.addVariable("MODULECLIPBOARD","Returns true if the module is installed")
.addDownload(17,"./modules/clipboard/module_clipboard_api17_v0.1.jar")
.addDownload(24,"./modules/clipboard/module_clipboard_api24_v0.1.jar")
.addDownload(26,"./modules/clipboard/module_clipboard_api26_v0.1.jar")
.addChangelog(15,"22/feb/14")
    .addLine("Initial release")
    .build();

new Module("HTTP")
.setAuthor("xaero_")
.setDescription("This module is a bastardized HTTP client that allows you to fetch web resources into your macro, or upload some data to a server.")
.addAction("[&response[]] = HTTPGET(<url>,<query>,<#status>,[&response])","Performs a httpget request to specified url")
.addAction("[&response[]] = HTTPPOST(<url>,<data>,<#status>,[&response])","Performs a httppost request to specified url with the data")
.addAction("[&response[]] = HTTPPUT(<url>,<data>,<#status>,[&response])","Performs a httpput request to specified url with the data")
.addAction("[&response[]] = HTTPDELETE(<url>,<query>,<#status>,[&response])","Performs a httpdelte request to specified url")
.addAction("[&output] = URLENCODE(<string>,[&output])","URL Encodes the string")
.addAction("SETREQUESTHEADER(<&field>,<&value>)","Sets a request header for the next request")
.addVariable("MODULEHTTP","Returns true if the module is installed")
.addDownload(17,"./modules/http/module_http_api17_v0.2.jar")
.addDownload(24,"./modules/http/module_http_api24_v0.2.jar")
.addDownload(26,"./modules/http/module_http_api26_v0.2.jar")
.addChangelog(26,"25/aug/17")
    .addLine("Added SETREQUESTHEADER action")
    .build()
.addChangelog(15,"22/feb/14")
    .addLine("Added MODULEHTTP environment variable")
    .build()
.addChangelog(13,"17/oct/13")
    .addLine("Initial release")
    .build();

new Module("SignText")
.setAuthor("xaero_")
.setDescription("This module allows you to retrieve the sign text from a sign you're hitting, or with absolute coordinates. Also in single player, it will allow you to change the sign text without breaking it.")
.addAction("[&outarray] = GETHITSIGNTEXT([&outarray])","Returns signtext of the sign in view")
.addAction("[&outarray] = GETSIGNTEXT(<x>,<y>,<z>,[&outarray])","Returns signtext of sign at absolute coordinates")
.addAction("SETSIGNTEXT(<x>,<y>,<z>,<line1>,<line2>,<line3>,<line4>)","In singleplayer set text of sign")
.addVariable("MODULESIGNTEXT","Returns true if the module is installed")
.addDownload(17,"./modules/signtext/module_signtext_api17_v0.2.2.jar")
.addDownload(24,"./modules/signtext/module_signtext_api24_v0.2.2.jar")
.addDownload(26,"./modules/signtext/module_signtext_api26_v0.2.2.jar")
.addChangelog(26,"25/aug/17")
    .addLine("Removed GETHITSIGNTEXT since it's built-in to the main mod now")
    .build()
.addChangelog(16,"01/sep/14")
    .addLine("Added MODULESIGNTEXT environment variable")
    .build()
.addChangelog(13,"17/oct/2013")
    .addLine("Array parameter is optional and is overwritten if there was a sign")
    .addLine("Text is returned for assignment")
    .addLine("Added SETSIGNTEXT for singleplayer")
    .build()
.addChangelog(12)
    .addLine("Initial release")
    .build();

new Module("FarHit")
.setAuthor("xaero_")
.setDescription("This module adds a few environmental variables that extends almost all the HIT* variables into the distance.")
.addVariable("FARHIT","Same as %HIT% but extended reach")
.addVariable("FARHITID","Same is %HITID% but extended reach")
.addVariable("FARHITDATA","Same as %HITDATA% but extended reach")
.addVariable("FARHITNAME","Same is %HITNAME% but extended reach")
.addVariable("FARHITSIDE","Same as %HITSIDE% but extended reach")
.addVariable("FARHITX","Same is %HITIX% but extended reach")
.addVariable("FARHITY","Same as %HITY% but extended reach")
.addVariable("FARHITZ","Same is %HITZ% but extended reach")
.addVariable("FARHITUUID","Same is %HITUUID% but extended reach")
.addVariable("FARHITDIST","Distance to block")
.addVariable("MODULEFARHIT","Returns true if the module is installed")
.addDownload(17,"./modules/farhit/module_farhit_api17_v0.1.3.jar")
.addChangelog(17,"27/jan/15")
    .addLine("Preliminary update (missing HIT properties)")
    .addLine("Added FARHITUUID for players")
    .build()
.addChangelog(16,"01/sep/14")
    .addLine("Added MODULEFARHIT environment variable")
    .build()
.addChangelog(13,"17/oct/13")
    .addLine("Removed deprecated function")
    .build()
.addChangelog(12,"19/aug/13")
    .addLine("Initial release")
    .build();
