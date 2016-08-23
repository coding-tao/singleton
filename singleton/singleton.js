/**
 * Created by 江涛 on 2016/8/23.
 * 单例实现类
 */
// var Singleton = function (name) {
//     // name属性
//     this.name = name;
//     // instance 实例
//     this.instance = null;
// };
//
// Singleton.prototype.getName = function () {
//     console.log(this.name);
// }
//
// Singleton.getInstance = function (name) {
//     if (!this.instance){
//         this.instance = new Singleton(name);
//     }
//     return this.instance;
// }
//  var a = Singleton.getInstance('sevn1');
//  var b = Singleton.getInstance('sevn2');
//  a.getName();
//  b.getName();
'use strict'
class Singleton{
    constructor(name){
        // name属性
        this.name = name;
        // instance 实例
        this.instance = null;
    }
    getName(){
        console.log(this.name)
    }
    static getInstance(name){
        if (!this.instance){
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}
 var a = Singleton.getInstance('sevn1');
 var b = Singleton.getInstance('sevn2');
 a.getName();
 b.getName();
console.log(a===b);
