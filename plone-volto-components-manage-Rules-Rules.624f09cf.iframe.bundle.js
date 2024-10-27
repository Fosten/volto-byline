"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[2684],{"./src/components/manage/Rules/Rules.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Select/Select.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),react_intl__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),react_intl__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/actions/index.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/index.js"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__),_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/check.svg"),_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7__),react_toastify__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({back:{id:"Back",defaultMessage:"Back"},rules:{id:"Rules",defaultMessage:"Rules"},success:{id:"Success",defaultMessage:"Success"},add:{id:"Added",defaultMessage:"Added"},enable:{id:"Enabled",defaultMessage:"Enabled"},disable:{id:"Disabled",defaultMessage:"Disabled"},apply:{id:"Applied to subfolders",defaultMessage:"Applied to subfolders"},unapply:{id:"Disabled apply to subfolders",defaultMessage:"Disabled apply to subfolders"},remove:{id:"Unassigned",defaultMessage:"Unassigned"}});class Rules extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleCheckRule",(rule=>{const rules=this.state.checkedRules;if(rules.includes(rule)){const index=rules.indexOf(rule);if(index>-1){let newRules=rules;newRules.splice(index,1),this.setState({checkedRules:newRules})}}else this.setState({checkedRules:[...this.state.checkedRules,rule]})})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleDisableRules",(()=>{this.props.disableRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleEnableRules",(()=>{this.props.enableRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleApplyToSubfolder",(()=>{this.props.applyRulesToSubfolders((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleUnapplyToSubfolder",(()=>{this.props.unapplyRulesToSubfolders((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleRemoveRules",(()=>{this.props.removeRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_byline_volto_byline_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"handleAddRule",(()=>{this.props.addRule((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname),this.state.newRule)})),this.state={isClient:!1,checkedRules:[],newRule:""}}componentDidMount(){this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({isClient:!0})}componentDidUpdate(prevProps,prevState){}UNSAFE_componentWillReceiveProps(nextProps){this.props.rules.add.loading&&nextProps.rules.add.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({newRule:""}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.add)}))),this.props.rules.disable.loading&&nextProps.rules.disable.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.disable)}))),this.props.rules.enable.loading&&nextProps.rules.enable.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.enable)}))),this.props.rules.apply.loading&&nextProps.rules.apply.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.apply)}))),this.props.rules.unapply.loading&&nextProps.rules.unapply.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.unapply)}))),this.props.rules.remove.loading&&nextProps.rules.remove.loaded&&(this.props.getRules((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.qAm,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.remove)})))}render(){var _this$props$rules;const{acquired_rules:acquired_rules,assigned_rules:assigned_rules,assignable_rules:assignable_rules}=(null===(_this$props$rules=this.props.rules)||void 0===_this$props$rules?void 0:_this$props$rules.rules)||{};return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c,{id:"rules"},__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.So,{title:this.props.intl.formatMessage(messages.rules)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Content rules for {title}",defaultMessage:"Content rules for {title}",values:{title:__jsx("q",null,this.props.title)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,{secondary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"The following content rules are active in this Page. Use the content rules control panel to create new rules or delete or modify existing ones.",defaultMessage:"The following content rules are active in this Page. Use the content rules control panel to create new rules or delete or modify existing ones."}))),acquired_rules&&acquired_rules.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Content rules from parent folders",defaultMessage:"Content rules from parent folders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Active",defaultMessage:"Active"}))),acquired_rules.map(((rule,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.title,"(",rule.trigger,")"),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"10px"})))))))),assignable_rules&&assignable_rules.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Available content rules:",defaultMessage:"Available content rules:"}),__jsx("div",{style:{display:"flex"}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,{placeholder:"Select rule",value:this.state.newRule,onChange:(e,{value:value})=>this.setState({newRule:value}),options:assignable_rules.map(((rule,i)=>({key:rule.id,value:rule.id,text:rule.title})))}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{onClick:this.handleAddRule,primary:!0,style:{marginLeft:"10px"}},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Add",defaultMessage:"Add"})))),assigned_rules&&assigned_rules.length>0&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Select",defaultMessage:"Select"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Active content rules in this Page",defaultMessage:"Active content rules in this Page"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Applies to subfolders?",defaultMessage:"Applies to subfolders?"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Enabled here?",defaultMessage:"Enabled here?"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Enabled?",defaultMessage:"Enabled?"}))),assigned_rules.map(((rule,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,{onChange:(o,{value:value})=>this.handleCheckRule(value),value:rule.id,checked:this.state.checkedRules.includes(rule.id)})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.title,"(",rule.trigger,")"),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.bubbles&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"10px"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"10px"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Cell,null,rule.global_enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"10px"})))))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{onClick:this.handleEnableRules,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Enable",defaultMessage:"Enable"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{onClick:this.handleDisableRules,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Disable",defaultMessage:"Disable"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{onClick:this.handleApplyToSubfolder,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Apply to subfolders",defaultMessage:"Apply to subfolders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{onClick:this.handleUnapplyToSubfolder,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Disable apply to subfolders",defaultMessage:"Disable apply to subfolders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{color:"youtube",onClick:this.handleRemoveRules},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Unassign",defaultMessage:"Unassign"}))),this.state.isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.YT3,{pathname:this.props.pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.cH,{to:`${(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.U$)(this.props.pathname)}`,className:"item"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_6___default(),className:"contents circled",size:"30px",title:this.props.intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))}}__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_19__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_20__.cp,(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(((state,props)=>{var _state$content$data;return{rules:state.rules,pathname:props.location.pathname,title:(null===(_state$content$data=state.content.data)||void 0===_state$content$data?void 0:_state$content$data.title)||""}}),{addRule:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.VP,getRules:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.gz,enableRules:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.QB,disableRules:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.gV,applyRulesToSubfolders:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.Om,unapplyRulesToSubfolders:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.m4,removeRules:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.aW}))(Rules),Rules.__docgenInfo={description:"Rules class.\n@class Rules\n@extends Component",methods:[{name:"handleCheckRule",docblock:"Rule check handler\n@method handleCheckRule\n@returns {undefined}",modifiers:[],params:[{name:"rule",optional:!1}],returns:{},description:"Rule check handler"},{name:"handleDisableRules",docblock:"Disable rules handler\n@method handleDisableRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Disable rules handler"},{name:"handleEnableRules",docblock:"Enable rules handler\n@method handleEnableRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Enable rules handler"},{name:"handleApplyToSubfolder",docblock:"Apply rules to subfolder handler\n@method handleApplyToSubfolder\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Apply rules to subfolder handler"},{name:"handleUnapplyToSubfolder",docblock:"Unapply rules to subfolder handler\n@method handleUnapplyToSubfolder\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Unapply rules to subfolder handler"},{name:"handleRemoveRules",docblock:"Remove rules handler\n@method handleRemoveRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Remove rules handler"},{name:"handleAddRule",docblock:"Remove rules handler\n@method handleAddRule\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Remove rules handler"}],displayName:"Rules",props:{getRules:{description:"",type:{name:"func"},required:!0},addRule:{description:"",type:{name:"func"},required:!0},enableRules:{description:"",type:{name:"func"},required:!0},disableRules:{description:"",type:{name:"func"},required:!0},applyRulesToSubfolders:{description:"",type:{name:"func"},required:!0},unapplyRulesToSubfolders:{description:"",type:{name:"func"},required:!0},removeRules:{description:"",type:{name:"func"},required:!0},pathname:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}}}]);