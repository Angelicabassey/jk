(("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app=("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app||[]).push([[3715],{78014:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var i=o(66201),n=o.n(i),l=o(58366),a=o.n(l)()(n());a.push([t.id,".LocationSelectMenu-locationSelectMenu-fBt{min-width:325px}.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;width:100%}.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ .LocationSelectMenu-formItem-BKp{width:49%}@media(max-width: 603px){.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ .LocationSelectMenu-formItem-BKp{width:100%}}.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ .LocationSelectMenu-formItem-BKp .LocationSelectMenu-cityAutoSuggest-wn2{width:100%}.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ .LocationSelectMenu-formItem-BKp .LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input{width:100%}.LocationSelectMenu-locationSelectMenu-fBt.LocationSelectMenu-horizontal-WCQ .LocationSelectMenu-formItem-BKp.LocationSelectMenu-hasError-Mi9{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}.LocationSelectMenu-header-q_F{color:#959595;display:inline-block;font-size:10px;font-weight:bold;line-height:1.3;margin-bottom:10px;text-transform:uppercase}.LocationSelectMenu-countryResultsContainer-Fdz{position:absolute;width:231px;z-index:249}.LocationSelectMenu-formItem-BKp{margin-bottom:8px}.LocationSelectMenu-label-AG7{font-size:12px;font-weight:bold;line-height:2.66667;white-space:nowrap}.LocationSelectMenu-label-AG7.LocationSelectMenu-hidden-ANu{display:none}.LocationSelectMenu-selectBox-i0W,.LocationSelectMenu-input-agC{float:right;height:32px;visibility:visible;width:205px}.LocationSelectMenu-input-agC{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #ccc;border-radius:3px;color:#191919;font-family:inherit;font-size:13px;font-weight:600;line-height:1.33;padding:0 10px}.LocationSelectMenu-input-agC[disabled]{background:#f9f9f9;border-color:#ccc;color:#959595;cursor:default}.LocationSelectMenu-applyButton-o1V{margin-top:20px}.LocationSelectMenu-cityAutoSuggest-wn2{float:right;height:32px;width:205px}.LocationSelectMenu-cityAutoSuggest-wn2.LocationSelectMenu-fullWidthInput-S2H{width:100%}.LocationSelectMenu-cityAutoSuggest-wn2.LocationSelectMenu-fullWidthInput-S2H .js-citySuggest__input{width:100%}.LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #ccc;border-radius:3px;color:#191919;float:right;font-family:inherit;font-size:13px;font-weight:600;height:32px;line-height:1.33;padding:0 10px;width:205px}.LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input:hover{border-color:dimgray}.LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input:focus{border-color:#0057ff}.LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input:focus.focus-visible{outline:none}.LocationSelectMenu-cityAutoSuggest-wn2 .js-citySuggest__input[disabled]{background:#f9f9f9;border-color:#ccc;color:#959595}.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__input-open{border-bottom-left-radius:0;border-bottom-right-radius:0}.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__results-container{position:relative;width:100%;z-index:1}.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__results{background:#fff;border-radius:0 0 4px 4px;box-shadow:0 0 3px rgba(0,0,0,.3);max-height:200px;overflow-y:scroll;padding:0;position:absolute;top:32px;width:100%}.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__results .autosuggest__results_item{color:#191919;cursor:pointer;display:block;font-size:13px;line-height:1.3846;padding:5px 15px}.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__results_item:hover,.LocationSelectMenu-cityAutoSuggest-wn2 .autosuggest__results_item.autosuggest__results_item-highlighted{background-color:#0057ff;color:#fff}",""]),a.locals={locationSelectMenu:"LocationSelectMenu-locationSelectMenu-fBt",horizontal:"LocationSelectMenu-horizontal-WCQ",formItem:"LocationSelectMenu-formItem-BKp",cityAutoSuggest:"LocationSelectMenu-cityAutoSuggest-wn2",hasError:"LocationSelectMenu-hasError-Mi9",header:"LocationSelectMenu-header-q_F",countryResultsContainer:"LocationSelectMenu-countryResultsContainer-Fdz",label:"LocationSelectMenu-label-AG7",hidden:"LocationSelectMenu-hidden-ANu",selectBox:"LocationSelectMenu-selectBox-i0W",input:"LocationSelectMenu-input-agC",applyButton:"LocationSelectMenu-applyButton-o1V",fullWidthInput:"LocationSelectMenu-fullWidthInput-S2H"};const s=a},23715:(t,e,o)=>{"use strict";o.d(e,{Z:()=>h});var i=o(54073),n=o.n(i),l=o(21051),a=o(84983),s=o(36453),c=o(93517);const u={components:{Btn:l.default,Select:s.ZP,VueAutosuggest:a.iC},data:function(){return{suggestions:[],localModel:{country:this.country,state:this.state,city:this.city},selectedCountry:this.country,selectedStateProvince:this.state,selectedCity:this.city}},watch:{country:{handler:function(t){this.localModel.country=t,this.updateCityInputDisabled(),this.setSelectedCountryValue()},deep:!0},state:{handler:function(t){this.localModel.state=t,this.setSelectedStateProvinceValue()},deep:!0},city:{handler:function(t){this.setCityInput(t)},deep:!0},locationSearchCities:function(t){this.updateSuggestionCites(t)},selectedCountry:function(t){var e=t&&t.value?t.value:"";this.localModel.country!==e&&(this.localModel.country=e,this.resetStateValue(),this.resetCity(),this.$emit("updateCountry",t)),"US"!==e&&"CA"!==e||this.setSelectedStateProvinceValue()},selectedStateProvince:function(t){var e=t&&t.value?t.value:"";this.localModel.state!==e&&(this.localModel.state=e,this.resetCity(),this.$emit("updateState",t))}},props:{country:{type:String},state:{type:String},city:{type:String},cities:{type:Array},locationSearchCities:{type:Array},showButtons:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},hideLabels:{type:Boolean,default:!1},hasFloatLabel:{type:Boolean,default:!1},useFixedPosition:{type:Boolean,default:!1},layout:{type:String,default:"vertical",validator:function(t){return["vertical","horizontal"].includes(t)}},countryPlaceholderType:{type:String,default:"select",validator:function(t){return["all","select"].includes(t)}},showCityPlaceholder:{type:Boolean,default:!1},countryErrorMessage:String,customContainerClass:String,isFullWidth:{type:Boolean,default:!1}},computed:{getWidth:function(){return this.isFullWidth||"horizontal"===this.layout?"100%":"205px"},isUnitedStates:function(){return"US"===this.localModel.country},isCanada:function(){return"CA"===this.localModel.country},isCityDisabled:function(){return this.getIsCityDisabled()},isSubmitDisabled:function(){return this.getIsSubmitDisabled()},countryPlaceholder:function(){return"all"===this.countryPlaceholderType?this.$translate("location_menu_label_placeholder_all_countries_regions","All Countries/Regions"):this.$translate("location_menu_label_placeholder_select_a_country_region","Select a Country/Region")},statePlaceholder:function(){return this.$translate("location_menu_label_placeholder_state","Select a State")},provincePlaceholder:function(){return this.$translate("location_menu_label_placeholder_province","Select a Province")},cityPlaceholder:function(){return this.$translate("location_menu_label_placeholder_city","City")},locations:function(){return{countries:[{label:this.countryPlaceholder,value:null}].concat(c.LOCATIONS.countries),states:[{label:this.statePlaceholder,value:null}].concat(c.LOCATIONS.states),provinces:[{label:this.provincePlaceholder,value:null}].concat(c.LOCATIONS.provinces)}},countryLabel:function(){return this.$translate("location_menu_option_location_country_region","Country/Region")},stateLabel:function(){return this.$translate("location_menu_option_location_state","State")},provinceLabel:function(){return this.$translate("location_menu_option_location_province","Province")},cityLabel:function(){return this.$translate("location_menu_option_location_city","City")},inputProps:function(){return{class:"js-citySuggest__input",onInputChange:this.cityInputChange,ref:"cityInput",initialValue:this.city,model:"localModel.city",placeholder:this.showCityPlaceholder?this.cityPlaceholder:""}}},mounted:function(){this._debouncedUserTyping=n()(this.fetchCitySuggestions,300),this.setSelectedCountryValue(),this.setSelectedStateProvinceValue(),this.updateCityInputDisabled(),this.$emit("mounted")},methods:{setSelectedCountryValue:function(){var t=this,e={value:"",label:this.countryPlaceholder};if(this.localModel.country){var o=this.locations.countries.find((function(e){return e.value===t.localModel.country}));o&&(e={value:o.value,label:o.label})}this.selectedCountry=e},setSelectedStateProvinceValue:function(){var t=this;if(this.isUnitedStates||this.isCanada){var e={value:"",label:this.isUnitedStates?this.statePlaceholder:this.provincePlaceholder};if(this.localModel.state&&(this.isUnitedStates||this.isCanada)){var o=(this.isUnitedStates?this.locations.states:this.locations.provinces).find((function(e){return e.value===t.localModel.state}));o&&(e={value:o.value,label:o.label})}this.selectedStateProvince=e}},resetStateValue:function(){this.localModel.state="",this.selectedStateProvince={value:"",label:this.isUnitedStates?this.statePlaceholder:this.provincePlaceholder},this.$emit("updateState",null)},getIsCityDisabled:function(){return!this.localModel.country||(this.isUnitedStates||this.isCanada)&&!this.localModel.state},getIsSubmitDisabled:function(){return(this.isUnitedStates||this.isCanada)&&!this.localModel.state},isValidToFetchCity:function(){return this.localModel.country&&!this.localModel.state||this.isUnitedStates||this.isCanada&&this.localModel.state},cityInputChange:function(t){""===t&&(this.localModel.city=""),this._debouncedUserTyping(t)},fetchCitySuggestions:function(t){this.isValidToFetchCity()&&this.localModel.city!==t?this.$emit("fetchCitySuggestions",{level:3,country:this.localModel.country,stateprov:this.localModel.state||"",city:t}):this.suggestions=[]},updateSuggestionCites:function(t){var e=this.mapCityResults(t);this.suggestions=[],this.selectedCity=null,this.suggestions[0]={data:e}},mapCityResults:function(t){return t.map((function(t){return{id:t.id,name:t.n}}))},renderCitySuggestion:function(t){return t.item.name},getCitySuggestionValue:function(t){return this.localModel.city=t.item.name,t.item.name},resetSearch:function(){this.localModel.country="",this.localModel.state="",this.resetCity(),this.setSelectedCountryValue()},resetCity:function(){this.setCityInput(null),this.updateCityInputDisabled(),this.suggestions=[],this.$emit("updateCity",null)},setCityInput:function(t){var e=document.querySelector(".js-citySuggest__input");e&&(e.value=t),this.$refs.autosuggest.searchInput=t,this.localModel.city=t,this.updateCityInputDisabled()},updateCityInputDisabled:function(){var t=document.querySelector(".js-citySuggest__input");t&&(t.disabled=this.getIsCityDisabled())},setSelectedCity:function(t){t&&(this.selectedCity=t,this.$emit("updateCity",this.selectedCity.item.name))},onCityInputFocus:function(){var t=document.querySelector(".autosuggest__results");t&&(document.querySelector(".js-citySuggest__input").classList.add("autosuggest__input-open"),t.classList.remove("hide"))},submit:function(){var t=this.$refs.autosuggest.$refs.cityInput.value;(this.getIsCityDisabled()||this.selectedCity||""===t)&&this.$emit("updateSearchLocation",{country:this.localModel.country,state:this.localModel.state,city:this.localModel.city})}}};var r=o(36859),d=o.n(r);const h=(0,o(54868).default)(u,(function(){var t,e,o,i=this,n=i.$createElement,l=i._self._c||n;return l("div",{class:[i.$style.locationSelectMenu,i.$style[i.layout],i.customContainerClass]},[i.showHeader?l("h3",{class:i.$style.header},[i._v(i._s(i.$translate("location_menu_label_location","Location")))]):i._e(),l("Select",{ref:"countryDropdown",class:[i.$style.formItem,"e2e-LocationSelectMenu-countrySelect",(t={},t[i.$style.hasError]=Boolean(i.countryErrorMessage),t)],attrs:{options:i.locations.countries,label:i.countryLabel,hideLabel:i.hideLabels,width:i.getWidth,layout:"horizontal",errorMessage:i.countryErrorMessage,hasFloatLabel:i.hasFloatLabel,useFixedPosition:i.useFixedPosition},model:{value:i.selectedCountry,callback:function(t){i.selectedCountry=t},expression:"selectedCountry"}}),i.isUnitedStates?l("Select",{ref:"stateDropdown",class:i.$style.formItem,attrs:{options:i.locations.states,label:i.stateLabel,hideLabel:i.hideLabels,width:i.getWidth,layout:"horizontal",hasFloatLabel:i.hasFloatLabel,useFixedPosition:i.useFixedPosition},model:{value:i.selectedStateProvince,callback:function(t){i.selectedStateProvince=t},expression:"selectedStateProvince"}}):i._e(),i.isCanada?l("Select",{ref:"provinceDropdown",class:i.$style.formItem,attrs:{options:i.locations.provinces,label:i.provinceLabel,hideLabel:i.hideLabels,width:i.getWidth,layout:"horizontal",hasFloatLabel:i.hasFloatLabel,useFixedPosition:i.useFixedPosition},model:{value:i.selectedStateProvince,callback:function(t){i.selectedStateProvince=t},expression:"selectedStateProvince"}}):i._e(),l("div",{class:i.$style.formItem},[l("label",{class:[i.$style.label,(e={},e[i.$style.hidden]=i.hideLabels,e)]},[i._v(i._s(i.cityLabel)+" ")]),l("vue-autosuggest",{ref:"autosuggest",class:[i.$style.cityAutoSuggest,(o={},o[i.$style.fullWidthInput]=i.isFullWidth,o)],attrs:{componentAttrClassAutosuggestResultsContainer:i.useFixedPosition?i.$style.countryResultsContainer:void 0,suggestions:i.suggestions,searchable:!1,closeOnSelect:!0,inputProps:i.inputProps,renderSuggestion:i.renderCitySuggestion,getSuggestionValue:i.getCitySuggestionValue,"aria-label":i.cityLabel},on:{keyup:function(t){return!t.type.indexOf("key")&&i._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.submit(t)},selected:i.setSelectedCity,focus:i.onCityInputFocus},scopedSlots:i._u([{key:"default",fn:function(t){var e=t.suggestion;return[l("div",{ref:"suggestion"},[i._v(i._s(e.item))])]}}])})],1),i.showButtons?l("div",{class:i.$style.applyButton},[l("Btn",{attrs:{type:"primary",size:"small"},on:{click:i.submit}},[i._v(i._s(i.$translate("location_menu_button_apply","Apply")))]),l("Btn",{attrs:{type:"ghost",size:"small"},on:{click:i.resetSearch,keypress:i.resetSearch}},[i._v(i._s(i.$translate("location_menu_label_clear","Clear")))])],1):i._e()],1)}),[],!1,(function(t){this.$style=d().locals||d()}),null,null).exports},36859:(t,e,o)=>{var i=o(78014);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,o(55087).default)("18b796d6",i,!0,{})}}]);
//# sourceMappingURL=app.3715.035edca4af7edb2d962b.js.map