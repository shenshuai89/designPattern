import dache from "./dache.js";
import tingche from "./tingche.js";
import Factory from "./factory"

/* ----工厂模式---- */
let F = new Factory()
let pro = F.create('pro1')
pro.init()
pro.fun1()