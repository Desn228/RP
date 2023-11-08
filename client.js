//Мои Переменные

var Nik = "7B9AA352FD22A40E";

var SpawnAreasTag = "spawn";	// тэг зон промежуточных спавнов

var CurSpawnPropName = "CurSpawn"; // свойство, отвечающее за индекс текущего спавна 0 - дефолтный спавн

var ViewSpawnsParameterName = "ViewSpawns";	// параметр создания комнаты, отвечающий за визуализацию спавнов

var MaxSpawnsByArea = 25;	// макс спавнов на зону

var spawnAreas = AreaService.GetByTag(SpawnAreasTag);	// зоны спавнов

// разрешения

BreackGraph.OnlyPlayerBlocksDmg = false;

BreackGraph.WeakBlocks = true;

// делаем возможным ломать все блоки

BreackGraph.BreackAll = true;

// показываем количество квадов

Ui.GetContext().QuadsCount.Value = true;

// разрешаем все чистые блоки

Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// вкл строительные опции



// запрет нанесения урона

Damage.GetContext().DamageOut.Value = true;

Damage.GetContext().FriendlyFire.Value = true;

// параметры игры

Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";

// создаем команды

red = GameMode.Parameters.GetBool("RedTeam");

blue = GameMode.Parameters.GetBool("BlueTeam");

Teams.Add("Green", "НЕСТАБИЛЬНО", { g: 1 });

Teams.Get("Green").Spawns.SpawnPointsGroups.Add(1);



// разрешаем вход в команды по запросу

Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});

// спавн по входу в команду

Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});



// задаем подсказку

Ui.getContext().Hint.Value = "Hint/BuildBase";



// конфигурация инвентаря

var inventory = Inventory.GetContext();

inventory.Main.Value = false;

inventory.Secondary.Value = false;

inventory.Melee.Value = true;

inventory.Explosive.Value = false;

inventory.Build.Value = true;

inventory.BuildInfinity.Value = true;





// разрешаем вход в команды по запросу

Teams.OnRequestJoinTeam.Add(function(player,team)

{ Ui.GetContext().Hint.Value = player+"дароу";

});// константы имен

var WaitingStateValue = "Waiting";

var BuildModeStateValue = "BuildMode";

var GameStateValue = "Game";

var EndOfMatchStateValue = "EndOfMatch";

var ThAreasTag = "th";

var inventory = Inventory.GetContext;

var adminprop = true;

var RestAreasTag = "rs";

var DamageOnAreasTag = "don";

var DamageOffAreasTag = "doff";

var TrapAreasTag = "tr";

var ImmorAreasTag = "im";

var ResetAreasTag = "prs";

var DespawnAreasTag = "ds";

var PDespawnAreasTag = "pds";

var DontBreakTrueAreasTag = "dbt";

var DontBreakFalseAreasTag = "dbf";

var SpectatorAreasTag = "s";

var FlyAreasTag = "f"; 

var DDAreasTag = "dd";

var IIAreasTag = "ii";

var YYAreasTag = "yy";

var MMAreasTag = "mm";

var NNAreasTag = "nn";

var PrtAreasTag = "prt";

var ZZAreasTag = "zz";

var XXAreasTag = "xx";

var OOAreasTag = "oo";

var EEAreasTag = "ee";

var RRAreasTag = "rr";

var WWAreasTag = "ww";

var KKAreasTag = "kk";

var UUAreasTag = "uu";

var FFAreasTag = "ff";

var xxxxxxAreasTag = "xxxxxx"

var mmAreasTag = "mm";

var ccAreasTag = "cc";

var mlllsAreasTag = "ffgg";

var adtsTag = "adt";

// постоянные переменные

var mainTimer = Timers.GetContext().Get("Main");

var stateProp = Properties.GetContext().Get("State");

AreaService.GetByTag(adtsTag);

AreaService.GetByTag(mlllsAreasTag);

AreaService.GetByTag(ThAreasTag);

AreaService.GetByTag(RestAreasTag);

AreaService.GetByTag(DamageOnAreasTag);

AreaService.GetByTag(DamageOffAreasTag);

AreaService.GetByTag(TrapAreasTag);

AreaService.GetByTag(ImmorAreasTag);

AreaService.GetByTag(ResetAreasTag);

AreaService.GetByTag(DespawnAreasTag);

AreaService.GetByTag(PDespawnAreasTag);

AreaService.GetByTag(DontBreakTrueAreasTag);

AreaService.GetByTag(DontBreakFalseAreasTag);

