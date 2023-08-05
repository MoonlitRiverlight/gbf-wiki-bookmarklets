(function(){

// Check page correctness
if (!location.hash.match("#gacha/summon")) {
  const answer = confirm("You don't seem to be in #gacha/summon page. Run anyway?");
  if (answer === false) return;
}

const ID = document.querySelector('.prt-summon-image > .img-summon').getAttribute("src").match(/\/b\/(.+?)\./)[1];

const NAME = (() => {
  const largeBanner = document.querySelector(".txt-item-name")?.textContent;
  const smallBanner = document.querySelector(".prt-summon-info > div:first-child")?.textContent;
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

const VOICE_ACTOR = document.querySelector(".txt-acter-name")?.innerText.split("\n").join(", ");

const call_info = document.querySelector("#prt-detail-summon-special-skill");
const CALL_NAME = call_info?.querySelector(".name")?.textContent;
const CALL_DESC = call_info?.querySelector(".comment")?.textContent;

const AURA_NAME = document.querySelector(".prt-detail-protection .name")?.textContent;
const MAIN_AURA_DESC = document.querySelector(".prt-detail-protection .prt-aura-description")?.textContent.trim();
const SUB_AURA_DESC = document.querySelector(".prt-detail-protection .prt-aura-description ~ .prt-aura-description")?.textContent.trim();

const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`{{Summon
|jpname=${NAME}
|vajp=${VOICE_ACTOR}

|link_jpwiki=召喚石/${NAME}+%28${RARITY}%29

|jpaura_name=${AURA_NAME}
|jpaura1=${MAIN_AURA_DESC}
|jpaura2=
|jpaura3=

|jpsubaura1=${SUB_AURA_DESC}
|jpsubaura2=

|jpcall_name=${CALL_NAME}

|jpcombo1=
|jpcombo2=

|jpcall_base=${CALL_DESC}
|jpcall_mlb=
|jpcall_flb=

|jpflavor=${FLAVOR}
}}

==Gameplay Notes==

==References==

`;

copyToClipboard(result);

})();
