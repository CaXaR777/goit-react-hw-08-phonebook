"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[527],{7527:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var o,t,i,a,l,d,c,s,u,x,p=r(4420),b=r(2791),m=r(3634),f=r(4270),g=r(168),h=r(7924),j=r(5705),Z=(0,h.ZP)(j.l0)(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  outline: 1px solid grey;\n  border-radius: 20px;\n  padding: 10px;\n  background-color: black;\n  label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    font-size: larger;\n    color: #e22b2b;\n  }\n  input {\n    margin-top: 6px;\n    border-radius: 4px;\n  }\n  button {\n    width: 100px;\n    cursor: pointer;\n    background-color: aqua;\n    background-color: black;\n    color: aqua;\n    color: red;\n    border-radius: 5px;\n    border: 1px solid aqua;\n    &:hover {\n      background-color: aqua;\n      transform: scale(1.1);\n    }\n  }\n"]))),v=(h.ZP.label(t||(t=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  input {\n    width: 200px;\n    padding: 2px;\n    margin-top: 6px;\n    border: 1px solid rgb(219, 216, 216);\n    border-radius: 2px;\n    &:focus {\n      border-color: rgb(99, 149, 241, 0.6);\n      outline: 2px rgba(99, 149, 241, 0.6);\n      outline-style: solid;\n    }\n  }\n"]))),r(8007)),y=r(3553),k=function(n){return n.contacts.items},w=function(n){return n.filter.value},P=function(n){return n.contacts.isLoading},q=(0,y.P1)([k,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=r(184),N=v.Ry().shape({name:v.Z_().min(2,"Too short!").required("Name is required"),number:v.Z_().matches(/^\+[1-9]\d{1,14}$/,"Invalid phone number format").required("Must be filled")}),L=function(){var n=(0,p.I0)(),e=(0,p.v9)(k),r=function(r){e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("A contact with that name already exists"):n((0,m.uK)(r))};return(0,C.jsx)(j.J9,{initialValues:{name:"",number:""},validationSchema:N,onSubmit:function(n,e){r(n),e.resetForm()},children:(0,C.jsxs)(Z,{children:[(0,C.jsxs)("label",{children:["Name",(0,C.jsx)(j.gN,{type:"text",name:"name",placeholder:"Name"}),(0,C.jsx)(j.Bc,{name:"name"})]}),(0,C.jsxs)("label",{children:["Number",(0,C.jsx)(j.gN,{type:"tel",name:"number",placeholder:"Number"}),(0,C.jsx)(j.Bc,{name:"number"})]}),(0,C.jsx)("button",{type:"submit",children:"Add contact"})]})})},_=h.ZP.label(i||(i=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  color: blueviolet;\n  input {\n    width: 200px;\n    padding: 2px;\n    margin-top: 6px;\n    border: 1px solid rgb(219, 216, 216);\n    border-radius: 2px;\n    &:focus {\n      border-color: rgb(99, 149, 241, 0.6);\n      outline: 2px rgba(99, 149, 241, 0.6);\n      outline-style: solid;\n    }\n  }\n"]))),z=h.ZP.p(a||(a=(0,g.Z)(["\n  margin-right: 10px;\n"]))),I=h.ZP.div(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n"]))),A=r(9135),F=r(1833),T=function(){var n=(0,p.I0)(),e=(0,p.v9)(w);return(0,C.jsxs)(_,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(z,{children:"Find your target"}),(0,C.jsx)(A.Z1A,{fill:"yellow"})]}),(0,C.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,F.T)(e.target.value))}})]})},B=h.ZP.ul(d||(d=(0,g.Z)(["\n  margin-top: 15px;\n"]))),D=h.ZP.li(c||(c=(0,g.Z)(["\n  padding: 5px 25px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  &::before {\n    content: '';\n    background: black;\n    width: 6px;\n    height: 6px;\n    border-radius: 100%;\n  }\n"]))),K=h.ZP.button(s||(s=(0,g.Z)(["\n  padding: 1px 4px;\n  margin-left: 10px;\n  border: 1px solid rgb(219, 216, 216);\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: yellowgreen;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n    rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  &:active {\n    background-color: red;\n  }\n"]))),S=h.ZP.p(u||(u=(0,g.Z)(["\n  font-size: 18px;\n  margin-left: 10px;\n  color: aqua;\n"]))),E=h.ZP.p(x||(x=(0,g.Z)(["\n  font-size: 18px;\n  margin-left: 5px;\n  color: red;\n"]))),G=function(){var n=(0,p.I0)(),e=(0,p.v9)(P),r=(0,p.v9)(q);return(0,C.jsx)("div",{children:e?(0,C.jsx)("p",{children:"Loading..."}):(0,C.jsx)(B,{children:r.map((function(e){var r=e.id,o=e.name,t=e.number;return(0,C.jsxs)(D,{children:[(0,C.jsxs)(S,{children:[o,":"]}),(0,C.jsx)(E,{children:t}),(0,C.jsx)(K,{type:"button",onClick:function(){return n((0,m.GK)(r))},children:"Dead"})]},r)}))})})},J=function(){var n=(0,p.I0)();return(0,b.useEffect)((function(){n((0,m.yF)())}),[n]),(0,C.jsxs)("div",{children:[(0,C.jsx)(f.q,{children:(0,C.jsx)("title",{children:"Contacts"})}),(0,C.jsx)("h1",{children:"Deathnote"}),(0,C.jsx)(L,{}),(0,C.jsx)("h2",{children:"Targets"}),(0,C.jsx)(T,{}),(0,C.jsx)(G,{})]})}}}]);
//# sourceMappingURL=527.776e8434.chunk.js.map