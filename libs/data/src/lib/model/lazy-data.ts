
import {LazyAchievement} from './lazy-achievement';
import {LazyAction} from './lazy-action';
import {LazyAetheryte} from './lazy-aetheryte';
import {LazyAirshipPart} from './lazy-airship-part';
import {LazyAirshipRank} from './lazy-airship-rank';
import {LazyAirshipVoyage} from './lazy-airship-voyage';
import {LazyBait} from './lazy-bait';
import {LazyBaseParam} from './lazy-base-param';
import {LazyClassJobsModifier} from './lazy-class-jobs-modifier';
import {LazyCollectablesPageData} from './lazy-collectables-page-data';
import {LazyCollectablesShopItemGroup} from './lazy-collectables-shop-item-group';
import {LazyCollectable} from './lazy-collectable';
import {LazyCraftAction} from './lazy-craft-action';
import {LazyCraftingLogPage} from './lazy-crafting-log-page';
import {LazyDiademTerritory} from './lazy-diadem-territory';
import {LazyEquipSlotCategory} from './lazy-equip-slot-category';
import {LazyEquipment} from './lazy-equipment';
import {LazyExVersion} from './lazy-ex-version';
import {LazyFate} from './lazy-fate';
import {LazyFishParameter} from './lazy-fish-parameter';
import {LazyFishingLogTrackerPageData} from './lazy-fishing-log-tracker-page-data';
import {LazyFishingLog} from './lazy-fishing-log';
import {LazyFishingSource} from './lazy-fishing-source';
import {LazyFishingSpot} from './lazy-fishing-spot';
import {LazyFood} from './lazy-food';
import {LazyFreeCompanyAction} from './lazy-free-company-action';
import {LazyGatheringBonus} from './lazy-gathering-bonus';
import {LazyGatheringItem} from './lazy-gathering-item';
import {LazyGatheringLogPage} from './lazy-gathering-log-page';
import {LazyGatheringSearchIndex} from './lazy-gathering-search-index';
import {LazyGcName} from './lazy-gc-name';
import {LazyGilShopName} from './lazy-gil-shop-name';
import {LazyHunt} from './lazy-hunt';
import {LazyHwdInspection} from './lazy-hwd-inspection';
import {LazyHwdPhase} from './lazy-hwd-phase';
import {LazyInstance} from './lazy-instance';
import {LazyIslandAnimal} from './lazy-island-animal';
import {LazyIslandBuilding} from './lazy-island-building';
import {LazyIslandCraftworksTheme} from './lazy-island-craftworks-theme';
import {LazyIslandCraftwork} from './lazy-island-craftwork';
import {LazyIslandCrop} from './lazy-island-crop';
import {LazyIslandGatheringItem} from './lazy-island-gathering-item';
import {The110} from './lazy-island-landmark';
import {LazyIslandPopularity} from './lazy-island-popularity';
import {LazyItemKind} from './lazy-item-kind';
import {LazyItemLevel} from './lazy-item-level';
import {LazyItemMainAttribute} from './lazy-item-main-attribute';
import {LazyItemMeldingData} from './lazy-item-melding-data';
import {LazyItemSearchCategory} from './lazy-item-search-category';
import {LazyItemSeries} from './lazy-item-series';
import {LazyItemSetBonus} from './lazy-item-set-bonus';
import {LazyItemSpecialBonu} from './lazy-item-special-bonu';
import {LazyItemStat} from './lazy-item-stat';
import {LazyItemTooltip} from './lazy-item-tooltip';
import {LazyItem} from './lazy-item';
import {LazyJobAbbr} from './lazy-job-abbr';
import {LazyJobCategory} from './lazy-job-category';
import {LazyJobName} from './lazy-job-name';
import {LazyLevesPerItem} from './lazy-leves-per-item';
import {LazyLeve} from './lazy-leve';
import {LazyLogTrackerPageData} from './lazy-log-tracker-page-data';
import {LazyMapEntry} from './lazy-map-entry';
import {LazyMap} from './lazy-map';
import {LazyMateria} from './lazy-materia';
import {LazyMedicine} from './lazy-medicine';
import {LazyMob} from './lazy-mob';
import {LazyMogstationSource} from './lazy-mogstation-source';
import {LazyMonster} from './lazy-monster';
import {LazyNode} from './lazy-node';
import {LazyNotebookDivisionCategory} from './lazy-notebook-division-category';
import {LazyNotebookDivision} from './lazy-notebook-division';
import {LazyNpc} from './lazy-npc';
import {LazyParamGrow} from './lazy-param-grow';
import {LazyPatchContent} from './lazy-patch-content';
import {LazyPlace} from './lazy-place';
import {LazyQuest} from './lazy-quest';
import {LazyRace} from './lazy-race';
import {LazyRecipesIngredientLookup} from './lazy-recipes-ingredient-lookup';
import {LazyRecipesPerItem} from './lazy-recipes-per-item';
import {LazyRecipe} from './lazy-recipe';
import {LazyRetainerTask} from './lazy-retainer-task';
import {LazySeed} from './lazy-seed';
import {LazyShopName} from './lazy-shop-name';
import {LazyShopsByNpc} from './lazy-shops-by-npc';
import {LazyShop} from './lazy-shop';
import {LazySpearFishingLog} from './lazy-spear-fishing-log';
import {LazySpearfishingSource} from './lazy-spearfishing-source';
import {LazySpecialShopName} from './lazy-special-shop-name';
import {LazyStatus} from './lazy-status';
import {LazySubmarinePart} from './lazy-submarine-part';
import {LazySubmarineRank} from './lazy-submarine-rank';
import {LazySubmarineVoyage} from './lazy-submarine-voyage';
import {LazyTerritoryLayer} from './lazy-territory-layer';
import {LazyTitle} from './lazy-title';
import {LazyTopicSelectName} from './lazy-topic-select-name';
import {LazyTrait} from './lazy-trait';
import {LazyTreasure} from './lazy-treasure';
import {LazyTribe} from './lazy-tribe';
import {LazyTripleTriadRule} from './lazy-triple-triad-rule';
import {LazyVenture} from './lazy-venture';
import {LazyVoyageSource} from './lazy-voyage-source';
import {LazyWeather} from './lazy-weather';
import {LazyKoFate} from './lazy-ko-fate';
import {LazyKoGatheringBonus} from './lazy-ko-gathering-bonus';
import {LazyKoRecipe} from './lazy-ko-recipe';
import {LazyKoStatus} from './lazy-ko-status';
import {LazyZhFate} from './lazy-zh-fate';
import {LazyZhGatheringBonus} from './lazy-zh-gathering-bonus';
import {LazyZhRecipe} from './lazy-zh-recipe';
import {LazyZhStatus} from './lazy-zh-status';

