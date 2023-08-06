(function(){

// Check page correctness
if (!location.hash.match("#gacha/weapon")) {
  const answer = confirm("You don't seem to be in #gacha/weapon page. Run anyway?");
  if (answer === false) return;
}

const ID = document.querySelector('.prt-weapon-image > .img-weapon').getAttribute("src").match(/\/g\/(.+?)\./)[1];

const NAME = (() => {
  const largeBanner = document.querySelector(".txt-item-name")?.textContent;
  const smallBanner = document.querySelector(".prt-weapon-info > div:first-child")?.textContent;
  return (largeBanner) ? largeBanner : smallBanner;
})();

const RARITY = (() => {
  if (document.querySelector(".prt-rarity-4")) return "SSR";
  if (document.querySelector(".prt-rarity-3")) return "SR";
  if (document.querySelector(".prt-rarity-2")) return "R";
  if (document.querySelector(".prt-rarity-4-large")) return "SSR";
  if (document.querySelector(".prt-rarity-3-large")) return "SR";
  if (document.querySelector(".prt-rarity-2-large")) return "R";
  return "?";
})();

const ELEMENT = (() => {
  if (document.querySelector(".ico-type1")) return "fire";
  if (document.querySelector(".ico-type2")) return "water";
  if (document.querySelector(".ico-type3")) return "earth";
  if (document.querySelector(".ico-type4")) return "wind";
  if (document.querySelector(".ico-type5")) return "light";
  if (document.querySelector(".ico-type6")) return "dark";
  return "?";
})();

const TYPE = (() => {
  if (document.querySelector(".ico-weapon-1")) return "sabre";
  if (document.querySelector(".ico-weapon-2")) return "dagger";
  if (document.querySelector(".ico-weapon-3")) return "spear";
  if (document.querySelector(".ico-weapon-4")) return "axe";
  if (document.querySelector(".ico-weapon-5")) return "staff";
  if (document.querySelector(".ico-weapon-6")) return "gun";
  if (document.querySelector(".ico-weapon-7")) return "melee";
  if (document.querySelector(".ico-weapon-8")) return "bow";
  if (document.querySelector(".ico-weapon-9")) return "harp";
  if (document.querySelector(".ico-weapon-10")) return "katana";
  return "?";
})();

const MIN_HP = document.querySelector(".prt-min-hp .txt-hp-value").textContent;
const MAX_HP = document.querySelector(".prt-max-hp .txt-hp-value").textContent;
const MIN_ATK = document.querySelector(".prt-min-atk .txt-atk-value").textContent;
const MAX_ATK = document.querySelector(".prt-max-atk .txt-atk-value").textContent;

const OUGI_NAME = document.querySelector(".prt-detail-special .name-m").textContent;
const OUGI_DESC = document.querySelector(".prt-detail-special .comment-m").textContent;

const skill_flexboxes = document.querySelectorAll(".prt-detail-skill .prt-box-flexible");
const skill_info = (skill) => {
  const NAME = skill?.querySelector(".name-m")?.textContent;
  const DESC = skill?.querySelector(".comment-m")?.textContent;
  const LEVELREQ = skill?.querySelector(".txt-condition-level")?.textContent.match(/\d+$/)?.[0];
  return {NAME, ICON, DESC, LEVELREQ};
};
const SKILL_ONE = skill_info(skill_flexboxes[0]);
const SKILL_TWO = skill_info(skill_flexboxes[1]);
const SKILL_THREE = skill_info(skill_flexboxes[2]);

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`
|jpname=${NAME}

|link_jpwiki=武器/${NAME}+%28${RARITY}%29

|jpougi_name=${OUGI_NAME}
|jpougi=${OUGI_DESC}
|jpougi_4s=

|jps1_name=${SKILL_ONE.NAME}
|jps1_desc=${SKILL_ONE.DESC}
|jps1_4s_name=
|jps1_4s_desc=

|jps2_name=${SKILL_TWO.NAME}
|jps2_desc=${SKILL_TWO.DESC}
|jps2_4s_name=
|jps2_4s_desc=

|jps3_name=${SKILL_THREE.NAME}
|jps3_desc=${SKILL_THREE.DESC}
|jps3_4s_name=
|jps3_4s_desc=

|jpflavor=${FLAVOR}
`;

copyToClipboard(result);

})();
