/**
 * Created by 江涛 on 2016/8/23.
 */
'use strict'
class LoginWinSingleton {
    constructor() {
        // instance 实例
        this.instance = null;
        this.appendWin();
        this.attachEvent();
    }
    appendWin(){
       this.containerElement = document.createElement('div');
        this.containerElement.className = 'layer';
        this.containerElement.innerHTML = '登陆窗口';
        this.containerElement.style.display = 'none';
        document.body.appendChild(this.containerElement);
    }
    attachEvent(){
        var that = this;
        this.containerElement.addEventListener('click',function () {
            that.hide();
        },false)
    }
    hide(){
        this.containerElement.style.display = 'none';
    }
    show(){
        this.containerElement.style.display = 'block';
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new LoginWinSingleton();
        }
        return this.instance;
    }
}