export interface LazyData {
  achievements: Record<number, LazyAchievement>;
  actionCdGroups: Record<number, number[]>;
  actionIcons: Record<number, string>;
  actionTimeline: Record<number, string>;
  actions: Record<number, LazyAction>;
  aetherialReduce: Record<number, number>;
  aetherytes: Array<LazyAetheryte>;
  airshipParts: Record<number, LazyAirshipPart>;
  airshipRanks: Record<number, LazyAirshipRank>;
  airshipVoyages: Record<number, LazyAirshipVoyage>;
  baits: Array<LazyBait>;
  baseParams: Record<number, LazyBaseParam>;
  classJobsModifiers: Record<number, LazyClassJobsModifier>;
  collectableFlags: Record<number, number>;
  collectablesPageData: Record<number, LazyCollectablesPageData[]>;
  collectablesShopItemGroup: Record<number, LazyCollectablesShopItemGroup>;
  collectablesShops: Record<number, number[]>;
  collectables: Record<number, LazyCollectable>;
  craftActions: Record<number, LazyCraftAction>;
  craftingLevels: Record<number, number>;
  craftingLogPages: Array<LazyCraftingLogPage[]>;
  craftingLog: Array<number[]>;
  deprecatedItems: Record<number, number[]>;
  desynth: Record<number, number[]>;
  diademTerritory: LazyDiademTerritory;
  dropSources: Record<number, number[]>;
  equipSlotCategories: Record<number, LazyEquipSlotCategory>;
  equipment: Record<number, LazyEquipment>;
  exVersions: Record<number, LazyExVersion>;
  extractableItems: Record<number, number>;
  fateSources: Record<number, number[]>;
  fates: Record<number, LazyFate>;
  fishParameter: Record<number, LazyFishParameter>;
  fishes: Array<number>;
  fishingLogTrackerPageData: Array<LazyFishingLogTrackerPageData>;
  fishingLog: Array<LazyFishingLog>;
  fishingSources: Record<number, LazyFishingSource[]>;
  fishingSpots: Array<LazyFishingSpot>;
  foods: Array<LazyFood>;
  freeCompanyActions: Record<number, LazyFreeCompanyAction>;
  gardeningSeedIds: Record<number, number>;
  gardeningSources: Record<number, number[]>;
  gatheringBonuses: Record<number, LazyGatheringBonus>;
  gatheringItems: Record<number, LazyGatheringItem>;
  gatheringLevels: Record<number, number>;
  gatheringLogPages: Array<LazyGatheringLogPage[]>;
  gatheringPointToNodeId: Record<number, number>;
  gatheringSearchIndex: Record<number, LazyGatheringSearchIndex>;
  gcNames: Record<number, LazyGcName>;
  gilShopNames: Record<number, LazyGilShopName>;
  gubalBnpcsIndex: Record<number, number>;
  hqFlags: Record<number, number>;
  hunts: Array<LazyHunt>;
  hwdInspections: Array<LazyHwdInspection>;
  hwdPhases: Record<number, LazyHwdPhase>;
  ilvls: Record<number, number>;
  instanceSources: Record<number, number[]>;
  instances: Record<number, LazyInstance>;
  islandAnimals: Record<number, LazyIslandAnimal>;
  islandBuildings: Record<number, LazyIslandBuilding>;
  islandCraftworksTheme: Record<number, LazyIslandCraftworksTheme>;
  islandCraftworks: Record<number, LazyIslandCraftwork>;
  islandCrops: Record<number, LazyIslandCrop>;
  islandGatheringItems: Record<number, LazyIslandGatheringItem>;
  islandLandmarks: Record<number, The110>;
  islandPopularity: Record<number, LazyIslandPopularity>;
  islandSupply: Record<number, number>;
  itemEquipSlotCategory: Record<number, number>;
  itemIcons: Record<number, string>;
  itemKinds: LazyItemKind;
  itemLevel: Record<number, LazyItemLevel>;
  itemMainAttributes: Record<number, LazyItemMainAttribute[]>;
  itemMeldingData: Record<number, LazyItemMeldingData>;
  itemPatch: Record<number, number>;
  itemSearchCategories: Record<number, LazyItemSearchCategory>;
  itemSeries: Record<number, LazyItemSeries>;
  itemSetBonuses: Record<number, LazyItemSetBonus>;
  itemSpecialBonus: Record<number, LazyItemSpecialBonu>;
  itemStats: Record<number, LazyItemStat[]>;
  itemTooltips: Record<number, LazyItemTooltip>;
  items: Record<number, LazyItem>;
  jobAbbr: Record<number, LazyJobAbbr>;
  jobCategories: Record<number, LazyJobCategory>;
  jobName: Record<number, LazyJobName>;
  jobSortIndex: Record<number, number>;
  legendaryFish: Record<number, number>;
  levesPerItem: Record<number, LazyLevesPerItem[]>;
  leves: Record<number, LazyLeve>;
  logTrackerPageData: Array<LazyLogTrackerPageData[]>;
  lootSources: Record<number, number[]>;
  mapEntries: Array<LazyMapEntry>;
  maps: Record<number, LazyMap>;
  marketItems: Array<number>;
  materias: Array<LazyMateria>;
  medicines: Array<LazyMedicine>;
  mobs: Record<number, LazyMob>;
  mogstationSources: Record<number, LazyMogstationSource>;
  monsters: Record<number, LazyMonster>;
  nodes: Record<number, LazyNode>;
  notebookDivisionCategory: Record<number, LazyNotebookDivisionCategory>;
  notebookDivision: Record<number, LazyNotebookDivision>;
  npcs: Record<number, LazyNpc>;
  paramGrow: Record<number, LazyParamGrow>;
  patchContent: Record<number, LazyPatchContent>;
  places: Record<number, LazyPlace>;
  quests: Record<number, LazyQuest>;
  races: Record<number, LazyRace>;
  rarities: Record<number, number>;
  recipesIngredientLookup: LazyRecipesIngredientLookup;
  recipesPerItem: Record<number, LazyRecipesPerItem[]>;
  recipes: Array<LazyRecipe>;
  reduction: Record<number, number[]>;
  retainerTasks: Array<LazyRetainerTask>;
  reverseInstanceSources: Record<number, number[]>;
  reverseReduction: Record<number, number[]>;
  scripIndex: Record<number, number>;
  seeds: Record<number, LazySeed>;
  shopNames: Record<number, LazyShopName>;
  shopsByNpc: Record<number, LazyShopsByNpc[]>;
  shops: Array<LazyShop>;
  spearFishingFish: Array<number>;
  spearFishingLog: Array<LazySpearFishingLog>;
  spearfishingSources: Record<number, LazySpearfishingSource[]>;
  specialShopNames: Record<number, LazySpecialShopName>;
  stackSizes: Record<number, number>;
  statuses: Record<number, LazyStatus>;
  submarineParts: Record<number, LazySubmarinePart>;
  submarineRanks: Record<number, LazySubmarineRank>;
  submarineVoyages: Record<number, LazySubmarineVoyage>;
  territoryLayers: Record<number, LazyTerritoryLayer[]>;
  titles: Record<number, LazyTitle>;
  topicSelectNames: Record<number, LazyTopicSelectName>;
  tradeFlags: Record<number, number>;
  traits: Record<number, LazyTrait>;
  treasures: Array<LazyTreasure>;
  tribes: Record<number, LazyTribe>;
  tripleTriadRules: Record<number, LazyTripleTriadRule>;
  usedInQuests: Record<number, number[]>;
  ventureSources: Record<number, number[]>;
  ventures: Record<number, LazyVenture>;
  voyageSources: Record<number, LazyVoyageSource[]>;
  weathers: Record<number, LazyWeather>;
  koAchievementDescriptions: Record<number, {ko: string}>;
  koAchievements: Record<number, {ko: string}>;
  koActionCategories: Record<number, {ko: string}>;
  koActionDescriptions: Record<number, {ko: string}>;
  koActions: Record<number, {ko: string}>;
  koAirshipVoyages: Record<number, {ko: string}>;
  koBaseParams: Record<number, {ko: string}>;
  koBeastReputationRanks: Record<number, {ko: string}>;
  koContentTypes: Record<number, {ko: string}>;
  koCraftActions: Record<number, {ko: string}>;
  koCraftDescriptions: Record<number, {ko: string}>;
  koEventItems: Record<number, {ko: string}>;
  koExVersions: Record<number, {ko: string}>;
  koFates: Record<number, LazyKoFate>;
  koFreeCompanyActions: Record<number, {ko: string}>;
  koGatheringBonuses: Record<number, LazyKoGatheringBonus>;
  koGatheringTypes: Record<number, {ko: string}>;
  koInstanceDescriptions: Record<number, {ko: string}>;
  koInstances: Record<number, {ko: string}>;
  koItemDescriptions: Record<number, {ko: string}>;
  koItemKinds: Record<number, {ko: string}>;
  koItemSearchCategories: Record<number, {ko: string}>;
  koItemUiCategories: Record<number, {ko: string}>;
  koItems: Record<number, {ko: string}>;
  koJobAbbr: Record<number, {ko: string}>;
  koJobCategories: Record<number, {ko: string}>;
  koJobName: Record<number, {ko: string}>;
  koJournalGenre: Record<number, {ko: string}>;
  koLeveDescriptions: Record<number, {ko: string}>;
  koLeves: Record<number, {ko: string}>;
  koMaps: Record<number, {ko: string}>;
  koMobs: Record<number, {ko: string}>;
  koNotebookDivisionCategory: Record<number, {ko: string}>;
  koNotebookDivision: Record<number, {ko: string}>;
  koNpcTitles: Record<number, {ko: string}>;
  koNpcs: Record<number, {ko: string}>;
  koPatchs: Record<number, {ko: string}>;
  koPlaces: Record<number, {ko: string}>;
  koQuestDescriptions: Record<number, {ko: string}>;
  koQuests: Record<number, {ko: string}>;
  koRaces: Record<number, {ko: string}>;
  koRecipes: Array<LazyKoRecipe>;
  koShops: Record<number, {ko: string}>;
  koStatusDescriptions: Record<number, {ko: string}>;
  koStatuses: Record<number, LazyKoStatus>;
  koSubmarineVoyages: Record<number, {ko: string}>;
  koTraitDescriptions: Record<number, {ko: string}>;
  koTraits: Record<number, {ko: string}>;
  koTribes: Record<number, {ko: string}>;
  koTripleTriadRuleDescriptions: Record<number, {ko: string}>;
  koTripleTriadRules: Record<number, {ko: string}>;
  koVentures: Record<number, {ko: string}>;
  koWeathers: Record<number, {ko: string}>;
  koWorld: Record<number, {ko: string}>;
  zhAchievementDescriptions: Record<number, {zh: string}>;
  zhAchievements: Record<number, {zh: string}>;
  zhActionCategories: Record<number, {zh: string}>;
  zhActionDescriptions: Record<number, {zh: string}>;
  zhActions: Record<number, {zh: string}>;
  zhAirshipVoyages: Record<number, {zh: string}>;
  zhBaseParams: Record<number, {zh: string}>;
  zhBeastReputationRanks: Record<number, {zh: string}>;
  zhContentTypes: Record<number, {zh: string}>;
  zhCraftActions: Record<number, {zh: string}>;
  zhCraftDescriptions: Record<number, {zh: string}>;
  zhEventItems: Record<number, {zh: string}>;
  zhExVersions: Record<number, {zh: string}>;
  zhFates: Record<number, LazyZhFate>;
  zhFreeCompanyActions: Record<number, {zh: string}>;
  zhGatheringBonuses: Record<number, LazyZhGatheringBonus>;
  zhGatheringTypes: Record<number, {zh: string}>;
  zhInstanceDescriptions: Record<number, {zh: string}>;
  zhInstances: Record<number, {zh: string}>;
  zhItemDescriptions: Record<number, {zh: string}>;
  zhItemKinds: Record<number, {zh: string}>;
  zhItemSearchCategories: Record<number, {zh: string}>;
  zhItemUiCategories: Record<number, {zh: string}>;
  zhItems: Record<number, {zh: string}>;
  zhJobAbbr: Record<number, {zh: string}>;
  zhJobCategories: Record<number, {zh: string}>;
  zhJobName: Record<number, {zh: string}>;
  zhJournalGenre: Record<number, {zh: string}>;
  zhLeveDescriptions: Record<number, {zh: string}>;
  zhLeves: Record<number, {zh: string}>;
  zhMaps: Record<number, {zh: string}>;
  zhMobs: Record<number, {zh: string}>;
  zhNotebookDivisionCategory: Record<number, {zh: string}>;
  zhNotebookDivision: Record<number, {zh: string}>;
  zhNpcTitles: Record<number, {zh: string}>;
  zhNpcs: Record<number, {zh: string}>;
  zhPatchs: Record<number, {zh: string}>;
  zhPlaces: Record<number, {zh: string}>;
  zhQuestDescriptions: Record<number, {zh: string}>;
  zhQuests: Record<number, {zh: string}>;
  zhRaces: Record<number, {zh: string}>;
  zhRecipes: Array<LazyZhRecipe>;
  zhShops: Record<number, {zh: string}>;
  zhStatusDescriptions: Record<number, {zh: string}>;
  zhStatuses: Record<number, LazyZhStatus>;
  zhSubmarineVoyages: Record<number, {zh: string}>;
  zhTraitDescriptions: Record<number, {zh: string}>;
  zhTraits: Record<number, {zh: string}>;
  zhTribes: Record<number, {zh: string}>;
  zhTripleTriadRuleDescriptions: Record<number, {zh: string}>;
  zhTripleTriadRules: Record<number, {zh: string}>;
  zhVentures: Record<number, {zh: string}>;
  zhWeathers: Record<number, {zh: string}>;
}