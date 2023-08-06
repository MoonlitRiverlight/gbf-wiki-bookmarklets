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

const OUGI_NAME = document.querySelector(".prt-detail-special .name-m").textContent;
const OUGI_DESC = document.querySelector(".prt-detail-special .comment-m").textContent;

const SKILL_ONE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .name-m")?.textContent;
const SKILL_ONE_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > :first-child")?.className.replace("ico-", "ws_")+".png";
const SKILL_ONE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .comment-m")?.textContent;

const SKILL_TWO_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .name-m")?.textContent;
const SKILL_TWO_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > :first-child")?.className.replace("ico-", "ws_")+".png";
const SKILL_TWO_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .comment-m")?.textContent;

const SKILL_THREE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .name-m")?.textContent;
const SKILL_THREE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .comment-m")?.textContent;
const SKILL_THREE_ICON = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > :first-child")?.className.replace("ico-", "ws_")+".png";

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`{{Weapon
|id=${ID}
|series=
|jpname=${NAME}

|link_jpwiki=武器/${NAME}+%28${RARITY}%29

|hp1=${MIN_HP}
|hp2=${MAX_HP}
|hp3=

|atk1=${MIN_ATK}
|atk2=${MAX_ATK}
|atk3=

|jpougi_name=${OUGI_NAME}
|jpougi=${OUGI_DESC}
|jpougi_4s=

|jps1_name=${SKILL_ONE_NAME}
|jps1_desc=${SKILL_ONE_DESC}
|jps1_4s_name=
|jps1_4s_desc=

|jps2_name=${SKILL_TWO_NAME}
|jps2_desc=${SKILL_TWO_DESC}
|jps2_4s_name=
|jps2_4s_desc=

|jps3_name=${SKILL_THREE_NAME}
|jps3_desc=${SKILL_THREE_DESC}
|jps3_4s_name=
|jps3_4s_desc=

|jpflavor=${FLAVOR}
}}
`;

copyToClipboard(result);

})();
