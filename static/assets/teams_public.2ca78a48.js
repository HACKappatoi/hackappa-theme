import{m as a,b as e,f as s}from"./vendor.52debd16.js";import"./index.4c3687bd.js";import{g as p,a as g,b as w,c as m,d as c,e as h}from"./userscore.6a7c2714.js";import"./math.4d82e9ba.js";window.Alpine=a;a.data("TeamGraphs",()=>({solves:null,fails:null,awards:null,async init(){this.solves=await e.pages.teams.teamSolves(window.TEAM.id),this.fails=await e.pages.teams.teamFails(window.TEAM.id),this.awards=await e.pages.teams.teamAwards(window.TEAM.id);let t=p(this.solves,this.fails),l=m("Solves Percentage",t);s(this.$refs.solvepercentage,l);let i=g(this.solves),o=c("Category Breakdown",i);s(this.$refs.categorybreakdown,o);let r=w(this.solves,this.awards),d=h("Score Graph",r);s(this.$refs.scoregraph,d)}}));a.start();