AreaService.GetByTag(SpectatorAreasTag);

AreaService.GetByTag(FlyAreasTag);

AreaService.GetByTag(DDAreasTag);

AreaService.GetByTag(IIAreasTag);

AreaService.GetByTag(YYAreasTag);

AreaService.GetByTag(MMAreasTag);

AreaService.GetByTag(NNAreasTag);

AreaService.GetByTag(PrtAreasTag);

AreaService.GetByTag(ZZAreasTag);

AreaService.GetByTag(XXAreasTag);

AreaService.GetByTag(OOAreasTag);

AreaService.GetByTag(EEAreasTag);

AreaService.GetByTag(RRAreasTag);

AreaService.GetByTag(WWAreasTag);

AreaService.GetByTag(KKAreasTag);

AreaService.GetByTag(UUAreasTag);

AreaService.GetByTag(FFAreasTag);

AreaService.GetByTag(xxxxxxAreasTag);

AreaService.GetByTag(mmAreasTag);

AreaService.GetByTag(ccAreasTag);

//СОЗДАЮ СВОЮ ЗОНУ

var adTrigger = AreaPlayerTriggerService.Get("adtTag");

adTrigger.Tags = [adtsTag]; 

adTrigger.Endable = true;

adTrigger.OnEnter.Add(function(player)

{

player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;

player.inventory.ExplosiveInfinity.Value = true;

player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

adTrigger.Enable = true;

});

var mlllsTrigger =  AreaPlayerTriggerService.Get("mlllsTrigger");

mlllsTrigger.Tags = [mlllsAreasTag]; 

mlllsTrigger.Enable = true;

mlllsTrigger.OnEnter.Add(function(player) 

{

 RestartGame();

});



var thTrigger =  AreaPlayerTriggerService.Get("ThTrigger");



thTrigger.Tags = [ThAreasTag]; 

thTrigger.Enable = true;

thTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = " ";player.Build.Pipette.Value = true;

player.Build.FloodFill.Value = true;

player.Build.FillQuad.Value = true;

player.Build.RemoveQuad.Value = true;

player.Build.BalkLenChange.Value = true;

player.Build.FlyEnable.Value = true;

player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;

player.Build.ChangeCameraPointsEnable.Value = true;

player.Build.QuadChangeEnable.Value = true;

player.Build.BuildModeEnable.Value = true;

player.Build.CollapseChangeEnable.Value = true;

player.Build.RenameMapEnable.Value = true;

player.Build.ChangeMapAuthorsEnable.Value = true;

player.Build.LoadMapEnable.Value = true;

player.Build.ChangeSpawnsEnable.Value = true;

player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;

player.Build.BuildRangeEnable.Value = true;

player.Properties.Immortality.Value = true;

Spawns.GetContext().enable = true;

thTrigger.Enable = true;

player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;

player.inventory.ExplosiveInfinity.Value = true;

player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

thTrigger.Enable = true;

});



var XXTrigger =  AreaPlayerTriggerService.Get("XXTrigger");

XXTrigger.Tags = [XXAreasTag]; 

XXTrigger.Enable = true;

XXTrigger.OnEnter.Add(function(player)

{

 player.inventory.Melee.Value = true;

 player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

});



var mmTrigger =  AreaPlayerTriggerService.Get("mmTrigger");

mmTrigger.Tags = [mmAreasTag]; 

mmTrigger.Enable = true;

mmTrigger.OnEnter.Add(function(player)

{

 player.Properties.Scores.Value -=0;

});



var ccTrigger =  AreaPlayerTriggerService.Get("ccTrigger");

ccTrigger.Tags = [ccAreasTag]; 

ccTrigger.Enable = true;

ccTrigger.OnEnter.Add(function(player)

{



  player.inventory.Main.Value = false;

		player.inventory.Secondary.Value = false;

		player.inventory.Melee.Value = false;

		player.inventory.Explosive.Value = false;

		player.inventory.Build.Value = false;

});



var FFTrigger =  AreaPlayerTriggerService.Get("FFTrigger");

FFTrigger.Tags = [FFAreasTag]; 

FFTrigger.Enable = true;

FFTrigger.OnEnter.Add(function(player)

{



 player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;

});

// моментальный спавн

Spawns.GetContext().RespawnTime.Value = 0;







Players.Get("7B9AA352FD22A40E"). contextedProperties.MaxHp.Value = 100000





Players.Get("7B9AA352FD22A40E"). contextedProperties.SkinType.Value = 2;



